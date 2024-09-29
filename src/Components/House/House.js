import './House.css';
import { useParams } from 'react-router-dom';
import { advertisements } from '../../helpers/advertisements';

const House = () => {

    const {id} = useParams();
    const house = advertisements[id];

    return ( 

        <>
        
        <h1>{house.title}</h1>
        <span>{house.class_type}</span>
        <span>{house.type}</span>
        <span>{house.price}</span>
        <span>{house.account}</span>
        <span></span>
        </> 

     );
}

export default House;

