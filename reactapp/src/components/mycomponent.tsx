import PropTypes from "prop-types";
import Button from "./common/Button/Button";
import './mycomponents.css';

const MyComponent = ({title, description}) => {
    const myProps = {
        title:"шо я наробыу", 
        description: "што я написау"
    }

    const arr = [1,2,3,4,5];

    let result = arr.reduce(function(sum, current){
        return sum + current;
    }, 0);
    //alert (result); 

    return(
        <div>
            <h1>{title}</h1>
            <p>{description}</p>
            <Button onClick={() => alert('The present is on the way to become yours, pay only $127 to get it')}>Get present</Button>
        </div>
    );
};

MyComponent.PropTypes = {
   title: PropTypes.string.isRequired,
   description: PropTypes.string.isRequired
};

export default MyComponent;



