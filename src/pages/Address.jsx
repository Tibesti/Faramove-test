import { useEffect } from 'react';
import CustomSelect from '../components/Forms/CustomSelect';
import CustomInput from '../components/Forms/CustomInput';
import { Form, Formik } from 'formik';
import { addressSchema } from '../schema';
import PrimaryButton from '../components/Buttons/PrimaryButton';
import BackButton from '../components/Buttons/BackButton';
import { useNavigate } from 'react-router-dom';


const Address = ({addressValues, setAddressValues, setView}) => {
    let navigate = useNavigate();

    useEffect(()=>{
        setView("address")
    },[])
    
    return(
        <div>
            <Formik
                initialValues={addressValues}
                validationSchema={addressSchema}
                onSubmit={(values) => {
                    setAddressValues(values)
                    navigate('/photos')
                }}
            >
                {(props) => (
                    <Form>
                        <div className="container py-12 px-5">
                            <h1 className='text-3xl font-bold text-title-text mb-6 uppercase'>Address Details</h1>
                            <div className='flex justify-between mb-20 smMax:block smMax:mb-[30px]'>
                                <div className='w-[48%] smMax:w-full'>
                                    <CustomInput
                                        label='Search Address'
                                        required={true}
                                        name='address'
                                        type='text'
                                        placeholder='Property Address'
                                    />
                                    <CustomSelect
                                        label='State'
                                        required={true}
                                        name='state'
                                        type='text'
                                        placeholder='State'
                                        textColor={props.values.state===''?'text-grey':'text-black'}
                                    >
                                        <option></option>
                                        <option value="Lagos">Lagos</option>
                                        <option value="Ogun">Ogun</option>
                                        <option value="Oyo">Oyo</option>
                                    </CustomSelect>
                                </div>
                                <div className='w-[48%] smMax:w-full'>
                                    <CustomSelect
                                        label='City'
                                        required={true}
                                        name='city'
                                        type='text'
                                        placeholder='City'
                                        textColor={props.values.city===''?'text-grey':'text-black'}
                                    >
                                        <option></option>
                                        <option value="Abeokuta">Abeokuta</option>
                                        <option value="Ibadan">Ibadan</option>
                                        <option value="Ikeja">Ikeja</option>
                                    </CustomSelect>
                                    <CustomInput
                                        label='Apartment Number'
                                        required={false}
                                        name='apartmentNumber'
                                        type='number'
                                        placeholder='0'
                                    />
                                </div>
                            </div>
                            {/* next form */}
                            <div className='flex justify-center smMax:block'>
                                <BackButton action='Back' addClass='mx-[2%] smMax:w-full smMax:mx-0 smMax:mb-[10px]' link='/' />
                                <PrimaryButton action='Next' addClass='mx-[2%] smMax:w-full smMax:mx-0' disabled={!props.isValid} />
                            </div>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default Address;