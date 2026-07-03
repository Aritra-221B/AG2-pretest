"use client";

import { useState } from "react";

type Product = "gemini-35" | "gemini-omni" | "gemini-spark" | "antigravity";
type Language = "javascript" | "python" | "curl";

const CODE_TEMPLATES: Record<Product, Record<Language, string>> = {
  "gemini-35": {
    javascript: `import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

// Launch ultra-low latency agentic call with Gemini 3.5 Flash
const response = await ai.models.generateContent({
  model: "gemini-3.5-flash",
  contents: "Analyze this system log and extract error signatures.",
  config: {
    responseMimeType: "application/json",
    responseSchema: {
      type: "OBJECT",
      properties: {
        errorDetected: { type: "BOOLEAN" },
        signatures: { type: "ARRAY", items: { type: "STRING" } },
        severity: { type: "STRING", enum: ["LOW", "MEDIUM", "HIGH"] }
      },
      required: ["errorDetected", "signatures", "severity"]
    }
  }
});

console.log(JSON.parse(response.text));`,
    python: `from google import genai
from google.genai import types
import os

client = genai.Client(api_key=os.environ["GEMINI_API_KEY"])

# Low latency structured agent request
response = client.models.generate_content(
    model="gemini-3.5-flash",
    contents="Analyze this system log and extract error signatures.",
    config=types.GenerateContentConfig(
        response_mime_type="application/json",
        response_schema={
            "type": "OBJECT",
            "properties": {
                "errorDetected": {"type": "BOOLEAN"},
                "signatures": {"type": "ARRAY", "items": {"type": "STRING"}},
                "severity": {"type": "STRING", "enum": ["LOW", "MEDIUM", "HIGH"]}
            },
            "required": ["errorDetected", "signatures", "severity"]
        }
    )
)

print(response.text)`,
    curl: `curl "https://generativelanguage.googleapis.com/v1beta/models/gemini-3.5-flash:generateContent?key=\${GEMINI_API_KEY}" \\
  -H 'Content-Type: application/json' \\
  -d '{
    "contents": [{
      "parts":[{
        "text": "Analyze this system log and extract error signatures."
      }]
    }],
    "generationConfig": {
      "responseMimeType": "application/json",
      "responseSchema": {
        "type": "OBJECT",
        "properties": {
          "errorDetected": {"type": "BOOLEAN"},
          "signatures": {"type": "ARRAY", "items": {"type": "STRING"}},
          "severity": {"type": "STRING", "enum": ["LOW", "MEDIUM", "HIGH"]}
        },
        "required": ["errorDetected", "signatures", "severity"]
      }
    }
  }'`
  },
  "gemini-omni": {
    javascript: `import { GoogleGenAI } from "@google/genai";
import fs from "fs";

const ai = new GoogleGenAI();

// Gemini Omni supports continuous multimodal multi-turn native inputs
const response = await ai.models.generateContent({
  model: "gemini-omni-experimental",
  contents: [
    {
      role: "user",
      parts: [
        { text: "Listen to the user query and observe the room video frames. Coordinate guidance." },
        { inlineData: { mimeType: "audio/mp3", data: fs.readFileSync("input.mp3").toString("base64") } },
        { inlineData: { mimeType: "image/jpeg", data: fs.readFileSync("frame.jpg").toString("base64") } }
      ]
    }
  ]
});

console.log(response.text);`,
    python: `from google import genai
import os

client = genai.Client()

# Pass audio and video streams natively to Gemini Omni without pre-conversion
response = client.models.generate_content(
    model="gemini-omni-experimental",
    contents=[
        "Listen to the user query and observe the room video frames. Coordinate guidance.",
        {
            "mime_type": "audio/mp3",
            "data": open("input.mp3", "rb").read()
        },
        {
            "mime_type": "image/jpeg",
            "data": open("frame.jpg", "rb").read()
        }
    ]
)

print(response.text)`,
    curl: `curl "https://generativelanguage.googleapis.com/v1beta/models/gemini-omni-experimental:generateContent?key=\${GEMINI_API_KEY}" \\
  -H 'Content-Type: application/json' \\
  -d '{
    "contents": [{
      "parts":[
        {"text": "Analyze the real-time audio and video context together."},
        {
          "inlineData": {
            "mimeType": "image/jpeg",
            "data": "iVBORw0KGgoAAAANSU..."
          }
        }
      ]
    }]
  }'`
  },
  "gemini-spark": {
    javascript: `// Initialize Spark proactive cron service
import { GoogleSparkAgent } from "@google/spark-sdk";

const agent = new GoogleSparkAgent({
  agentId: "spark-email-monitor",
  authToken: process.env.SPARK_SECRET_KEY
});

// Configure Spark to poll emails 24/7 and summarize urgent threads
await agent.scheduleTask({
  cron: "*/15 * * * *", // every 15 minutes
  description: "Poll unread work emails, isolate server alert notifications, and summarize them",
  actions: [
    {
      type: "email.list",
      query: "is:unread category:primary"
    },
    {
      type: "llm.extract",
      prompt: "Identify any system down or critical alert emails. Create action items."
    },
    {
      type: "slack.postMessage",
      channel: "#ops-alerts"
    }
  ]
});`,
    python: `from google_spark import SparkAgent
import os

# Initialize 24/7 proactive background worker via Spark SDK
agent = SparkAgent(
    agent_id="spark-email-monitor",
    auth_token=os.environ["SPARK_SECRET_KEY"]
)

agent.schedule_task(
    cron="*/15 * * * *",
    description="Poll unread work emails and extract critical server alerts",
    actions=[
        {
            "type": "email.list",
            "query": "is:unread category:primary"
        },
        {
            "type": "llm.extract",
            "prompt": "Identify any system down or critical alert emails. Create action items."
        },
        {
            "type": "slack.post_message",
            "channel": "#ops-alerts"
        }
    ]
)`,
    curl: `curl -X POST "https://api.google.dev/v1/spark/agents/schedule" \\
  -H "Authorization: Bearer \${SPARK_SECRET_KEY}" \\
  -H "Content-Type: application/json" \\
  -d '{
    "agentId": "spark-email-monitor",
    "cron": "*/15 * * * *",
    "description": "Analyze unread emails and forward alerts",
    "actions": [
      {"type": "email.list", "query": "is:unread"},
      {"type": "llm.extract", "prompt": "Extract server issues"},
      {"type": "slack.postMessage", "channel": "#ops-alerts"}
    ]
  }'`
  },
  "antigravity": {
    javascript: `// Configure a custom Antigravity 2.0 Custom Skill definition
// Saved as .agents/skills/my-agent-task/SKILL.md

/*
---
name: my-agent-task
description: Builds the client bundle, tests code quality, commits and pushes to Git main branch.
---

# Agent Coding Tasks

1. First build the static client:
   \`npm run build\`
2. If the build passes, execute code lint:
   \`npm run lint\`
3. Stage files:
   \`git add .\`
4. Commit and push:
   \`git commit -m "chore: static deploy compilation" && git push origin main\`
*/

console.log("Antigravity 2.0 skill structure compiled. Ready for runtime invocation.");`,
    python: `# Run Antigravity 2.0 agent-first execution pipelines
import antigravity_sdk as agy

# Instantiate client session in local project workspace
agent_session = agy.WorkspaceAgent(
    workspace_path="./",
    target_goal="Scaffold, test, and push the portfolio page pointing to custom CNAME."
)

# Trigger autonomous reasoning cycle
result = agent_session.execute_goal()
print(f"Goal achieved: {result.success}. Walkthrough logged at: {result.walkthrough_path}")`,
    curl: `# Trigger an Antigravity 2.0 workspace runner goal via REST
curl -X POST "http://localhost:5011/v1/agent/execute" \\
  -H "Content-Type: application/json" \\
  -d '{
    "workspace": "/home/developer/workspace",
    "goal": "Refactor all inline styled elements to clean CSS modules and verify they build.",
    "rules_file": ".agents/AGENTS.md"
  }'`
  }
};

export default function CodeGenerator() {
  const [product, setProduct] = useState<Product>("gemini-35");
  const [lang, setLang] = useState<Language>("javascript");
  const [copied, setCopied] = useState(false);

  const code = CODE_TEMPLATES[product][lang];

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="playground-container animated-view">
      <div className="playground-sidebar">
        <div className="form-group">
          <label className="form-label">I/O Product</label>
          <select
            className="select-control"
            value={product}
            onChange={(e) => setProduct(e.target.value as Product)}
          >
            <option value="gemini-35">Gemini 3.5 Flash API</option>
            <option value="gemini-omni">Gemini Omni Multimodal</option>
            <option value="gemini-spark">Gemini Spark Proactive Agent</option>
            <option value="antigravity">Google Antigravity 2.0 SDK</option>
          </select>
        </div>

        <div className="form-group">
          <label className="form-label">Language</label>
          <select
            className="select-control"
            value={lang}
            onChange={(e) => setLang(e.target.value as Language)}
          >
            <option value="javascript">JavaScript (Node)</option>
            <option value="python">Python SDK</option>
            <option value="curl">cURL (REST API)</option>
          </select>
        </div>

        <div style={{ marginTop: 'auto', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
          Select a product and coding format to see standard integration structures.
        </div>
      </div>

      <div className="playground-main">
        <div className="code-wrapper">
          <div className="code-header">
            <span>
              {product === "gemini-35" && "gemini-3.5-flash-snippet"}
              {product === "gemini-omni" && "gemini-omni-multimodal"}
              {product === "gemini-spark" && "spark-proactive-scheduler"}
              {product === "antigravity" && "antigravity-workflow-spec"}
              {lang === "javascript" && ".ts"}
              {lang === "python" && ".py"}
              {lang === "curl" && ".sh"}
            </span>
            <button className="copy-btn" onClick={handleCopy}>
              {copied ? "Copied!" : "Copy Code"}
            </button>
          </div>
          <div className="code-content">{code}</div>
        </div>
      </div>
    </div>
  );
}
