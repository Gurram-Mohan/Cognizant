# ⚔️ Exercise 4 - Git Merge Conflict Resolution

## 🎯 Objective

Learn how to identify, resolve, and commit merge conflicts in Git.

---

## 🛠️ Files Used

```
4. Git-HOL
│── README.md
│── hello.xml
│── .gitignore
│── Output1.png
│── Output2.png

```

---

## 💻 Git Commands Used

```bash
git init
git status
git branch GitWork
git checkout GitWork
git add .
git commit -m "Added hello.xml in GitWork"
git checkout master
git add .
git commit -m "Added hello.xml in master"
git log --oneline --graph --decorate --all
git diff master GitWork
git merge GitWork
git add hello.xml
git commit -m "Resolved merge conflict"
git add .
git commit -m "Added gitignore"
git branch
git branch -d GitWork
git log --oneline --graph --decorate
```

---

## 📌 Outcome

- Created a new branch named **GitWork**.
- Added the same file (`hello.xml`) in both branches with different content.
- Generated a merge conflict.
- Resolved the conflict manually.
- Committed the resolved file.
- Added `.gitignore` to ignore backup files.
- Deleted the merged branch.
- Verified the final commit history.

---

## 🖼️ Output

The complete execution of the Git commands is available in **Output.png**.

---

## ✅ Result

Successfully completed **Exercise 4 – Git Merge Conflict Resolution** by creating a merge conflict, resolving it manually, and updating the repository history.