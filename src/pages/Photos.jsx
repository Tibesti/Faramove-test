import { useState, useRef, useEffect } from 'react';
import PrimaryButton from '../components/Buttons/PrimaryButton';
import BackButton from '../components/Buttons/BackButton';

import upload from "../assets/upload.svg";


const Photos = ({setView, logData}) => {
    const drop = useRef(null);
    const [uploaded, setUploaded] = useState(null);
    const [error, setError] = useState('');

    useEffect(()=>{
        setView("photos");
        setError('');
    },[uploaded])

    useEffect(() => {
        drop?.current?.addEventListener('dragover', handleDragOver);
        drop?.current?.addEventListener('drop', handleDrop);
      
        return () => {
            // eslint-disable-next-line react-hooks/exhaustive-deps
            drop?.current?.removeEventListener('dragover', handleDragOver);
            // eslint-disable-next-line react-hooks/exhaustive-deps
            drop?.current?.removeEventListener('drop', handleDrop);
        };
    });
    
    const handleDragOver = (e) => {
        e.preventDefault();
        e.stopPropagation();
    };
    
    const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();

        const {files} = e.dataTransfer;
        
        validate(files)
    };

    const validate = (files) => {
        let sizes = [];
        for (let i = 0; i < files.length; i++) {
            sizes.push(files[i].size)
        }
        if (files && files.length<6) {
            if(sizes.some(item => item > 1048576) ){
                setError('Maximum file limit is 1MB!')
            } else{
                setUploaded(files)
                setError('')
            }
        } else {
            setError("You can't upload more than five files!")
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(uploaded===null){
            setError('Please upload at least one file')
        } else {
            logData(uploaded)
        }
    }

    return(
        <div className="container pt-12 px-5">
            <h1 className='text-3xl font-bold text-title-text mb-6 uppercase'>Photos<span className='text-base font-normal'>(REQUIRED)</span></h1>
            <p className='text-center '>REQUIRED</p>
            <form onSubmit={handleSubmit}>
                <input type="file" accept="image/*" multiple="multiple" id='input_file' onChange={(e)=>validate(e.target.files)} hidden />
                <div className="border-grey border-2 smMax:w-full rounded-md text-center py-6 border-dashed w-[300px] mt-6 mx-auto block" ref={drop}>
                    <img src={upload} alt='upload' className='mx-auto block mb-4' />
                    <p>Drop or <span className="text-primary underline cursor-pointer" onClick={()=>document.getElementById('input_file').click()}>Upload</span> image an here</p>
                </div>
                <p className='text-center text-errors'>{error}</p>
                <div className='flex flex-wrap justify-between my-20 smMax:my-10 smMax:block'>
                    {
                        [...Array(5)].map((e, i) =>(
                            <div key={i} className='border-grey smMax:w-full mdMax:w-[48%] lgMax:w-[32%] overflow-hidden border-2 border-dashed mb-10 w-[230px] h-[150px] rounded-md'>
                                {uploaded?.[i] && <img src={URL.createObjectURL(uploaded[i])} className='w-full' alt="" />}
                            </div>
                        ))
                    }
                </div>
                {/* next form */}
                <div className='flex justify-center smMax:block'>
                    <BackButton action='Back' addClass='mx-[2%] smMax:w-full smMax:mx-0 smMax:mb-[10px]' link="/address" />
                    <PrimaryButton action='Log Data' addClass='mx-[2%] smMax:w-full smMax:mx-0' disabled={uploaded===null} />
                </div>
            </form>
        </div>
    )
}

export default Photos;