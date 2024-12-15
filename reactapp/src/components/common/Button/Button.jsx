import './Button.css';

const Button = ({onClick, children}) => (
    <button onClick={onClick} className={Button.button}>{children}</button>
);

export default Button;
