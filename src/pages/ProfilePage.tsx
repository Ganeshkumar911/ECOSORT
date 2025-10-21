import React from 'react';
import { userProfile } from '../data/userProfile';
import AchievementCard from '../components/AchievementCard';
import { Award, Leaf, Recycle, Calendar } from 'lucide-react';

const ProfilePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 pb-16">
      {/* Header */}
      <div className="bg-green-800 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">My Profile</h1>
          <p className="text-green-100 text-lg max-w-3xl">
            Track your progress, view your achievements, and manage your account settings.
          </p>
        </div>
      </div>

      {/* Profile Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
        <div className="bg-white rounded-lg shadow-md">
          <div className="md:flex">
            <div className="md:w-1/3 p-6 border-b md:border-b-0 md:border-r border-gray-200">
              <div className="flex flex-col items-center">
                <img 
                  src={userProfile.avatar} 
                  alt={userProfile.name} 
                  className="h-32 w-32 rounded-full object-cover mb-4"
                />
                <h2 className="text-2xl font-bold text-gray-800">{userProfile.name}</h2>
                <p className="text-gray-600 mb-4">Eco Warrior</p>
                <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium inline-flex items-center">
                  <Leaf className="h-4 w-4 mr-1" /> Level 3
                </div>
                <button className="mt-6 bg-gray-100 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-200 transition-colors w-full">
                  Edit Profile
                </button>
              </div>
            </div>
            <div className="md:w-2/3 p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Your Impact Stats</h3>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-green-50 p-4 rounded-lg text-center">
                  <Recycle className="h-6 w-6 text-green-600 mx-auto mb-2" />
                  <h4 className="text-2xl font-bold text-green-800">{userProfile.stats.totalWasteReduced}</h4>
                  <p className="text-sm text-gray-600">kg waste reduced</p>
                </div>
                
                <div className="bg-blue-50 p-4 rounded-lg text-center">
                  <Recycle className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                  <h4 className="text-2xl font-bold text-blue-800">{userProfile.stats.recyclablesCollected}</h4>
                  <p className="text-sm text-gray-600">kg recycled</p>
                </div>
                
                <div className="bg-amber-50 p-4 rounded-lg text-center">
                  <Leaf className="h-6 w-6 text-amber-600 mx-auto mb-2" />
                  <h4 className="text-2xl font-bold text-amber-800">{userProfile.stats.compostCreated}</h4>
                  <p className="text-sm text-gray-600">kg composted</p>
                </div>
                
                <div className="bg-purple-50 p-4 rounded-lg text-center">
                  <Calendar className="h-6 w-6 text-purple-600 mx-auto mb-2" />
                  <h4 className="text-2xl font-bold text-purple-800">{userProfile.stats.streakDays}</h4>
                  <p className="text-sm text-gray-600">day streak</p>
                </div>
              </div>
              
              <div className="bg-green-50 rounded-lg p-4 border border-green-100">
                <div className="flex items-start">
                  <Leaf className="h-6 w-6 text-green-600 mt-1" />
                  <div className="ml-3">
                    <h4 className="font-medium text-gray-800">Environmental Impact</h4>
                    <p className="text-sm text-gray-600 mt-1">
                      Your waste reduction efforts have saved the equivalent of 3 trees and prevented 45 kg of CO₂ emissions!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Achievements Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-gray-800">Your Achievements</h3>
            <div className="flex items-center">
              <Award className="h-5 w-5 text-yellow-500" />
              <span className="ml-1 text-gray-600">
                {userProfile.achievements.filter(a => a.unlocked).length}/{userProfile.achievements.length} Unlocked
              </span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {userProfile.achievements.map((achievement) => (
              <AchievementCard key={achievement.id} achievement={achievement} />
            ))}
          </div>
        </div>
      </div>

      {/* Settings Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Account Settings</h3>
          
          <div className="divide-y divide-gray-200">
            <div className="py-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-gray-800">Email Notifications</h4>
                  <p className="text-sm text-gray-600 mt-1">
                    Receive updates on your progress and tips for waste reduction.
                  </p>
                </div>
                <div className="relative inline-block w-12 h-6 ml-4">
                  <input 
                    type="checkbox" 
                    id="toggle-email" 
                    className="sr-only" 
                    defaultChecked 
                  />
                  <label 
                    htmlFor="toggle-email" 
                    className="block bg-gray-200 absolute cursor-pointer rounded-full h-6 w-12 transition-colors duration-300 checked:bg-green-500"
                  >
                    <span 
                      className="absolute left-1 top-1 bg-white h-4 w-4 rounded-full transition-transform duration-300 transform checked:translate-x-6" 
                    ></span>
                  </label>
                </div>
              </div>
            </div>
            
            <div className="py-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-gray-800">Weekly Report</h4>
                  <p className="text-sm text-gray-600 mt-1">
                    Get a weekly summary of your waste tracking and achievements.
                  </p>
                </div>
                <div className="relative inline-block w-12 h-6 ml-4">
                  <input 
                    type="checkbox" 
                    id="toggle-report" 
                    className="sr-only" 
                    defaultChecked 
                  />
                  <label 
                    htmlFor="toggle-report" 
                    className="block bg-gray-200 absolute cursor-pointer rounded-full h-6 w-12 transition-colors duration-300 checked:bg-green-500"
                  >
                    <span 
                      className="absolute left-1 top-1 bg-white h-4 w-4 rounded-full transition-transform duration-300 transform checked:translate-x-6" 
                    ></span>
                  </label>
                </div>
              </div>
            </div>
            
            <div className="py-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-gray-800">Local Alerts</h4>
                  <p className="text-sm text-gray-600 mt-1">
                    Get notified about recycling events and programs in your area.
                  </p>
                </div>
                <div className="relative inline-block w-12 h-6 ml-4">
                  <input 
                    type="checkbox" 
                    id="toggle-alerts" 
                    className="sr-only" 
                  />
                  <label 
                    htmlFor="toggle-alerts" 
                    className="block bg-gray-200 absolute cursor-pointer rounded-full h-6 w-12 transition-colors duration-300 checked:bg-green-500"
                  >
                    <span 
                      className="absolute left-1 top-1 bg-white h-4 w-4 rounded-full transition-transform duration-300 transform checked:translate-x-6" 
                    ></span>
                  </label>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-6">
            <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors">
              Save Settings
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;