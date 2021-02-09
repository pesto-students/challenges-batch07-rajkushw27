# Instructions

Please read through the instructions carefully.

## Requirements

- Please ensure that you have these or later version of `node` and `npm`.
  - `node` >= `12.11.0`
  - `npm` >= `6.11.3`
- If you are using Unix-based system
  - use latest version of `bash` or `zsh` terminals.
- If you are windows
  - use [`Git bash`](https://gitforwindows.org/).
  - **The VSCode internal terminal may not work properly. So use Git Bash where ever possible.**
- It is recommended that you use `nvm` to manage node versions.
- We recommend that you use [VSCode](https://code.visualstudio.com/) with these extensions installed/enabled.
  - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

## Steps

1. Clone **your** version of the repo on your local system
2. `cd` into the folder where the repo was cloned and run `npm install` OR `yarn`.
3. Then, `cd` into `js-exercises` and run `npm install` OR `yarn` for this sub-folder.
4. For each new day, follow the following steps --
   1. Create a new branch.
      - For example, if the topic is **Expressing Programs**, the branch can be `solutions-expressing-programs`
   2. Use the commands mentioned below download the questions
   3. **Read the README file for instructions.**
   4. Solve the question
   5. Commit the files
   6. Push the branch to **your** repo
   7. Create a pull request on your repo from the above branch to master.
      - **DO NOT MERGE THE PR**

You can also watch the following video for step by step setup instructions and workflow to submit your solutions
[Setup instructions](https://www.youtube.com/watch?&v=GHNsMf9JiQA)

## Adding `.env` file

If you are getting the warning of _Too Many Requests_ from GitHub, then
you can add an `.env` file in the root directory with your GITHUB api key.
You can refer to this [link](https://help.github.com/en/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line) to generate your own token.

Here's an example of an `.env` file:

```
GITHUB_API_KEY=here_goes_your_api_key
```

_(Make sure to not commit your `.env`);_

**You do NOT need to check any checkbox in "Select Scopes" section.** The token is just used to extend the rate limit for downloading files from Github.

## Docs

**Please ensure you are in the top-level of the package and not in any subfolders (like `js-exercises`).**

### Fetching a question
You can fetch question using `npm` or `yarn` package manager.

```shell
$ npm run download <question-name>
```
Example: Fetch `cache-function` question

```shell
$ npm run download cache-function
```

```shell
$ yarn run download <question-name>
```

Example: Fetch `flip-args` question

```shell
$ yarn run download flip-args
```

Alternatively, You can also fetch question with `npx` using following command

```shell
npx pesto download -e <question-name>
```
## Restrictions

- Don't modify `.babelrc`, `.eslintrc`, `jest.config.json`.
  - If you need to disable any eslint rule, use inline comments. Refer to this [link](https://eslint.org/docs/2.13.1/user-guide/configuring#disabling-rules-with-inline-comments) for more info.
- Don't download any extra dependency for solving any question. You can only use internal node modules.
- A solution will not be considered complete until an implementation and a test file are both provided.
  - For example — if the question is to code `add` function, then `add.js` should contain the implementation and `add.test.js` should contain the test cases.
  - For some questions, test cases are provided. **For questions where test cases are missing, you need to add them.**
  - Write tests for all the questions using [Jest](https://jestjs.io/)
- For daily exercises the pull request should be created before 5 PM (IST) the next day.
- For long exercises the pull request should be created before 5 PM (IST) on Monday.
- Your homework will not be counted as complete if the pull request is not created within the above time frame.

## Note
- **Do not merge your code in master branch**
- Pull request should contain only solutions to problems given for a day. It should not have any file for other days solution.
- For Every Pull Request, It is mandatory for you to add your cohort members and instructor as reviewer. Cohort member should only be added as reviewer post submission deadline.
- Do not add cohort members as reviewers in Assessment pull requests.
- If you have changes related to `babel` etc. please create a separate PR for that and merge it
