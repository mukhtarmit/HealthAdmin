# HealthAdmin — Hospital Management System (Frontend Capstone)

A modern, fully responsive hospital administration dashboard built with plain **HTML5, CSS3 and vanilla JavaScript** — no frameworks, no build step. This project was created as a software engineering capstone to demonstrate UI/UX design, responsive layout, and clean front-end code organization.

![HealthAdmin](images/logo.png)

## Project Overview

HealthAdmin gives a hospital administrator one clean place to see the state of the hospital, manage patient records, browse the doctor roster, and book appointments — with a splash screen and login flow in front of it. Every page is hand-built with semantic HTML, a shared design system in CSS, and only as much JavaScript as each interaction needs.

## Features

- **Splash screen** with a branded loader that auto-continues to login (or skips ahead on tap)
- **Login page** with client-side validation (empty-field checks, inline errors, a "Forgot password" prompt)
- **Dashboard** with six live-style stat cards (patients, doctors, today's appointments, revenue, available beds, notifications), a recent-patients panel, and a notifications feed
- **Patients page** with an instant client-side search/filter across name, ID and phone, plus view/edit/delete row actions
- **Doctors page** presenting the roster as responsive profile cards with specialty, ward and availability
- **Appointments page** with a booking form (patient, doctor, department, date, time, reason) and a success confirmation banner
- **Settings page** with tabbed Profile / Change Password / Theme / Notifications panels, including a working light/dark mode toggle
- **Fully responsive** from desktop down to mobile, with a collapsible sidebar and overlay on small screens
- **Accessible by default**: semantic landmarks, visible focus states, `prefers-reduced-motion` support

## Technologies Used

- HTML5 (semantic markup)
- CSS3 (custom properties, Flexbox, CSS Grid, transitions — no framework)
- Vanilla JavaScript (ES5-friendly, no build tooling required)
- [Google Fonts](https://fonts.google.com/) — Plus Jakarta Sans (display) & Inter (body)

## Folder Structure

```
HealthAdmin/
├── index.html            # Splash screen
├── login.html             # Login page
├── dashboard.html          # Admin dashboard
├── patients.html           # Patient records + search
├── doctors.html             # Doctor directory
├── appointments.html         # Appointment booking form
├── settings.html              # Profile / password / theme / notifications
├── css/
│   ├── style.css           # Shared design tokens, layout, components
│   ├── login.css            # Splash + login page styles
│   ├── dashboard.css         # Dashboard-specific styles
│   ├── patients.css           # Patients table + search styles
│   ├── doctors.css             # Doctor card styles
│   ├── appointments.css         # Booking form styles
│   └── settings.css              # Settings tabs + toggle styles
├── js/
│   ├── app.js               # Shared: sidebar toggle, theme persistence
│   ├── login.js               # Login form validation
│   ├── dashboard.js             # Dashboard entrance animation
│   ├── patients.js               # Patient search + row actions
│   ├── appointments.js            # Booking form validation
│   └── settings.js                 # Settings tabs + theme switch
├── images/
│   ├── logo.png
│   ├── doctor-placeholder.png
│   ├── patient-placeholder.png
│   └── icons/
├── README.md
├── LICENSE
└── .gitignore

```

No server or backend is required — every page runs entirely in the browser.

## Author

**Mukhtar Ibrahim**
MUKHTARMIT TECH-HUB — Version 1.0

## License

Released under the [MIT License](LICENSE).
