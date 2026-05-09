# Personal Portfolio Website

- A professional, minimalist, and fully responsive personal portfolio website.
- This project relies exclusively on pure HTML5, CSS3, and Vanilla JavaScript to deliver a smooth and optimized user experience.

## Features

- **Zero Dependencies**: No Bootstrap, Tailwind, React, jQuery, or external libraries.
- **Native Theming**: Built-in Dark/Light mode toggle with `localStorage` state persistence.
- **Custom Iconography**: Uses an inline SVG sprite map, eliminating the need for external font libraries and reducing network requests.
- **Modular Architecture**: CSS and JavaScript are split into clean, maintainable, and logical modules.
- **Fully Responsive**: Fluid layouts utilizing CSS Grid and Flexbox for seamless adaptation across mobile, tablet, and desktop viewports.
- **Interactive Components**: Features a custom-built, vanilla JS research publication carousel.

## Project Structure

The project emphasizes a highly organized, modular file structure:

```text
├── index.html          # Main HTML structure and inline SVG sprite map
├── assets/             # Static media (icons, images, resume)
├── css/                # Modular CSS architecture
│   ├── style.css       # CSS variables, theming, and global resets
│   ├── utilities.css   # Typography, helper classes, and button styles
│   ├── sections.css    # Layouts for all major UI sections
│   ├── animations.css  # Keyframe animations
│   └── responsive.css  # Media queries for device responsiveness
└── js/                 # Modular JavaScript architecture
    ├── theme.js        # Dark/Light mode toggle logic
    ├── navigation.js   # Mobile menu and scroll-spy active highlighting
    ├── carousel.js     # Research section slider functionality
    └── utils.js        # Minor dynamic utilities (e.g., footer year)
```

## How to Run

Because this project is built entirely with native web technologies and has no build tools or package managers required:

1. Clone the repository:
   ```bash
   git clone https://github.com/DrNikhilV/portfolio.git
   ```
2. Navigate to the project directory.
3. Open `index.html` directly in any modern web browser.


---
*Designed & Built by Nikhil V.*