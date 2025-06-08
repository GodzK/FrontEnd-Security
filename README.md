# Frontend Security Bootcamp with PK Phakaphol (take away course)

This repository provides a minimal setup to learn **frontend security** using **React + Vite** with Hot Module Replacement (HMR) and ESLint rules tailored for secure coding practices. Designed for developers in Thailand, this 4-week bootcamp, based on the "Frontend in Depth" e-book, teaches how to secure web applications against vulnerabilities like XSS, CSRF, and clickjacking through hands-on exercises.

## Features
- React + Vite for fast development and HMR
- ESLint rules configured for security best practices
- Hands-on labs for real-world frontend security scenarios
- Integration with Node.js/Express.js for server-side security testing

## Prerequisites
- Node.js (>= 18.x) and npm
- Visual Studio Code
- Chrome browser with Developer Tools
- Basic knowledge of HTML, CSS, JavaScript, and React
- Optional: Docker for running secure server environments

## Setup
1. Clone the repository:
   ```bash
   git clone <repo-url>
   cd frontend-security-bootcamp
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. For server-side exercises (e.g., Express.js):
   ```bash
   node server.js
   ```
5. For static HTML exercises, use:
   ```bash
   npx http-server
   ```

## Available Plugins
- **[@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react)**: Uses Babel for Fast Refresh, ideal for rapid development.
- **[@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc)**: Uses SWC for faster compilation and Fast Refresh.

## Sessions Overview

### Week 1: Foundations of Frontend Security
- **Session 1**: Learn why frontend security matters. Build a React app to test unsafe user input handling, demonstrating XSS vulnerabilities.
- **Session 2**: Explore the attack surface of SPAs. Create a React component that renders user input unsafely, highlighting OWASP Top 10 risks.
- **Session 3**: Apply core security principles. Modify a React app to use safe rendering methods, preventing script injection.

### Week 2: Common Frontend Vulnerabilities
- **Session 4**: Understand XSS types. Use DOMPurify in a React app to sanitize inputs, blocking malicious scripts.
- **Session 5**: Mitigate CSRF attacks. Implement CSRF tokens and SameSite cookies in an Express.js server to secure form submissions.
- **Session 6**: Prevent clickjacking. Configure X-Frame-Options and frame-busting scripts in a Vite-powered app to block iframe embedding.

### Week 3: Secure Coding Practices
- **Session 7**: Secure token storage. Transition from localStorage to HttpOnly cookies in a React login flow to protect against XSS.
- **Session 8**: Implement Content Security Policy (CSP). Add CSP headers in an Express.js server to restrict script sources, mitigating XSS.
- **Session 9**: Manage third-party risks. Add Subresource Integrity (SRI) for CDN scripts and audit dependencies in a Vite project.

### Week 4: Advanced Topics and Wrap-Up
- **Session 10**: Configure CORS safely. Set up an Express.js server with restricted CORS policies to protect APIs from unauthorized access.
- **Session 11**: Fix common security mistakes. Update a React app to use safe rendering and generic error messages to avoid information leaks.
- **Session 12**: Capstone project. Secure a vulnerable React SPA by applying XSS, CSRF, and clickjacking protections.
- **Session 13**: Prepare for interviews. Write code to prevent DOM-based XSS and practice explaining security concepts.
- **Session 14**: Review and Q&A. Fix a server exposing sensitive errors, implementing secure error handling.
- **Session 15**: Apply skills to real-world scenarios. Audit a Vite project’s dependencies to resolve security vulnerabilities.
- **Session 16**: Build a secure login page with React, integrating XSS, CSRF, and clickjacking protections, and explore ongoing learning resources.

## Expanding the Security Configuration
For production applications, we recommend enhancing the setup with:
- **TypeScript**: Integrate TypeScript for type-safe code. Use the [React + TypeScript Vite template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) and enable [`typescript-eslint`](https://typescript-eslint.io) for type-aware linting to catch security-related errors.
- **Security Linters**: Add [`eslint-plugin-security`](https://www.npmjs.com/package/eslint-plugin-security) to detect common security issues in JavaScript code.
- **Dependency Auditing**: Use `npm audit` or tools like [Snyk](https://snyk.io) to monitor vulnerabilities in dependencies.
- **Docker**: Containerize the Express.js server for consistent, secure environments. Example:
  ```dockerfile
  FROM node:18
  WORKDIR /app
  COPY package*.json ./
  RUN npm install
  COPY . .
  EXPOSE 3001
  CMD ["node", "server.js"]
  ```
- **HTTPS**: Enforce HTTPS in production using a reverse proxy like Nginx or a service like [Let’s Encrypt](https://letsencrypt.org).

## Running the Exercises
Each session includes code in its respective folder. Follow these steps:
1. Navigate to the session folder (e.g., `week1/session1`).
2. Run `npm run dev` for React apps or `node server.js` for Express.js servers.
3. Use Chrome Developer Tools to test security behaviors (e.g., injecting XSS payloads or checking CORS headers).
4. Refer to session-specific instructions for additional setup (e.g., running `npx http-server` for static HTML).

## Contributing
ONLY PHAKAPHOL DHERACHAISUPHAKIJ

## License
MIT License