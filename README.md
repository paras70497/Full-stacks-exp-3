# 🚀 Client-Side Routing Experiment (Exp 3)

Welcome to my React Router experiment project! This repository demonstrates mastery of client-side routing concepts using **React Router DOM v6**.

The goal of this project was to build a multi-page Single Page Application (SPA) without page reloads, implementing advanced features like dynamic routing, authentication guards, and nested layouts.

---

## 👨‍💻 Author
**Name:** Paras  
**UID:** 23BAI70497  

---

## ✨ Key Features & Learnings

This project covers the following routing concepts:

- **🧭 Basic Routing**: Navigation between Home, About, and Products pages.
- **🔗 Dynamic Routing**: Individual product details pages (`/products/:id`) that read URL parameters.
- **🛡️ Protected Routes**: The "Contact" page is behind an authentication guard. You must be logged in to view it.
- **🔒 Fake Authentication**: A context-based auth system to simulate login/logout flows.
- **📐 Nested Layouts**: Uses a `MainLayout` with `Outlet` to keep the Navbar and Breadcrumbs persistent.
- **🍞 Breadcrumbs**: Automatic breadcrumb navigation based on the URL path.
- **🚫 404 Handling**: A custom "Not Found" page for invalid URLs.
- **⚡ Programmatic Navigation**: Auto-redirects after login and logic-based routing using `useNavigate`.

---

## 🛠️ Tech Stack

- **Framework:** React + Vite
- **Routing:** React Router DOM v6
- **Language:** JavaScript (ES6+)
- **Styling:** CSS Modules / Standard CSS

---

## 🚀 How to Run Locally

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd exp-3
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Explore the App:**
   - Go to `http://localhost:5173`
   - Try accessing `/contact` (it will redirect you to login).
   - Login with any username.
   - Click on different products to see dynamic IDs.

---

## 🌐 Deployment

This project is ready to be deployed on **Vercel**.

1. Push this code to GitHub.
2. Import the repository in Vercel.
3. Vercel automatically detects Vite.
4. Add a `vercel.json` if you encounter 404 errors on refresh (common with client-side routing), or simply ensure your build settings are correct.


