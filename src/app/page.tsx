"use client";

import { useState } from "react";
import ConceptExplorer from "@/components/ConceptExplorer";
import CodeGenerator from "@/components/CodeGenerator";
import Quiz from "@/components/Quiz";
import DevTerminal from "@/components/DevTerminal";
import XRSimulator from "@/components/XRSimulator";

type Section = "concepts" | "playground" | "quiz" | "terminal" | "xr";

export default function Home() {
  const [activeSection, setActiveSection] = useState<Section>("concepts");
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  
  // Android XR spatial selectors states
  const [xrDepth, setXrDepth] = useState<"near" | "mid" | "far">("mid");
  const [xrFocus, setXrFocus] = useState<"gaze" | "gesture" | "voice">("gesture");
  const [xrAudio, setXrAudio] = useState(true);
  const [xrPassthrough, setXrPassthrough] = useState(false);
  const [showXrPanel, setShowXrPanel] = useState(true);

  return (
    <main className={`dashboard-layout container ${theme}`}>
      {/* Sidebar Navigation */}
      <aside className="sidebar">
        <div>
          <div className="brand">
            <div className="brand-dot" />
            <span>Google I/O '26 Hub</span>
          </div>

          <nav>
            <ul className="nav-links">
              <li>
                <button
                  className={`nav-item ${activeSection === "concepts" ? "active" : ""}`}
                  onClick={() => setActiveSection("concepts")}
                >
                  <span style={{ color: 'var(--google-blue)' }}>◆</span>
                  Concept Explorer
                </button>
              </li>
              <li>
                <button
                  className={`nav-item ${activeSection === "playground" ? "active" : ""}`}
                  onClick={() => setActiveSection("playground")}
                >
                  <span style={{ color: 'var(--google-red)' }}>◇</span>
                  Code Generator
                </button>
              </li>
              <li>
                <button
                  className={`nav-item ${activeSection === "quiz" ? "active" : ""}`}
                  onClick={() => setActiveSection("quiz")}
                >
                  <span style={{ color: 'var(--google-yellow)' }}>□</span>
                  Developer Quiz
                </button>
              </li>
              <li>
                <button
                  className={`nav-item ${activeSection === "terminal" ? "active" : ""}`}
                  onClick={() => setActiveSection("terminal")}
                >
                  <span style={{ color: 'var(--google-purple)' }}>⌘</span>
                  Dev Terminal
                </button>
              </li>
              <li>
                <button
                  className={`nav-item ${activeSection === "xr" ? "active" : ""}`}
                  onClick={() => setActiveSection("xr")}
                >
                  <span style={{ color: 'var(--google-green)' }}>⧇</span>
                  XR Glasses HUD
                </button>
              </li>
            </ul>
          </nav>
        </div>

        <div>
          {/* Dual Theme Switcher */}
          <div style={{ display: 'flex', gap: '8px', marginBottom: '20px' }}>
            <button
              className={`theme-toggle-btn ${theme === "light" ? "active" : ""}`}
              onClick={() => setTheme("light")}
            >
              ☀️ Light
            </button>
            <button
              className={`theme-toggle-btn ${theme === "dark" ? "active" : ""}`}
              onClick={() => setTheme("dark")}
            >
              🌙 Dark
            </button>
          </div>

          <div className="system-status" style={{ marginBottom: '16px' }}>
            <div className="status-indicator" />
            <span>System: Online & Syncing</span>
          </div>
          
          <div className="footer-info">
            <span>Powered by Gemini 3.5 & Antigravity 2.0</span>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <section className="main-content">
        <header style={{ marginBottom: '40px', borderBottom: '1px solid var(--border)', paddingBottom: '24px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              {activeSection === "concepts" && (
                <>
                  <h1>Developer Concept Explorer</h1>
                  <p>Discover I/O 2026 releases grouped by complexity level, highlighting structural OS and API changes.</p>
                </>
              )}
              {activeSection === "playground" && (
                <>
                  <h1>Developer Sandbox & Code Generator</h1>
                  <p>Generate integration blueprints for Gemini 3.5 Flash, Gemini Omni, Spark agents, and Antigravity SDK.</p>
                </>
              )}
              {activeSection === "quiz" && (
                <>
                  <h1>Knowledge Assessment Quiz</h1>
                  <p>Test your understanding of the new models, operating systems, and agent structures introduced in I/O '26.</p>
                </>
              )}
              {activeSection === "terminal" && (
                <>
                  <h1>Antigravity Dev Console</h1>
                  <p>Interactive, simulated CLI terminal console demonstrating agent lifecycle runs and Deep Think execution.</p>
                </>
              )}
              {activeSection === "xr" && (
                <>
                  <h1>XR Glasses HUD Simulator</h1>
                  <p>Interactive HUD computed glasses viewport linked to live local Home API telemetry feeds.</p>
                </>
              )}
            </div>
            
            <div style={{ display: 'flex', gap: '8px' }}>
              <span className="product-tag">I/O 2026</span>
              <span className="product-tag" style={{ color: 'var(--google-purple)', borderColor: 'rgba(143, 93, 244, 0.3)' }}>
                Gemini 3.5 Flash
              </span>
            </div>
          </div>
        </header>

        {/* Section View switcher */}
        <div style={{ minHeight: '400px', paddingBottom: '120px' }}>
          {activeSection === "concepts" && <ConceptExplorer />}
          {activeSection === "playground" && <CodeGenerator />}
          {activeSection === "quiz" && <Quiz />}
          {activeSection === "terminal" && <DevTerminal />}
          {activeSection === "xr" && <XRSimulator />}
        </div>
      </section>

      {/* Android XR Spatial Dashboard Overlay Selectors */}
      {showXrPanel && (
        <div 
          className="xr-overlay-panel animated-view" 
          style={{ 
            position: 'fixed', 
            bottom: '24px', 
            right: '24px', 
            width: '340px', 
            zIndex: 1000,
          }}
        >
          <div className="xr-title-container">
            <div className="xr-title">
              <span style={{ color: 'var(--google-purple)', marginRight: '6px' }}>◉</span>
              <span>Android XR Spatial HUD</span>
            </div>
            <span className="xr-badge-spatial">Active Overlay</span>
          </div>

          <div className="xr-selector-grid">
            <div className="xr-control-group" style={{ gridColumn: 'span 2' }}>
              <span className="xr-control-label">Spatial Depth Anchor</span>
              <div className="xr-buttons-row">
                <button 
                  className={`xr-btn ${xrDepth === "near" ? "active" : ""}`}
                  onClick={() => setXrDepth("near")}
                >
                  Near
                </button>
                <button 
                  className={`xr-btn ${xrDepth === "mid" ? "active" : ""}`}
                  onClick={() => setXrDepth("mid")}
                >
                  Mid
                </button>
                <button 
                  className={`xr-btn ${xrDepth === "far" ? "active" : ""}`}
                  onClick={() => setXrDepth("far")}
                >
                  Far
                </button>
              </div>
            </div>

            <div className="xr-control-group" style={{ gridColumn: 'span 2' }}>
              <span className="xr-control-label">Gesture Focus Mode</span>
              <div className="xr-buttons-row">
                <button 
                  className={`xr-btn ${xrFocus === "gaze" ? "active" : ""}`}
                  onClick={() => setXrFocus("gaze")}
                >
                  Gaze Focus
                </button>
                <button 
                  className={`xr-btn ${xrFocus === "gesture" ? "active" : ""}`}
                  onClick={() => setXrFocus("gesture")}
                >
                  Gesture
                </button>
                <button 
                  className={`xr-btn ${xrFocus === "voice" ? "active" : ""}`}
                  onClick={() => setXrFocus("voice")}
                >
                  Voice Direct
                </button>
              </div>
            </div>

            <div className="xr-control-group">
              <span className="xr-control-label">Spatial Audio</span>
              <div 
                className={`xr-toggle-row ${xrAudio ? "active" : ""}`}
                onClick={() => setXrAudio(!xrAudio)}
              >
                <span className="xr-toggle-label">{xrAudio ? "On" : "Off"}</span>
                <div className="xr-toggle-switch" />
              </div>
            </div>

            <div className="xr-control-group">
              <span className="xr-control-label">Passthrough HUD</span>
              <div 
                className={`xr-toggle-row ${xrPassthrough ? "active" : ""}`}
                onClick={() => setXrPassthrough(!xrPassthrough)}
              >
                <span className="xr-toggle-label">{xrPassthrough ? "Active" : "Muted"}</span>
                <div className="xr-toggle-switch" />
              </div>
            </div>
          </div>
          
          <div style={{ marginTop: '16px', display: 'flex', justifyContent: 'flex-end' }}>
            <button 
              onClick={() => setShowXrPanel(false)}
              style={{
                background: 'transparent',
                border: 'none',
                color: 'var(--text-muted)',
                fontSize: '0.75rem',
                cursor: 'pointer',
                fontWeight: 700,
                textDecoration: 'underline'
              }}
            >
              Minimize Overlay
            </button>
          </div>
        </div>
      )}

      {/* Button to restore XR Panel if minimized */}
      {!showXrPanel && (
        <button
          className="animated-view"
          onClick={() => setShowXrPanel(true)}
          style={{
            position: 'fixed',
            bottom: '24px',
            right: '24px',
            background: 'linear-gradient(135deg, var(--google-purple), var(--google-blue))',
            color: 'white',
            border: 'none',
            borderRadius: '30px',
            padding: '10px 20px',
            fontWeight: 700,
            fontSize: '0.8rem',
            cursor: 'pointer',
            boxShadow: '0 4px 12px rgba(143, 93, 244, 0.3)',
            zIndex: 1000
          }}
        >
          ▲ Expand Android XR HUD
        </button>
      )}
    </main>
  );
}
