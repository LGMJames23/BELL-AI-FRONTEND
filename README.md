![CodeRabbit Pull Request Reviews](https://img.shields.io/coderabbit/prs/github/LGMJames23/BELL-AI-FRONTEND?utm_source=oss&utm_medium=github&utm_campaign=LGMJames23%2FBELL-AI-FRONTEND&labelColor=171717&color=FF570A&link=https%3A%2F%2Fcoderabbit.ai&label=CodeRabbit+Reviews)

## Account interface

Open `index.html` in a browser. Bell asks “Do you have an account?”: **Yes** opens the login form and **No** opens registration. Both forms start hidden. Use **Back to account question** to switch paths; returning clears the fields and feedback.

The forms validate required usernames and passwords and announce feedback to assistive technology. Passwords are masked and are not stored in browser storage or sent to a server. Submitting valid fields clears the password and reports that authentication is unavailable; it does not create an account or log anyone in. The assistant input remains disabled.

Real registration and login require an authentication backend. This repository has no authentication service or provider configured. A backend and its integration requirements must be specified before implementing account creation or credential verification.

## Manual verification

- Confirm the account question appears initially and both forms are hidden.
- Choose **Yes** and confirm only login appears, with focus on its username field.
- Return to the question, choose **No**, and confirm only registration appears, with focus on its username field. Repeat in both directions and confirm fields and feedback are cleared.
- Use Tab and Shift+Tab to navigate visible controls, Enter or Space to activate choice/back buttons, and Enter to submit a form. Confirm focus returns to the selected choice when going back.
- Confirm password fields mask input; login uses `current-password` autocomplete and registration uses `new-password`.
- Submit each form with both fields empty, one field empty, and a whitespace-only username. Confirm feedback identifies the missing fields and focus moves to the first invalid field.
- Submit filled forms and confirm the unavailable-backend message appears, no success is reported, the password is cleared, and the assistant stays disabled.
- Confirm the browser console has no script errors. Run `node --check main.js` to check JavaScript syntax.
