# Portfolio Test Plan

Change "Not run" to "Pass" or "Fail" only after testing.
For failures, describe the problem and record the result after fixing it.

| ID | Test | Action | Expected result | Result |
|---|---|---|---|---|
| T1 | Navigation | Click every navigation link and the SM. logo on each page. | Correct page opens; current page is highlighted. | Pass |
| T2 | Phone layout | Check every page at 390 pixels wide. | Text and images fit without horizontal scrolling. | Pass |
| T3 | Laptop layout | Check every page at 1280 pixels wide. | Content is readable and navigation is visible. | Pass |
| T4 | Mobile menu | Below 600 pixels, open and close Menu on each page. | Links appear and disappear; Escape closes the menu. | Pass |
| T5 | Project images | Open each of the six screenshots. | The correct image appears larger and closes with Close or Escape. | Pass |
| T6 | Keyboard access | Use Tab, Shift+Tab, Enter, and Space on buttons. | Focus is visible, controls work, and there is no keyboard trap. | Pass |
| T7 | Popup focus | Open and close an image using the keyboard. | Focus returns to the image button after closing. | Pass |
| T8 | Contact | Check the email link. | It addresses a draft to sm3996@njit.edu when an email app is configured. | Pass |
| T9 | Image sizes | Inspect all project image files. | Every image is below 500 KB. | Pass |
| T10 | Accessibility | Run Lighthouse on all five pages. | Each accessibility score is at least 90. | Pass |
| T11 | Published website | Repeat navigation and interaction checks on GitHub Pages. | Pages, images, styles, and scripts load correctly. | Pass |
| T12 | Browser console | Open each of the five live GitHub Pages pages in Chrome. Open DevTools > Console and reload each page. At phone width, open and close the menu on every page; on Projects, open and close all six images. Check the Console after each action. | No JavaScript errors appear during page loading or interaction. | Pass |

T12 result: Srikar reported that the live-site console checks passed.

Published-site verification: all five pages, the stylesheet, script, and six images returned HTTP 200. Browser checks confirmed navigation to Projects and opening and closing an enlarged image, with focus returning to its button.
