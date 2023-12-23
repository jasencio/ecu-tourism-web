import { useState, useEffect } from "react";
import { data as placesList } from "../data/placesList";
import { data as citiesList } from "../data/citiesList";

const useData = (selectedList) => {

    const [data, setData] = useState([]);

    useEffect(() => {
        switch (selectedList) {
            case "places":
                setData(placesList);
                break;
            case "cities":
                setData(citiesList);
                break;
            default:
                setData([]);
        }
    }, [selectedList]);

    return [data];
};

export default useData;