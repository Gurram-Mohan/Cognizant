# 📂 Exercise 2 - Git Ignore

## 🎯 Objective

Learn how to use the `.gitignore` file to prevent specific files and folders from being tracked by Git.

---

## 🛠️ Files Created

```
2. Git-HOL
│── .gitignore
│── welcome.txt
│── sample.log
└── log
    └── error.txt
```

---

## 📝 .gitignore Content

```gitignore
*.log
log/
```

---

## 💻 Git Commands Used

### Initialize Git Repository

```bash
git init
```

### Check Repository Status

```bash
git status
```

### Add Files to Staging Area

```bash
git add .
```

### Verify Staged Files

```bash
git status
```

### Commit Changes

```bash
git commit -m "Added .gitignore"
```

### View Commit History

```bash
git log
```

---

## 📌 Files Tracked by Git

- ✅ `.gitignore`
- ✅ `welcome.txt`

## 🚫 Files Ignored by Git

- ❌ `sample.log`
- ❌ `log/error.txt`

---

## 📤 Output

Successfully configured the `.gitignore` file to:

- Ignore all `.log` files.
- Ignore the entire `log` directory.
- Verify ignored files using `git status`.
- Commit the tracked files to the local Git repository.

---

## 🖼️ Output Screenshot

The output of all Git commands has been captured in **Output.png**.

---

## ✅ Result

Successfully completed **Exercise 2 – Git Ignore** by configuring Git to ignore specified files and folders using the `.gitignore` file.
