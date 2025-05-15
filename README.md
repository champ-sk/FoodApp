# FoodApp - Real-Time Food Ordering Application 🍕

A dynamic and responsive food ordering web application that allows users to browse restaurants, view menus, and manage a cart, leveraging live data from Swiggy's public API.

**🔗 Live Demo:** [food-app-rose-mu.vercel.app](https://food-app-rose-mu.vercel.app/ )

## 🎥 Demo Video
[Watch the Demo Video](src/Recording.mp4)

## 📸 Screenshots
![image](https://github.com/user-attachments/assets/74403c88-e409-47cf-898d-f7f1d6ed44be)
![image](https://github.com/user-attachments/assets/97887828-7f6c-48cb-8a77-437ad98c2322)
![image](https://github.com/user-attachments/assets/851629db-5927-4416-ac6b-5b88fc0d5461)



## 🌟 Key Features

- **Live Restaurant Data:** Fetches and displays up-to-date restaurant listings and menus using Swiggy's public API.
- **Dynamic Search & Filtering:** Allows users to easily search for restaurants and filter results.
- **Restaurant Menu Display:** Detailed view of restaurant menus with categorized items.
- **Cart Functionality:** Users can add, remove, and update items in their cart.
- **State Management:** Efficient global state management using Redux Toolkit for cart and user session data (and Context API where applicable).
- **Optimized Performance:** Implemented Shimmer UI (skeleton loading) and lazy loading for improved user experience and faster load times.
- **Responsive Design:** Fully responsive interface built with Tailwind CSS, ensuring a seamless experience across devices.
- **Routing:** Smooth navigation between pages using React Router.
- **Testing:** Includes unit and integration test cases written with Jest, achieving high code coverage.
- **Promoted Restaurants:** Highlights featured restaurants with a "Promoted" label.

## 🛠️ Tech Stack

- **Frontend:** React.js, JavaScript (ES6+)
- **State Management:** Redux Toolkit, React Context API
- **Routing:** React Router
- **Styling:** Tailwind CSS
- **API Integration:** Swiggy Public API
- **Testing:** Jest, React Testing Library
- **Build Tool:** Parcel
- **Deployment:** Vercel

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

- Node.js (v14 or later recommended)
- npm or yarn

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/champ-sk/FoodApp.git
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd FoodApp
    ```
3.  **Install NPM packages:**
    ```bash
    npm install
    ```
    (or `yarn install` if you prefer yarn )

### Running the Application

```bash
npm start
