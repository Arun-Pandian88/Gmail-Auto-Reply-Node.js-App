# Gmail Auto Reply Node.js App

Automate email replies in your Gmail mailbox while you're away on vacation using this Node.js application. The app checks for new emails, sends replies to first-time email threads, adds a label, and repeats the process at random intervals.

## Features

- OAuth2 authentication with Gmail API for secure access to your mailbox.
- Identifies and replies to emails with no prior replies to avoid double replies.
- Adds a custom label to replied emails and creates the label if not already present.
- Scheduling mechanism for repeated execution at random intervals (45 to 120 seconds).

## Getting Started

1. Set up a Google Cloud Project and enable the Gmail API.
2. Obtain OAuth2 credentials and save them in `credentials.json`.
3. Run `npm install` to install dependencies.
4. Replace placeholder comments in the code with your specific configurations.
5. Run the application using `node app.js`.

## Technologies Used

- Node.js
- Google APIs (Gmail API, OAuth2)
- Modern JavaScript standards

## Usage

```bash
$ node app.js
```

## Areas for Improvement

- Securely handle sensitive information such as credentials.
- Implement a more sophisticated thread identification mechanism.
- Enhance error handling for better user feedback.

Feel free to contribute, report issues, or suggest improvements!

---

This description provides an overview of the project, its features, setup instructions, and areas for improvement. Customize it further based on your specific project details.
