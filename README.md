# Wheel & Quiz (Redux)

**[▶ Live demo](https://sayeed-sce.github.io/web-sprint-challenge-advanced-state-Wheel-Redux/)**: runs entirely in the browser; API responses are served by a built-in demo mode that uses the same logic as the Express server.

A three-page React app with all of its state managed in **Redux**: a spinning wheel, a two-answer quiz that loads questions from an API, and a form for adding new quiz questions.

## Pages

| Route       | What it does                                                                            |
| ----------- | --------------------------------------------------------------------------------------- |
| `/`         | **Wheel**: six cogs; clockwise and counter-clockwise buttons move the active "B" around |
| `/quiz`     | **Quiz**: fetches a question, lets you pick an answer, and submits it for grading       |
| `/quiz-new` | **New question**: form to add a question with a true and a false answer                 |

## How it works

- Global state lives in a Redux store built with `combineReducers` (wheel position, current quiz, selected answer, form fields, messages)
- Async thunks call the API with Axios:
  - `GET  /api/quiz/next`: load the next question
  - `POST /api/quiz/answer`: submit an answer
  - `POST /api/quiz/new`: create a new question
- Components connect to the store with `react-redux`'s `connect`
- Pages are routed with React Router 6

## Tech

React 18 · Redux · React Redux · Redux Thunk · React Router 6 · Axios · Express (mock API) · Jest

## Running locally

Requires Node 16+.

```bash
npm install
npm run dev     # API on http://localhost:9000, app on http://localhost:3000
npm test
```

## Deploying the demo

```bash
npm run build:demo   # static build for GitHub Pages
```

The output is published to the `gh-pages` branch.

---

Built as a sprint challenge for the [BloomTech](https://www.bloomtech.com/) Full Stack Web Development program. The original assignment brief is in [ASSIGNMENT.md](ASSIGNMENT.md).
