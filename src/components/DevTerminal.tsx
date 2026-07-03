"use client";

import React, { useState, useEffect, useRef } from "react";

interface LogLine {
  text: string;
  type: "input" | "info" | "success" | "error" | "thinking" | "gemini-header" | "gemini-text" | "plain";
  timestamp?: string;
}

export default function DevTerminal() {
  const [history, setHistory] = useState<LogLine[]>([
    { text: "Antigravity CLI (agy) v2.0.4-beta", type: "info" },
    { text: "Connected to Gemini 3.5 Pro backend.", type: "info" },
    { text: "Type 'help' to view available commands.", type: "info" },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isExecuting, setIsExecuting] = useState(false);
  const [cmdHistory, setCmdHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);

  const terminalEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto scroll to bottom
  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const handleFocus = () => {
    if (!isExecuting) {
      inputRef.current?.focus();
    }
  };

  const addLine = (text: string, type: LogLine["type"]) => {
    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    setHistory((prev) => [...prev, { text, type, timestamp: time }]);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const command = inputValue.trim();
      if (!command) return;

      // Add to command history
      const newCmdHistory = [command, ...cmdHistory.filter((h) => h !== command)].slice(0, 50);
      setCmdHistory(newCmdHistory);
      setHistoryIndex(-1);

      // Print command in terminal
      addLine(`$ ${inputValue}`, "input");
      setInputValue("");
      executeCommand(command);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (cmdHistory.length === 0) return;
      const nextIndex = historyIndex + 1;
      if (nextIndex < cmdHistory.length) {
        setHistoryIndex(nextIndex);
        setInputValue(cmdHistory[nextIndex]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      const prevIndex = historyIndex - 1;
      if (prevIndex >= 0) {
        setHistoryIndex(prevIndex);
        setInputValue(cmdHistory[prevIndex]);
      } else {
        setHistoryIndex(-1);
        setInputValue("");
      }
    }
  };

  const executeCommand = async (commandLine: string) => {
    const parts = commandLine.split(" ");
    const cmd = parts[0].toLowerCase();
    const args = parts.slice(1).join(" ");

    setIsExecuting(true);

    if (cmd === "help") {
      addLine("Available commands:", "info");
      addLine("  agy run       - Simulates an autonomous coding cycle (agent spawn, git read, checks, push)", "plain");
      addLine("  gemini-query  - Simulates a Gemini 3.5 Pro Deep Think loop for internal reasoning", "plain");
      addLine("  hooks         - Lists the 9 lifecycle hooks of Antigravity 2.0 and matching scripts", "plain");
      addLine("  clear         - Clears the terminal screen scrollback history", "plain");
      setIsExecuting(false);
    } else if (cmd === "clear") {
      setHistory([]);
      setIsExecuting(false);
    } else if (cmd === "hooks") {
      addLine("Registered Antigravity 2.0 Lifecycle Hooks (9/9 active):", "info");
      addLine("--------------------------------------------------------------------------------", "plain");
      addLine("Hook Name           | Execution Point | Active Script", "plain");
      addLine("--------------------------------------------------------------------------------", "plain");
      addLine("1. session_start    | Decide          | .agents/scripts/init_env.py", "plain");
      addLine("2. pre_turn         | Decide          | .agents/scripts/verify_quota.py", "plain");
      addLine("3. pre_invocation   | Transform       | .agents/scripts/inject_project_context.py", "plain");
      addLine("4. post_invocation  | Transform       | .agents/scripts/sanitize_llm_response.py", "plain");
      addLine("5. pre_tool_use     | Decide          | .agents/scripts/sandbox_guard.py", "plain");
      addLine("6. post_tool_use    | Inspect         | .agents/scripts/secret_scanner.py", "plain");
      addLine("7. post_turn        | Inspect         | .agents/scripts/log_session_metrics.py", "plain");
      addLine("8. session_stop     | Inspect         | .agents/scripts/create_git_commit.py", "plain");
      addLine("9. context_compact  | Transform       | .agents/scripts/compress_token_window.py", "plain");
      addLine("--------------------------------------------------------------------------------", "plain");
      setIsExecuting(false);
    } else if (cmd === "agy" && parts[1]?.toLowerCase() === "run") {
      // Simulate agy run
      const steps = [
        { text: "[AGENT] Spawning Google Antigravity autonomous agent...", type: "info" as const, delay: 500 },
        { text: "[AGENT] Connecting to remote repository: https://github.com/Aritra-221B/AG2-pretest.git", type: "info" as const, delay: 1000 },
        { text: "[GIT] Reading git changed files...", type: "info" as const, delay: 800 },
        { text: "[GIT] Changed files detected: src/components/DevTerminal.tsx, src/components/XRSimulator.tsx", type: "info" as const, delay: 600 },
        { text: "[AGENT] Triggering compile check: 'npm run build'...", type: "info" as const, delay: 1200 },
        { text: "[COMPILER] > next build --experimental-compile", type: "plain" as const, delay: 500 },
        { text: "[COMPILER]   ▲ Next.js 16.2.10", type: "plain" as const, delay: 300 },
        { text: "[COMPILER]   Creating static production export build...", type: "plain" as const, delay: 1000 },
        { text: "[COMPILER]   ✓ Compiled successfully (157 modules)", type: "success" as const, delay: 800 },
        { text: "[COMPILER]   ✓ Generating static pages (5/5) and outputting HTML", type: "success" as const, delay: 900 },
        { text: "[COMPILER]   Static export successful. Target: ./out", type: "success" as const, delay: 500 },
        { text: "[GIT] Staging modified files for commit...", type: "info" as const, delay: 600 },
        { text: "[GIT] [main f9e3a1d] feat: implement interactive terminal and smart glasses HUD simulator", type: "plain" as const, delay: 500 },
        { text: "[GIT] Pushing commit to remote: origin/main...", type: "info" as const, delay: 1000 },
        { text: "[GIT] Uploading packfile... Done. 14 objects, 2.5MB", type: "plain" as const, delay: 800 },
        { text: "[GIT] Remote: Resolving deltas: 100% (6/6), completed successfully.", type: "success" as const, delay: 600 },
        { text: "[DEPLOY] GitHub Pages deployment worker triggered.", type: "info" as const, delay: 800 },
        { text: "[DEPLOY] CNAME aritra-test.parot.dev configured successfully.", type: "success" as const, delay: 500 },
        { text: "[DEPLOY] [SUCCESS] Site is live and accessible at https://aritra-test.parot.dev", type: "success" as const, delay: 1000 },
        { text: "[SUCCESS] Autonomous coding cycle completed successfully! Time elapsed: 13.9 seconds.", type: "success" as const, delay: 200 }
      ];

      // Sequential delay simulation
      for (const step of steps) {
        await new Promise((resolve) => {
          setTimeout(() => {
            addLine(step.text, step.type);
            resolve(null);
          }, step.delay);
        });
      }
      setIsExecuting(false);
    } else if (cmd === "gemini-query") {
      if (!args) {
        addLine("[GEMINI] Please specify a query. Usage: gemini-query <query>", "error");
        setIsExecuting(false);
        return;
      }

      addLine(`[GEMINI] Dispatching query: "${args}" to Gemini 3.5 Pro (Deep Thinker)...`, "info");
      
      const reasoningSteps = [
        { text: `⚡ Thinking (0.8s): Analyzing query "${args}". Contextualizing variables and structural components...`, delay: 800 },
        { text: `⚡ Thinking (1.9s): Researching available APIs. Smart Glasses overlay requires custom canvas layer. Telemetry uses polling intervals. checking telemetry API parameters...`, delay: 1100 },
        { text: `⚡ Thinking (3.2s): Resolving dependency states. Decoupling command handling from UI inputs. Estimating memory profiling for real-time telemetry rendering...`, delay: 1300 },
        { text: `⚡ Thinking (4.5s): Optimizing DOM reflow blocks. Implementing CSS layout boundaries. Preparing solution representation...`, delay: 1000 }
      ];

      for (const step of reasoningSteps) {
        await new Promise((resolve) => {
          setTimeout(() => {
            addLine(step.text, "thinking");
            resolve(null);
          }, step.delay);
        });
      }

      await new Promise((resolve) => setTimeout(resolve, 800));

      addLine("[GEMINI] Deep Think completed. Generating final response:", "gemini-header");
      addLine(`Resolved: Integration blueprint formulated for query "${args}".\n\nSolution Details:\n1. Hook listeners bound to PreToolUse to authorize execution.\n2. Telemetry polling speed modulated by the speed controller.\n3. Custom color theme variables injected into the root glasses viewport.`, "gemini-text");
      
      setIsExecuting(false);
    } else {
      addLine(`agy: command not found: ${cmd}. Type 'help' to see list of valid commands.`, "error");
      setIsExecuting(false);
    }
  };

  return (
    <div 
      className="terminal-window animate-fade-in"
      onClick={handleFocus}
      style={{
        backgroundColor: "rgba(10, 11, 16, 0.95)",
        border: "1px solid var(--border)",
        borderRadius: "12px",
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.6), inset 0 0 1px rgba(255, 255, 255, 0.2)",
        overflow: "hidden",
        fontFamily: "var(--font-mono)",
        fontSize: "0.9rem",
        display: "flex",
        flexDirection: "column",
        height: "500px",
        cursor: "text",
        backdropFilter: "blur(12px)"
      }}
    >
      {/* Top Title Bar */}
      <div 
        className="terminal-header"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "12px 16px",
          background: "linear-gradient(180deg, #1b1e2a 0%, #12141d 100%)",
          borderBottom: "1px solid var(--border)",
          userSelect: "none"
        }}
      >
        {/* Linux-style dots */}
        <div style={{ display: "flex", gap: "6px" }}>
          <div style={{ width: "12px", height: "12px", borderRadius: "50%", backgroundColor: "#ff5f56", border: "1px solid #e0443e" }}></div>
          <div style={{ width: "12px", height: "12px", borderRadius: "50%", backgroundColor: "#ffbd2e", border: "1px solid #dea123" }}></div>
          <div style={{ width: "12px", height: "12px", borderRadius: "50%", backgroundColor: "#27c93f", border: "1px solid #1aab29" }}></div>
        </div>
        
        {/* Title */}
        <div style={{ color: "var(--text-secondary)", fontSize: "0.8rem", fontWeight: 500 }}>
          guest@antigravity: ~ (simulated-sh)
        </div>

        {/* Dummy size handle */}
        <div style={{ width: "42px" }}></div>
      </div>

      {/* Terminal logs list */}
      <div 
        className="terminal-body"
        style={{
          flexGrow: 1,
          padding: "20px",
          overflowY: "auto",
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          scrollBehavior: "smooth"
        }}
      >
        {history.map((line, idx) => {
          let color = "var(--text-primary)";
          if (line.type === "input") color = "#38bdf8"; // Light Blue
          else if (line.type === "info") color = "var(--google-blue)";
          else if (line.type === "success") color = "var(--google-green)";
          else if (line.type === "error") color = "var(--google-red)";
          else if (line.type === "thinking") color = "var(--google-yellow)";
          else if (line.type === "gemini-header") color = "var(--google-purple)";
          else if (line.type === "gemini-text") color = "#e2e8f0";
          else if (line.type === "plain") color = "var(--text-secondary)";

          return (
            <div 
              key={idx} 
              style={{ 
                color,
                whiteSpace: "pre-wrap",
                lineHeight: "1.5",
                fontFamily: "var(--font-mono)",
                display: "flex",
                flexDirection: "column"
              }}
            >
              {line.type === "thinking" ? (
                <span style={{ color: "var(--google-yellow)", fontStyle: "italic" }}>
                  {line.text}
                </span>
              ) : line.type === "gemini-text" ? (
                <div style={{ 
                  backgroundColor: "rgba(143, 93, 244, 0.05)", 
                  borderLeft: "3px solid var(--google-purple)", 
                  padding: "10px 14px", 
                  borderRadius: "0 6px 6px 0",
                  marginTop: "4px"
                }}>
                  {line.text}
                </div>
              ) : (
                <span>
                  {line.timestamp && (
                    <span style={{ color: "var(--text-muted)", fontSize: "0.75rem", marginRight: "8px", userSelect: "none" }}>
                      [{line.timestamp}]
                    </span>
                  )}
                  {line.text}
                </span>
              )}
            </div>
          );
        })}
        <div ref={terminalEndRef} />
      </div>

      {/* Input prompt area */}
      <div 
        className="terminal-input-bar"
        style={{
          padding: "12px 20px",
          borderTop: "1px solid var(--border)",
          background: "rgba(15, 17, 26, 0.5)",
          display: "flex",
          alignItems: "center"
        }}
      >
        <span style={{ color: "var(--google-green)", fontWeight: "bold", marginRight: "8px", userSelect: "none" }}>
          guest@antigravity:~$
        </span>
        
        {/* Invisible textbox */}
        <div style={{ position: "relative", flexGrow: 1, display: "flex", alignItems: "center" }}>
          <input
            ref={inputRef}
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            disabled={isExecuting}
            style={{
              position: "absolute",
              opacity: 0,
              width: "100%",
              height: "100%",
              cursor: "text",
              border: "none",
              outline: "none",
              zIndex: 10
            }}
          />
          {/* Custom visible mirror of the input */}
          <span style={{ color: "#38bdf8", marginRight: "2px", whiteSpace: "pre", zIndex: 1 }}>
            {inputValue}
          </span>
          {!isExecuting ? (
            <span 
              className="pulse-cursor"
              style={{
                display: "inline-block",
                width: "8px",
                height: "15px",
                backgroundColor: "#38bdf8",
                zIndex: 1
              }}
            />
          ) : (
            <span style={{ color: "var(--text-muted)", fontSize: "0.8rem", fontStyle: "italic", zIndex: 1 }}>
              (Executing...)
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
