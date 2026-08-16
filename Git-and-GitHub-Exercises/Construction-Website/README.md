# Luma Dental Studio

A responsive, single-page website for a fictional dental practice. Home, services, about, and contact content are organized into accessible tabs with shareable URL hashes.

## Features

- Responsive layouts for desktop, tablet, and mobile screens
- Sticky tab navigation with URL history and deep links
- Keyboard navigation with Arrow, Home, and End keys
- Hero, about, services, patient testimonial, and contact sections
- Accessible semantic HTML and descriptive labels
- Click-to-call and email contact links
- CSS-only decorative hero artwork with no image dependency
- Custom typography loaded from Google Fonts

## Technologies

- HTML5
- CSS3
- Vanilla JavaScript
- Google Fonts

## Project structure

```text
Construction-Website/
├── index.html   # All page content and tab panels
├── styles.css   # Layout, colors, typography, and responsive styles
├── scripts.js   # Tab navigation, history, and deep links
└── README.md    # Project documentation
```

## Run locally

No build process or package installation is required.

1. Clone or download the repository.
2. Open `index.html` in a web browser.

For a local development server, run the following command from the project directory:

```bash
python -m http.server 8000
```

Then open [http://localhost:8000](http://localhost:8000) in your browser.

## Customization

- Edit the page copy and contact details in `index.html`.
- Change the color palette through the custom properties at the top of `styles.css`.
- Update responsive behavior in the media queries near the bottom of `styles.css`.
- Replace the fictional address, phone number, and email before using the site publicly.

## Accessibility

The page uses semantic landmarks, heading hierarchy, accessible navigation labels, descriptive link text, and responsive typography. When extending the site, preserve visible keyboard focus states and sufficient color contrast.

## License

This project is intended for educational and portfolio use.
