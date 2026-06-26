import { CDN_URL } from "../utils/constants";

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

export default RestaurantCard;