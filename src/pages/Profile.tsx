
import { useState } from 'react';
import { User, Mail, Phone, Edit, Save, X } from 'lucide-react';
import Navigation from '@/components/Navigation';
import './Profile.css';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1 (555) 123-4567',
  });

  const handleSave = () => {
    setIsEditing(false);
    // Save profile logic here
    console.log('Profile saved:', profile);
  };

  const handleCancel = () => {
    setIsEditing(false);
    // Reset profile to original values if needed
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <Navigation />
      
      <main className="container mx-auto px-4 py-6">
        <div className="profile-container">
          <div className="profile-card">
            <div className="profile-header">
              <div className="avatar">
                <User className="avatar-icon" />
              </div>
              <div className="profile-info">
                <h2 className="profile-name">{profile.name}</h2>
                <p className="profile-status">FlowPay Member since 2024</p>
              </div>
              <button 
                className={`edit-btn ${isEditing ? 'cancel' : 'edit'}`}
                onClick={isEditing ? handleCancel : () => setIsEditing(true)}
              >
                {isEditing ? <X className="btn-icon" /> : <Edit className="btn-icon" />}
                {isEditing ? 'Cancel' : 'Edit'}
              </button>
            </div>

            <div className="profile-form">
              <div className="form-group">
                <label className="form-label">
                  <User className="label-icon" />
                  Full Name
                </label>
                {isEditing ? (
                  <input
                    type="text"
                    className="form-input"
                    value={profile.name}
                    onChange={(e) => setProfile({...profile, name: e.target.value})}
                  />
                ) : (
                  <div className="form-display">{profile.name}</div>
                )}
              </div>

              <div className="form-group">
                <label className="form-label">
                  <Mail className="label-icon" />
                  Email Address
                </label>
                {isEditing ? (
                  <input
                    type="email"
                    className="form-input"
                    value={profile.email}
                    onChange={(e) => setProfile({...profile, email: e.target.value})}
                  />
                ) : (
                  <div className="form-display">{profile.email}</div>
                )}
              </div>

              <div className="form-group">
                <label className="form-label">
                  <Phone className="label-icon" />
                  Phone Number
                </label>
                {isEditing ? (
                  <input
                    type="tel"
                    className="form-input"
                    value={profile.phone}
                    onChange={(e) => setProfile({...profile, phone: e.target.value})}
                  />
                ) : (
                  <div className="form-display">{profile.phone}</div>
                )}
              </div>

              {isEditing && (
                <button className="save-btn" onClick={handleSave}>
                  <Save className="btn-icon" />
                  Save Changes
                </button>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profile;
