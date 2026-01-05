# Gander Gaming Website

A modern, responsive website for Gander Gaming, an indie RPG publisher, featuring the platinum bestseller Grok?! Built with vanilla HTML, CSS, and JavaScript for easy hosting on GitHub Pages.

## About Gander Gaming

Gander Gaming is an indie game publishing company founded by Lester Burton in 2021. Since the first commercial release of the now platinum bestseller Grok?!, we've been committed to creating inspiring games, tools, and adventures to help bring the imagined world in your head to the gaming table.

## Features

- **Fully Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI** - Clean, professional design with smooth animations
- **Dynamic Character System** - Easy-to-manage character database with JSON configuration
- **Character Filtering** - Filter characters by type (Characters/Items)
- **Character Detail Pages** - Individual pages for each character with related character links
- **Mobile Navigation** - Hamburger menu for mobile devices
- **Smooth Scrolling** - Enhanced user experience with smooth scroll navigation
- **Accessibility** - Built with accessibility best practices
- **GitHub Pages Ready** - Optimized for easy deployment
- **Custom Logos** - Integrated Gander Gaming and Grok?! branding

## Site Structure

The website is organized as follows:

- **index.html** - Main Gander Gaming homepage showcasing the company and games
- **grok.html** - Dedicated Grok?! game hub with resources and information
- **characters.html** - Character database for Grok?!
- **character-detail.html** - Individual character detail pages

```
grok-web/
├── index.html                # Gander Gaming homepage
├── grok.html                 # Grok?! game hub
├── characters.html           # Character list page
├── character-detail.html     # Individual character page template
├── styles.css                # All styles and responsive design
├── script.js                 # JavaScript for interactions
├── characters.js             # JavaScript for character list
├── character-detail.js       # JavaScript for character details
├── data/
│   └── characters.json       # Character database (easily editable)
├── assets/
│   └── images/
│       ├── gander/           # Gander Gaming logos
│       ├── grok/             # Grok?! logos
│       └── art/Characters/   # Character images
├── README.md                 # This file
└── CHARACTER_MANAGEMENT.md   # Guide for managing characters
```

## Deployment to GitHub Pages

1. Push this repository to GitHub
2. Go to repository Settings → Pages
3. Under "Source", select the `main` branch
4. Click Save
5. Your site will be published at `https://[username].github.io/grok-web/`

## Customization

### Managing Characters

The character system is designed to be simple and easily configurable:

1. **Adding Characters**: Edit `data/characters.json` and add a new entry
2. **Character Images**: Place images in `assets/images/art/Characters/`
3. **Linking Characters**: Use the `relatedCharacters` field to connect characters

For detailed instructions, see [CHARACTER_MANAGEMENT.md](CHARACTER_MANAGEMENT.md)

### Update Links

Replace the placeholder links in `index.html`:
- **Resource Downloads**: Update the `href` attributes in the Free Resources section with your Google Drive links
- **Social Media**: Update Facebook and YouTube links in the header and footer
- **Email**: Replace `contact@gandergaming.com` with your actual email
- **Distribution Platforms**: Update DriveThruRPG and Itch.io links when available

### Color Scheme

The color scheme is defined in CSS variables at the top of `styles.css`:

```css
--color-primary: #60196d;    /* Deep purple */
--color-secondary: #53c0e9;  /* Cyan */
--color-accent: #ffd95e;     /* Golden yellow */
```

### Adding Images

1. Place images in the `assets/` folder
2. Update image references in the HTML
3. For the hero section background, you can add a background image in `styles.css`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## License

© 2025 Gander Gaming. All rights reserved.

## Contact

For questions or support, contact: contact@gandergaming.com
