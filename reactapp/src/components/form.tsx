import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';

const AppForm = () => {

const { register, handleSubmit, formState: { errors} } = useForm();
const navigate = useNavigate();


const onSubmit = (data) => {
    console.log("Form Submitted:", data);
    navigate('/counter');
    }

return( 
<form onSubmit={handleSubmit(onSubmit)} className='form'>
    <input 
        {...register("name", {
            required: "Name is required",
            minLength: {
            value: 6,
            message: "Name must be at least 6 characters",
        },
            maxLength: {
            value: 24,
            message: "Name must be no more than 24 characters",
        },
    })}
        className="input"
        placeholder="Name"
    />
{errors.name && <p className="error">{errors.name.message}</p>}
                
</form>
)
}

export default AppForm;
