# Portfolio Test Plan

Live site: https://srim90.github.io/portfolio/
Tested on November 5, 2026 after the Skills spacing update (website commit ebd7515).
Pages: Home (index.html), About Me (about.html), Projects (projects.html), Skills (skills.html), and Contact (contact.html).

## Current live-site results

These results apply to the final dark design. Browser interaction checks used the in-app browser on the public GitHub Pages site, at 390px and 1280px widths. Phone tests are responsive browser tests, not physical-device certification. Lighthouse results must come from Lighthouse, not these checks.

| ID | Testing | Steps | Expected result | Actual result |
|---|---|---|---|---|
| T1 | Every header navigation link | From each of the five pages, activate Home, About Me, Projects, Skills, Contact, and SM. using Enter. | All 30 links load the correct page. | Pass — all 30 navigations loaded their destination headings. |
| T2 | Every page on a phone-sized screen | Set width to 390px; open all five pages and compare page width with viewport width. | Content fits with no sideways scrolling. | Pass — all five page widths were 390px. |
| T3 | Every page on a laptop | Set width to 1280px; open all five pages. | Layout fits, desktop navigation is visible, and text is readable. | Pass — all five page widths were 1280px. |
| T4 | Mobile menu on every page | At 390px, focus Menu and press Enter, then Escape. | Links appear; Escape closes them and returns focus to Menu. | Pass on all five pages. |
| T5 | All project image previews | On Projects, activate each of six image buttons using Enter. | The corresponding image loads inside the dialog. | Pass — six correct images loaded. |
| T6 | Keyboard access on every page | Start at each page; Tab through all visible links/buttons and inspect focus. Activate header links using Enter. | Controls are reachable and show focus; links work. | Pass — 15, 9, 15, 12, and 11 controls traversed on Home, About, Projects, Skills, and Contact respectively, all with visible outlines. |
| T7 | Dialog close and focus return | For all six images, close the dialog using Escape or Enter on Close. | Dialog closes and focus returns to the original image button. | Pass — all six returned focus. |
| T8 | Contact email | Inspect the live email link and its target. | Target is mailto:sm3996@njit.edu. | Pass — target verified; launching an email application was previously checked by Srikar, not repeated in this run. |
| T9 | Image sizes and loading | Request all six image files from GitHub Pages and inspect byte sizes. | Every image loads and stays below 500 KB. | Pass — sizes range from 58,585 to 443,593 bytes. |
| T10 | Lighthouse on every final page | Run Lighthouse Accessibility in Chrome on all five live URLs. Record scores under T14–T18. | Every score is at least 90. | Not run — final-design scores still required; see audit limitation below. |
| T11 | Deployment and HTML | Load all five public pages; inspect headings, image alt text, and stylesheet links. | One h1 per page, alt text present, no inline CSS, final stylesheet loads. | Pass — all pages use styles.css?v=3 and passed these checks. |
| T12 | Browser console | Inspect errors during page navigation, mobile menu use, and all image interactions. | No JavaScript errors are recorded. | Pass — no errors in the live-site browser session. |
| T13 | Skills spacing | Inspect the technical cards and people section after adding h3 titles. | Headings are separated from descriptions; project list fits. | Fail initially — h3 did not match h2-only spacing rules. Pass after extending selectors, adding margins, and arranging CAD names in two columns; checked on the published page. |
| T14 | Home Lighthouse | Audit https://srim90.github.io/portfolio/index.html in Chrome, Accessibility category. | Score ≥90. | Not run on final design. |
| T15 | About Lighthouse | Audit https://srim90.github.io/portfolio/about.html in Chrome, Accessibility category. | Score ≥90. | Not run on final design. |
| T16 | Projects Lighthouse | Audit https://srim90.github.io/portfolio/projects.html in Chrome, Accessibility category. | Score ≥90. | Not run on final design. |
| T17 | Skills Lighthouse | Audit https://srim90.github.io/portfolio/skills.html in Chrome, Accessibility category. | Score ≥90. | Not run on final design. |
| T18 | Contact Lighthouse | Audit https://srim90.github.io/portfolio/contact.html in Chrome, Accessibility category. | Score ≥90. | Not run on final design. |
| T19 | Skip link | On every page, press Tab then Enter on Skip to content. Press Tab again. | Focus moves to main, then the next content control. | Pass on all five pages. |

## Audit limitation

Lighthouse CLI was attempted with installed Google Chrome and a separate Chrome Headless Shell. Both failed to start a debugging session, before producing a page audit. Chrome DevTools was also opened, but an audit could not be started reliably through the computer controls. This is a test-environment limitation, not a measured accessibility failure. Do not replace “Not run” with “Pass” until the final live page has actually been audited.

## Previous results and fixes

Srikar reported accessibility scores of at least 90 on all five pages before the dark redesign, along with passing phone, laptop, keyboard, contact, image, and console checks. Those earlier results are retained here as history, not used as current Lighthouse results.

Earlier issues included image paths, oversized images, and the mobile menu. They were corrected and rechecked during development. After the redesign, cached pages/styles could show the previous appearance; refreshing the page and versioning the stylesheet addressed that. The latest spacing failure and retest are recorded in T13.

There is no contact form, so valid/invalid form-input testing is not applicable. The contact feature is an email link.
