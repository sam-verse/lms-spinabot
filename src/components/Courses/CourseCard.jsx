
import React from 'react';
import { Star, Clock, Layers, Users } from 'lucide-react';

const CourseCard = ({
  title = 'UPSC Civil Services Complete Course',
  subtitle = 'Comprehensive preparation for UPSC CSE with expert faculty',
  category = 'UPSC',
  featured = true,
  discount = '25% OFF',
  rating = 4.8,
  ratingCount = 1520,
  duration = '12 months',
  modules = 45,
  liveClasses = 120,
  price = '₹29,999',
  oldPrice = '₹39,999',
  teacher = 'Dr Rajesh Kumar Rao',
  languages = ['Hindi + English'],
  level = 'Advanced',
  tests = 25,
  listMode = false,
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col min-h-[480px] w-full border border-gray-100" style={{boxShadow:'0 4px 24px 0 rgba(31,38,135,0.08)'}}>
      {/* Course image with overlayed badges */}
      <div className={`relative w-full ${listMode ? 'h-64' : 'h-40'}`}>
        <img
          src="https://img.freepik.com/free-photo/stack-books-with-library-scene_91128-4327.jpg?t=st=1762166110~exp=1762169710~hmac=186f6c79a07c30432214b3e6195fa60159fc35d1bb924609c4139e6c350b3465&w=1480"
          alt={title}
          className={`w-full object-cover rounded-t-2xl ${listMode ? 'h-64' : 'h-40'}`}
          style={{objectPosition: 'center'}}
        />
        <div className="absolute top-3 left-6 flex gap-2">
          {featured && <span className="bg-yellow-400 text-xs font-semibold px-3 py-1 rounded-lg text-white">Featured</span>}
          {discount && <span className="bg-red-500 text-xs font-semibold px-3 py-1 rounded-lg text-white">{discount}</span>}
        </div>
      </div>
      {/* Main content */}
      <div className="flex-1 flex flex-col px-6 pb-6 pt-5">
        <div className="flex items-start justify-between mb-2">
          <span className="font-bold text-lg text-gray-900 leading-tight">
            {(() => {
              const words = title.split(' ');
              if (words.length <= 3) return title;
              return (
                <>
                  {words.slice(0, 3).join(' ')}
                </>
              );
            })()}
          </span>
          <span className="bg-gray-200 text-xs font-semibold px-3 py-1 rounded text-gray-700 ml-2 whitespace-nowrap self-center">{category}</span>
        </div>
        <h3 className="font-bold text-lg text-gray-900 leading-tight mb-2" style={{marginTop: '-0.5rem'}}>
          {(() => {
            const words = title.split(' ');
            if (words.length <= 3) return null;
            return words.slice(3).join(' ');
          })()}
        </h3>
        <p className="text-sm text-gray-500 mb-4">
          {(() => {
            const words = subtitle.split(' ');
            if (words.length <= 3) return subtitle;
            return (
              <>
                {words.slice(0, 3).join(' ')}<br />
                {words.slice(3).join(' ')}
              </>
            );
          })()}
        </p>
        
        {/* Stats in left-right layout */}
        <div className="flex justify-between items-start mb-7">
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-1 text-gray-700 text-sm">
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              <span className="font-semibold">{rating}</span>
              <span className="text-gray-500">({ratingCount.toLocaleString()})</span>
            </div>
            <div className="flex items-center gap-1 text-gray-700 text-sm">
              <Layers className="w-4 h-4" />
              <span>{modules} Modules</span>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-1 text-gray-700 text-sm">
              <Clock className="w-4 h-4" />
              <span>{duration}</span>
            </div>
            <div className="flex items-center gap-1 text-gray-700 text-sm">
              <Users className="w-4 h-4" />
              <span>{liveClasses} Live Classes</span>
            </div>
          </div>
        </div>
        
        <div className="flex justify-between items-start mb-4">
          <div>
            <div className="flex items-end gap-3 mb-3">
              <span className="text-green-600 font-bold text-2xl">{price}</span>
              <span className="text-gray-400 line-through text-lg">{oldPrice}</span>
            </div>
            <div className="text-sm text-gray-700">
              by {(() => {
                const parts = teacher.trim().split(' ');
                if (parts.length === 2) {
                  return <>{parts[0]}<br />{parts[1]}</>;
                }
                return teacher;
              })()}
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-regular text-sm shadow hover:opacity-90 transition">View Details</button>
            <button className="bg-white border border-gray-300 text-gray-900 px-6 py-2 rounded-lg font-regular text-sm shadow hover:bg-gray-50 transition">Enroll Now</button>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-3 mt-5">
          {languages.map((lang, i) => (
            <span key={i} className="bg-white border border-gray-300 px-3 py-1 rounded-lg text-xs font-medium">{lang}</span>
          ))}
          <span className="bg-white border border-gray-300 px-3 py-1 rounded-lg text-xs font-medium">{level}</span>
          <span className="bg-white border border-gray-300 px-3 py-1 rounded-lg text-xs font-medium">{tests} Tests</span>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
