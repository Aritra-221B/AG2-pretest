---
name: app-deployer
description: Scaffolds a Next.js app, implements custom UI/logic, configures a CNAME file at the root, sets up GitHub Actions deployment to the gh-pages branch, and pushes to remote.
---

# Next.js App Creation & GitHub Pages Deployment Skill

## Interactive Demonstration Protocol

When this skill is activated during a live hands-on demonstration, the executing agent **MUST** run the following pre-flight sequence before modifying any codebase files:

1. **Ask Clarifying Questions**: Immediately prompt the user to provide:
   - Target custom CNAME domain URL (e.g. `your-app.parot.dev`)
   - Target GitHub repository URL (e.g. `https://github.com/username/repo.git`)
   - Optional tech stack preferences or design assets.
2. **Draft a World-Class Implementation Plan**:
   - Create or update the `implementation_plan.md` artifact in the brain folder.
   - Outline the application architecture, Stripe/Linear-inspired visual system layout, and subagent orchestration breakdown.
   - Set `request_feedback: true` in the artifact metadata to present a "Proceed" button in the UI.
3. **Wait for Explicit Approval**: Stop execution and wait for the user to click the "Proceed" button or type "proceed". Do NOT run command builds or write files until approved.
4. **Spawn Parallel Subagents Concurrently**: Once approved, concurrently launch the specialized subagent workspace nodes to run research, styling, and coding tasks in parallel.

---

## Step-by-Step Instructions

### Step 1: Scaffold Next.js Application
Since the root workspace already contains `.git` and `.agents` folders, running `create-next-app` directly in the root folder will fail. Use the following procedure:
1. Create a temporary folder named `_temp_scaffold`.
2. Run the following command to initialize Next.js in that folder:
   ```bash
   npx create-next-app@latest _temp_scaffold --typescript --eslint --app --src-dir --import-alias "@/*" --use-npm --disable-git --empty --yes
   ```
3. Move all contents (including hidden files like `.eslintrc.json`, `.gitignore`, etc.) from `_temp_scaffold` to the workspace root directory.
4. Delete the empty `_temp_scaffold` directory.
5. In the root, run `npm install` to ensure all packages are correctly linked.

### Step 2: Configure Next.js for Static Export
GitHub Pages serves static sites. You must configure Next.js to build and output static HTML files:
1. Locate `next.config.ts` or `next.config.mjs` in the root.
2. Edit it to add `output: 'export'` and `images: { unoptimized: true }`.
   Example `next.config.ts`:
   ```typescript
   import type { NextConfig } from "next";

   const nextConfig: NextConfig = {
     output: "export",
     images: {
       unoptimized: true,
     },
   };

   export default nextConfig;
   ```

### Step 3: Configure Custom CNAME
To point GitHub Pages to your custom CNAME:
1. Create a file at `CNAME` directly in the root folder of your project.
2. **CRITICAL WARNING**: Do NOT duplicate this CNAME file inside the `public/` folder. A duplicate CNAME will conflict and cause GitHub Pages build errors.
3. Write the single line with your domain name:
   ```text
   <your-domain.com>
   ```
   (No trailing slash, protocol, or spaces).

### Step 4: Configure GitHub Actions CI/CD Workflow
Create the GitHub Actions workflow file to build and deploy the application automatically. To avoid Page deployment auth failures, deploy directly to a `gh-pages` branch using a token:
1. Create the directory `.github/workflows`.
2. Create the file `.github/workflows/deploy.yml`.
3. Add the following official GitHub Pages deployment workflow configuration:
   ```yaml
   name: Deploy Next.js to Pages

   on:
     push:
       branches: ["main"]
     workflow_dispatch:

   permissions:
     contents: write

   concurrency:
     group: "pages"
     cancel-in-progress: false

   jobs:
     build-and-deploy:
       runs-on: ubuntu-latest
       steps:
         - name: Checkout
           uses: actions/checkout@v4

         - name: Setup Node
           uses: actions/setup-node@v4
           with:
             node-version: "20"
             cache: npm

         - name: Restore cache
           uses: actions/cache@v4
           with:
             path: |
               .next/cache
             key: ${{ runner.os }}-nextjs-${{ hashFiles('**/package-lock.json', '**/yarn.lock') }}-${{ hashFiles('**.[jt]s', '**.[jt]sx') }}
             restore-keys: |
               ${{ runner.os }}-nextjs-${{ hashFiles('**/package-lock.json', '**/yarn.lock') }}-

         - name: Install dependencies
           run: npm ci || npm install

         - name: Build with Next.js
           run: |
             npm run build
             cp CNAME out/CNAME

         - name: Deploy to GitHub Pages Branch
           uses: peaceiris/actions-gh-pages@v4
           with:
             github_token: ${{ secrets.GITHUB_TOKEN }}
             publish_dir: ./out
   ```

### Step 5: Implement Application Logic & Design
1. Build the application features requested in the user's prompt under the `src/` directory.
2. Focus on premium design and quality standards (see section below).

### Step 6: Verify Build Locally
Run the following build command locally to verify that everything builds and exports statically without compile-time errors:
```bash
npm run build
```

### Step 7: Commit and Push to Remote
1. Stage files: `git add .`
2. Commit: `git commit -m "feat: compile and implement application based on user request"`
3. Push: `git push -u origin main`

---

## 💎 Premium Quality Standards & Multi-Agent Collaboration

To deliver premium-grade web applications that exceed the quality of standard AI-generated code, implement the following guidelines:

### 1. Premium Visual Aesthetics
- **Theme Selection**: If the user explicitly requests a specific visual style, design system, or theme, implement it precisely according to their instructions. If the user does not specify a style, default to a premium, hand-crafted Stripe/Linear-inspired visual layout.
- **Design Guidelines**: Use clean grid lines, subtle gradients, and glassmorphic layers. Strictly avoid typical AI-generated layout clichés (such as floating random background particles, low-contrast text on dark backgrounds, or glowing boxes without clear design purposes).
- **Typography & Font Scaling**: Use modern typography (e.g., Outfit, Inter) via `next/font/google` and size elements proportionally for excellent readability.

### 2. Dual-Theme Support (Light & Dark Modes)
- **Implementation**: The application must natively support both light and dark modes (switching classes `.light` and `.dark` dynamically on the container or body).
- **HSL Tokens**: Set up color palettes using HSL variables to adjust contrast ratios and keep text highly accessible and clear under both themes.

### 3. Multi-Agent Orchestration Protocol (Maximizing Speed & Quality)
To optimize execution speed and deliver high-fidelity applications faster, the developer agent must delegate tasks to specialized subagents in a highly parallelized, asynchronous manner:

- **Maximize Parallelism for Development Velocity**:
  - Do NOT execute tasks sequentially. Spawn multiple subagents *concurrently* (e.g. at the start of the task) to perform research, visual styling, and component building in parallel, significantly compressing wall-clock execution time.
- **No Limit on Subagent Allocations**:
  - There is no limit on the number of subagents that can be spawned to solve a problem. Spawn as many specialized, parallel subagents as required to isolate concerns and execute tasks faster (e.g. separate subagents for backend API endpoints, state management hooks, database wireups, styling modules, and unit test validations).
- **Strict Task Partitioning (Avoiding Conflicts)**:
  - Partition the workspace tasks cleanly so subagents work on isolated files, avoiding write locks or edit conflicts:
    - **Content Researcher (`research`)**: Runs in the background to scrape, query web APIs, and retrieve precise, up-to-date specs.
    - **UI Designer (`self`)**: Focuses exclusively on styling files (`src/app/globals.css`, theme variables) in parallel.
    - **UX Specialist (`self`)**: Focuses on building new interactive React components in `src/components/`.
    - **QA Analyst (`self`)**: Runs compiler check loops (`npm run build`, `tsc --noEmit`) in a parallel terminal, feeding errors back to the UI/UX subagents.
- **Asynchronous Synchronization**:
  - Use `inherit` workspace mode for spawned subagents so they instantly share the project filesystem.
  - Rely on the reactive wake-up messaging system instead of polling or waiting in blocking loops, keeping the main coordinator agent free to integrate assets as subagents finish their modules.
