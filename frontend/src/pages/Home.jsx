import React from 'react';
import { Hero } from '../components/Hero';
import Latestcollection from '../components/Latestcollection'; // ✅ fixed
import Bestseller from '../components/Bestseller';
import { Ourpolicy } from '../components/Ourpolicy';
import { NewsletterBox } from '../components/NewsletterBox';

export const Home = () => {
  return (
    <div>
      <Hero />
      <Latestcollection />
      <Bestseller/>
      <Ourpolicy/>
      <NewsletterBox/>
   
    </div>
  );
};
