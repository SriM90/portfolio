# Three-minute portfolio demo

Practice this with the live GitHub Pages site. Use your own words, and be ready to explain either JavaScript feature because the instructor may choose.

## Demo sequence

- 0:00–0:30 — Introduce yourself and the portfolio. Show the homepage on a laptop. Explain that five HTML pages share styles.css and script.js, with no framework or backend.
- 0:30–1:00 — Open Projects and enlarge a screenshot. Show the CAD and programming section on Skills. Briefly mention About Me and the email Contact page.
- 1:00–1:30 — Show the site on a real phone, open and close Menu, then demonstrate Tab and Enter on the laptop. Use Escape to close an image. Show that keyboard focus returns to the image button.
- 1:30–2:40 — Open script.js and explain the menu or image viewer using the notes below. Point to the actual statements while speaking.
- 2:40–3:00 — Show TESTING.md and final Lighthouse results once recorded. Mention one problem you found and fixed, such as the Skills heading spacing.

## Explain the mobile menu

1. querySelector finds the Menu button and the navigation links in the HTML.
2. The if check ensures those elements exist before adding behavior.
3. menu-ready lets CSS hide the links on small screens only when JavaScript is available. Without JavaScript, the navigation links stay visible.
4. setMenu(open) adds or removes the is-open class. The CSS uses that class to display the links.
5. aria-expanded is updated to match the visible state so assistive technology receives the correct information.
6. The click listener reads the current state and passes its opposite to setMenu. Native buttons also respond to Enter and Space.
7. Escape closes the menu and moves focus back to its button. The media-query listener resets the menu when crossing the 600px breakpoint.

## Explain the image viewer

1. The script finds the dialog. The if check prevents image-viewer code running on pages without it.
2. Each project image is wrapped in a real button. The button's accessible name describes which image it enlarges.
3. Clicking saves the triggering button in lastImageButton, copies the image source and alt text into the dialog image, and calls showModal().
4. The native dialog supports Escape and keeps keyboard focus inside while open. The Close button submits a form with method="dialog", closing it without sending a message.
5. The close event returns focus to lastImageButton so keyboard users can continue from where they started.

## Questions to practice

- What changes when setMenu(true) runs?
- Why update aria-expanded as well as the CSS class?
- Why use a button instead of making only the image clickable?
- What is an event listener?
- Why save lastImageButton?
- How do relative links work under the /portfolio/ GitHub Pages address?
- Why does changing h2 to h3 sometimes require a CSS change?

## Before class

Open the site on a physical phone and a laptop. Check the Menu and email link with your device settings. Practice the full presentation with a three-minute timer. Review AGENTS.md and the actual source files yourself; this guide does not replace understanding your code.
