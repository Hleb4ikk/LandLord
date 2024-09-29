import HouseContainer from "../HouseContainer/HouseContainer";

import "./Home.css"

import { categories } from "../../helpers/categories";

const Home = () => {
    return ( 

            <div>
                <h1 className="homeTitle">Rent a house of your dreams</h1>
                <ul className="categories">
                    {categories.map((category, index) => {

                        return (
                          <HouseContainer
                            key = {index}
                            title={category.title}
                            description={category.description}
                            img = {category.img}
                          />
                        );

                    })}
                </ul>
            </div>
            
     );
}
 
export default Home;