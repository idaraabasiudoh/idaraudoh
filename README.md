# Idara Udoh's Interactive Portfolio Dashboard

A sleek, macOS-inspired interactive portfolio and resume dashboard built with a focus on modern glassmorphism aesthetics. 

## Features

- **Liquid Glassmorphism UI:** Built with premium CSS styles including backdrop filters, gradient backgrounds, and soft inset shadows to create a vibrant "liquid" glass effect.
- **macOS Window Management:** Interactive window controls that allow you to minimize to a functional dock, maximize to full screen, or close the browser windows natively.
- **Embedded External Browser:** Internal logic routes external links securely into an embedded iframe overlay, maintaining the cohesive design language without opening disruptive new browser tabs.
- **Responsive Layout:** fully optimized for both desktop and mobile viewports.
- **Internal Routing:** A custom URL bar that parses inputs, allows free-typing, handles `idara.dev` navigation logic, and provides a custom 404 page for invalid links.

## Tech Stack

- **Vanilla TypeScript**
- **HTML5**
- **Vanilla CSS (No external UI frameworks)**
- **Vite** (Build tool)

## Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/idaraabasiudoh/idaraudoh.git
   ```

2. Navigate into the project directory:
   ```bash
   cd idaraudoh
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

### Development Server

To start the local development server:
```bash
npm run dev
```

### Build for Production

To compile TypeScript and build the project for production:
```bash
npm run build
```

To preview the built project locally:
```bash
npm run preview
```

## Structure

- `src/main.ts`: Handles DOM manipulation, window logic, URL parsing, and tab routing.
- `src/style.css`: Contains all visual styles, grid/flexbox layouts, responsive media queries, and the glassmorphism aesthetic variables.
- `index.html`: Defines the layout nodes and content sections of the resume.

## Author

**Idara Udoh**
- LinkedIn: [http://www.linkedin.com/in/idaraabasiudoh](http://www.linkedin.com/in/idaraabasiudoh)
- GitHub: [https://github.com/idaraabasiudoh](https://github.com/idaraabasiudoh)
