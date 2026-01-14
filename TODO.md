dded# TODO: Replicate Portfolio Layout, Style, and Functionality in project2

## Overview
Replicate the exact layout, styling, and functionality from the portfolio folder (portofolio3/portofolio3/) into the project2 Next.js app. Do not modify the portfolio folder. Use the HTML structure, CSS from stayle.css, JS from main.js, and images.

## Steps

### 1. Copy Images
- Copy all images from `portofolio3/portofolio3/images/` to `project2/public/images/`
- Ensure images are accessible in Next.js (e.g., /images/img.jpg)

### 2. Update Global Styles
- Replace content in `project2/src/app/globals.css` with the CSS from `portofolio3/portofolio3/stayle.css`
- Ensure all styles are applied correctly, including responsive media queries

### 3. Update Root Layout (layout.tsx)
- Modify `project2/src/app/layout.tsx` to match the header and footer from `portofolio3/portofolio3/index.html`
- Header: Keep the nav structure with classes `.header-list`, `.div-list`, `.ul-list`, etc.
- Footer: Update to match the footer structure with classes `.footer`, `.footer-container`, etc.
- Add any necessary links (fonts, FontAwesome) if not already present

### 4. Update Section Components
- Update each component to match the HTML structure, classes, and content exactly:
  - `Hero.tsx` -> Match `#home` section (home section)
  - `About.tsx` -> Match `#about` section
  - `Projects.tsx` -> Match `#project` section
  - `Services.tsx` -> Match `#services` section
  - `Contact.tsx` -> Match `#contact` section (assuming it exists; if not, create or update accordingly)
- Ensure all divs, classes, text, and structure match the HTML

### 5. Implement JavaScript Functionality
- Add client-side JS logic from `portofolio3/portofolio3/main.js` into the components using React hooks (useEffect, etc.):
  - Smooth scrolling navigation
  - Active nav link on scroll
  - Reveal animations for sections
  - Typing effect in Hero (h3 element)
  - Back-to-top button
  - Card hover effects
  - Loading screen (add a loading component or in layout)
- Use `use client` directive in components that need JS

### 6. Update Main Page (page.tsx)
- Ensure `project2/src/app/page.tsx` renders all sections in order: Hero, About, Projects, Services, Contact
- Add ids to sections for navigation (e.g., id="home", id="about", etc.)

### 7. Test and Verify
- Run the app and verify layout matches exactly
- Check responsiveness
- Ensure all interactions work (nav, scroll, animations)
- Fix any discrepancies

### 8. Final Cleanup
- Remove any unused components or files
- Ensure no changes to portfolio folder
