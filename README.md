# 🛒 React Shopping App

A two-page shopping application built with **React.js**, **TypeScript**, **Tailwind CSS**, and **React Query**. The app includes a **Product Listing Page** and a **Cart Page**, with features like pagination, filtering, sorting, and cart state persistence.

## 🚀 Features

### ✅ Product Listing Page
- Fetch and display products from the [Fake Store API](https://fakestoreapi.com/).
- Show product **image, title, price, and a brief description**.
- "Add to Cart" button to add products to the shopping cart.
- **Filtering** by category.
- **Sorting** by price and rating.
- **Pagination / Load More** functionality.

### ✅ Cart Page
- Display added items with **title, price, image, and quantity selection**.
- Allow users to **update quantity** or **remove items** from the cart.
- **Total price calculation** of items in the cart.
- **Persistent cart state** (stored in `localStorage`).

---

## 🛠 Tech Stack

- **React.js** – UI framework.
- **TypeScript** – Type safety.
- **React Query** – Data fetching and caching.
- **Tailwind CSS** – Styling.
- **ShadCN Components** – UI components.
- **React Router** – Page navigation.
- **Local Storage** – Persisting cart data.

---

## 📦 Installation & Setup

### 1️⃣ Clone the Repository
git clone https://github.com/ShivSPGupta/shopping-app.git
cd shopping-app

### 2️⃣ Install Dependencies
npm install

### 3️⃣ Run the Application
npm run dev
The app will be available at **http://localhost:5173**.

---

## 🔥 Key React Concepts Used

- **useState** → Manage component state.
- **useEffect** → Persist cart state in localStorage.
- **useContext** → Share cart state across components.
- **React Query** → Handle API calls and caching.
- **React Router** → Enable navigation between pages.

---

## 📌 API Reference

We use the **Fake Store API** to fetch product data:
- **Base URL**: `https://fakestoreapi.com/products`
- **Get All Products**: `GET /products`
- **Get Categories**: `GET /products/categories`

---

## 🐛 Error Handling

- Shows **Loading...** while fetching data.
- Displays **Error message** if API call fails.
- Handles cases where **cart is empty**.

---

## 💡 Future Enhancements

- ✅ Implement user authentication.
- ✅ Add checkout and payment integration.
- ✅ Enhance UI with animations.

---

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first.

---

## 📜 License

This project is **MIT Licensed**.

---

Would you like any customizations based on your needs? 🚀



# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```
