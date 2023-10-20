/* eslint-disable @next/next/no-img-element */
'use client'
import React from 'react';

function Review() {
  const reviews = [
    {
      text: "Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application.",
      author: "Micheal Gough",
      position: "CEO at Google",
      image: "/img/jhonxd.jpg",
    },
  ];

  return (
    <div className="max-w-screen-md my-10 mx-auto text-center">
        {reviews.map((review) => (
          <div className='' key={review}>
            <h1 className='text-white font-extrabold text-3xl mt-24 mb-16'>Lo que dicen <br /> nuestros clientes</h1>
            <div className=''>
              <svg className="w-10 h-10 mx-auto mb-3 text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
                <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"/>
              </svg>
              <blockquote>
                <p className="text-lg italic font-medium text-white">{review.text}</p>
              </blockquote>
              <figcaption className="flex items-center justify-center mt-6 space-x-3">
                <img className="w-6 h-6 rounded-full" src={review.image} alt="profile picture" />
                <div className="flex items-center divide-x-2 divide-gray-700">
                  <span className="pr-3 font-normal text-white">{review.author}</span>
                  <span className="pl-3 text-sm text-gray-400">{review.position}</span>
                </div>
              </figcaption>
            </div>
            
          </div>
        ))}
    </div>
  );
}

export default Review;
