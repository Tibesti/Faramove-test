import * as yup from "yup";


export const propertySchema = yup.object().shape({
    propertyCategory: yup
        .string()
        .oneOf(['personal', 'private', 'governmentOwned'], "Please select a valid option")
        .required('Property Type is required'),
    propertyName: yup
        .string()
        .oneOf(['Abeokuta Realty', 'Ibadan Realty', 'Lagos Realty'], "Please select a valid option")
        .required('Property Name is required'),
    noOfBeds: yup
        .number()
        .oneOf([1, 2, 3, 4, 5], "Please select a valid option")
        .required('Number of beds is required'),
    bluraFinance: yup
        .string()
        .oneOf(['yes', 'no'], "Please select a valid option")
        .required('This field is required'),
    propertyCondition: yup
        .string()
        .oneOf(['good', 'very good', 'perfect'], "Please select a valid option")
        .required('Property Condition is required'),
    serviceCharge: yup
        .number(),
    description: yup
        .string()
        .min(10, "Must be a minimum of 10 characters")
        .required('Description is required'),
    amount: yup
        .number(),
        // .required('Amount to be paid is required'),
    spreadDuration: yup
        .string()
        .oneOf(['3 months', '6 months', '12 months'], "Please select a valid option"),
        // .required('Spread duration is required'),
    recurringAmount: yup
        .number(),
        // .required('Recurring amount is required'),
    bluraDescription: yup
        .string(),
})


export const addressSchema = yup.object().shape({
    address: yup
        .string()
        .required('Address is required'),
    state: yup
        .string()
        .oneOf(['Lagos', 'Ogun', 'Oyo'], "Please select a valid option")
        .required('State is required'),
    city: yup
        .string()
        .oneOf(['Abeokuta', 'Ibadan', 'Ikeja'], "Please select a valid option")
        .required('City is required'),
    apartmentNumber: yup
        .number()
})