---
name: app-deployer
description: Scaffolds a Next.js app, implements custom UI/logic, configures a CNAME file at the root, sets up GitHub Actions deployment to the gh-pages branch, and pushes to remote.
---

# Next.js App Creation & GitHub Pages Deployment Skill

Use this skill when you need to quickly scaffold a premium Next.js application, customize it based on a prompt, configure custom domain settings (CNAME) correctly, set up automatic GitHub Actions CI/CD deployment to GitHub Pages via a target branch (bypassing Pages API authentication issues), and push the code to the target repository.

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
1. Create a file at `CNAME` directly in the root folder of your project (DO NOT place it in `public/` to avoid Pages deploy issues).
2. Write the single line with your domain name:
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
2. Focus on premium design:
   - Use custom HSL palettes or premium dark/light mode palettes (refer to Stripe/Linear design style).
   - Use Google Fonts (e.g. Outfit, Inter, Outfit) via `next/font/google`.
   - Add micro-animations and smooth transition/hover effects in `src/app/globals.css`.
   - Make it responsive (mobile-first grid/flexbox layouts).
   - If images are needed, use `generate_image` and save to `public/images/`.

### Step 6: Verify Build Locally
Run the following build command locally to verify that everything builds and exports statically without compile-time errors:
```bash
npm run build
```

### Step 7: Commit and Push to Remote
1. Stage files: `git add .`
2. Commit: `git commit -m "feat: compile and implement application based on user request"`
3. Push: `git push -u origin main`
