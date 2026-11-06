# Srikar Mattegunta's Portfolio

[View the live website](https://srim90.github.io/portfolio/)

## About the project

A personal portfolio introducing Srikar Mattegunta, an NJIT student studying Mechanical Engineering Technology. The website presents his background, interests, skills, and three programming projects: Interior Design Analysis, Weather Data Logger, and Currency Exchange Rate Tracker.

The five pages are Home, About Me, Projects, Skills, and Contact. The site uses plain HTML, one shared CSS stylesheet, and JavaScript, with no frameworks or build step. It is hosted on GitHub Pages.

## Features

- Responsive layouts for phones and laptops, with a collapsible mobile navigation menu.
- Three project cards with six screenshots that visitors can enlarge and close.
- Keyboard-accessible controls, visible focus styles, and descriptive image alt text.
- An email contact link that opens a draft in a configured email application; there is no backend or message-sending form.
- A dark charcoal theme with off-white text, cool-blue accents, and an engineering-inspired homepage illustration.
- A selected-projects homepage section, larger screenshot galleries, shared footers, and skip-to-content links.

## View locally

You need Git to clone the repository and Python 3 to run the local web server.

1. Clone the repository and enter its folder:

   ```sh
   git clone https://github.com/SriM90/portfolio.git
   cd portfolio
   ```

2. From that folder, start a local server:

   ```sh
   python3 -m http.server 8000 --bind 127.0.0.1
   ```

3. Open [the local website](http://127.0.0.1:8000/) in your browser. Keep the terminal running while viewing the site. Press Control+C in the terminal to stop the server.

If you already have the repository open in VS Code, open a terminal in its folder and start at step 2. No package installation or build command is needed.

## Testing and project guidance

- [TESTING.md](TESTING.md) contains 19 test cases, steps, expected results, and recorded outcomes. Fresh Lighthouse scores for the final design are still pending.
- [AGENTS.md](AGENTS.md) describes the site's design, coding rules, and Git workflow.
- [DEMO.md](DEMO.md) provides a three-minute presentation plan and explanations of both JavaScript features.
- [SUBMISSION-CHECKLIST.md](SUBMISSION-CHECKLIST.md) separates completed requirements from remaining review, audit, and submission tasks.

Testing covers navigation, phone and laptop layouts, the mobile menu, image enlargement, keyboard access, contact information, image sizes, Lighthouse accessibility, deployment, and browser-console errors. Final checks should use the live GitHub Pages site as well as the local preview.

## Acknowledgments

This website was developed with assistance from OpenAI Codex for HTML, CSS, JavaScript, troubleshooting, documentation, and Git workflows. Srikar supplied the personal information and project screenshots and performed manual browser tests during development.
