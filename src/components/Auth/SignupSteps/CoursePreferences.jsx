import React, { useState } from 'react';
import CustomSelect from '../../Forms/CustomSelect';

const CoursePreferences = ({ formData, onUpdate, onNext, onBack, onSwitchToLogin }) => {
  const [localData, setLocalData] = useState({
    courseCategory: formData.courseCategory || '',
    college: formData.college || '',
    password: formData.password || '',
    confirmPassword: formData.confirmPassword || ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [passwordMatch, setPasswordMatch] = useState(true);

  const courseCategories = [
    { value: 'upsc', label: 'UPSC Civil Services', icon: '🏛️' },
    { value: 'ssc', label: 'SSC Exams', icon: '📊' },
    { value: 'banking', label: 'Banking & Finance', icon: '🏦' },
    { value: 'engineering', label: 'Engineering', icon: '⚙️' },
    { value: 'medical', label: 'Medical', icon: '🏥' },
    { value: 'management', label: 'Management', icon: '💼' },
  ];

  const colleges = [
    { value: 'iit-delhi', label: 'IIT Delhi' },
    { value: 'iit-bombay', label: 'IIT Bombay' },
    { value: 'iit-madras', label: 'IIT Madras' },
    { value: 'du', label: 'Delhi University' },
    { value: 'jnu', label: 'Jawaharlal Nehru University' },
    { value: 'other', label: 'Other' },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (localData.password !== localData.confirmPassword) {
      setPasswordMatch(false);
      return;
    }
    setPasswordMatch(true);
    setIsLoading(true);
    setTimeout(() => {
      onUpdate(localData);
      setIsLoading(false);
      onNext();
    }, 1500);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLocalData({
      ...localData,
      [name]: value
    });

    // Check password match in real time
    if (name === 'confirmPassword' || name === 'password') {
      if (name === 'confirmPassword') {
        setPasswordMatch(value === localData.password);
      } else {
        setPasswordMatch(localData.confirmPassword === value);
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <form onSubmit={handleSubmit} className="w-[98%] flex flex-col gap-4">
        {/* Course Category */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Course of interest</label>
          <CustomSelect
            name="courseCategory"
            value={localData.courseCategory}
            onChange={handleChange}
            required
            placeholder="Select your course category"
          >
            {courseCategories.map((category) => (
              <option key={category.value} value={category.value}>
                {category.label}
              </option>
            ))}
          </CustomSelect>
        </div>

        {/* College */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">College</label>
          <CustomSelect
            name="college"
            value={localData.college}
            onChange={handleChange}
            required
            placeholder="Select your college"
          >
            {colleges.map((college) => (
              <option key={college.value} value={college.value}>
                {college.label}
              </option>
            ))}
          </CustomSelect>
        </div>

        {/* Password */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Create a strong password"
            value={localData.password}
            onChange={handleChange}
            required
            minLength="6"
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700 placeholder-gray-400"
          />
        </div>

        {/* Confirm Password */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm password"
            value={localData.confirmPassword}
            onChange={handleChange}
            required
            minLength="6"
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700 placeholder-gray-400"
          />
          {localData.confirmPassword && !passwordMatch && (
            <p className="mt-1 text-xs text-red-600">Passwords do not match</p>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2 mt-4">
          <button
            type="button"
            onClick={onBack}
            className="bg-white flex-1 border border-gray-300 text-gray-700 py-2 rounded-xl font-semibold hover:bg-gray-50 transition-colors"
          >
            Back
          </button>
          <button
            type="submit"
            disabled={!passwordMatch || isLoading}
            className="flex-1 bg-blue-600 text-white py-2 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Creating Account...' : 'Continue'}
          </button>
        </div>
      </form>

      <div className="mt-6 text-center text-sm text-gray-600">
        Already have account?{' '}
        <button onClick={onSwitchToLogin} className="text-blue-600 hover:text-blue-700 font-semibold transition-colors bg-white p-0 m-0 outline-none focus:outline-none focus:ring-0 hover:outline-none active:outline-none shadow-none border-none" style={{ outline: 'none', boxShadow: 'none', border: 'none', WebkitTapHighlightColor: 'transparent', WebkitFocusRingColor: 'transparent' }} onFocus={e => e.target.blur()}>
          Sign in here
        </button>
      </div>
    </div>
  );
};

export default CoursePreferences;