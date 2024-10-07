import { NavLink } from "react-router-dom";
import "./CatalogHouseContainer";

import advertisements from "../../Storage/advertisements.json";

const CatalogHouseContainer = ({
  title,
  type,
  account,
  class_type,
  price,
  index,
}) => {
  var person;
  if (type === "продажа") person = "Продавец: ";
  else if (type === "сдача") person = "Арендодатель: ";

  return (
    <NavLink to={"/catalog/" + index}>
      <div
        className="card"
        onClick={() => {
          advertisements[index].views = advertisements[index].views + 1;
        }}
      >
        <h3>{title}</h3>
        <div>{class_type}</div>
        <div>{type}</div>
        <div>{price}</div>
        <div>
          {person} {account}
        </div>
        <div>{advertisements[index].views}</div>
      </div>
    </NavLink>
  );
};

export default CatalogHouseContainer;
