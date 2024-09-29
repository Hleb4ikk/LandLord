
import { advertisements } from "../../helpers/advertisements";

import CatalogHouseContainer from "../CatalogHouseContainer/CatalogHouseContainer";

const Catalog = () => {

  return (
    <div>
      <ul className="catalog_houses">
        {advertisements.map((advertisement, index) => {


          return <CatalogHouseContainer
            key = {index}
            photo={advertisement.photo}
            title={advertisement.title}
            class_type={advertisement.class_type}
            type={advertisement.type}
            price={advertisement.price}
            account={advertisement.account}
            index={index}
          />;
        })}
      </ul>
    </div>
  );
};

export default Catalog;
