## 🍴 Flavorly – Recipe Finder App

A sleek and functional **Recipe Finder App** built with **React** that allows users to search, explore, and save their favourite recipes. It uses the **Forkify API** to fetch real recipes and provides a smooth, responsive, and modern user experience.

---

## 🚀 Live Demo

👉 [Try it Here](https://flavorly.netlify.app/)

---

## 🧩 Features

- 🔍 **Search Recipes:** Instantly find recipes using the Forkify API  
- 📋 **View Recipe Details:** See publisher info and full ingredient lists  
- ❤️ **Manage Favourites:** Add or remove your favourite recipes easily  
- ⚡ **Global Context State:** Centralized state management with React Context API  
- 🧭 **React Router Integration:** Seamless page navigation  
- 🎨 **Modern UI Design:** Elegant layout, hover effects, and smooth transitions  
- 📱 **Fully Responsive:** Works beautifully on mobile, tablet, and desktop  

---

## 🛠️ Tech Stack

- ⚛️ **React JS** – Component-based frontend  
- 🌐 **React Router DOM** – Client-side routing  
- 🧠 **React Context API** – Global state management  
- 💅 **CSS3** – Custom responsive styling  
- 🍽️ **Forkify API** – Real recipe data source  

---

## 📁 Project Structure

```
RECIPE-APP/
├── node_modules/
├── public/
│   └── index.html
├── src/
│   ├── assets/
│   ├── components/
│   │   └── navbar/
│   │       └── index.jsx
│   ├── context/
│   │   └── index.jsx
│   ├── pages/
│   │   ├── details/
│   │   │   └── index.jsx
│   │   ├── favourites/
│   │   │   └── index.jsx
│   │   └── home/
│   │       └── index.jsx
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
└── package.json
```

---

## ⚙️ How It Works

1. Users enter a recipe name (e.g., *Pasta*, *Pizza*, *Burger*) in the search bar.  
2. The app fetches matching recipes from the **Forkify API**.  
3. Each recipe card shows an image, title, and publisher.  
4. Clicking **Recipe Details** opens a full view with ingredients and a favourite button.  
5. Favourites are managed globally via **React Context API**.  

---

## 📸 Preview

![Flavorly App Screenshot](https://github.com/user-attachments/assets/cac055ce-129d-4d85-b651-55d604d62672)


---

## 🧑‍💻 How to Run Locally

1. **Clone this repository**
   ```bash
   git clone https://github.com/Stack-Naveen/Recipe-App.git
   cd RECIPE-APP
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. Open your browser and go to:
   👉 **http://localhost:5173**

---

## 🔗 API Used

**Forkify API:**  
```
https://forkify-api.herokuapp.com/api/v2/recipes?search=<your-query>
```

Example:  
```
https://forkify-api.herokuapp.com/api/v2/recipes?search=pizza
```

---

## 📜 License

This project is licensed under the [MIT License](LICENSE).

---

## 🙌 Acknowledgements

Built with ❤️ by **Naveen**  
Using **React**, **CSS**, and the **Forkify API** for recipe data.

---
