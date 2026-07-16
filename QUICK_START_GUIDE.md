# New Project Quick Start Guide

Your complete checklist for setting up a new GitHub project. Follow this step-by-step.

## ⚡ Quick Setup (5 minutes)

### 1. Create Repository on GitHub

```bash
# Option A: Create on GitHub website first, then clone
git clone https://github.com/your-username/project-name.git
cd project-name

# Option B: Create locally first
mkdir project-name
cd project-name
git init
git branch -M main
```

### 2. Copy Essential Files

From this resource folder, copy these files to your new project:

#### Required:
- [ ] **`.gitignore`** - Copy from `templates/gitignore/` (choose your stack)
- [ ] **`README.md`** - Copy from `templates/README-template.md`
- [ ] **`LICENSE`** - Copy from `templates/licenses/` (usually MIT.txt)

#### Recommended:
- [ ] **`.github/`** folder - Copy entire folder from this resource
- [ ] **`CONTRIBUTING.md`** - Copy from `templates/CONTRIBUTING-template.md`

```bash
# Example copy commands (adjust paths):
cp ../github-resources/templates/gitignore/nodejs.gitignore .gitignore
cp ../github-resources/templates/README-template.md README.md
cp ../github-resources/templates/licenses/MIT.txt LICENSE
cp -r ../github-resources/.github .github
```

### 3. Customize Files

Edit these files with your project details:

**README.md:**
- Replace "Project Name" with your actual project name
- Update description
- Update tech stack
- Add your GitHub username

**LICENSE:**
- Replace `[year]` with current year
- Replace `[fullname]` with your name

### 4. Set Up Branch Structure

```bash
# Create develop branch
git checkout -b develop

# Make initial commit on develop
git add .
git commit -m "chore: initial project setup"

# Push both branches
git push -u origin develop

# Create main branch
git checkout -b main
git push -u origin main

# Go back to develop for work
git checkout develop
```

### 5. GitHub Repository Settings

On GitHub website:

#### Branch Protection Rules
1. Go to: Settings → Branches → Add rule

**For `main` branch:**
- Branch name pattern: `main`
- ✅ Require pull request before merging
- ✅ Require status checks to pass
- ✅ Do not allow bypassing

**For `develop` branch:**
- Branch name pattern: `develop`
- ✅ Require status checks to pass

#### Set Default Branch
1. Settings → Branches → Default branch
2. Change to `develop`

---

## 📋 Complete Setup Checklist

### Phase 1: Repository Basics
- [ ] Create repository on GitHub
- [ ] Clone or initialize locally
- [ ] Copy `.gitignore` (choose correct stack)
- [ ] Copy and customize `README.md`
- [ ] Copy and customize `LICENSE`
- [ ] Make initial commit
- [ ] Push to GitHub

### Phase 2: GitHub Configuration
- [ ] Copy `.github/` folder (issue templates, PR template, workflows)
- [ ] Set up branch protection for `main`
- [ ] Set up branch protection for `develop`
- [ ] Set default branch to `develop`
- [ ] Add repository description
- [ ] Add topics/tags to repository

### Phase 3: Project Structure
- [ ] Create `develop` branch
- [ ] Create basic folder structure
- [ ] Initialize package manager (`npm init`, `pip install`, etc.)
- [ ] Set up linting/formatting tools
- [ ] Create `.env.example` file

### Phase 4: GitHub Labels
Copy labels from `GITHUB_PROJECT_SETUP.md`:

**Severity Labels:**
- [ ] `severity: critical` (red)
- [ ] `severity: high` (orange)
- [ ] `severity: medium` (yellow)
- [ ] `severity: low` (green)

**Priority Labels:**
- [ ] `priority: must-have`
- [ ] `priority: nice-to-have`
- [ ] `priority: future-feature`

**Type Labels:**
- [ ] `type: feature`
- [ ] `type: bug`
- [ ] `type: enhancement`
- [ ] `type: documentation`
- [ ] `type: task`

**Status Labels:**
- [ ] `status: ready`
- [ ] `status: in-progress`
- [ ] `status: blocked`
- [ ] `status: needs-review`

**Component Labels:**
- [ ] `component: frontend`
- [ ] `component: backend`
- [ ] `component: ui/ux`
- [ ] `component: database`

### Phase 5: GitHub Project Board (Optional)
- [ ] Create new project (beta)
- [ ] Create "Backlog" view (table)
- [ ] Create "Sprint Board" view (board)
- [ ] Create "Roadmap" view (roadmap)
- [ ] Set up automation rules

### Phase 6: Documentation
- [ ] Complete README with actual project info
- [ ] Add `CONTRIBUTING.md` if open source
- [ ] Create `.env.example` with required variables
- [ ] Document setup steps for team
- [ ] Add code of conduct (if public/team project)

### Phase 7: Development Setup
- [ ] Install dependencies
- [ ] Configure linting (ESLint, Prettier, etc.)
- [ ] Set up pre-commit hooks (Husky)
- [ ] Configure commit message linting
- [ ] Set up testing framework
- [ ] Create first test

---

## 🔥 Stack-Specific Quickstarts

### Node.js / Next.js Project

```bash
# 1. Initialize project
npm init -y
npm install next react react-dom

# 2. Copy files
cp ../github-resources/templates/gitignore/nextjs.gitignore .gitignore
cp ../github-resources/templates/README-template.md README.md
cp ../github-resources/templates/licenses/MIT.txt LICENSE
cp -r ../github-resources/.github .github

# 3. Set up linting
npm install --save-dev eslint prettier eslint-config-next
npm install --save-dev husky @commitlint/cli @commitlint/config-conventional

# 4. Initialize Git
git init
git checkout -b develop
git add .
git commit -m "chore: initial project setup"
```

### Python Project

```bash
# 1. Initialize project
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# 2. Copy files
cp ../github-resources/templates/gitignore/python.gitignore .gitignore
cp ../github-resources/templates/README-template.md README.md
cp ../github-resources/templates/licenses/MIT.txt LICENSE
cp -r ../github-resources/.github .github

# 3. Create requirements
touch requirements.txt
echo "pytest" >> requirements.txt

# 4. Initialize Git
git init
git checkout -b develop
git add .
git commit -m "chore: initial project setup"
```

### React (Vite) Project

```bash
# 1. Create Vite project
npm create vite@latest project-name -- --template react-ts
cd project-name

# 2. Copy files
cp ../github-resources/templates/gitignore/react-vite.gitignore .gitignore
cp ../github-resources/templates/README-template.md README.md
cp ../github-resources/templates/licenses/MIT.txt LICENSE
cp -r ../github-resources/.github .github

# 3. Set up linting
npm install
npm install --save-dev eslint prettier

# 4. Initialize Git
git init
git checkout -b develop
git add .
git commit -m "chore: initial project setup"
```

---

## 📚 Reference Documents

After setup, refer to these guides:

- **Daily workflow**: See `BRANCH_STRATEGY.md`
- **Commit messages**: See `COMMIT_CONVENTIONS.md`
- **Git commands**: See `GIT_COMMANDS_CHEATSHEET.md`
- **Project management**: See `Project-Organization-and-Execution-Manual.md`
- **GitHub setup**: See `GITHUB_PROJECT_SETUP.md`

---

## ⏱️ Time Estimates

- **Minimal setup** (gitignore, README, LICENSE): 5 minutes
- **Basic setup** (+ GitHub config): 15 minutes
- **Full setup** (+ labels, project board, CI): 30 minutes
- **Complete setup** (+ documentation, tests): 1 hour

---

## 🎯 First Coding Session

After setup, start your first feature:

```bash
# 1. Make sure you're on develop
git checkout develop
git pull origin develop

# 2. Create feature branch
git checkout -b feature/initial-setup

# 3. Build your feature
# ... code here ...

# 4. Commit following conventions
git add .
git commit -m "feat: add basic project structure"

# 5. Push and create PR
git push -u origin feature/initial-setup
# Then create PR on GitHub: feature/initial-setup → develop
```

---

## 💡 Pro Tips

1. **Do it once, do it right**: Spend the time on initial setup. You'll thank yourself later.

2. **Use this checklist every time**: Make it a habit. Eventually it becomes second nature.

3. **Customize for your needs**: Not every project needs everything. Pick what works.

4. **Keep this updated**: When you discover something missing, add it to this guide.

5. **Automate if possible**: Consider creating a script that copies files automatically.

---

## 🚨 Don't Forget!

Before your first push:
- [ ] Double-check `.gitignore` matches your stack
- [ ] Verify no sensitive data in commits (API keys, passwords)
- [ ] Test that `.env` is ignored
- [ ] Customize README with actual info
- [ ] Set up branch protection before team joins

---

## Sample Automation Script

Save as `setup-new-project.sh` or `setup-new-project.ps1`:

```bash
#!/bin/bash
# setup-new-project.sh

PROJECT_NAME=$1
STACK=$2  # nodejs, python, nextjs, react-vite

if [ -z "$PROJECT_NAME" ] || [ -z "$STACK" ]; then
    echo "Usage: ./setup-new-project.sh <project-name> <stack>"
    echo "Stacks: nodejs, python, nextjs, react-vite"
    exit 1
fi

# Create and enter directory
mkdir "$PROJECT_NAME"
cd "$PROJECT_NAME"

# Copy template files
RESOURCE_PATH="../github-resources"
cp "$RESOURCE_PATH/templates/gitignore/$STACK.gitignore" .gitignore
cp "$RESOURCE_PATH/templates/README-template.md" README.md
cp "$RESOURCE_PATH/templates/licenses/MIT.txt" LICENSE
cp -r "$RESOURCE_PATH/.github" .github

# Initialize Git
git init
git checkout -b develop

echo "✅ Project $PROJECT_NAME set up successfully!"
echo "Next steps:"
echo "1. Customize README.md and LICENSE"
echo "2. git add ."
echo "3. git commit -m 'chore: initial project setup'"
echo "4. Create GitHub repo and push"
```

Usage:
```bash
chmod +x setup-new-project.sh
./setup-new-project.sh my-awesome-app nextjs
```
