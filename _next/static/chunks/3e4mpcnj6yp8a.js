(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,79474,(e,t,i)=>{"use strict";var n=e.r(71645).__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;i.c=function(e){return n.H.useMemoCache(e)}},932,(e,t,i)=>{"use strict";t.exports=e.r(79474)},52683,e=>{"use strict";var t=e.i(43476),i=e.i(932),n=e.i(71645);let a=[{id:"android-ai-os",title:"AI-Driven Android OS",category:"beginner",product:"gemini-spark",productLabel:"Android & Gemini",description:"Android shifts from a tactile, app-grid paradigm to a proactive conversational operating system. Core applications like Keep, Docs, and Gmail now communicate seamlessly using conversational background threads.",keyTakeaway:"User interactions move from taps/clicks to direct conversational goals."},{id:"conversational-search",title:"Multimodal Conversational Search",category:"beginner",product:"gemini-omni",productLabel:"Google Search",description:"Search now handles complex queries referencing images, files, local video capture, or current Chrome tabs in a single conversational prompt, compiling structured answers directly.",keyTakeaway:"Search accepts continuous multimodal context inputs instead of isolated keywords."},{id:"gemini-spark-intro",title:"Proactive AI Agents with Spark",category:"beginner",product:"gemini-spark",productLabel:"Gemini Spark",description:"Introduce yourself to Gemini Spark, Google's 24/7 personal agent. It monitors tasks like email organization, calendar changes, and expense tracking autonomously in the background.",keyTakeaway:"Enables hands-free execution of routine daily digital admin tasks."},{id:"gemini-35-flash",title:"Gemini 3.5 Flash API",category:"intermediate",product:"gemini-35",productLabel:"Gemini 3.5 Flash",description:"The developer's default choice for speed-critical workflows. Gemini 3.5 Flash boasts ultra-low token latency, optimized tool calling, and high instruction compliance for structured JSON output.",keyTakeaway:"Sub-second response time makes it perfect for agentic loops."},{id:"home-intelligence",title:"Google Home Intelligence SDK",category:"intermediate",product:"antigravity",productLabel:"Google Home",description:"Developers can tap into the smart home model to query household states ('Is the back door locked?') or receive contextual camera event descriptions using the new Ask Home APIs.",keyTakeaway:"Transforms raw IoT signals into clean semantic queries."},{id:"android-auto-gemini",title:"Gemini Voice for Android Auto",category:"intermediate",product:"gemini-spark",productLabel:"Android Auto",description:"Integrate vehicle dashboards directly with Gemini API. Enables conversational control of vehicle configurations and navigation routing using natural, driver-focused dialog systems.",keyTakeaway:"Enhances driving safety by removing physical screen tap requirements."},{id:"gemini-omni-arch",title:"Gemini Omni Architectures",category:"advanced",product:"gemini-omni",productLabel:"Gemini Omni",description:"Build any-to-any multimodal pipes. Gemini Omni processes audio, visual, text, and sensor data natively in a single model step without converting audio to text first, maintaining tone and spatial cues.",keyTakeaway:"Allows ultra-low latency real-time voice and video conversations."},{id:"antigravity-workflows",title:"Antigravity 2.0 Workflows",category:"advanced",product:"antigravity",productLabel:"Antigravity 2.0",description:"Deploy autonomous software engineering agents. Antigravity 2.0 coordinates workspace operations, executes compiler loops, manages git repositories, and handles deployment configurations on the developer's behalf.",keyTakeaway:"Moves development from manual coding to goal-driven pair programming."},{id:"android-xr-glasses",title:"Android XR & Smart Glasses API",category:"advanced",product:"gemini-omni",productLabel:"Android XR",description:"Develop lightweight augmented reality features. Integrate spatial gestures, real-time audio overlays, and contextual HUD notifications synced seamlessly with Gemini spatial vision endpoints.",keyTakeaway:"Unlocks situational computing by merging real-world view with active AI models."}];function o(){let e,o,r,l,c,d,m=(0,i.c)(25),[p,g]=(0,n.useState)("beginner");if(m[0]!==p){let i,n,c,d,u,h,y=a.filter(e=>e.category===p);r="animated-view";let v=`tab-btn ${"beginner"===p?"active":""}`;m[5]===Symbol.for("react.memo_cache_sentinel")?(i=()=>g("beginner"),m[5]=i):i=m[5],m[6]!==v?(n=(0,t.jsx)("button",{className:v,onClick:i,children:"Beginner"}),m[6]=v,m[7]=n):n=m[7];let x=`tab-btn ${"intermediate"===p?"active":""}`;m[8]===Symbol.for("react.memo_cache_sentinel")?(c=()=>g("intermediate"),m[8]=c):c=m[8],m[9]!==x?(d=(0,t.jsx)("button",{className:x,onClick:c,children:"Intermediate"}),m[9]=x,m[10]=d):d=m[10];let f=`tab-btn ${"advanced"===p?"active":""}`;m[11]===Symbol.for("react.memo_cache_sentinel")?(u=()=>g("advanced"),m[11]=u):u=m[11],m[12]!==f?(h=(0,t.jsx)("button",{className:f,onClick:u,children:"Advanced"}),m[12]=f,m[13]=h):h=m[13],m[14]!==h||m[15]!==n||m[16]!==d?(l=(0,t.jsxs)("div",{className:"tabs-container",children:[n,d,h]}),m[14]=h,m[15]=n,m[16]=d,m[17]=l):l=m[17],e="concept-grid",o=y.map(s),m[0]=p,m[1]=e,m[2]=o,m[3]=r,m[4]=l}else e=m[1],o=m[2],r=m[3],l=m[4];return m[18]!==e||m[19]!==o?(c=(0,t.jsx)("div",{className:e,children:o}),m[18]=e,m[19]=o,m[20]=c):c=m[20],m[21]!==r||m[22]!==l||m[23]!==c?(d=(0,t.jsxs)("div",{className:r,children:[l,c]}),m[21]=r,m[22]=l,m[23]=c,m[24]=d):d=m[24],d}function s(e){return(0,t.jsxs)("div",{className:`concept-card ${e.product}`,children:[(0,t.jsxs)("div",{children:[(0,t.jsxs)("div",{className:"concept-header",children:[(0,t.jsx)("span",{className:"product-tag",children:e.productLabel}),(0,t.jsx)("span",{className:`level-badge ${e.category}`,children:e.category})]}),(0,t.jsx)("h3",{className:"concept-title",children:e.title}),(0,t.jsx)("p",{className:"concept-description",children:e.description})]}),(0,t.jsx)("div",{className:"concept-footer",children:(0,t.jsxs)("div",{children:[(0,t.jsx)("span",{style:{fontSize:"0.75rem",fontWeight:600,color:"var(--text-muted)",textTransform:"uppercase",display:"block",marginBottom:"2px"},children:"Key Takeaway"}),(0,t.jsx)("span",{style:{fontSize:"0.85rem",color:"var(--text-primary)",fontWeight:500},children:e.keyTakeaway})]})})]},e.id)}let r={"gemini-35":{javascript:`import { GoogleGenAI } from "@google/genai";

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

console.log(JSON.parse(response.text));`,python:`from google import genai
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

print(response.text)`,curl:`curl "https://generativelanguage.googleapis.com/v1beta/models/gemini-3.5-flash:generateContent?key=\${GEMINI_API_KEY}" \\
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
  }'`},"gemini-omni":{javascript:`import { GoogleGenAI } from "@google/genai";
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

console.log(response.text);`,python:`from google import genai
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

print(response.text)`,curl:`curl "https://generativelanguage.googleapis.com/v1beta/models/gemini-omni-experimental:generateContent?key=\${GEMINI_API_KEY}" \\
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
  }'`},"gemini-spark":{javascript:`// Initialize Spark proactive cron service
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
});`,python:`from google_spark import SparkAgent
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
)`,curl:`curl -X POST "https://api.google.dev/v1/spark/agents/schedule" \\
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
  }'`},antigravity:{javascript:`// Configure a custom Antigravity 2.0 Custom Skill definition
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

console.log("Antigravity 2.0 skill structure compiled. Ready for runtime invocation.");`,python:`# Run Antigravity 2.0 agent-first execution pipelines
import antigravity_sdk as agy

# Instantiate client session in local project workspace
agent_session = agy.WorkspaceAgent(
    workspace_path="./",
    target_goal="Scaffold, test, and push the portfolio page pointing to custom CNAME."
)

# Trigger autonomous reasoning cycle
result = agent_session.execute_goal()
print(f"Goal achieved: {result.success}. Walkthrough logged at: {result.walkthrough_path}")`,curl:`# Trigger an Antigravity 2.0 workspace runner goal via REST
curl -X POST "http://localhost:5011/v1/agent/execute" \\
  -H "Content-Type: application/json" \\
  -d '{
    "workspace": "/home/developer/workspace",
    "goal": "Refactor all inline styled elements to clean CSS modules and verify they build.",
    "rules_file": ".agents/AGENTS.md"
  }'`}};function l(){let e,a,o,s,l,c,d,m,p,g,u,h,y,v,x,f,b,j,k,S,_,A,w=(0,i.c)(43),[N,I]=(0,n.useState)("gemini-35"),[G,C]=(0,n.useState)("javascript"),[T,O]=(0,n.useState)(!1),E=r[N][G];w[0]!==E?(e=()=>{navigator.clipboard.writeText(E),O(!0),setTimeout(()=>O(!1),2e3)},w[0]=E,w[1]=e):e=w[1];let q=e;w[2]===Symbol.for("react.memo_cache_sentinel")?(a=(0,t.jsx)("label",{className:"form-label",children:"I/O Product"}),w[2]=a):a=w[2],w[3]===Symbol.for("react.memo_cache_sentinel")?(o=e=>I(e.target.value),s=(0,t.jsx)("option",{value:"gemini-35",children:"Gemini 3.5 Flash API"}),l=(0,t.jsx)("option",{value:"gemini-omni",children:"Gemini Omni Multimodal"}),c=(0,t.jsx)("option",{value:"gemini-spark",children:"Gemini Spark Proactive Agent"}),d=(0,t.jsx)("option",{value:"antigravity",children:"Google Antigravity 2.0 SDK"}),w[3]=o,w[4]=s,w[5]=l,w[6]=c,w[7]=d):(o=w[3],s=w[4],l=w[5],c=w[6],d=w[7]),w[8]!==N?(m=(0,t.jsxs)("div",{className:"form-group",children:[a,(0,t.jsxs)("select",{className:"select-control",value:N,onChange:o,children:[s,l,c,d]})]}),w[8]=N,w[9]=m):m=w[9],w[10]===Symbol.for("react.memo_cache_sentinel")?(p=(0,t.jsx)("label",{className:"form-label",children:"Language"}),w[10]=p):p=w[10],w[11]===Symbol.for("react.memo_cache_sentinel")?(y=e=>C(e.target.value),g=(0,t.jsx)("option",{value:"javascript",children:"JavaScript (Node)"}),u=(0,t.jsx)("option",{value:"python",children:"Python SDK"}),h=(0,t.jsx)("option",{value:"curl",children:"cURL (REST API)"}),w[11]=g,w[12]=u,w[13]=h,w[14]=y):(g=w[11],u=w[12],h=w[13],y=w[14]),w[15]!==G?(v=(0,t.jsxs)("div",{className:"form-group",children:[p,(0,t.jsxs)("select",{className:"select-control",value:G,onChange:y,children:[g,u,h]})]}),w[15]=G,w[16]=v):v=w[16],w[17]===Symbol.for("react.memo_cache_sentinel")?(x=(0,t.jsx)("div",{style:{marginTop:"auto",fontSize:"0.8rem",color:"var(--text-muted)"},children:"Select a product and coding format to see standard integration structures."}),w[17]=x):x=w[17],w[18]!==v||w[19]!==m?(f=(0,t.jsxs)("div",{className:"playground-sidebar",children:[m,v,x]}),w[18]=v,w[19]=m,w[20]=f):f=w[20];let R="gemini-35"===N&&"gemini-3.5-flash-snippet",z="gemini-omni"===N&&"gemini-omni-multimodal",D="gemini-spark"===N&&"spark-proactive-scheduler",P="antigravity"===N&&"antigravity-workflow-spec",L="javascript"===G&&".ts",K="python"===G&&".py",M="curl"===G&&".sh";w[21]!==R||w[22]!==z||w[23]!==D||w[24]!==P||w[25]!==L||w[26]!==K||w[27]!==M?(b=(0,t.jsxs)("span",{children:[R,z,D,P,L,K,M]}),w[21]=R,w[22]=z,w[23]=D,w[24]=P,w[25]=L,w[26]=K,w[27]=M,w[28]=b):b=w[28];let B=T?"Copied!":"Copy Code";return w[29]!==q||w[30]!==B?(j=(0,t.jsx)("button",{className:"copy-btn",onClick:q,children:B}),w[29]=q,w[30]=B,w[31]=j):j=w[31],w[32]!==b||w[33]!==j?(k=(0,t.jsxs)("div",{className:"code-header",children:[b,j]}),w[32]=b,w[33]=j,w[34]=k):k=w[34],w[35]!==E?(S=(0,t.jsx)("div",{className:"code-content",children:E}),w[35]=E,w[36]=S):S=w[36],w[37]!==k||w[38]!==S?(_=(0,t.jsx)("div",{className:"playground-main",children:(0,t.jsxs)("div",{className:"code-wrapper",children:[k,S]})}),w[37]=k,w[38]=S,w[39]=_):_=w[39],w[40]!==f||w[41]!==_?(A=(0,t.jsxs)("div",{className:"playground-container animated-view",children:[f,_]}),w[40]=f,w[41]=_,w[42]=A):A=w[42],A}let c=[{id:1,question:"Gemini 3.5 Flash is engineered primarily to solve which developer need?",options:["Long-form document archiving (up to 100M tokens)","Ultra-low latency execution and highly optimized tool-calling in agentic loops","Compiling binary source code for legacy mainframe hardware","Running offline edge image generation services"],correctIdx:1},{id:2,question:"Which option describes the primary capability of Gemini Omni?",options:["Offline database indexing on low-power IoT microcontrollers","Synthesizing test mock environments for relational databases","Processing any-to-any multimodal inputs (audio/video/text/sensors) natively in a single model step","Compiling Python scripts directly into microcode"],correctIdx:2},{id:3,question:"What makes Gemini Spark different from standard conversational chat assistants?",options:["It is only active during the live Google Keynote broadcast","It requires specialized local GPU arrays to execute simple prompts","It acts proactively 24/7 in the background, monitoring events and coordinating scheduled tasks","It is restricted to audio-only inputs with no console interface"],correctIdx:2},{id:4,question:"What is Google Antigravity 2.0?",options:["An operating system designed for next-gen aerospace hardware","An agent-first developer platform that empowers autonomous agents to build, test, and deploy code","A spatial computing framework restricted to smartglasses development","A database replication service for heavy enterprise platforms"],correctIdx:1},{id:5,question:"At Google I/O 2026, Android's OS interface direction shifted toward:",options:["A grid-centric manual launcher interface to force tap interactions","A conversational AI-driven experience focusing on voice action streams and background threads","Deprecated support for Node.js backend integrations","Removing sandboxed background services for third-party apps"],correctIdx:1}];function d(){let e,a,o,s,r,l,d,g,u,h,y,v,x,f,b,j=(0,i.c)(52),[k,S]=(0,n.useState)(0),[_,A]=(0,n.useState)(null),[w,N]=(0,n.useState)(0),[I,G]=(0,n.useState)(!1);j[0]!==k||j[1]!==_?(e=()=>{_===c[k].correctIdx&&N(p),k+1<c.length?(S(m),A(null)):G(!0)},j[0]=k,j[1]=_,j[2]=e):e=j[2];let C=e;j[3]===Symbol.for("react.memo_cache_sentinel")?(a=()=>{S(0),A(null),N(0),G(!1)},j[3]=a):a=j[3];let T=a;j[4]!==k?(o=Math.round(k/c.length*100),j[4]=k,j[5]=o):o=j[5];let O=o;if(I){let e,i,n,a,o,s,r,l="Beginner Learner",d="beginner",m="You are starting to understand the concepts. Take another look at the documentation cards to learn more about the 2026 updates.";5===w?(l="Advanced I/O Architect",d="advanced",m="Excellent! You have mastered all major Google I/O 2026 updates. You are ready to design agentic workflows, multimodal pipelines, and spatial compute configurations."):w>=3&&(l="Intermediate Integrator",d="intermediate",m="Great job! You have a solid grasp of Gemini 3.5 Flash capabilities, Spark agents, and core OS changes. Review advanced agentic architectures to level up."),j[6]===Symbol.for("react.memo_cache_sentinel")?(e=(0,t.jsx)("h2",{children:"Evaluation Complete"}),j[6]=e):e=j[6],j[7]!==w?(i=(0,t.jsxs)("div",{className:"result-score",children:[w," / ",c.length]}),j[7]=w,j[8]=i):i=j[8],j[9]===Symbol.for("react.memo_cache_sentinel")?(n={marginBottom:"16px"},j[9]=n):n=j[9];let p=`level-badge ${d}`;return j[10]!==l||j[11]!==p?(a=(0,t.jsx)("div",{style:n,children:(0,t.jsx)("span",{className:p,children:l})}),j[10]=l,j[11]=p,j[12]=a):a=j[12],j[13]!==m?(o=(0,t.jsx)("p",{className:"result-desc",children:m}),j[13]=m,j[14]=o):o=j[14],j[15]===Symbol.for("react.memo_cache_sentinel")?(s=(0,t.jsx)("button",{className:"quiz-btn",onClick:T,children:"Retake Assessment"}),j[15]=s):s=j[15],j[16]!==i||j[17]!==a||j[18]!==o?(r=(0,t.jsx)("div",{className:"quiz-container animated-view",children:(0,t.jsxs)("div",{className:"quiz-result",children:[e,i,a,o,s]})}),j[16]=i,j[17]=a,j[18]=o,j[19]=r):r=j[19],r}let E=c[k],q=k+1;j[20]!==q?(s=(0,t.jsxs)("span",{children:["Question ",q," of ",c.length]}),j[20]=q,j[21]=s):s=j[21],j[22]===Symbol.for("react.memo_cache_sentinel")?(r={fontWeight:600},j[22]=r):r=j[22],j[23]!==O?(l=(0,t.jsxs)("span",{style:r,children:[O,"% Completed"]}),j[23]=O,j[24]=l):l=j[24],j[25]!==s||j[26]!==l?(d=(0,t.jsxs)("div",{className:"quiz-progress",children:[s,l]}),j[25]=s,j[26]=l,j[27]=d):d=j[27];let R=`${O}%`;if(j[28]!==R?(g=(0,t.jsx)("div",{className:"quiz-bar-bg",children:(0,t.jsx)("div",{className:"quiz-bar-fill",style:{width:R}})}),j[28]=R,j[29]=g):g=j[29],j[30]===Symbol.for("react.memo_cache_sentinel")?(u={marginTop:"24px"},j[30]=u):u=j[30],j[31]!==E.question?(h=(0,t.jsx)("p",{className:"quiz-question",children:E.question}),j[31]=E.question,j[32]=h):h=j[32],j[33]!==E.options||j[34]!==_){let e;j[36]!==_?(e=(e,i)=>(0,t.jsx)("button",{className:`quiz-option ${_===i?"selected":""}`,onClick:()=>A(i),children:e},i),j[36]=_,j[37]=e):e=j[37],y=E.options.map(e),j[33]=E.options,j[34]=_,j[35]=y}else y=j[35];j[38]!==y?(v=(0,t.jsx)("div",{className:"quiz-options",children:y}),j[38]=y,j[39]=v):v=j[39],j[40]!==h||j[41]!==v?(x=(0,t.jsxs)("div",{style:u,children:[h,v]}),j[40]=h,j[41]=v,j[42]=x):x=j[42];let z=null===_,D=k+1===c.length?"Finish Quiz":"Next Question";return j[43]!==C||j[44]!==z||j[45]!==D?(f=(0,t.jsx)("div",{className:"quiz-actions",children:(0,t.jsx)("button",{className:"quiz-btn",disabled:z,onClick:C,children:D})}),j[43]=C,j[44]=z,j[45]=D,j[46]=f):f=j[46],j[47]!==x||j[48]!==f||j[49]!==d||j[50]!==g?(b=(0,t.jsxs)("div",{className:"quiz-container animated-view",children:[d,g,x,f]}),j[47]=x,j[48]=f,j[49]=d,j[50]=g,j[51]=b):b=j[51],b}function m(e){return e+1}function p(e){return e+1}e.s(["default",0,function(){let e,a,s,r,c,m,p,g,u,h,y,v,x,f,b,j,k,S,_,A,w,N,I,G,C,T,O,E,q,R,z,D=(0,i.c)(55),[P,L]=(0,n.useState)("concepts");D[0]===Symbol.for("react.memo_cache_sentinel")?(e=(0,t.jsxs)("div",{className:"brand",children:[(0,t.jsx)("div",{className:"brand-dot"}),(0,t.jsx)("span",{children:"Google I/O '26 Hub"})]}),D[0]=e):e=D[0];let K=`nav-item ${"concepts"===P?"active":""}`;D[1]===Symbol.for("react.memo_cache_sentinel")?(a=()=>L("concepts"),s=(0,t.jsx)("span",{style:{color:"var(--google-blue)"},children:"◆"}),D[1]=a,D[2]=s):(a=D[1],s=D[2]),D[3]!==K?(r=(0,t.jsx)("li",{children:(0,t.jsxs)("button",{className:K,onClick:a,children:[s,"Concept Explorer"]})}),D[3]=K,D[4]=r):r=D[4];let M=`nav-item ${"playground"===P?"active":""}`;D[5]===Symbol.for("react.memo_cache_sentinel")?(c=()=>L("playground"),m=(0,t.jsx)("span",{style:{color:"var(--google-red)"},children:"◇"}),D[5]=c,D[6]=m):(c=D[5],m=D[6]),D[7]!==M?(p=(0,t.jsx)("li",{children:(0,t.jsxs)("button",{className:M,onClick:c,children:[m,"Code Generator"]})}),D[7]=M,D[8]=p):p=D[8];let B=`nav-item ${"quiz"===P?"active":""}`;return D[9]===Symbol.for("react.memo_cache_sentinel")?(g=()=>L("quiz"),u=(0,t.jsx)("span",{style:{color:"var(--google-yellow)"},children:"□"}),D[9]=g,D[10]=u):(g=D[9],u=D[10]),D[11]!==B?(h=(0,t.jsx)("li",{children:(0,t.jsxs)("button",{className:B,onClick:g,children:[u,"Developer Quiz"]})}),D[11]=B,D[12]=h):h=D[12],D[13]!==h||D[14]!==r||D[15]!==p?(y=(0,t.jsxs)("div",{children:[e,(0,t.jsx)("nav",{children:(0,t.jsxs)("ul",{className:"nav-links",children:[r,p,h]})})]}),D[13]=h,D[14]=r,D[15]=p,D[16]=y):y=D[16],D[17]===Symbol.for("react.memo_cache_sentinel")?(v=(0,t.jsxs)("div",{className:"system-status",style:{marginBottom:"16px"},children:[(0,t.jsx)("div",{className:"status-indicator"}),(0,t.jsx)("span",{children:"System: Online & Syncing"})]}),D[17]=v):v=D[17],D[18]===Symbol.for("react.memo_cache_sentinel")?(x=(0,t.jsxs)("div",{children:[v,(0,t.jsx)("div",{className:"footer-info",children:(0,t.jsx)("span",{children:"Powered by Gemini 3.5 & Antigravity 2.0"})})]}),D[18]=x):x=D[18],D[19]!==y?(f=(0,t.jsxs)("aside",{className:"sidebar",children:[y,x]}),D[19]=y,D[20]=f):f=D[20],D[21]===Symbol.for("react.memo_cache_sentinel")?(b={marginBottom:"40px",borderBottom:"1px solid var(--border)",paddingBottom:"24px"},j={display:"flex",justifyContent:"space-between",alignItems:"flex-start"},D[21]=b,D[22]=j):(b=D[21],j=D[22]),D[23]!==P?(k="concepts"===P&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("h1",{children:"Developer Concept Explorer"}),(0,t.jsx)("p",{children:"Discover I/O 2026 releases grouped by complexity level, highlighting structural OS and API changes."})]}),D[23]=P,D[24]=k):k=D[24],D[25]!==P?(S="playground"===P&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("h1",{children:"Developer Sandbox & Code Generator"}),(0,t.jsx)("p",{children:"Generate integration blueprints for Gemini 3.5 Flash, Gemini Omni, Spark agents, and Antigravity SDK."})]}),D[25]=P,D[26]=S):S=D[26],D[27]!==P?(_="quiz"===P&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("h1",{children:"Knowledge Assessment Quiz"}),(0,t.jsx)("p",{children:"Test your understanding of the new models, operating systems, and agent structures introduced in I/O '26."})]}),D[27]=P,D[28]=_):_=D[28],D[29]!==k||D[30]!==S||D[31]!==_?(A=(0,t.jsxs)("div",{children:[k,S,_]}),D[29]=k,D[30]=S,D[31]=_,D[32]=A):A=D[32],D[33]===Symbol.for("react.memo_cache_sentinel")?(w={display:"flex",gap:"8px"},N=(0,t.jsx)("span",{className:"product-tag",children:"I/O 2026"}),D[33]=w,D[34]=N):(w=D[33],N=D[34]),D[35]===Symbol.for("react.memo_cache_sentinel")?(I=(0,t.jsxs)("div",{style:w,children:[N,(0,t.jsx)("span",{className:"product-tag",style:{color:"var(--google-purple)",borderColor:"rgba(143, 93, 244, 0.3)"},children:"Gemini 3.5 Flash"})]}),D[35]=I):I=D[35],D[36]!==A?(G=(0,t.jsx)("header",{style:b,children:(0,t.jsxs)("div",{style:j,children:[A,I]})}),D[36]=A,D[37]=G):G=D[37],D[38]===Symbol.for("react.memo_cache_sentinel")?(C={minHeight:"400px"},D[38]=C):C=D[38],D[39]!==P?(T="concepts"===P&&(0,t.jsx)(o,{}),D[39]=P,D[40]=T):T=D[40],D[41]!==P?(O="playground"===P&&(0,t.jsx)(l,{}),D[41]=P,D[42]=O):O=D[42],D[43]!==P?(E="quiz"===P&&(0,t.jsx)(d,{}),D[43]=P,D[44]=E):E=D[44],D[45]!==T||D[46]!==O||D[47]!==E?(q=(0,t.jsxs)("div",{style:C,children:[T,O,E]}),D[45]=T,D[46]=O,D[47]=E,D[48]=q):q=D[48],D[49]!==G||D[50]!==q?(R=(0,t.jsxs)("section",{className:"main-content",children:[G,q]}),D[49]=G,D[50]=q,D[51]=R):R=D[51],D[52]!==f||D[53]!==R?(z=(0,t.jsxs)("main",{className:"dashboard-layout",children:[f,R]}),D[52]=f,D[53]=R,D[54]=z):z=D[54],z}],52683)}]);