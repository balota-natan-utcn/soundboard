# Soundboard App

A simple single-page web soundboard application hosted on GitHub Pages, featuring dynamic configuration via Firebase.

## Features

* **Interactive Soundboard:** Instant audio playback directly in the browser.
* **Keyboard Shortcuts:** Trigger sounds quickly using key bindings assigned to each button.
* **Admin Panel:** Secure authentication with email and password for administrators.
* **Dynamic Management:** Add, edit, and delete sounds or labels without editing code.
* **Responsive Design:** Mobile and desktop friendly interface built with Tailwind CSS.

## Tech Stack

* **Frontend:** HTML5, Tailwind CSS, Vanilla JavaScript.
* **Backend & Database:** Firebase Authentication and Cloud Firestore.
* **Hosting:** GitHub Pages.

## Project Structure

```text
.
├── index.html              # Main soundboard page
├── admin.html              # Admin authentication and management dashboard
├── favicon.png             # Site favicon
├── audio/                  # Local audio files (.mp3)
└── js/
    └── firebase-config.js  # Firebase configuration and initialization