# Motion Academy - Educational Platform

Motion Academy is a comprehensive educational platform designed for competitive exam preparation including JEE, NEET, and Foundation courses. This modern web application provides information about coaching programs, success stories, faculty details, and center locations across India.

## Technology Stack

This web application is built using modern technologies and frameworks to ensure optimal performance, scalability, and user experience.

**Frontend Framework**
Next.js 15.2.4 serves as the primary React framework, providing server-side rendering, static site generation, and optimized performance. The application uses React 19 for building interactive user interfaces with modern hooks and component architecture.

**Styling and Design**
Tailwind CSS 3.4.17 handles all styling with utility-first approach, ensuring consistent design and responsive layouts across all devices. The design system is enhanced with Tailwind CSS Animate for smooth animations and transitions.

**UI Component Library**
Radix UI provides accessible, unstyled components that form the foundation of the user interface. This includes components for dialogs, dropdowns, navigation menus, tooltips, and form elements. Shadcn/ui component system is integrated for consistent design patterns.

**Icons and Graphics**
Lucide React provides a comprehensive set of beautiful, customizable icons used throughout the application for navigation, features, and visual elements.

**Form Handling**
React Hook Form 7.54.1 manages form state and validation, while Zod 3.24.1 provides TypeScript-first schema validation for robust data handling.

**Development Tools**
TypeScript 5 ensures type safety and better development experience. PostCSS 8.5 processes CSS with autoprefixer for browser compatibility. ESLint maintains code quality and consistency.

**Package Management**
PNPM is used as the package manager for faster installations and efficient disk space usage.

**Image Optimization**
Next.js Image component handles automatic image optimization, lazy loading, and responsive images. The configuration includes unoptimized images for static exports.

## Local Development Setup

Setting up Motion Academy on your local machine requires Node.js and PNPM package manager. Follow these steps to get the development environment running.

**Prerequisites**
Ensure you have Node.js version 18 or higher installed on your system. You can download it from nodejs.org. PNPM package manager should also be installed globally.

**Installation Process**
Clone the repository to your local machine using Git. Navigate to the project directory in your terminal or command prompt.

Install PNPM globally if you haven't already by running npm install -g pnpm in your terminal.

Install all project dependencies by running pnpm install in the project root directory. This will download and install all required packages listed in package.json.

**Running the Development Server**
Start the development server by executing pnpm dev in your terminal. The application will be available at http://localhost:3000 in your web browser.

The development server includes hot reloading, which means changes to your code will automatically refresh the browser. You can edit pages, components, and styles, and see changes immediately.

**Building for Production**
To create a production build, run pnpm build. This generates optimized static files in the .next directory. You can then start the production server using pnpm start.

**Code Quality**
Run pnpm lint to check for code quality issues and ensure consistent formatting across the project.

## Vercel Deployment Guide

Vercel provides the optimal hosting platform for Next.js applications with automatic deployments, global CDN, and serverless functions. Here's how to deploy Motion Academy to Vercel.

**Account Setup**
Create a free account at vercel.com using your GitHub, GitLab, or Bitbucket account. This allows Vercel to access your repositories for automatic deployments.

**Repository Preparation**
Ensure your project is pushed to a Git repository on GitHub, GitLab, or Bitbucket. Make sure all your latest changes including the imgMotion folder with images are committed and pushed.

**Project Import**
Log into your Vercel dashboard and click "New Project". Select "Import Git Repository" and choose your Motion Academy repository from the list. If you don't see it, you may need to configure Git integration.

**Configuration Settings**
Vercel automatically detects that this is a Next.js project and configures most settings. However, verify these configurations:

Framework Preset should be set to Next.js. Root Directory should be left empty unless your Next.js app is in a subdirectory. Build Command should be "next build" and Output Directory should be ".next".

**Environment Variables**
If your application uses environment variables, add them in the Environment Variables section. For this project, no additional environment variables are required for basic functionality.

**Domain Configuration**
Vercel automatically provides a domain like your-project-name.vercel.app. You can also add a custom domain by going to the project settings and adding your domain in the Domains section.

**Image Optimization**
Since the project uses Next.js Image component with unoptimized configuration, images will work correctly on Vercel. The imgMotion folder will be served as static assets.

**Deployment Process**
Click "Deploy" to start the deployment process. Vercel will build your application and deploy it to their global CDN. The first deployment typically takes 2-3 minutes.

**Automatic Deployments**
Once deployed, Vercel automatically redeploys your application whenever you push changes to your main branch. Preview deployments are created for pull requests, allowing you to test changes before merging.

**Performance Optimization**
Vercel automatically optimizes your application with features like automatic static optimization, image optimization, and edge caching. Your Motion Academy website will load quickly for users worldwide.

**Monitoring and Analytics**
Access deployment logs, performance metrics, and analytics through the Vercel dashboard. This helps monitor your application's performance and identify any issues.

**Custom Configuration**
If you need custom headers, redirects, or other advanced configurations, create a vercel.json file in your project root with the necessary settings.

The deployment process is now complete, and your Motion Academy website is live and accessible to users worldwide with optimal performance and reliability.