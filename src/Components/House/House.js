import './House.css';
import { useParams } from 'react-router-dom';
import { advertisements } from '../../helpers/advertisements';

const House = () => {

    const {id} = useParams();
    const house = advertisements[id];

    return ( 

        <div>
        <h1 >{house.title}</h1>
        <div>{house.class_type}</div>
        <div>{house.type}</div>
        <div>{house.price}</div>
        <div>{house.account}</div>
        </div> 

     );
}

export default House;

