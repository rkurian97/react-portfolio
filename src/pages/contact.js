import React from 'react';

const Contact = () => {

  return (
    <div className="flex items-center min-h-screen bg-gray-800 dark:bg-gray-900">
      <div className="container mx-auto">
        <div className="max-w-md mx-auto my-10 bg-gray-900 p-5 rounded-md shadow-sm">
          <div className="text-center">
            <h1 className="my-3 text-3xl font-semibold text-bright-turquoise ">Contact Me</h1>
            <p className="text-gray-400">Fill up the form below to send us a message.</p>
          </div>
          <div className="m-7">
            <form action="https://api.web3forms.com/submit" method="POST" >
              <input type="hidden" name="apikey" defaultValue="dd47429e-ea48-4ac7-ac27-7ea358cb11c7" />
              <input type="hidden" name="subject" defaultValue="New Submission from Web3Forms" />
              <input type="checkbox" name="botcheck" id style={{ display: 'none' }} />
              <div className="mb-6">
                <label htmlFor="name" className="block mb-2 text-sm text-gray-400">Full Name</label>
                <input type="text" name="name" placeholder="John Doe" required className="w-full text-gray-900 px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="block mb-2 text-sm text-gray-400">Email Address</label>
                <input type="email" name="email"  placeholder="you@company.com" required className="w-full text-gray-900 px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block mb-2 text-sm text-gray-400">Your Message</label>
                <textarea rows={5} name="message"  placeholder="Your Message" className="w-full text-gray-900 px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" required defaultValue={""} />
              </div>
              <div className="mb-6">
                <button type="submit" className="w-full px-3 py-4 text-white bg-bright-turquoise rounded-md focus:bg-indigo-600 focus:outline-none">Send Message</button>
              </div>
              <p className="text-base text-center text-gray-400" id="result">
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;