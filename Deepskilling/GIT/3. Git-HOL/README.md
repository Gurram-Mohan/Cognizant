# 🌿 Exercise 3 - Git Branching & Merging

## 🎯 Objective

Learn how to create a branch, switch between branches, commit changes, merge branches, and delete a branch using Git.

---

## 🛠️ Files Created

```
3. Git-HOL
│── welcome.txt
└── branch.txt
```

---

## 💻 Git Commands Used

### Initialize Repository

```bash
git init
```

### Add Initial File

```bash
git add .
git commit -m "Initial commit"
```

### Create Branch

```bash
git branch GitNewBranch
```

### View Branches

```bash
git branch
```

### Switch Branch

```bash
git checkout GitNewBranch
```

### Add Changes

```bash
git add .
git commit -m "Added branch file"
```

### Check Status

```bash
git status
```

### Switch to Master

```bash
git checkout master
```

### Compare Branches

```bash
git diff master GitNewBranch
```

### Merge Branch

```bash
git merge GitNewBranch
```

### View Commit History

```bash
git log --oneline --graph --decorate
```

### Delete Branch

```bash
git branch -d GitNewBranch
```

### Final Status

```bash
git status
```

---

## 📤 Output

- Created a new branch named **GitNewBranch**.
- Switched between branches.
- Added and committed changes in the new branch.
- Compared differences between branches.
- Merged the branch into the master branch.
- Viewed the commit history.
- Deleted the merged branch successfully.

---

## 🖼️ Output Screenshot

The execution of all Git commands has been captured in **Output.png**.

---

## ✅ Result

Successfully completed **Exercise 3 – Git Branching & Merging** by creating, switching, comparing, merging, and deleting a Git branch.
