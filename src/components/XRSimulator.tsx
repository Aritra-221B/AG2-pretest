"use client";

import React, { useState, useEffect } from "react";

type Theme = "cyan" | "amber" | "green";

interface TelemetryState {
  frontDoor: "SECURE" | "UNLOCKED";
  thermostat: number;
  kitchenLights: "ON" | "OFF";
  brightness: number;
  battery: number;
}

export default function XRSimulator() {
  const [theme, setTheme] = useState<Theme>("cyan");
  const [camIntel, setCamIntel] = useState(true);
  const [askHome, setAskHome] = useState(true);
  const [feedSpeed, setFeedSpeed] = useState(3); // 1x to 5x
  const [telemetry, setTelemetry] = useState<TelemetryState>({
    frontDoor: "SECURE",
    thermostat: 72.0,
    kitchenLights: "ON",
    brightness: 80,
    battery: 98
  });
  const [logs, setLogs] = useState<string[]>([
    "System booted. HUD initialized.",
    "Smart Glasses linked to Google Home API.",
    "Modality sensor stream online."
  ]);

  // Color mappings
  const themeColors = {
    cyan: { primary: "#22d3ee", bg: "rgba(34, 211, 238, 0.08)", border: "rgba(34, 211, 238, 0.3)", glow: "0 0 15px rgba(34, 211, 238, 0.5)" },
    amber: { primary: "#f59e0b", bg: "rgba(245, 158, 11, 0.08)", border: "rgba(245, 158, 11, 0.3)", glow: "0 0 15px rgba(245, 158, 11, 0.5)" },
    green: { primary: "#22c55e", bg: "rgba(34, 197, 94, 0.08)", border: "rgba(34, 197, 94, 0.3)", glow: "0 0 15px rgba(34, 197, 94, 0.5)" }
  };
  const activeColor = themeColors[theme];

  // Dynamic telemetry and log updates based on feedSpeed
  useEffect(() => {
    // Determine interval speed: 2000ms / speed
    const intervalMs = Math.max(300, 2000 - feedSpeed * 350);
    
    const interval = setInterval(() => {
      // 1. Update telemetry values slightly
      setTelemetry((prev) => {
        // Toggle door status occasionally
        const doorToggle = Math.random() > 0.9;
        const newDoor = doorToggle ? (prev.frontDoor === "SECURE" ? "UNLOCKED" : "SECURE") : prev.frontDoor;
        
        // Fluctuate temperature by -0.2 to +0.2 degrees
        const tempShift = parseFloat((Math.random() * 0.4 - 0.2).toFixed(1));
        const newTemp = parseFloat(Math.min(78, Math.max(65, prev.thermostat + tempShift)).toFixed(1));

        // Toggle kitchen lights occasionally
        const lightToggle = Math.random() > 0.85;
        const newLight = lightToggle ? (prev.kitchenLights === "ON" ? "OFF" : "ON") : prev.kitchenLights;

        // Brightness change
        let newBrightness = prev.brightness;
        if (newLight === "ON") {
          newBrightness = Math.min(100, Math.max(10, prev.brightness + Math.floor(Math.random() * 11 - 5)));
        }

        // Battery slowly depletes or stays stable
        const newBattery = Math.random() > 0.95 ? Math.max(1, prev.battery - 1) : prev.battery;

        return {
          frontDoor: newDoor,
          thermostat: newTemp,
          kitchenLights: newLight,
          brightness: newBrightness,
          battery: newBattery
        };
      });

      // 2. Add realistic logs
      const logPool: string[] = [];
      if (camIntel) {
        logPool.push(
          `[CAM_INTEL] Scanning environment... Confidence: ${(85 + Math.random() * 14).toFixed(1)}%`,
          `[CAM_INTEL] Running object classification on frame. Found 3 items.`,
          `[CAM_INTEL] LiDAR mesh map update complete. Latency: ${Math.floor(8 + Math.random() * 8)}ms`,
          `[CAM_INTEL] Visual tracking locked on Smart Door Lock.`
        );
      }
      if (askHome) {
        logPool.push(
          `[HOME_API] Syncing telemetry. lock_state=${telemetry.frontDoor.toLowerCase()}`,
          `[HOME_API] Thermostat target 72°F. Measured: ${telemetry.thermostat}°F`,
          `[HOME_API] Kitchen lights mode: ${telemetry.kitchenLights.toLowerCase()}`,
          `[HOME_API] Home network latency: ${Math.floor(20 + Math.random() * 15)}ms`
        );
      }
      
      if (logPool.length > 0) {
        const randomLog = logPool[Math.floor(Math.random() * logPool.length)];
        setLogs((prev) => [randomLog, ...prev].slice(0, 15));
      }
    }, intervalMs);

    return () => clearInterval(interval);
  }, [feedSpeed, camIntel, askHome, telemetry.frontDoor, telemetry.thermostat, telemetry.kitchenLights]);

  // Log toggling state changes
  useEffect(() => {
    if (camIntel) {
      setLogs((prev) => ["[CAM_INTEL] Camera intelligence system ACTIVATED.", ...prev].slice(0, 15));
    } else {
      setLogs((prev) => ["[CAM_INTEL] Camera intelligence system DEACTIVATED.", ...prev].slice(0, 15));
    }
  }, [camIntel]);

  useEffect(() => {
    if (askHome) {
      setLogs((prev) => ["[HOME_API] Sync with local Home telemetry ENABLED.", ...prev].slice(0, 15));
    } else {
      setLogs((prev) => ["[HOME_API] Sync with local Home telemetry DISABLED.", ...prev].slice(0, 15));
    }
  }, [askHome]);

  return (
    <div 
      className="xr-simulator-container animate-fade-in"
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 340px",
        gap: "24px",
        marginTop: "24px",
        fontFamily: "var(--font-sans)",
        backgroundColor: "var(--card-bg)",
        border: "1px solid var(--border)",
        borderRadius: "12px",
        padding: "24px",
        boxShadow: "var(--shadow-md)"
      }}
    >
      {/* Viewport Area */}
      <div 
        className="xr-viewport"
        style={{
          position: "relative",
          backgroundColor: "#08090d",
          borderRadius: "10px",
          height: "480px",
          overflow: "hidden",
          border: `2px solid ${activeColor.border}`,
          boxShadow: activeColor.glow,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "all 0.3s ease"
        }}
      >
        {/* Futuristic Glasses HUD Overlay */}
        <div 
          className="hud-lenses"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            pointerEvents: "none",
            zIndex: 10
          }}
        >
          {/* HUD Top Bar */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", width: "100%" }}>
            {/* HUD Status */}
            <div style={{ color: activeColor.primary, textShadow: `0 0 8px ${activeColor.primary}`, fontFamily: "var(--font-mono)", fontSize: "0.75rem", display: "flex", flexDirection: "column" }}>
              <span>GLASSES MODE: I/O 2026 PROTOTYPE</span>
              <span>BATTERY: {telemetry.battery}%</span>
              <span>REFRESH: {feedSpeed * 30}Hz</span>
            </div>

            {/* HUD Logo */}
            <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <div 
                style={{ 
                  width: "8px", 
                  height: "8px", 
                  borderRadius: "50%", 
                  backgroundColor: activeColor.primary, 
                  boxShadow: `0 0 10px ${activeColor.primary}`
                }} 
              />
              <span style={{ color: activeColor.primary, textShadow: `0 0 8px ${activeColor.primary}`, fontFamily: "var(--font-mono)", fontSize: "0.75rem", fontWeight: "bold" }}>
                G.GLASS.v4
              </span>
            </div>
          </div>

          {/* Center Crosshair Overlay */}
          <div 
            style={{ 
              position: "absolute", 
              top: "50%", 
              left: "50%", 
              transform: "translate(-50%, -50%)", 
              width: "40px", 
              height: "40px",
              pointerEvents: "none"
            }}
          >
            <div style={{ position: "absolute", top: "50%", left: 0, right: 0, height: "1px", backgroundColor: activeColor.primary, opacity: 0.4 }} />
            <div style={{ position: "absolute", left: "50%", top: 0, bottom: 0, width: "1px", backgroundColor: activeColor.primary, opacity: 0.4 }} />
            <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "8px", height: "8px", borderRadius: "50%", border: `1px solid ${activeColor.primary}`, opacity: 0.8 }} />
          </div>

          {/* HUD Bottom Panel */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", width: "100%" }}>
            {/* Live Camera logs overlay */}
            <div 
              style={{ 
                width: "280px", 
                backgroundColor: "rgba(8, 9, 13, 0.85)", 
                border: `1px solid ${activeColor.border}`, 
                borderRadius: "6px",
                padding: "8px 12px",
                fontFamily: "var(--font-mono)",
                fontSize: "0.7rem",
                color: activeColor.primary,
                maxHeight: "100px",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                gap: "2px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.5)"
              }}
            >
              <div style={{ borderBottom: `1px solid ${activeColor.border}`, paddingBottom: "2px", marginBottom: "4px", fontWeight: "bold", display: "flex", justifyContent: "space-between" }}>
                <span>MODALITY STREAM</span>
                <span className="live-pulse" style={{ color: "#22c55e" }}>● LIVE</span>
              </div>
              {logs.slice(0, 4).map((log, idx) => (
                <div key={idx} style={{ opacity: 1 - idx * 0.25, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                  {log}
                </div>
              ))}
            </div>

            {/* Smart Home telemetry overlay (HUD side) */}
            {askHome && (
              <div 
                style={{ 
                  backgroundColor: "rgba(8, 9, 13, 0.85)", 
                  border: `1px solid ${activeColor.border}`, 
                  borderRadius: "6px",
                  padding: "8px 12px",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.7rem",
                  color: activeColor.primary,
                  width: "200px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "6px",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.5)"
                }}
              >
                <div style={{ borderBottom: `1px solid ${activeColor.border}`, paddingBottom: "2px", fontWeight: "bold" }}>
                  HOME API SYNC
                </div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <span>Front Lock:</span>
                  <span style={{ color: telemetry.frontDoor === "SECURE" ? "#22c55e" : "#ef4444", fontWeight: "bold" }}>
                    {telemetry.frontDoor}
                  </span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <span>Thermostat:</span>
                  <span style={{ fontWeight: "bold" }}>{telemetry.thermostat}°F</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <span>Kitchen Light:</span>
                  <span style={{ color: telemetry.kitchenLights === "ON" ? activeColor.primary : "var(--text-muted)", fontWeight: "bold" }}>
                    {telemetry.kitchenLights} {telemetry.kitchenLights === "ON" && `(${telemetry.brightness}%)`}
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* 3D Smart Room Vector Wireframe Background */}
        <svg 
          width="100%" 
          height="100%" 
          viewBox="0 0 600 400" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          style={{ opacity: 0.65, zIndex: 1 }}
        >
          {/* Depth Grid Lines */}
          <line x1="0" y1="400" x2="150" y2="280" stroke="#1f2937" strokeWidth="1" />
          <line x1="600" y1="400" x2="450" y2="280" stroke="#1f2937" strokeWidth="1" />
          <line x1="0" y1="0" x2="150" y2="100" stroke="#1f2937" strokeWidth="1" />
          <line x1="600" y1="0" x2="450" y2="100" stroke="#1f2937" strokeWidth="1" />
          
          {/* Back wall border */}
          <rect x="150" y="100" width="300" height="180" stroke="#1f2937" strokeWidth="1.5" />
          
          {/* Living Room Wireframe Objects */}
          {/* Smart Door (Left) */}
          <path d="M 50 140 L 110 160 L 110 320 L 50 280 Z" stroke="#374151" strokeWidth="1.5" />
          <line x1="80" y1="150" x2="80" y2="300" stroke="#374151" strokeDasharray="3 3" />
          
          {/* Couch (Center-Right) */}
          <path d="M 280 230 L 420 230 L 450 280 L 250 280 Z" stroke="#374151" strokeWidth="1.5" />
          <path d="M 280 200 L 420 200 L 420 230 L 280 230 Z" stroke="#374151" strokeWidth="1.5" />
          <path d="M 250 250 L 280 230 L 250 280" stroke="#374151" strokeWidth="1.5" />
          <path d="M 450 250 L 420 230 L 450 280" stroke="#374151" strokeWidth="1.5" />

          {/* Smart Lamp (Far Right) */}
          <line x1="500" y1="120" x2="500" y2="260" stroke="#374151" strokeWidth="1.5" />
          <polygon points="480,120 520,120 530,90 470,90" stroke="#374151" strokeWidth="1.5" />
          <ellipse cx="500" cy="260" rx="20" ry="8" stroke="#374151" strokeWidth="1.5" />

          {/* Thermostat on Wall (Back Wall Center-Left) */}
          <rect x="200" y="150" width="20" height="20" rx="3" stroke="#374151" strokeWidth="1.5" />

          {/* Interactive HUD Camera Intelligence Overlays */}
          {camIntel && (
            <>
              {/* Door Lock Bounding Box */}
              <rect x="95" y="210" width="12" height="20" stroke={activeColor.primary} strokeWidth="1.5" fill={activeColor.bg} style={{ transition: "stroke 0.2s" }} />
              <line x1="101" y1="210" x2="160" y2="180" stroke={activeColor.primary} strokeWidth="1" strokeDasharray="2 2" opacity="0.8" />
              <text x="165" y="180" fill={activeColor.primary} fontSize="8" fontFamily="monospace" dominantBaseline="middle">
                [LOCK: {telemetry.frontDoor}]
              </text>
              
              {/* Thermostat Bounding Box */}
              <rect x="195" y="145" width="30" height="30" stroke={activeColor.primary} strokeWidth="1.5" fill={activeColor.bg} style={{ transition: "stroke 0.2s" }} />
              <line x1="210" y1="145" x2="210" y2="80" stroke={activeColor.primary} strokeWidth="1" strokeDasharray="2 2" opacity="0.8" />
              <text x="210" y="70" fill={activeColor.primary} fontSize="8" fontFamily="monospace" textAnchor="middle">
                [THERMOSTAT: {telemetry.thermostat}°F]
              </text>

              {/* Smart Lamp Bounding Box */}
              <rect x="465" y="85" width="70" height="185" stroke={activeColor.primary} strokeWidth="1.5" fill={activeColor.bg} style={{ transition: "stroke 0.2s" }} />
              <line x1="465" y1="150" x2="380" y2="150" stroke={activeColor.primary} strokeWidth="1" strokeDasharray="2 2" opacity="0.8" />
              <text x="375" y="153" fill={activeColor.primary} fontSize="8" fontFamily="monospace" textAnchor="end">
                [LAMP: {telemetry.kitchenLights}]
              </text>
              
              {/* Wireframe nodes connecting HUD */}
              <circle cx="101" cy="220" r="3" fill={activeColor.primary} />
              <circle cx="210" cy="160" r="3" fill={activeColor.primary} />
              <circle cx="500" cy="105" r="3" fill={activeColor.primary} />
            </>
          )}
        </svg>
      </div>

      {/* Control Panel Area */}
      <div 
        className="xr-controls"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          justifyContent: "center"
        }}
      >
        <div style={{ borderBottom: "1px solid var(--border)", paddingBottom: "12px" }}>
          <h3 style={{ fontSize: "1.1rem", fontWeight: 600, color: "var(--text-primary)" }}>Glasses Controls</h3>
          <p style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>Modulate smart glasses computed layers and speed feeds.</p>
        </div>

        {/* 1. Theme Selector */}
        <div className="form-group">
          <span className="form-label">HUD Theme Color</span>
          <div style={{ display: "flex", gap: "8px" }}>
            {(["cyan", "amber", "green"] as const).map((t) => (
              <button
                key={t}
                onClick={() => setTheme(t)}
                style={{
                  flexGrow: 1,
                  padding: "8px 12px",
                  borderRadius: "6px",
                  border: "1px solid var(--border)",
                  backgroundColor: theme === t ? themeColors[t].bg : "var(--panel-bg)",
                  borderColor: theme === t ? themeColors[t].primary : "var(--border)",
                  color: theme === t ? themeColors[t].primary : "var(--text-secondary)",
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  cursor: "pointer",
                  textTransform: "capitalize",
                  boxShadow: theme === t ? `0 0 8px ${themeColors[t].bg}` : "none",
                  transition: "all 0.2s"
                }}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        {/* 2. Camera Intelligence Toggle */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div>
            <span style={{ fontSize: "0.9rem", fontWeight: 600, color: "var(--text-primary)" }}>Camera Intelligence</span>
            <p style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>Detect IoT nodes & display tags</p>
          </div>
          <button
            onClick={() => setCamIntel(!camIntel)}
            style={{
              width: "48px",
              height: "26px",
              borderRadius: "13px",
              backgroundColor: camIntel ? activeColor.primary : "var(--border)",
              border: "none",
              cursor: "pointer",
              position: "relative",
              transition: "background-color 0.2s"
            }}
          >
            <div 
              style={{
                width: "20px",
                height: "20px",
                borderRadius: "50%",
                backgroundColor: "white",
                position: "absolute",
                top: "3px",
                left: camIntel ? "25px" : "3px",
                transition: "left 0.2s"
              }}
            />
          </button>
        </div>

        {/* 3. Ask Home API Toggle */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div>
            <span style={{ fontSize: "0.9rem", fontWeight: 600, color: "var(--text-primary)" }}>Ask Home API</span>
            <p style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>Overlay live household telemetry</p>
          </div>
          <button
            onClick={() => setAskHome(!askHome)}
            style={{
              width: "48px",
              height: "26px",
              borderRadius: "13px",
              backgroundColor: askHome ? activeColor.primary : "var(--border)",
              border: "none",
              cursor: "pointer",
              position: "relative",
              transition: "background-color 0.2s"
            }}
          >
            <div 
              style={{
                width: "20px",
                height: "20px",
                borderRadius: "50%",
                backgroundColor: "white",
                position: "absolute",
                top: "3px",
                left: askHome ? "25px" : "3px",
                transition: "left 0.2s"
              }}
            />
          </button>
        </div>

        {/* 4. Speed Slider */}
        <div className="form-group">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span className="form-label">Modality Feed Speed</span>
            <span style={{ fontSize: "0.8rem", color: activeColor.primary, fontWeight: "bold" }}>{feedSpeed}x</span>
          </div>
          <input
            type="range"
            min="1"
            max="5"
            value={feedSpeed}
            onChange={(e) => setFeedSpeed(parseInt(e.target.value))}
            style={{
              width: "100%",
              accentColor: activeColor.primary,
              cursor: "pointer",
              backgroundColor: "var(--border)"
            }}
          />
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.7rem", color: "var(--text-muted)" }}>
            <span>Slow (1x)</span>
            <span>Medium</span>
            <span>Fast (5x)</span>
          </div>
        </div>
      </div>
    </div>
  );
}
