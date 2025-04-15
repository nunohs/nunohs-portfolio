# Hadi Nuno Handrison - Portfolio Website

A modern, responsive portfolio website built with React and Tailwind CSS to showcase my projects and skills.

## 🚀 Features

- **Responsive Design**: Fully responsive layout that works on desktop, tablet, and mobile devices
- **Project Showcase**: Interactive project cards with image carousels and detailed descriptions
- **Skills Section**: Visual representation of technical skills with custom icons
- **Smooth Navigation**: Single-page application with smooth scrolling to different sections
- **Contact Information**: Easy access to professional contact details and social links

## 🛠️ Built With

- [React](https://reactjs.org/) - Frontend JavaScript library
- [Vite](https://vitejs.dev/) - Next Generation Frontend Tooling
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Lucide React](https://lucide.dev/) - Beautiful & consistent icon set

## 🏗️ Project Structure

```text
portfolio-vite/
├── public/
│   └── nunohs-portfolio/    # Project images and assets
├── src/
│   ├── App.jsx             # Main application component
│   ├── App.css             # Global styles
│   └── main.jsx           # Application entry point
└── index.html             # HTML template
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/nunohs/nunohs-portfolio.git
cd nunohs-portfolio
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Start the development server
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:5173](http://localhost:5173) to view it in your browser

## 🌐 Deployment

This site is deployed using GitHub Pages. To deploy your own version:

1. Update the `vite.config.js` with your base URL:
```javascript
export default defineConfig({
  base: '/nunohs-portfolio/',
  // ... other config
})
```

2. Build the project:
```bash
npm run build
# or
yarn build
```

3. Deploy to GitHub Pages:
```bash
npm run deploy
# or
yarn deploy
```
