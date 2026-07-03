"use client";

import { useState } from "react";

type Question = {
  id: number;
  question: string;
  options: string[];
  correctIdx: number;
};

const QUESTIONS: Question[] = [
  {
    id: 1,
    question: "Gemini 3.5 Flash is engineered primarily to solve which developer need?",
    options: [
      "Long-form document archiving (up to 100M tokens)",
      "Ultra-low latency execution and highly optimized tool-calling in agentic loops",
      "Compiling binary source code for legacy mainframe hardware",
      "Running offline edge image generation services"
    ],
    correctIdx: 1
  },
  {
    id: 2,
    question: "Which option describes the primary capability of Gemini Omni?",
    options: [
      "Offline database indexing on low-power IoT microcontrollers",
      "Synthesizing test mock environments for relational databases",
      "Processing any-to-any multimodal inputs (audio/video/text/sensors) natively in a single model step",
      "Compiling Python scripts directly into microcode"
    ],
    correctIdx: 2
  },
  {
    id: 3,
    question: "What makes Gemini Spark different from standard conversational chat assistants?",
    options: [
      "It is only active during the live Google Keynote broadcast",
      "It requires specialized local GPU arrays to execute simple prompts",
      "It acts proactively 24/7 in the background, monitoring events and coordinating scheduled tasks",
      "It is restricted to audio-only inputs with no console interface"
    ],
    correctIdx: 2
  },
  {
    id: 4,
    question: "What is Google Antigravity 2.0?",
    options: [
      "An operating system designed for next-gen aerospace hardware",
      "An agent-first developer platform that empowers autonomous agents to build, test, and deploy code",
      "A spatial computing framework restricted to smartglasses development",
      "A database replication service for heavy enterprise platforms"
    ],
    correctIdx: 1
  },
  {
    id: 5,
    question: "At Google I/O 2026, Android's OS interface direction shifted toward:",
    options: [
      "A grid-centric manual launcher interface to force tap interactions",
      "A conversational AI-driven experience focusing on voice action streams and background threads",
      "Deprecated support for Node.js backend integrations",
      "Removing sandboxed background services for third-party apps"
    ],
    correctIdx: 1
  }
];

export default function Quiz() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  const handleNext = () => {
    if (selectedIdx === QUESTIONS[currentIdx].correctIdx) {
      setScore(prev => prev + 1);
    }

    if (currentIdx + 1 < QUESTIONS.length) {
      setCurrentIdx(prev => prev + 1);
      setSelectedIdx(null);
    } else {
      setQuizFinished(true);
    }
  };

  const handleRestart = () => {
    setCurrentIdx(0);
    setSelectedIdx(null);
    setScore(0);
    setQuizFinished(false);
  };

  const percentComplete = Math.round(((currentIdx) / QUESTIONS.length) * 100);

  if (quizFinished) {
    let devLevel = "Beginner Learner";
    let levelClass = "beginner";
    let feedback = "You are starting to understand the concepts. Take another look at the documentation cards to learn more about the 2026 updates.";

    if (score === 5) {
      devLevel = "Advanced I/O Architect";
      levelClass = "advanced";
      feedback = "Excellent! You have mastered all major Google I/O 2026 updates. You are ready to design agentic workflows, multimodal pipelines, and spatial compute configurations.";
    } else if (score >= 3) {
      devLevel = "Intermediate Integrator";
      levelClass = "intermediate";
      feedback = "Great job! You have a solid grasp of Gemini 3.5 Flash capabilities, Spark agents, and core OS changes. Review advanced agentic architectures to level up.";
    }

    return (
      <div className="quiz-container animated-view">
        <div className="quiz-result">
          {/* Animated Success Checkmark */}
          <div className="success-checkmark-wrapper">
            <svg className="success-checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
              <circle className="success-checkmark-circle" cx="26" cy="26" r="25" fill="none" />
              <path className="success-checkmark-check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
            </svg>
          </div>
          <h2>Evaluation Complete</h2>
          <div className="result-score">{score} / {QUESTIONS.length}</div>
          <div style={{ marginBottom: '16px' }}>
            <span className={`level-badge ${levelClass}`}>{devLevel}</span>
          </div>
          <p className="result-desc">{feedback}</p>
          <button className="quiz-btn" onClick={handleRestart}>
            Retake Assessment
          </button>
        </div>
      </div>
    );
  }

  const currentQ = QUESTIONS[currentIdx];

  return (
    <div className="quiz-container animated-view">
      <div className="quiz-progress">
        <span>Question {currentIdx + 1} of {QUESTIONS.length}</span>
        <span style={{ fontWeight: 600 }}>{percentComplete}% Completed</span>
      </div>
      <div className="quiz-bar-bg">
        <div className="quiz-bar-fill" style={{ width: `${percentComplete}%` }}></div>
      </div>

      <div style={{ marginTop: '24px' }}>
        <p className="quiz-question">{currentQ.question}</p>
        <div className="quiz-options">
          {currentQ.options.map((opt, index) => (
            <button
              key={index}
              className={`quiz-option ${selectedIdx === index ? "selected" : ""}`}
              onClick={() => setSelectedIdx(index)}
            >
              <span>{opt}</span>
              <span className="quiz-option-dot" />
            </button>
          ))}
        </div>
      </div>

      <div className="quiz-actions">
        <button
          className="quiz-btn"
          disabled={selectedIdx === null}
          onClick={handleNext}
        >
          {currentIdx + 1 === QUESTIONS.length ? "Finish Quiz" : "Next Question"}
        </button>
      </div>
    </div>
  );
}
