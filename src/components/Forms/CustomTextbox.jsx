import { useField } from 'formik';


const CustomTextbox = ({label, required, ...props}) => {
   const [field, meta] = useField(props);

    return(
        <div>
            <label className='text-title-text font-normal font-base'>
                {label}
                {
                    required &&
                    <span className='text-primary'>*</span>
                }
            </label>
            <textarea 
                {...field} 
                {...props} 
                className={`w-full border mt-2 h-[145px] border-solid py-2.5 px-4 rounded-lg focus:outline-none ${meta.touched && meta.error ? 'border-errors':'border-grey mb-6'}`}
            />
            {
                (meta.touched && meta.error) &&
                <p className='text-errors mb-6'>{meta.error}</p>
            }
        </div>
    )
}

export default CustomTextbox;