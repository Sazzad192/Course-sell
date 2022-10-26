import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import { FaDownload, FaUniversalAccess } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const CourseCart = ({details}) => {
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
      content: () => componentRef.current,
      documentTitle: () => alert('print success')
    });
    return (
        <div ref={componentRef} style={{width:'100%'}}>
            
            <div className="card card-compact w-full bg-base-100 border border-primary shadow-xl my-5">
                <h2 className="text-center font-bold text-2xl p-2 text-primary">{details.name}</h2>
                <figure className='p-2'><img className='rounded-md' src={details.picture} alt="Shoes" /></figure>
                <div className="card-body text-left">
                    <p className='text-xl font-bold'>Instractor: {details.instractor_name}</p>

                    <p className='text-base font-semibold'>Start Date: {details.startDate}</p>
                    <p className='text-base font-semibold'>Course Duration: {details.courseDuration} Months</p>

                    <div className="card-actions justify-end">
                        <button onClick={handlePrint} className="btn btn-secondary">Download PDF <FaDownload className='ml-2'/> </button>
                    </div>
                    <hr />
                    <p className='font-bold text-lg'>{details.details}</p>
                    <ul className=' list-disc list-outside px-4'>
                        {
                            details.topic.map(element => <li className='font-bold text-lg'
                            key={element}>{element}</li>)
                        }
                    </ul>

                    <div className="card-actions justify-end">
                        <Link to={`/courses/enrole/${details.id}`}>
                            <button className="btn btn-secondary">Premium Access <FaUniversalAccess className='ml-2'/> </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseCart;