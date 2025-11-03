import React from 'react';
import { Clock, Users, Star, ShoppingCart } from 'lucide-react';

const FeaturedCourses = () => {
  const courses = [
    {
      id: 1,
      title: "UPSC Civil Services Courses",
      description: "Comprehensive preparation for UPSC CSE with expert faculty and verified content",
      duration: "12 months",
      students: "15,245",
      rating: 4.8,
      price: "24,999",
      image: "https://img.freepik.com/free-photo/stack-books-with-library-scene_91128-4327.jpg?t=st=1762166110~exp=1762169710~hmac=186f6c79a07c30432214b3e6195fa60159fc35d1bb924609c4139e6c350b3465&w=1480"
    },
    {
      id: 2,
      title: "SSC CGL Complete Package", 
      description: "All in one solution for SSC CGL with mock tests and detailed solutions",
      duration: "08 months",
      students: "19,245",
      rating: 4.5,
      price: "24,999",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=200&fit=crop"
    },
    {
      id: 3,
      title: "CAT MBA Preparation",
      description: "Complete CAT preparation with quantitative aptitude, verbal ability and logical reasoning",
      duration: "12 months",
      students: "15,245", 
      rating: 4.2,
      price: "24,999",
      image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=300&h=200&fit=crop"
    }
  ];

  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Courses</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Choose from our most popular courses designed by expert faculty with proven track records
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map(course => (
            <div key={course.id} className="bg-white rounded-md shadow-sm overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{course.title}</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{course.description}</p>
                
                <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>{course.students}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="font-medium text-gray-900">{course.rating}</span>
                  </div>
                  <div className="text-2xl font-semibold" style={{color: '#F98F14'}}>{course.price}</div>
                </div>
                
                <button style={{backgroundColor: '#F98F14'}} className="w-full text-white py-3 rounded-md font-semibold hover:opacity-90 transition-colors flex items-center justify-center gap-2">
                  <img src="/enroll-icon.svg" alt="" />
                  Enroll Now
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-white border-2 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:opacity-80 transition-colors" style={{borderColor: '#F98F14', color: '#F98F14'}}>
            View All Courses
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;