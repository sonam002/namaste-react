import { useEffect, useState } from "react";
import mockData from "./mockMenuData";

const useRestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    setResInfo(mockMenuData.data);
  }, []);

  return resInfo;
};

export default useRestaurantMenu;