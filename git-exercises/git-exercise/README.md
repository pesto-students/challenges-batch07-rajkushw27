# Git Tasks
1. Set your config editor to VSCode
   ```
   git config --global core.editor "code --wait"
   ```


# Git Exercises

1. Create a simple commit, and then peek under the hood at the objects stored in our `.git` folder to gain insights into how things work.
2. Inspect the object with `git cat-file -t <commit id>` and `git cat-file -p <commit-id>`
3. Use `git ls-files -s` to view the content of your staging area.
4. Use `git reset` to undo the staging of your file.
5. Stash your changes with a unique stash name, then unstash and apply them back.
6. Create a lightweight tag and confirm that its pointing to the right commit.
7. Create an annotated tag, and use `git show` to see more information about it.
8. Merge 2 branches(ex. feature, and master) and look at the git logs.
9.  Make two conflicting changes to `sample.txt` in two different branches.
10. Use various options in git log to see the filtered history of repository.
11.  Try Following command to see how Git is creating SHA Keys and storing values
```shell
$ echo 'Hello, World!' | git hash-object --stdin
```
```shell
$ echo 'blob 14\0Hello, World!' | openssl sha1
```

1.  Try `git revert` to revert a commit.



**Note: You don't need to write the terminal output in `solution.md` file. Just write your insights and learning.**