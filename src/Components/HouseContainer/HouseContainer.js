import "./HouseContainer.css"

const HouseContainer = (props) => {
    return (
        <div class="card">
             <img className="image-container" src = {props.img} alt="class_image"/>
             <h3>{props.title}</h3>
             <p>{props.description}</p>
        </div>
    );
}
 
export default HouseContainer;