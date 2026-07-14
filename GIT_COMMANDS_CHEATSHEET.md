# Git Command Cheat Sheet

Quick reference for common Git commands you'll use in your projects.

## Initial Setup

### Configure Git
```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
git config --global init.defaultBranch main
```

### Clone a Repository
```bash
git clone https://github.com/username/repo.git
cd repo
```

## Daily Workflow

### Check Status
```bash
git status                    # See what's changed
git diff                      # See unstaged changes
git diff --staged             # See staged changes
```

### Stage and Commit
```bash
git add .                     # Stage all changes
git add filename.js           # Stage specific file
git commit -m "feat: add feature"  # Commit with message
git commit --amend            # Amend last commit
```

### Push and Pull
```bash
git pull origin develop       # Pull latest changes
git push origin feature/name  # Push your branch
git push -u origin feature/name  # Push and set upstream
```

## Branch Management

### Create and Switch Branches
```bash
git checkout -b feature/new-feature    # Create and switch
git checkout develop                   # Switch to existing branch
git switch -c feature/new-feature      # Modern way to create
git switch develop                     # Modern way to switch
```

### List and Delete Branches
```bash
git branch                    # List local branches
git branch -r                 # List remote branches
git branch -a                 # List all branches
git branch -d feature/name    # Delete local branch (safe)
git branch -D feature/name    # Force delete local branch
git push origin --delete feature/name  # Delete remote branch
```

### Update Branch from Develop
```bash
git checkout feature/name
git pull origin develop       # Pull develop into feature branch
# Or using rebase (cleaner history):
git checkout feature/name
git rebase develop
```

## Working with Remotes

### Remote Management
```bash
git remote -v                 # List remotes
git remote add origin URL     # Add remote
git fetch origin              # Fetch all branches
git fetch --prune             # Remove deleted remote branches
```

## Undoing Changes

### Unstage Files
```bash
git reset HEAD filename.js    # Unstage specific file
git reset HEAD .              # Unstage all
```

### Discard Changes
```bash
git checkout -- filename.js   # Discard changes in file
git restore filename.js       # Modern way to discard
git clean -fd                 # Remove untracked files/directories
```

### Undo Commits
```bash
git reset --soft HEAD~1       # Undo commit, keep changes staged
git reset --mixed HEAD~1      # Undo commit, keep changes unstaged
git reset --hard HEAD~1       # Undo commit, discard changes ⚠️
git revert HEAD               # Create new commit that undoes last commit
```

## Stashing

### Save Work in Progress
```bash
git stash                     # Stash current changes
git stash save "message"      # Stash with description
git stash list                # List all stashes
git stash pop                 # Apply and remove last stash
git stash apply               # Apply but keep stash
git stash drop stash@{0}      # Delete specific stash
git stash clear               # Delete all stashes
```

## Viewing History

### Log and Blame
```bash
git log                       # View commit history
git log --oneline             # Compact log
git log --graph --oneline     # Visual branch graph
git log --author="Name"       # Filter by author
git log filename.js           # History of specific file
git blame filename.js         # See who changed each line
```

## GitHub Workflow

### Fork Workflow
```bash
# Fork on GitHub, then:
git clone https://github.com/your-username/repo.git
cd repo
git remote add upstream https://github.com/original-owner/repo.git
git fetch upstream
git merge upstream/main       # Update from original repo
```

### Pull Request Workflow
```bash
# 1. Create feature branch from develop
git checkout develop
git pull origin develop
git checkout -b feature/amazing-feature

# 2. Make changes and commit
git add .
git commit -m "feat: add amazing feature"

# 3. Push to your fork/origin
git push -u origin feature/amazing-feature

# 4. Create PR on GitHub: feature/amazing-feature → develop

# 5. After merge, cleanup
git checkout develop
git pull origin develop
git branch -d feature/amazing-feature
git push origin --delete feature/amazing-feature
```

## Advanced Commands

### Rebase Interactive
```bash
git rebase -i HEAD~3          # Interactive rebase last 3 commits
# Use to squash, reword, or reorder commits
```

### Cherry-pick
```bash
git cherry-pick commit-hash   # Apply specific commit to current branch
```

### Tags
```bash
git tag v1.0.0                # Create tag
git tag -a v1.0.0 -m "Version 1.0.0"  # Annotated tag
git push origin v1.0.0        # Push tag
git push origin --tags        # Push all tags
```

## Fixing Common Issues

### Merge Conflicts
```bash
# When conflict occurs:
git status                    # See conflicted files
# Edit files to resolve conflicts
git add resolved-file.js
git commit                    # Complete merge
```

### Forgot to Create Branch
```bash
# Made changes on wrong branch:
git stash
git checkout -b correct-branch
git stash pop
```

### Committed to Wrong Branch
```bash
# Move commit to another branch:
git checkout correct-branch
git cherry-pick wrong-branch
git checkout wrong-branch
git reset --hard HEAD~1
```

### Pull Rejected
```bash
# Remote has changes you don't have:
git pull origin develop       # Pull and merge
# Or:
git pull --rebase origin develop  # Pull and rebase
```

## Aliases (Make Life Easier)

Add to `~/.gitconfig`:
```ini
[alias]
  st = status
  co = checkout
  br = branch
  cm = commit -m
  pom = push origin main
  pod = push origin develop
  lg = log --oneline --graph --all
  last = log -1 HEAD
  unstage = reset HEAD --
```

Use like: `git st`, `git co develop`, etc.

## Pro Tips

1. **Always pull before push**: `git pull origin develop` before `git push`
2. **Check status frequently**: `git status` is your friend
3. **Commit often**: Small, atomic commits are better
4. **Branch for everything**: Never work directly on main/develop
5. **Write good commit messages**: Follow [COMMIT_CONVENTIONS.md](COMMIT_CONVENTIONS.md)
6. **Use .gitignore**: Don't commit sensitive or generated files
7. **Review before push**: `git diff` before committing
8. **Keep branches short-lived**: Merge and delete frequently

## Emergency Commands

### Abort Merge
```bash
git merge --abort
```

### Abort Rebase
```bash
git rebase --abort
```

### Recover Deleted Commit
```bash
git reflog                    # Find lost commit
git checkout -b recovery-branch commit-hash
```
