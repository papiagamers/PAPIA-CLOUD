# Papia Cloud Hosting

**Repository:** `papiagamers/papia-cloud`  
**Website:** A modern, interactive cloud hosting platform designed specifically for gamers and developers.

---

## Overview

**Papia Cloud** is a fully responsive and feature-rich web platform built to provide **fast, reliable, and scalable hosting solutions** for Minecraft, VPS, and Game Hub servers. Developed using **HTML, CSS, and JavaScript**, and optionally **React** for enhanced interactivity, the platform combines **performance, aesthetics, and usability** to deliver an engaging and seamless user experience.  

The website’s **hero section** features animated headings, a glowing call-to-action button, and a dynamic background created with **Particles.js**, immediately capturing visitor attention and setting a modern, gamer-centric tone. Users can explore multiple hosting plans, select server configurations, and manage their game servers easily without any technical complexity.  

The platform highlights **Minecraft, VPS, and FiverM combo plans**, each presented in **interactive cards** that display RAM, CPU, server slots, and pricing. Users can click on any plan to select it, which gives visual feedback and enhances usability.  

The **Game Hub section** provides quick access to popular game servers such as **Minecraft, CS:GO, Rust, Valheim, ARK, and Terraria**, each with a dedicated “Select Server” button. This design allows users to deploy servers with minimal clicks, creating a seamless onboarding experience for gamers and developers alike.  

**Additional features** include a **theme toggle** for switching between light and dark modes, a **FAQ accordion** for instant information, and a responsive layout optimized for desktop, tablet, and mobile screens. Papia Cloud is designed for **both casual users and professionals**, making it a versatile solution for anyone looking to host game servers efficiently.

---

## Features

- **Lightning-fast server hosting** with low latency  
- **Minecraft, VPS, and Combo FiverM plans** for diverse user needs  
- **Game Hub** with multiple game server support  
- **Interactive selection cards** with visual feedback  
- **Theme toggle** with persistent user preferences  
- **FAQ accordion** for instant answers  
- **Mobile-friendly and responsive design** for all devices  
- **Animated particle background** using Particles.js  
- **Smooth scrolling** for anchor navigation  
- **Modern and visually engaging hero section**  

---

## Project Structure
```
papia-cloud/
│
├─ index.html # Main HTML file containing all sections
├─ style.css # Global CSS styles including animations and layout
├─ script.js # JavaScript for interactivity and animations
├─ images/ # Icons, logos, and server images
└─ README.md # Project documentation
```
---

## Getting Started (Run Locally)

### Prerequisites
- **Node.js** installed (optional for running a local HTTP server)  
- Any modern web browser (Chrome, Firefox, Edge, etc.)

### Steps

1. **Clone the repository**
```
git clone https://github.com/papiagamers/papia-cloud.git
cd papia-cloud
```
Access the website at http://127.0.0.1:5500

You Can Use The Node JS Command Also:
```
npm install -g http-server
http-server -p 8080
```
Open your browser at: http://127.0.0.1:8080

**Usage**
Click “Get Started” in the hero section to explore hosting plans.

Select any plan card to highlight it as your choice.

Use the Game Hub section to choose your preferred server.

Toggle light/dark theme with the switch in the top-right corner.

Expand FAQs to view answers to common questions.

Enjoy animated backgrounds and smooth scrolling throughout the website.

Example Code Snippet for Plan Selection
javascript:
```
// Highlight selected plan card
document.querySelectorAll('.option-card').forEach(card => {
  card.addEventListener('click', () => {
    document.querySelectorAll('.option-card').forEach(c => c.classList.remove('selected'));
    card.classList.add('selected');
  });
});
```
This snippet ensures visual feedback for selected cards, enhancing user experience and clarity.

**Deployment**

Papia Cloud is a static website, making it easy to deploy to platforms like Netlify, Vercel, or GitHub Pages.Optionally, configure a custom domain and enable free SSL.

***License***

This project is open-source and free to use for personal, educational, and demonstration purposes. Contributions and forks are welcome.
