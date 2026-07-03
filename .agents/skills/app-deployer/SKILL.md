---
name: app-deployer
description: Scaffolds a Next.js app, implements custom UI/logic, configures CNAME for aritra-test.parot.dev, sets up GitHub Actions deployment to GitHub Pages, and pushes to remote.
---

# Next.js App Creation & GitHub Pages Deployment Skill

Use this skill when you need to quickly scaffold a premium Next.js application, customize it based on a prompt, configure custom domain settings (CNAME), set up automatic GitHub Actions CI/CD deployment to GitHub Pages, and push the code to the target repository.

## Target Configuration Details
- **Repository URL**: `https://github.com/Aritra-221B/AG2-pretest.git`
- **Deployment Platform**: GitHub Pages
- **CNAME Custom Domain**: `aritra-test.parot.dev`
- **Default Branch**: `main`

---

## Step-by-Step Instructions

### Step 1: Scaffold Next.js Application
Since the root workspace already contains `.git` and `.agents` folders, `create-next-app` will fail if run directly in the root. Follow this procedure:
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
   Example `next.config.mjs`:
   ```javascript
   /** @type {import('next').NextConfig} */
   const nextConfig = {
     output: 'export',
     images: {
       unoptimized: true,
     },
   };
   export default nextConfig;
   ```

### Step 3: Configure Custom CNAME
To point GitHub Pages to your custom CNAME:
1. Create a file at `public/CNAME`.
2. Write the single line:
   ```text
   aritra-test.parot.dev
   ```
   (No trailing slash, protocol, or spaces).

### Step 4: Configure GitHub Actions CI/CD Workflow
Create the GitHub Actions workflow file to build and deploy the application automatically:
1. Create the directory `.github/workflows`.
2. Create the file `.github/workflows/deploy.yml`.
3. Add the following official GitHub Pages deployment workflow:
   ```yaml
   name: Deploy Next.js to Pages

   on:
     push:
       branches: ["main"]
     workflow_dispatch:

   permissions:
     contents: read
     pages: write
     id-token: write

   concurrency:
     group: "pages"
     cancel-in-progress: false

   jobs:
     build:
       runs-on: ubuntu-latest
       steps:
         - name: Checkout
           uses: actions/checkout@v4
         - name: Setup Node
           uses: actions/setup-node@v4
           with:
             node-version: "20"
             cache: npm
         - name: Setup Pages
           uses: actions/configure-pages@v5
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
           run: npm run build
         - name: Upload artifact
           uses: actions/upload-pages-artifact@v3
           with:
             path: ./out

     deploy:
       environment:
         name: github-pages
         url: ${{ steps.deployment.outputs.page_url }}
       runs-on: ubuntu-latest
       needs: build
       steps:
         - name: Deploy to GitHub Pages
           id: deployment
           uses: actions/deploy-pages@v4
   ```

### Step 5: Implement Application Logic & Design
1. Build the application features requested in the user's prompt under the `src/` directory.
2. Focus on premium design:
   - Use custom HSL palettes or premium dark/light mode palettes.
   - Use Google Fonts (e.g. Inter, Outfit, Syne) via `next/font/google`.
   - Add micro-animations and smooth transition/hover effects in `src/app/globals.css` or custom CSS modules.
   - Make it responsive (mobile-first grid/flexbox layouts).
   - If images are needed, use `generate_image` and save to `public/images/`. No stock placeholders or broken URLs.

### Step 6: Verify Build Locally
Run the following build command locally to verify that everything builds and exports statically without compile-time errors:
```bash
npm run build
```

### Step 7: Commit and Push to Remote
1. Initialize the git repo if not done: `git init` (already done).
2. Ensure the remote origin is set: `git remote add origin https://github.com/Aritra-221B/AG2-pretest.git` (or update it if already set).
3. Stage files: `git add .` (Make sure to exclude large cache directories like `.next` and `node_modules` via `.gitignore`).
4. Commit: `git commit -m "feat: compile and implement application based on user request"`
5. Set default branch to main: `git branch -M main`
6. Push: `git push -u origin main --force`
