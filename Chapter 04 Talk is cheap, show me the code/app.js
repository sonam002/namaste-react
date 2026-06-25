import React from "react";
import ReactDOM from "react-dom/client";
//Planning
/**
 * 1) Header
 *  - Log
 *  - Nav Items
 * 2)Body
 *  - Search
 *  - RestaurantContainer
 *      - RestaurantCard
 *        - Img
 *        - Name of Res, Star Ratings, Cuisine, etc
 * 3)Footer
 *  - Copyrights
 *  - Link
 *  - Address
 *  - Contact
 */
const Header = () => {
    return (
        <div className = "header">
            <div className = "logo-container">
                <img
                    className = "logo"
                    src="https://i.pinimg.com/originals/34/0c/6a/340c6add7519212185a08d4205eb1965.png"
                />
                <h3>FoodieMint</h3>
            </div>
            <div className = "nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
};

const styleCard = {
    backgroundColor: "#D3D3D3",
};

const RestaurantCard = (props) => {
    const { resData } = props;
    console.log("working");
    const {
        image,
        name,
        cuisines,
        avgRating,
        costForTwo,
        deliveryTime,
    } = resData.info;
    return (
        <div className = "res-card" style = {styleCard}>
            <img
                className = "res-logo"
                alt = {name}
                src={image}
            />
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating}</h4>
            <h4>{costForTwo}</h4>
            <h4>{deliveryTime}</h4>
        </div>
    );
};

const resObj = {
  name: "Aaradhana Foods",
  cuisines: ["Kathiawadi Thali", "Traditional", "Sweet", "Spicy"],
  avgRating: "4.6",
  costForTwo: 40000,
  deliveryTime: 125,
};

export const CDN_URL =
  "https://images.unsplash.com/";

export const resList = [
  {
    info: {
      id: "1",
      name: "Domino's Pizza",
      image:
        "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600",
      cuisines: ["Pizza", "Italian", "Fast Food"],
      avgRating: 4.5,
      costForTwo: "₹400 for two",
      deliveryTime: "30 mins",
    },
  },
  {
    info: {
      id: "2",
      name: "Burger King",
      image:
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600",
      cuisines: ["Burgers", "Fries", "Beverages"],
      avgRating: 4.2,
      costForTwo: "₹350 for two",
      deliveryTime: "25 mins",
    },
  },
  {
    info: {
      id: "3",
      name: "Behrouz Biryani",
      image:
        "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?w=600",
      cuisines: ["Biryani", "North Indian"],
      avgRating: 4.7,
      costForTwo: "₹500 for two",
      deliveryTime: "40 mins",
    },
  },
  {
    info: {
      id: "4",
      name: "Subway",
      image:
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600",
      cuisines: ["Healthy", "Sandwich", "Salads"],
      avgRating: 4.3,
      costForTwo: "₹300 for two",
      deliveryTime: "20 mins",
    },
  },
  {
    info: {
      id: "5",
      name: "McDonald's",
      image:
        "https://images.unsplash.com/photo-1550547660-d9450f859349?w=600",
      cuisines: ["Burgers", "Fries", "Desserts"],
      avgRating: 4.4,
      costForTwo: "₹450 for two",
      deliveryTime: "28 mins",
    },
  },
  {
    info: {
      id: "6",
      name: "Pizza Hut",
      image:
        "https://images.unsplash.com/photo-1594007654729-407eedc4be65?w=600",
      cuisines: ["Pizza", "Pasta"],
      avgRating: 4.1,
      costForTwo: "₹550 for two",
      deliveryTime: "35 mins",
    },
  },
  {
    info: {
      id: "7",
      name: "KFC",
      image:
        "https://images.unsplash.com/photo-1562967916-eb82221dfb36?w=600",
      cuisines: ["Chicken", "Fast Food"],
      avgRating: 4.3,
      costForTwo: "₹450 for two",
      deliveryTime: "30 mins",
    },
  },
  {
    info: {
      id: "8",
      name: "Starbucks",
      image:
        "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600",
      cuisines: ["Coffee", "Cafe", "Desserts"],
      avgRating: 4.6,
      costForTwo: "₹600 for two",
      deliveryTime: "18 mins",
    },
  },
];

const Body = () => {
    return (
        <div className = "body">
            <div className = "search"></div>
            <div className = "res-container">
                {resList.map((restaurant) => (
                    <RestaurantCard key = {restaurant.info.id} resData = {restaurant} />
                ))}
            </div>
        </div>
    );
};

const AppLayout = () => {
    return (
        <div className = "app">
            <Header/>
            <Body/>
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);