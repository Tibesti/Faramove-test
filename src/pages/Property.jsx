import { useState, useEffect } from 'react';
import CustomSelect from '../components/Forms/CustomSelect';
import CustomInput from '../components/Forms/CustomInput';
import CustomTextbox from '../components/Forms/CustomTextbox';
import { Form, Formik } from 'formik';
import { propertySchema } from '../schema';
import PrimaryButton from '../components/Buttons/PrimaryButton';
import { useNavigate } from 'react-router-dom';

import swimmer from '../assets/amenities/swimmer.svg';
import tv from '../assets/amenities/tv.svg';
import security from '../assets/amenities/security.svg';
import garden from '../assets/amenities/garden.svg';
import ac from '../assets/amenities/ac.svg';
import wifi from '../assets/amenities/wifi.svg';
import exercise from '../assets/amenities/exercise.svg';


const Property = ({propertyValues, setPropertyValues, setView}) => {
    const [selectedAmenities, setSelectedAmenities] = useState(propertyValues.amenities)
    const amenities = [
        {
            id: 1,
            image: swimmer,
            name: 'Swimming Pool'
        },
        {
            id: 2,
            image: tv,
            name: 'Television Set'
        },
        {
            id: 3,
            image: security,
            name: 'Security'
        },
        {
            id: 4,
            image: garden,
            name: 'Garden'
        },
        {
            id: 5,
            image: ac,
            name: 'Air Conditioner'
        },
        {
            id: 6,
            image: wifi,
            name: 'Wifi'
        },
        {
            id: 7,
            image: exercise,
            name: 'Exercise Tools'
        },
    ]
    const [amenityError, setAmenityError] = useState(false);
    let navigate = useNavigate();

    useEffect(()=>{
        setView("property")
    },[])

    const addAmenity = (name) => {
        if(selectedAmenities.includes(name)){
            // remove
            setSelectedAmenities(selectedAmenities.filter(item => item !== name));
        } else {
            // add
            setSelectedAmenities(prev => [...prev, name])
        }
    }

    const checkAmenities = (values) => {
        if(selectedAmenities.length>=1){
            values.amenities = selectedAmenities;
            setPropertyValues(values)
            navigate('/address')
        } else {
            setAmenityError(true)
        }
    }

    return(
        <div>
            <Formik
                initialValues={propertyValues}
                validationSchema={propertySchema}
                onSubmit={(values) => {
                    checkAmenities(values)

                }}
            >  
                {(props) => (
                    <Form>
                        <div className="container py-12 px-5">
                            <h1 className='text-3xl font-bold text-title-text mb-6'>Property Details</h1>
                            <div className='flex justify-between smMax:block'>
                                <div className='w-[48%] smMax:w-full'>
                                    <CustomSelect
                                        label='Property Category'
                                        required={true}
                                        name='propertyCategory'
                                        type='text'
                                        textColor={props.values.propertyCategory===''?'text-grey':'text-black'}
                                        placeholder='Property Category'
                                    >
                                        <option>Property Type</option>
                                        <option value="personal">Personal</option>
                                        <option value="private">Private</option>
                                        <option value="governmentOwned">Government-Owned</option>
                                    </CustomSelect>
                                    <CustomSelect
                                        label='Property Name'
                                        required={true}
                                        name='propertyName'
                                        type='text'
                                        placeholder='Property Name'
                                        textColor={props.values.propertyName===''?'text-grey':'text-black'}
                                    >
                                        <option>Property Name</option>
                                        <option value="Abeokuta Realty">Abeokuta Realty</option>
                                        <option value="Ibadan Realty">Ibadan Realty</option>
                                        <option value="Lagos Realty">Lagos Realty</option>
                                    </CustomSelect>
                                    <CustomSelect
                                        label='Number of Beds'
                                        required={true}
                                        name='noOfBeds'
                                        type='number'
                                        placeholder='Number of Beds'
                                        textColor={props.values.noOfBeds===''?'text-grey':'text-black'}
                                    >
                                        <option>0</option>
                                        <option value={1}>1</option>
                                        <option value={2}>2</option>
                                        <option value={3}>3</option>
                                        <option value={4}>4</option>
                                        <option value={5}>5</option>
                                    </CustomSelect>
                                    <CustomSelect
                                        label='Is this a Blura finance property (Yes/No)'
                                        required={true}
                                        name='bluraFinance'
                                        type='text'
                                        placeholder='Is this a Blura finance property (Yes/No)'
                                        textColor={props.values.bluraFinance===''?'text-grey':'text-black'}
                                    >
                                        <option></option>
                                        <option value="yes">Yes</option>
                                        <option value="no">No</option>
                                    </CustomSelect>
                                </div>
                                <div className='w-[48%] smMax:w-full'>
                                    <CustomSelect
                                        label='Property Condition'
                                        required={true}
                                        name='propertyCondition'
                                        type='text'
                                        placeholder='Property Condition'
                                        textColor={props.values.propertyCondition===''?'text-grey':'text-black'}
                                    >
                                        <option>Property Condition</option>
                                        <option value="good">Good</option>
                                        <option value="very good">Very good</option>
                                        <option value="perfect">Perfect</option>
                                    </CustomSelect>
                                    <CustomInput
                                        label='Service Charge'
                                        required={false}
                                        name='serviceCharge'
                                        type='number'
                                        placeholder='₦0'
                                    />
                                    <CustomTextbox
                                        label='Description (About Property)'
                                        required={true}
                                        name='description'
                                        type='text'
                                        placeholder='Description'
                                    />
                                </div>
                            </div>
                        </div>
                        {
                            props.values.bluraFinance==="yes" ?
                            <div className='border-t-2 border-t-solid border-t-soft-stroke'>
                                <div className='container py-12 px-5'>
                                    {/* Blura Finance part */}
                                    <h1 className='text-3xl font-bold text-title-text mb-6'>Blura Finance</h1>
                                    <div className='flex justify-between smMax:block'>
                                        <div className='w-[48%] smMax:w-full'>
                                            <CustomInput
                                                label='Amount to be paid (Part Payment)'
                                                required={false}
                                                name='amount'
                                                type='number'
                                                placeholder='₦0'
                                            />
                                            <CustomSelect
                                                label='Spread Duration (monthly)'
                                                required={false}
                                                name='spreadDuration'
                                                type='text'
                                                placeholder=''
                                                textColor={props.values.spreadDuration===''?'text-grey':'text-black'}
                                            >
                                                <option></option>
                                                <option value="3 months">3 months</option>
                                                <option value="6 months">6 months</option>
                                                <option value="12 months">12 months</option>
                                            </CustomSelect>
                                            <CustomInput
                                                label='Recurring Amount (monthly)'
                                                required={false}
                                                name='recurringAmount'
                                                type='number'
                                                placeholder='₦0'
                                            />
                                        </div>
                                        <div className='w-[48%] smMax:w-full'>
                                            <CustomTextbox
                                                label='Description'
                                                required={false}
                                                name='bluraDescription'
                                                type='text'
                                                placeholder='Description'
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            : null
                        }
                        {/* Amenities selection */}
                        <div className='border-t-2 border-t-solid border-t-soft-stroke'>
                            <div className='container py-12 px-5'>
                                <h1 className='text-3xl font-bold text-title-text'>Amenities <span className='text-base font-semibold '>({selectedAmenities?.length}/7)</span></h1>
                                <p className={`text-base font-semibold my-3 ${amenityError && selectedAmenities?.length<1 ? 'text-errors':'text-paragraph'}`}>Pick at least one house amenity <span className='font-normal'>(what the house has to offer)</span><span className='font-normal text-primary'>*</span></p>
                                <div className='flex flex-wrap justify-between'>
                                    {
                                        amenities.map((item) => (
                                            <div 
                                                className={`w-40 smMax:w-[48%] h-24 mt-3.5 pt-1.5 rounded-lg border-2 cursor-pointer ${selectedAmenities.includes(item.name)?'border-amenity-green':'border-border-grey'}`}
                                                key={item.id}
                                                onClick={()=>addAmenity(item.name)}
                                            >
                                                <div>
                                                    <img src={item.image} alt="amenities" className='h-10 block m-auto w-10' />
                                                </div>
                                                <p className='text-center text-base mt-2'>{item.name}</p>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                        {/* next form */}
                        <PrimaryButton action='Next' addClass='block m-auto' disabled={!(props.isValid && selectedAmenities.length>0)} />
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default Property;