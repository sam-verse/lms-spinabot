
import React, { useState } from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import CourseCard from '../components/Courses/CourseCard';


// Dummy data for demonstration
const courses = Array.from({ length: 8 }).map((_, i) => ({
  id: i + 1,
  title: 'UPSC Civil Services Complete Course',
  subtitle: 'Comprehensive preparation for UPSC CSE with expert faculty',
  category: 'UPSC',
  featured: true,
  discount: '25% OFF',
  rating: 4.8,
  ratingCount: 1520,
  duration: '12 months',
  modules: 45,
  liveClasses: 120,
  price: '₹29,999',
  oldPrice: '₹39,999',
  teacher: 'Dr Rajesh Kumar Rao',
  languages: ['Hindi + English'],
  level: 'Advanced',
  tests: 25,
}));


const Courses = () => {
  const [viewMode, setViewMode] = useState('grid');
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <main className="flex-1 max-w-7xl mx-auto w-full px-2 md:px-8 py-8">
        <h2 className="text-2xl font-bold mb-1 mt-2">Course Catalog</h2>
        <p className="text-gray-500 mb-6">Discover the perfect course to achieve your career goals.</p>
        {/* Filters */}
        <div className="bg-white rounded-xl shadow flex flex-wrap gap-2 md:gap-4 items-center px-4 py-4 mb-6">
          <input type="text" placeholder="Search Courses..." className="border border-gray-200 rounded px-3 py-2 w-48 text-sm" />
          <select className="border border-gray-200 rounded px-3 py-2 text-sm">
            <option>Category</option>
            <option>UPSC</option>
            <option>SSC</option>
          </select>
          <select className="border border-gray-200 rounded px-3 py-2 text-sm">
            <option>Level</option>
            <option>Beginner</option>
            <option>Advanced</option>
            <option>All Levels</option>
          </select>
          <select className="border border-gray-200 rounded px-3 py-2 text-sm">
            <option>Sort by</option>
            <option>Featured</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </select>
          <div className="ml-auto flex gap-2">
            <button
              className={`px-3 py-1 rounded text-xs font-semibold ${viewMode === 'grid' ? 'bg-black text-white' : 'bg-gray-200 text-black'}`}
              onClick={() => setViewMode('grid')}
            >
              Grid
            </button>
            <button
              className={`px-3 py-1 rounded text-xs font-semibold ${viewMode === 'list' ? 'bg-black text-white' : 'bg-gray-200 text-black'}`}
              onClick={() => setViewMode('list')}
            >
              List
            </button>
          </div>
        </div>
        {/* Courses Grid or List */}
        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
            {courses.map(course => (
              <CourseCard key={course.id} {...course} listMode={false} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col gap-6">
            {courses.map(course => (
              <div key={course.id} className="w-full">
                <CourseCard {...course} listMode={true} />
              </div>
            ))}
          </div>
        )}
      </main>
      <Footer />
      {/* <div className="text-center text-xs text-gray-400 py-4">© {new Date().getFullYear()} ConnectTek. All rights reserved.</div> */}
    </div>
  );
};

export default Courses;
