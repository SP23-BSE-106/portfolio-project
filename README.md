# Munazza Javed - Personal Portfolio Website

This is a comprehensive personal portfolio website built by Munazza Javed to showcase her skills, projects, and services as a full-stack developer and digital professional. The website is designed with modern web technologies, featuring a responsive layout, interactive animations, and a fully functional contact form with backend integration.

## 🚀 Project Overview

This portfolio website serves as a digital representation of Munazza Javed's professional identity. It includes sections for introducing herself, showcasing her skills and experience, displaying featured projects, highlighting services offered, and providing a contact form for potential clients or collaborators. The site incorporates advanced features like loading animations, smooth scrolling navigation, hover effects, and a backend API for handling contact form submissions.

## 🛠️ Technology Stack

### Frontend Framework
- **Next.js 16** - React-based framework for server-side rendering and static site generation
- **React 19** - Latest version of React for building user interfaces
- **TypeScript** - Strongly typed programming language for better code quality and developer experience

### Styling & UI
- **Tailwind CSS v4** - Utility-first CSS framework for rapid UI development
- **Custom CSS** - Additional styling in `globals.css` for specific animations and effects

### Backend & Database
- **Next.js API Routes** - Serverless functions for backend logic
- **MongoDB** - NoSQL database for storing contact form submissions
- **Mongoose** - ODM for MongoDB interactions

### Additional Libraries
- **react-google-recaptcha** - For spam protection on contact form
- **@google-cloud/recaptcha-enterprise** - Enterprise reCAPTCHA verification
- **Font Awesome** - Icon library for visual elements
- **GSAP** - Animation library (mentioned in project descriptions)

### Development Tools
- **ESLint** - Code linting for maintaining code quality
- **Jest** - Testing framework for unit tests
- **PostCSS** - CSS processing tool
- **Autoprefixer** - CSS vendor prefixing

## 📁 Project Structure

```
portfolio-project/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── contact/
│   │   │       ├── route.test.ts
│   │   │       └── route.ts
│   │   ├── components/
│   │   │   ├── layout/
│   │   │   │   ├── Footer.tsx
│   │   │   │   └── Navbar.tsx
│   │   │   └── sections/
│   │   │       ├── About.tsx
│   │   │       ├── Contact.tsx
│   │   │       ├── Hero.tsx
│   │   │       ├── Home.tsx
│   │   │       ├── Projects.tsx
│   │   │       └── Services.tsx
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── data/
│   │   └── projects.ts
│   ├── lib/
│   │   └── mongodb.ts
│   └── types/
│       └── react-google-recaptcha.d.ts
├── public/
│   ├── images/
│   │   ├── app.svg
│   │   ├── Cleveroad.jpg
│   │   ├── dm.svg
│   │   ├── Ecomerce.jpg
│   │   ├── Game Dashboard Design.jpg
│   │   ├── img.jpg
│   │   ├── img2.jpg
│   │   ├── portfolio.jpg
│   │   ├── seo.svg
│   │   ├── Task manager app.jpg
│   │   ├── uniportal.jpg
│   │   ├── Weather Forecast Dashboard.jpg
│   │   ├── web.svg
│   │   └── WordPress dashboard design concept.jpg
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   └── vercel.svg
├── .gitignore
├── eslint.config.mjs
├── jest.setup.js
├── jest.setup.ts
├── next.config.ts
├── package.json
├── package-lock.json
├── postcss.config.mjs
├── README.md
├── TODO.md
└── tsconfig.json
```

## 🎯 Key Features

### 1. Loading Screen Animation
- Custom loading screen with animated elements
- Displays portfolio branding and designer credit
- Smooth transition to main content after 4 seconds

### 2. Navigation System
- Fixed header navigation with smooth scrolling
- Active section highlighting based on scroll position
- Responsive navigation for mobile devices

### 3. Hero Section
- Eye-catching introduction with personal branding
- Call-to-action buttons for portfolio and contact
- Responsive design with image and text layout

### 4. About Section
- Personal introduction and background
- Skills showcase with interactive cards
- Professional experience highlights

### 5. Projects Section
- Featured project cards with images and descriptions
- Technology stack indicators
- Links to GitHub repositories and live demos
- Currently displays: E-Commerce Website, Portfolio Website, and University Website

### 6. Services Section
- Service offerings: Web Development, App Development, Digital Marketing, Email Marketing
- Interactive service cards with hover effects
- Detailed descriptions of each service

### 7. Contact Section
- Functional contact form with validation
- reCAPTCHA integration for spam protection
- Form submission to MongoDB database
- Success/error message handling
- Contact information display

### 8. Interactive Elements
- Smooth scroll animations and reveal effects
- Hover animations on cards and buttons
- Back-to-top button functionality
- Responsive design for all screen sizes

## 🔧 Setup and Installation

### Prerequisites
- Node.js (version 18 or higher recommended)
- MongoDB database (local or cloud instance)
- npm or yarn package manager

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio-project
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Configuration**
   Create a `.env.local` file in the root directory:
   ```env
   MONGODB_URI=your_mongodb_connection_string
   MONGODB_DB=your_database_name
   ```

4. **Start Development Server**
   ```bash
   npm run dev
   ```
   The website will be available at `http://localhost:3000`

### Production Build

1. **Build the application**
   ```bash
   npm run build
   ```

2. **Start production server**
   ```bash
   npm start
   ```

## 🚀 Deployment

### Vercel Deployment
1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard:
   - `MONGODB_URI`
   - `MONGODB_DB`
3. Deploy automatically on push to main branch

### Other Platforms
The application can be deployed to any platform supporting Node.js applications (Heroku, Netlify, etc.)

## 📝 API Documentation

### Contact Form API

#### POST /api/contact
Submits a contact form message to the database.

**Request Body:**
```json
{
  "name": "string",
  "email": "string",
  "message": "string",
  "recaptchaToken": "string"
}
```

**Response:**
```json
{
  "message": "Message sent successfully"
}
```

#### GET /api/contact
Retrieves recent contact messages (admin use only).

**Response:**
```json
[
  {
    "_id": "object_id",
    "name": "string",
    "email": "string",
    "message": "string",
    "createdAt": "timestamp"
  }
]
```

## 🧪 Testing

### Running Tests
```bash
npm test
```

### Test Coverage
- API route tests in `src/app/api/contact/route.test.ts`
- Jest configuration for TypeScript support
- Setup files for test environment

## 🎨 Customization Guide

### Updating Content

#### Personal Information
- Update contact details in `src/app/components/sections/Contact.tsx`
- Modify introduction text in `src/app/components/sections/Hero.tsx` and `src/app/components/sections/About.tsx`

#### Projects
- Edit project cards in `src/app/components/sections/Projects.tsx`
- Add/remove project images in `public/images/`
- Update project descriptions and links

#### Services
- Modify service offerings in `src/app/components/sections/Services.tsx`
- Update service descriptions and icons

### Styling Changes

#### Global Styles
- Main styles are in `src/app/globals.css`
- Tailwind utilities are imported and available globally
- Custom animations and responsive breakpoints defined here

#### Component-Specific Styles
- Each component has its own styling within the component file
- Uses Tailwind classes for responsive design
- Custom CSS classes for specific animations

### Adding New Sections

1. Create new component in `src/app/components/sections/`
2. Import and add to `src/app/page.tsx`
3. Update navigation in header component
4. Add corresponding styles in `globals.css`

## 🔒 Security Features

- reCAPTCHA integration for contact form spam protection
- Input validation on frontend and backend
- MongoDB connection with secure URI
- Environment variables for sensitive data

## 📱 Responsive Design

The website is fully responsive with breakpoints for:
- Desktop: 1024px and above
- Tablet: 768px to 1023px
- Mobile: below 768px

Features include:
- Mobile-first navigation
- Flexible grid layouts
- Optimized images and typography
- Touch-friendly interactive elements

## 🚀 Performance Optimizations

- Next.js Image component for optimized image loading
- Server-side rendering for better SEO
- Lazy loading of components
- Optimized bundle size with tree shaking
- Efficient CSS with Tailwind's purging

## 🐛 Troubleshooting

### Common Issues

1. **TypeScript Errors**
   - Ensure all dependencies are installed
   - Check TypeScript configuration in `tsconfig.json`

2. **MongoDB Connection Issues**
   - Verify `MONGODB_URI` is correct
   - Check database permissions and network access

3. **Build Failures**
   - Clear Next.js cache: `rm -rf .next`
   - Reinstall dependencies: `rm -rf node_modules && npm install`

4. **Styling Issues**
   - Ensure Tailwind CSS is properly configured
   - Check for CSS conflicts in `globals.css`

## 📈 Future Enhancements

Potential improvements for the portfolio:
- Dark mode toggle
- Blog section with MDX
- Project filtering and search
- Animated skill progress bars
- Testimonial carousel
- Multi-language support
- Admin dashboard for content management

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👨‍💻 About the Developer

**Munazza Javed** is a passionate full-stack developer specializing in modern web technologies. This portfolio showcases her expertise in React, Next.js, TypeScript, and backend development with MongoDB. She focuses on creating responsive, user-friendly applications with clean code and innovative solutions.

For inquiries or collaboration opportunities, please use the contact form on the website or reach out directly at munazzajaved277@gmail.com.

---

*This README provides comprehensive documentation for the Munazza Javed portfolio website. For any questions or contributions, please refer to the contact information above.*
