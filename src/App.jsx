import { useState } from 'react';
import {BrowserRouter, Routes, Route } from "react-router-dom"
import "./index.css";
import Property from "./pages/Property";
import Address from "./pages/Address";
import Photos from "./pages/Photos";

function App() {
  const [view, setView] = useState('property');
  const [propertyValues, setPropertyValues] = useState({
    propertyCategory: '',
    propertyName: '',
    noOfBeds: '',
    bluraFinance: '',
    propertyCondition: '',
    serviceCharge:'',
    description:'',
    amount:'',
    spreadDuration: '',
    recurringAmount:'',
    bluraDescription: '',
    amenities: []
  });
  const [addressValues, setAddressValues] = useState({
    address: '',
    state: '',
    city: '',
    apartmentNumber: ''
  });
  const [uploaded, setUploaded] = useState(null);

  const logData = (photos) => {
    console.log({
      propertyDetails: propertyValues,
      addressDetails: addressValues,
      photoDetails: photos
    })
  }

  return (
    <div>
      {/* Start of top bar */}
      <div className='border-b-2 border-b-solid border-b-soft-stroke'>
        <div className='flex py-6 items-center container px-5'>
          <div className={`flex items-center cursor-pointer`}>
            <h5 className={`w-12 smMax:text-base smMax:pt-0 smMax:w-7 smMax:h-7 smMax:mr-1 h-12 m-0 rounded-full text-center border-2 border-solid text-2xl pt-1 mr-2.5 ${view==='property'?' text-white bg-primary border-primary':' bg-white border-grey text-grey'}`}>1</h5>
            <h5 className={`text-xl smMax:text-sm smMax:leading-4 xsMax:hidden m-0 font-semibold ${view==='property'?'text-primary':'text-grey'}`}>PROPERTY<br/>DETAILS</h5>
          </div>
          <hr className='w-28 border-2 border-grey bg-grey mx-6 smMax:mx-3'/>
          <div className={`flex items-center cursor-pointer`}>
            <h5 className={`smMax:text-base smMax:pt-0 smMax:w-7 smMax:h-7 smMax:mr-1 w-12 h-12 m-0 rounded-full text-center border-2 border-solid text-2xl pt-1 mr-2.5 ${view==='address'?' text-white bg-primary border-primary':' bg-white border-grey text-grey'}`}>2</h5>
            <h5 className={`text-xl m-0 smMax:text-sm smMax:leading-4 xsMax:hidden font-semibold ${view==='address'?'text-primary':'text-grey'}`}>ADDRESS<br/>DETAILS</h5>
          </div>
          <hr className='w-28 border-2 border-grey bg-grey mx-6 smMax:mx-3'/>
          <div className={`flex items-center cursor-pointer`}>
            <h5 className={`w-12 smMax:text-base smMax:pt-0 smMax:w-7 smMax:h-7 smMax:mr-1 h-12 m-0 rounded-full text-center border-2 border-solid text-2xl pt-1 mr-2.5 ${view==='photos'?' text-white bg-primary border-primary':' bg-white border-grey text-grey'}`}>3</h5>
            <h5 className={`text-xl m-0 smMax:text-sm smMax:leading-4 xsMax:hidden font-semibold ${view==='photos'?'text-primary':'text-grey'}`}>PHOTOS</h5>
          </div>
        </div>
      </div>
      {/* End of top bar */}

      {/* Forms display with router */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Property setView={(item)=>setView(item)} propertyValues={propertyValues} setPropertyValues={(values)=>setPropertyValues(values)} />} />
          <Route path='/address' element={<Address setView={(item)=>setView(item)} addressValues={addressValues} setAddressValues={(values)=>setAddressValues(values)} />} />
          <Route path='/photos' element={<Photos setView={(item)=>setView(item)} logData={(photos)=>logData(photos)} />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
