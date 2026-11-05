# Portfolio Test Plan

Change "Not run" to "Pass" or "Fail" only after testing.
For failures, describe the problem and record the result after fixing it.

| Test | Action | Expected result | Result |
|---|---|---|---|
| Navigation | Click every navigation link and the SM. logo on each page. | Correct page opens; current page is highlighted. | Pass |
| Phone layout | Check every page at 390 pixels wide. | Text and images fit without horizontal scrolling. | Pass |
| Laptop layout | Check every page at 1280 pixels wide. | Content is readable and navigation is visible. | Pass |
| Mobile menu | Below 600 pixels, open and close Menu on each page. | Links appear and disappear; Escape closes the menu. | Pass |
| Project images | Open each of the six screenshots. | The correct image appears larger and closes with Close or Escape. | Pass |
| Keyboard access | Use Tab, Shift+Tab, Enter, and Space on buttons. | Focus is visible, controls work, and there is no keyboard trap. | Pass |
| Popup focus | Open and close an image using the keyboard. | Focus returns to the image button after closing. | Pass |
| Contact | Check the email link. | It addresses a draft to sm3996@njit.edu when an email app is configured. | Not run |
| Image sizes | Inspect all project image files. | Every image is below 500 KB. | Not run |
| Accessibility | Run Lighthouse on all five pages. | Each accessibility score is at least 90. | Not run |
| Published website | Repeat navigation and interaction checks on GitHub Pages. | Pages, images, styles, and scripts load correctly. | Not run |
