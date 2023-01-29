import { useField } from 'formik';

import arrow from "../../assets/arrow.svg";


const CustomSelect = ({label, required, textColor, ...props}) => {
   const [field, meta] = useField(props);

    return(
        <div className='relative'>
            <label className='text-title-text font-normal font-base'>
                {label}
                {
                    required &&
                    <span className='text-primary'>*</span>
                }
            </label>
            <select 
                {...field} 
                {...props} 
                className={`w-full border mt-2 border-solid py-2.5 px-4 rounded-lg bg-white focus:outline-none ${meta.touched && meta.error ? 'border-errors':'border-grey mb-6'} ${textColor}`}
            />
            <img src={arrow} alt="arrow" className='absolute top-[45px] right-[10px]' />
            {
                (meta.touched && meta.error) &&
                <p className='text-errors mb-6'>{meta.error}</p>
            }
        </div>
    )
}

export default CustomSelect;