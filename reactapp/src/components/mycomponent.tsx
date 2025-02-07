import PropTypes from "prop-types";
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
};

const OnTop = () => {
    
};


MyComponent.PropTypes = {
   title: PropTypes.string.isRequired,
   description: PropTypes.string.isRequired
};

export default MyComponent;



