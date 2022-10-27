import React from 'react';

const Faq = () => {
    return (
        <div className="flex flex-col w-10/12 mx-auto my-9 lg: w-1/2">
            <p className='text-2xl font-bold'>Frequently Ask Question</p>
            <div className="grid h-auto text-left my-5 card bg-primary text-white font-semibold rounded-box place-items-start p-12">
                <p className='text-xl mb-2'>Q. what is CS-pro ?</p>
                <p className='text-lg'>Ans: CS-pro is a online education platform. Where you can lear about Computer Science basic to advance.</p>

                <hr className='bg-white w-full my-10 border-2' />

                <p className='text-xl mb-2'>Q. why CS-pro ?</p>
                <p className='text-lg'>Ans: CS-pro is a online education platform. Where you can lear about Computer Science basic to advance. We provide 24/7 support to out student. Also out instractors are rockstar corporate in the particular domain</p>

                <hr className='bg-white w-full my-10 border-2' />

                <p className='text-xl mb-2'>Q. CS-pro payment System?</p>
                <p className='text-lg'>Ans: CS-pro is a online education platform. Where you can lear about Computer Science basic to advance. Without Login or Registration you can't purses our course.<br />
                You can pay using <ul  class="list-disc list-inside"><li>Bkash</li> <li>Nagad</li></ul></p>
            </div>
        </div>
    );
};

export default Faq;