"use client";

import { useState } from "react";
import ConceptExplorer from "@/components/ConceptExplorer";
import CodeGenerator from "@/components/CodeGenerator";
import Quiz from "@/components/Quiz";

type Section = "concepts" | "playground" | "quiz";

export default function Home() {
  const [activeSection, setActiveSection] = useState<Section>("concepts");

  return (
    <main className="dashboard-layout">
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
            </ul>
          </nav>
        </div>

        <div>
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
        <div style={{ minHeight: '400px' }}>
          {activeSection === "concepts" && <ConceptExplorer />}
          {activeSection === "playground" && <CodeGenerator />}
          {activeSection === "quiz" && <Quiz />}
        </div>
      </section>
    </main>
  );
}
