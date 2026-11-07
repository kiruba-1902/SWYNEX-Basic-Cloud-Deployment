# SWYNEX Basic Cloud Deployment — CloudTask

A responsive task manager built with HTML, CSS and vanilla JavaScript for SWYNEX Internship Task 2.

## Features
- Add, complete and delete tasks
- Task counters for total, completed and remaining tasks
- Browser local storage persistence
- Responsive layout for desktop and mobile

## Technology
- HTML5
- CSS3
- Vanilla JavaScript
- Browser Local Storage
- Netlify (deployment target)

## Run locally
1. Download or clone this repository.
2. Open `index.html` in a modern web browser.
3. Add tasks and test the complete, delete and clear-completed actions.

## Deploy on Netlify
1. Push this project to a public GitHub repository named `SWYNEX-Basic-Cloud-Deployment`.
2. Sign in to Netlify and choose **Add new project** → **Import an existing project**.
3. Connect GitHub and select this repository.
4. For a plain static site, leave the build command blank and set the publish directory to `.` (repository root).
5. Deploy the site and copy the public URL.
6. Test the public URL in a private/incognito browser window.

## Deployment evidence to capture
- GitHub repository showing the project files
- Netlify deployment overview showing successful deployment
- Live application opened in a private/incognito browser window
- Application demonstrating add and complete task features

## Architecture and scope
Browser → Netlify-hosted static files (HTML/CSS/JavaScript) → Browser Local Storage.

This project demonstrates static website hosting. It does **not** connect to an AWS backend, API Gateway, Lambda, or DynamoDB. Task data is stored locally in the visitor's browser.

## Submission
- GitHub repository URL: add after publishing the repository.
- Live deployment URL: add after successful Netlify deployment.
- LinkedIn post URL: add after publishing the explanation post.
