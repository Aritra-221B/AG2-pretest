"use client";

import { useState } from "react";

type Concept = {
  id: string;
  title: string;
  category: "beginner" | "intermediate" | "advanced";
  product: "gemini-35" | "gemini-omni" | "gemini-spark" | "antigravity";
  productLabel: string;
  description: string;
  keyTakeaway: string;
};

const CONCEPTS: Concept[] = [
  // Beginner
  {
    id: "android-ai-os",
    title: "AI-Driven Android OS",
    category: "beginner",
    product: "gemini-spark",
    productLabel: "Android & Gemini",
    description: "Android shifts from a tactile, app-grid paradigm to a proactive conversational operating system. Core applications like Keep, Docs, and Gmail now communicate seamlessly using conversational background threads.",
    keyTakeaway: "User interactions move from taps/clicks to direct conversational goals."
  },
  {
    id: "conversational-search",
    title: "Multimodal Conversational Search",
    category: "beginner",
    product: "gemini-omni",
    productLabel: "Google Search",
    description: "Search now handles complex queries referencing images, files, local video capture, or current Chrome tabs in a single conversational prompt, compiling structured answers directly.",
    keyTakeaway: "Search accepts continuous multimodal context inputs instead of isolated keywords."
  },
  {
    id: "gemini-spark-intro",
    title: "Proactive AI Agents with Spark",
    category: "beginner",
    product: "gemini-spark",
    productLabel: "Gemini Spark",
    description: "Introduce yourself to Gemini Spark, Google's 24/7 personal agent. It monitors tasks like email organization, calendar changes, and expense tracking autonomously in the background.",
    keyTakeaway: "Enables hands-free execution of routine daily digital admin tasks."
  },
  // Intermediate
  {
    id: "gemini-35-flash",
    title: "Gemini 3.5 Flash API",
    category: "intermediate",
    product: "gemini-35",
    productLabel: "Gemini 3.5 Flash",
    description: "The developer's default choice for speed-critical workflows. Gemini 3.5 Flash boasts ultra-low token latency, optimized tool calling, and high instruction compliance for structured JSON output.",
    keyTakeaway: "Sub-second response time makes it perfect for agentic loops."
  },
  {
    id: "home-intelligence",
    title: "Google Home Intelligence SDK",
    category: "intermediate",
    product: "antigravity",
    productLabel: "Google Home",
    description: "Developers can tap into the smart home model to query household states ('Is the back door locked?') or receive contextual camera event descriptions using the new Ask Home APIs.",
    keyTakeaway: "Transforms raw IoT signals into clean semantic queries."
  },
  {
    id: "android-auto-gemini",
    title: "Gemini Voice for Android Auto",
    category: "intermediate",
    product: "gemini-spark",
    productLabel: "Android Auto",
    description: "Integrate vehicle dashboards directly with Gemini API. Enables conversational control of vehicle configurations and navigation routing using natural, driver-focused dialog systems.",
    keyTakeaway: "Enhances driving safety by removing physical screen tap requirements."
  },
  // Advanced
  {
    id: "gemini-omni-arch",
    title: "Gemini Omni Architectures",
    category: "advanced",
    product: "gemini-omni",
    productLabel: "Gemini Omni",
    description: "Build any-to-any multimodal pipes. Gemini Omni processes audio, visual, text, and sensor data natively in a single model step without converting audio to text first, maintaining tone and spatial cues.",
    keyTakeaway: "Allows ultra-low latency real-time voice and video conversations."
  },
  {
    id: "antigravity-workflows",
    title: "Antigravity 2.0 Workflows",
    category: "advanced",
    product: "antigravity",
    productLabel: "Antigravity 2.0",
    description: "Deploy autonomous software engineering agents. Antigravity 2.0 coordinates workspace operations, executes compiler loops, manages git repositories, and handles deployment configurations on the developer's behalf.",
    keyTakeaway: "Moves development from manual coding to goal-driven pair programming."
  },
  {
    id: "android-xr-glasses",
    title: "Android XR & Smart Glasses API",
    category: "advanced",
    product: "gemini-omni",
    productLabel: "Android XR",
    description: "Develop lightweight augmented reality features. Integrate spatial gestures, real-time audio overlays, and contextual HUD notifications synced seamlessly with Gemini spatial vision endpoints.",
    keyTakeaway: "Unlocks situational computing by merging real-world view with active AI models."
  }
];

export default function ConceptExplorer() {
  const [activeCategory, setActiveCategory] = useState<"beginner" | "intermediate" | "advanced">("beginner");

  const filteredConcepts = CONCEPTS.filter(c => c.category === activeCategory);

  return (
    <div className="animated-view">
      <div className="tabs-container">
        <button
          className={`tab-btn ${activeCategory === "beginner" ? "active" : ""}`}
          onClick={() => setActiveCategory("beginner")}
        >
          Beginner
        </button>
        <button
          className={`tab-btn ${activeCategory === "intermediate" ? "active" : ""}`}
          onClick={() => setActiveCategory("intermediate")}
        >
          Intermediate
        </button>
        <button
          className={`tab-btn ${activeCategory === "advanced" ? "active" : ""}`}
          onClick={() => setActiveCategory("advanced")}
        >
          Advanced
        </button>
      </div>

      <div className="concept-grid">
        {filteredConcepts.map((concept) => (
          <div
            key={concept.id}
            className={`concept-card ${concept.product}`}
          >
            <div>
              <div className="concept-header">
                <span className="product-tag">{concept.productLabel}</span>
                <span className={`level-badge ${concept.category}`}>{concept.category}</span>
              </div>
              <h3 className="concept-title">{concept.title}</h3>
              <p className="concept-description">{concept.description}</p>
            </div>
            
            <div className="concept-footer">
              <div>
                <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', display: 'block', marginBottom: '2px' }}>
                  Key Takeaway
                </span>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-primary)', fontWeight: 500 }}>
                  {concept.keyTakeaway}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
