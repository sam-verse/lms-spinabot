import React from 'react';
import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import FeaturedCourses from '../components/FeaturedCourses/FeaturedCourses';
import TestSeries from '../components/TestSeries/TestSeries';
import CTA from '../components/CTA/CTA';
import Footer from '../components/Footer/Footer';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <FeaturedCourses />
      <TestSeries />
      <CTA />
      <Footer />
    </div>
  );
};

export default Home;