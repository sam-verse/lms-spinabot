import React, { useState } from 'react';
import BasicInformation from './SignupSteps/BasicInformation';
import VerifyDetails from './SignupSteps/VerifyDetails';
import CoursePreferences from './SignupSteps/CoursePreferences';

const SignupForm = ({ onSuccess, onSwitchToLogin }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    mobileOTP: '',
    emailOTP: '',
    courseCategory: '',
    college: '',
    password: '',
    confirmPassword: ''
  });

  const totalSteps = 3;

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    } else {
      // Final step - complete signup
      onSuccess({ name: formData.name, email: formData.email });
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const updateFormData = (data) => {
    setFormData({ ...formData, ...data });
  };

  const getStepTitle = () => {
    switch (currentStep) {
      case 1: return 'Basic Information';
      case 2: return 'Verify Your Details';
      case 3: return 'Course Preferences';
      default: return '';
    }
  };

  const getStepDescription = () => {
    switch (currentStep) {
      case 1: return '';
      case 2: return 'We\'ve sent OTP to verify your phone and email';
      case 3: return 'Tell us about your learning goals';
      default: return '';
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <BasicInformation
            formData={formData}
            onUpdate={updateFormData}
            onNext={handleNext}
            onSwitchToLogin={onSwitchToLogin}
          />
        );
      case 2:
        return (
          <VerifyDetails
            formData={formData}
            onUpdate={updateFormData}
            onNext={handleNext}
            onBack={handleBack}
            onSwitchToLogin={onSwitchToLogin}
          />
        );
      case 3:
        return (
          <CoursePreferences
            formData={formData}
            onUpdate={updateFormData}
            onNext={handleNext}
            onBack={handleBack}
            onSwitchToLogin={onSwitchToLogin}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div>
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-2 font-poppins">{getStepTitle()}</h2>
        <p className="text-gray-600">{getStepDescription()}</p>
      </div>

      {/* Progress Indicator */}
      <div className="flex items-center justify-center mb-6">
        {[1, 2, 3].map((step) => (
          <React.Fragment key={step}>
            <div className="flex flex-col items-center">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold transition-all duration-300 ${
                  step <= currentStep
                    ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg'
                    : 'bg-gray-600 text-white'
                }`}
              >
                {step}
              </div>
             
            </div>
            {step < 3 && (
              <div
                className={`w-16 h-1 mx-2 rounded-md transition-all duration-300 ${
                  step < currentStep 
                    ? 'bg-gradient-to-r from-blue-600 to-blue-700' 
                    : 'bg-gray-200'
                }`}
              />
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Step Content */}
      <div className="min-h-[200px]">
        {renderStep()}
      </div>
    </div>
  );
};

export default SignupForm;