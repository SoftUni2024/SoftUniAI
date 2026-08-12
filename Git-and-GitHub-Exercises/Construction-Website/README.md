# Luma Dental Studio

A responsive, single-page website for a fictional dental practice. The project presents the studio, its services, patient benefits, contact details, and opening hours in a calm, modern visual style.

## Features

- Responsive layouts for desktop, tablet, and mobile screens
- Sticky header with smooth in-page navigation
- Hero, about, services, patient testimonial, and contact sections
- Accessible semantic HTML and descriptive labels
- Click-to-call and email contact links
- CSS-only decorative hero artwork with no image dependency
- Custom typography loaded from Google Fonts

## Technologies

- HTML5
- CSS3
- Google Fonts

## Project structure

```text
Construction-Website/
├── index.html   # Page structure and content
├── style.css    # Layout, colors, typography, and responsive styles
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
- Change the color palette through the custom properties at the top of `style.css`.
- Update responsive behavior in the media queries near the bottom of `style.css`.
- Replace the fictional address, phone number, and email before using the site publicly.

## Accessibility

The page uses semantic landmarks, heading hierarchy, accessible navigation labels, descriptive link text, and responsive typography. When extending the site, preserve visible keyboard focus states and sufficient color contrast.

## License

This project is intended for educational and portfolio use.
