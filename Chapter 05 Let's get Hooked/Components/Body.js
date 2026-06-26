import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
    //State variable - is super powerful
    const [listOfRestaurants, setlistOfRestaurants] = useState(resList);

    return (
        <div className = "body">
            <div className = "filter">
                <button
                    className = "filter-btn"
                    onClick = {() => {
                        //filter logic
                        const filteredList = listOfRestaurants.filter(
                            (res) => res.info.avgRating > 4
                        );
                        setlistOfRestaurants(filteredList);
                        console.log(listOfRestaurants);
                    }}
                >
                    Top Rated Restaurants
                </button>
            </div>
            <div className = "res-container">
                {listOfRestaurants.map((restaurant) => (
                    <RestaurantCard key = {restaurant.info.id} resData = {restaurant} />
                ))}
            </div>
        </div>
    );
};

export default Body;