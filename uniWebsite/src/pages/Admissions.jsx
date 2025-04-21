//pages/Admissions.jsx
import { useState } from 'react';
import '../styles/Admissions.css';

const Admissions = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    personalInfo: {
      firstName: '',
      lastName: '',
      dateOfBirth: '',
      gender: '',
      nationality: '',
    },
    contactInfo: {
      email: '',
      phone: '',
      address: '',
      city: '',
      state: '',
      zipCode: '',
    },
    academicInfo: {
      highSchoolName: '',
      graduationYear: '',
      gpa: '',
      satScore: '',
      actScore: '',
    },
    programInfo: {
      program: '',
      semester: '',
      specialization: '',
    }
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (section, field, value) => {
    setFormData(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value
      }
    }));
  };

  const nextStep = () => {
    setStep(prev => prev + 1);
  };

  const prevStep = () => {
    setStep(prev => prev - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
  };

  const progressPercentage = ((step - 1) / 4) * 100;

  if (isSubmitted) {
    return (
      <div className="admissions-page">
        <div className="submission-success">
          <h2>Application Submitted Successfully!</h2>
          <p>Your application is under review. You will receive an email about your status soon.</p>
          <div className="success-icon">✓</div>
        </div>
      </div>
    );
  }

  return (
    <div className="admissions-page">
      <div className="admissions-header">
        <h1>Admissions</h1>
        <p>Join Evergreen University and start your journey toward excellence.</p>
      </div>

      <div className="admissions-process">
        <div className="process-steps">
          <div className="process-step">
            <div className="step-number">1</div>
            <h2>Submit Application</h2>
            <p>Complete the online application form and provide the required documents.</p>
          </div>
          <div className="process-step">
            <div className="step-number">2</div>
            <h2>Attend Interview</h2>
            <p>Participate in an interview to discuss your goals and aspirations.</p>
          </div>
          <div className="process-step">
            <div className="step-number">3</div>
            <h2>Receive Offer</h2>
            <p>Get your admission offer and start planning your future at Evergreen University.</p>
          </div>
        </div>
      </div>

      <div className="application-section">
        <h2>Start Your Application</h2>
        
        <div className="progress-bar">
          <div className="progress" style={{ width: `${progressPercentage}%` }}></div>
          <div className="steps">
            <div className={`step ${step >= 1 ? 'active' : ''}`}>
              <div className="step-circle">1</div>
              <div className="step-label">Personal Info</div>
            </div>
            <div className={`step ${step >= 2 ? 'active' : ''}`}>
              <div className="step-circle">2</div>
              <div className="step-label">Contact Info</div>
            </div>
            <div className={`step ${step >= 3 ? 'active' : ''}`}>
              <div className="step-circle">3</div>
              <div className="step-label">Academic Info</div>
            </div>
            <div className={`step ${step >= 4 ? 'active' : ''}`}>
              <div className="step-circle">4</div>
              <div className="step-label">Program Info</div>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="application-form">
          {step === 1 && (
            <div className="form-step">
              <h3>Personal Information</h3>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="First Name"
                  value={formData.personalInfo.firstName}
                  onChange={(e) => handleInputChange('personalInfo', 'firstName', e.target.value)}
                  required
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  value={formData.personalInfo.lastName}
                  onChange={(e) => handleInputChange('personalInfo', 'lastName', e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="date"
                  value={formData.personalInfo.dateOfBirth}
                  onChange={(e) => handleInputChange('personalInfo', 'dateOfBirth', e.target.value)}
                  required
                />
                <select
                  value={formData.personalInfo.gender}
                  onChange={(e) => handleInputChange('personalInfo', 'gender', e.target.value)}
                  required
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <input
                type="text"
                placeholder="Nationality"
                value={formData.personalInfo.nationality}
                onChange={(e) => handleInputChange('personalInfo', 'nationality', e.target.value)}
                required
              />
            </div>
          )}

          {step === 2 && (
            <div className="form-step">
              <h3>Contact Information</h3>
              <input
                type="email"
                placeholder="Email"
                value={formData.contactInfo.email}
                onChange={(e) => handleInputChange('contactInfo', 'email', e.target.value)}
                required
              />
              <input
                type="tel"
                placeholder="Phone Number"
                value={formData.contactInfo.phone}
                onChange={(e) => handleInputChange('contactInfo', 'phone', e.target.value)}
                required
              />
              <input
                type="text"
                placeholder="Address"
                value={formData.contactInfo.address}
                onChange={(e) => handleInputChange('contactInfo', 'address', e.target.value)}
                required
              />
              <div className="form-group">
                <input
                  type="text"
                  placeholder="City"
                  value={formData.contactInfo.city}
                  onChange={(e) => handleInputChange('contactInfo', 'city', e.target.value)}
                  required
                />
                <input
                  type="text"
                  placeholder="State"
                  value={formData.contactInfo.state}
                  onChange={(e) => handleInputChange('contactInfo', 'state', e.target.value)}
                  required
                />
              </div>
              <input
                type="text"
                placeholder="ZIP Code"
                value={formData.contactInfo.zipCode}
                onChange={(e) => handleInputChange('contactInfo', 'zipCode', e.target.value)}
                required
              />
            </div>
          )}

          {step === 3 && (
            <div className="form-step">
              <h3>Academic Information</h3>
              <input
                type="text"
                placeholder="High School Name"
                value={formData.academicInfo.highSchoolName}
                onChange={(e) => handleInputChange('academicInfo', 'highSchoolName', e.target.value)}
                required
              />
              <div className="form-group">
                <input
                  type="number"
                  placeholder="Graduation Year"
                  value={formData.academicInfo.graduationYear}
                  onChange={(e) => handleInputChange('academicInfo', 'graduationYear', e.target.value)}
                  required
                />
                <input
                  type="number"
                  step="0.01"
                  placeholder="GPA"
                  value={formData.academicInfo.gpa}
                  onChange={(e) => handleInputChange('academicInfo', 'gpa', e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="number"
                  placeholder="SAT Score"
                  value={formData.academicInfo.satScore}
                  onChange={(e) => handleInputChange('academicInfo', 'satScore', e.target.value)}
                />
                <input
                  type="number"
                  placeholder="ACT Score"
                  value={formData.academicInfo.actScore}
                  onChange={(e) => handleInputChange('academicInfo', 'actScore', e.target.value)}
                />
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="form-step">
              <h3>Program Information</h3>
              <select
                value={formData.programInfo.program}
                onChange={(e) => handleInputChange('programInfo', 'program', e.target.value)}
                required
              >
                <option value="">Select Program</option>
                <option value="computer-science">Computer Science</option>
                <option value="business">Business Administration</option>
                <option value="engineering">Engineering</option>
                <option value="arts">Arts & Humanities</option>
              </select>
              <select
                value={formData.programInfo.semester}
                onChange={(e) => handleInputChange('programInfo', 'semester', e.target.value)}
                required
              >
                <option value="">Select Semester</option>
                <option value="fall">Fall 2024</option>
                <option value="spring">Spring 2025</option>
                <option value="summer">Summer 2025</option>
              </select>
              <input
                type="text"
                placeholder="Specialization (if any)"
                value={formData.programInfo.specialization}
                onChange={(e) => handleInputChange('programInfo', 'specialization', e.target.value)}
              />
            </div>
          )}

          <div className="form-navigation">
            {step > 1 && (
              <button type="button" onClick={prevStep} className="btn btn-secondary">
                Previous
              </button>
            )}
            {step < 4 ? (
              <button type="button" onClick={nextStep} className="btn btn-primary">
                Next
              </button>
            ) : (
              <button type="submit" className="btn btn-primary">
                Submit Application
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Admissions;
