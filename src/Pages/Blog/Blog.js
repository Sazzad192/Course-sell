import React from 'react';

const Blog = () => {
    return (
        <div className="flex flex-col w-10/12 mx-auto mt-9 lg:w-1/2">
            <div className="grid h-auto text-left my-5 card bg-secondary text-white font-semibold rounded-box place-items-start p-6">
                <p className='text-xl mb-2'>Q. what is `cors`?</p>
                <p className='text-lg'>Ans: Cors is a middleware to access data from others web site. Like we can access API from API server to client server.</p>
            </div>
            <div className="grid h-auto text-left my-5 card bg-secondary text-white font-semibold rounded-box place-items-start p-3">
                <p className='text-xl mb-2'>Q. Why are you using `firebase`? What other options do you have to implement authentication?</p>
                <p className='text-lg'>Ans: Firebase is a third party server site where we can authentication our login or registration system. Even we can easily login with popup using google, github etc. <br />
                Firebase alternatives are: MongoDB, Oracle Database, Amazon Redshift, DataStax Enterprise, Redis Enterprise Cloud.</p>
            </div>
            <div className="grid h-auto text-left my-5 card bg-secondary text-white font-semibold rounded-box place-items-start p-3">
                <p className='text-xl mb-2'>Q. How does the private route work?</p>
                <p className='text-lg'>Ans: The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated</p>
            </div>
            <div className="grid h-auto text-left my-5 card bg-secondary text-white font-semibold rounded-box place-items-start p-3">
                <p className='text-xl mb-2'>Q. What is Node? How does Node work?</p>
                <p className='text-lg'>Ans: Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on a JavaScript Engine and executes JavaScript code outside a web browser, which was designed to build scalable network applications. <br /> 
                It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.</p>
            </div>
        </div>
    );
};

export default Blog;