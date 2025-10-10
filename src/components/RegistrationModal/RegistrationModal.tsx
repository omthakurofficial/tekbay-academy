import React, { useState } from 'react';
import './RegistrationModal.css';

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  firstName: string;
  middleName: string;
  lastName: string;
  country: string;
  city: string;
  state: string;
  zipcode: string;
  phoneNumber: string;
  email: string;
  educationLevel: string;
  degreeName: string;
  learningPreference: string;
}

const RegistrationModal: React.FC<RegistrationModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    middleName: '',
    lastName: '',
    country: '',
    city: '',
    state: '',
    zipcode: '',
    phoneNumber: '',
    email: '',
    educationLevel: '',
    degreeName: '',
    learningPreference: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Validate required fields
      const requiredFields = {
        firstName: 'First Name',
        lastName: 'Last Name', 
        country: 'Country',
        city: 'City',
        state: 'State',
        zipcode: 'Zipcode',
        phoneNumber: 'Phone Number',
        email: 'Email Address',
        educationLevel: 'Education Level',
        learningPreference: 'Learning Preference'
      };

      for (const [field, label] of Object.entries(requiredFields)) {
        if (!formData[field as keyof FormData]) {
          alert(`Please fill in the ${label} field.`);
          setIsSubmitting(false);
          return;
        }
      }

      // Create formatted data for submission
      const submissionData = {
        personalInfo: {
          fullName: `${formData.firstName} ${formData.middleName} ${formData.lastName}`.trim(),
          firstName: formData.firstName,
          middleName: formData.middleName,
          lastName: formData.lastName
        },
        address: {
          country: formData.country,
          city: formData.city,
          state: formData.state,
          zipcode: formData.zipcode
        },
        contact: {
          phoneNumber: formData.phoneNumber,
          email: formData.email
        },
        education: {
          level: formData.educationLevel,
          degree: formData.degreeName
        },
        preferences: {
          learningType: formData.learningPreference
        },
        submissionDate: new Date().toISOString()
      };

      // For now, we'll create a formatted email as fallback
      // But you can replace this with an API call to your backend
      const subject = encodeURIComponent('TekBay AWS Apprenticeship Program Registration');
      const body = encodeURIComponent(`
New Registration for TekBay AWS Apprenticeship Program

PERSONAL INFORMATION:
Name: ${submissionData.personalInfo.fullName}
- First Name: ${formData.firstName}
- Middle Name: ${formData.middleName || 'N/A'}
- Last Name: ${formData.lastName}

ADDRESS:
- Country: ${formData.country}
- City: ${formData.city}
- State: ${formData.state}
- Zipcode: ${formData.zipcode}

CONTACT:
- Phone Number: ${formData.phoneNumber}
- Email Address: ${formData.email}

EDUCATION:
- Level: ${formData.educationLevel}
- Degree Name: ${formData.degreeName || 'N/A'}

LEARNING PREFERENCE:
- Interested in: ${formData.learningPreference}

Submitted on: ${new Date().toLocaleString()}

---
This registration was submitted through the TekBay website.
      `);

      // Show success message first
      setSubmitStatus('success');
      
      // Wait a moment, then open email client
      setTimeout(() => {
        const mailtoLink = `mailto:apprentice@tekbay.digital?subject=${subject}&body=${body}`;
        window.open(mailtoLink, '_blank');
      }, 1000);
      
      // Close modal after 3 seconds
      setTimeout(() => {
        onClose();
        setSubmitStatus('idle');
        setFormData({
          firstName: '',
          middleName: '',
          lastName: '',
          country: '',
          city: '',
          state: '',
          zipcode: '',
          phoneNumber: '',
          email: '',
          educationLevel: '',
          degreeName: '',
          learningPreference: ''
        });
      }, 3000);
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Join TekBay AWS Apprenticeship Program</h2>
          <button className="modal-close" onClick={onClose}>&times;</button>
        </div>

        <form className="registration-form" onSubmit={handleSubmit}>
          <div className="form-section">
            <h3>Legal Full Name</h3>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName">First Name *</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="middleName">Middle Name</label>
                <input
                  type="text"
                  id="middleName"
                  name="middleName"
                  value={formData.middleName}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name *</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
          </div>

          <div className="form-section">
            <h3>Address</h3>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="country">Country *</label>
                <input
                  type="text"
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="city">City *</label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="state">State *</label>
                <input
                  type="text"
                  id="state"
                  name="state"
                  value={formData.state}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="zipcode">Zipcode *</label>
                <input
                  type="text"
                  id="zipcode"
                  name="zipcode"
                  value={formData.zipcode}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
          </div>

          <div className="form-section">
            <h3>Contact Information</h3>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="phoneNumber">Phone Number *</label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Personal Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
          </div>

          <div className="form-section">
            <h3>Education</h3>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="educationLevel">Education Level *</label>
                <select
                  id="educationLevel"
                  name="educationLevel"
                  value={formData.educationLevel}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select Education Level</option>
                  <option value="High School">High School</option>
                  <option value="Associate Degree">Associate Degree</option>
                  <option value="Bachelor's Degree">Bachelor's Degree</option>
                  <option value="Master's Degree">Master's Degree</option>
                  <option value="Doctorate">Doctorate</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="degreeName">Degree Name</label>
                <input
                  type="text"
                  id="degreeName"
                  name="degreeName"
                  value={formData.degreeName}
                  onChange={handleInputChange}
                  placeholder="e.g., Computer Science, Engineering"
                />
              </div>
            </div>
          </div>

          <div className="form-section">
            <h3>Learning Preference</h3>
            <div className="form-group">
              <label htmlFor="learningPreference">Interested in *</label>
              <select
                id="learningPreference"
                name="learningPreference"
                value={formData.learningPreference}
                onChange={handleInputChange}
                required
              >
                <option value="">Select Learning Preference</option>
                <option value="In-person live classes">In-person live classes</option>
                <option value="Pre-recorded sessions">Pre-recorded sessions</option>
                <option value="Both">Both options</option>
              </select>
            </div>
          </div>

          <div className="form-actions">
            <div className="form-info">
              <p>🔒 Your information is secure and will be sent to apprentice@tekbay.digital</p>
            </div>
            {submitStatus === 'success' && (
              <div className="success-message">
                ✅ Registration submitted successfully! Your email client will open to send your application to apprentice@tekbay.digital
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="error-message">
                ❌ Please fill in all required fields and try again.
              </div>
            )}
            <button 
              type="submit" 
              className="submit-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Processing...' : 'Submit Application'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationModal;