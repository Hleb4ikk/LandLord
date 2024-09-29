import { NavLink } from "react-router-dom";
import "./CatalogHouseContainer";

import { useState } from "react";

const CatalogHouseContainer = ({photo, title, type, account, class_type, price, index}) => {
    
    var person;
    if(type === "продажа") person = "Продавец: ";
    else if(type === "сдача") person = "Арендодатель: "

    const [counter, setCounter] = useState(0);

    return ( 
        <NavLink to={'/catalog/' + index}>
        <div className="card" onClick={() => setCounter(counter+1)}>
            <img className="image-container" src = {photo} alt="class_image"/>
            <h3>{title}</h3>
            <div>{class_type}</div>
            <div>{type}</div>
            <div>{price}</div>
            <div>{person} {account}</div>
            <div>{counter}</div>
        </div>   
        </NavLink>
     );


    }
 
export default CatalogHouseContainer;