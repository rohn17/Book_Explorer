# 📚 Book Explorer (React Project)

## 📌 Project Overview

Book Explorer is a simple React application that displays a list of books and allows users to view detailed information about each book.

This project is built as part of a beginner-level assignment to understand:

* React components
* Routing
* Props & state basics
* Working with arrays and `.map()`

---

## 🚀 Features

* 📖 Display list of books
* 🔗 Clickable "Read More" button
* 📄 Detailed book view
* 🔀 Routing using React Router
* 🧭 Navigation between pages
* 🎯 Dynamic URL using book ID

---

## 🛠️ Tech Stack

* React JS
* JavaScript (ES6)
* React Router DOM
* CSS

---

## 📂 Project Structure

```
src/
│
├── components/
│   ├── BookList.js
│   └── BookDetail.js
│
├── data/
│   └── books.js
│
├── App.js
├── index.js
└── App.css
```

---

## ⚙️ Installation & Setup

1. Clone the repository

```
git clone https://github.com/your-username/book-explorer.git
```

2. Navigate into the project folder

```
cd book-explorer
```

3. Install dependencies

```
npm install
```

4. Install React Router

```
npm install react-router-dom
```

5. Start the development server

```
npm start
```

---

## 🧠 How It Works

* The **books data** is stored in a separate file (`books.js`)
* The **BookList component** displays all books using `.map()`
* Each book has a **"Read More" button**
* Clicking the button navigates to `/books/:id`
* The **BookDetail component** uses `useParams()` to get the ID
* It then finds the selected book and displays details

---

## 📸 Screens

* Home Page → Shows list of books
* Detail Page → Shows full information about selected book

---

## 🎯 Learning Outcomes

* Understanding React component structure
* Using React Router for navigation
* Working with dynamic routes
* Passing and using data effectively

---

## 🙌 Author

Rohan Choudhary

---

## 📌 Note

This project is created for learning purposes and demonstrates basic React concepts in a simple and beginner-friendly way.

---

⭐ Feel free to improve the UI or add new features like search, filter, or API integration!
