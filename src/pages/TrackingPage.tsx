import React, { useState } from 'react';
import { userProfile } from '../data/userProfile';
import ProgressChart from '../components/ProgressChart';
import DailyLogForm from '../components/DailyLogForm';
import { WasteTrackingData } from '../types';
import { CheckCircle } from 'lucide-react';

const TrackingPage: React.FC = () => {
  const [trackingData, setTrackingData] = useState<WasteTrackingData[]>(userProfile.trackingData);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleLogSubmit = (data: { recyclable: number; compostable: number; hazardous: number; landfill: number }) => {
    const today = new Date().toISOString().split('T')[0];
    
    const newEntry: WasteTrackingData = {
      date: today,
      ...data
    };
    
    setTrackingData([...trackingData, newEntry]);
    setShowSuccessMessage(true);
    
    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 3000);
  };

  // Calculate statistics
  const calculateStats = () => {
    return trackingData.reduce(
      (acc, day) => {
        acc.totalWaste += day.recyclable + day.compostable + day.hazardous + day.landfill;
        acc.recycledWaste += day.recyclable;
        acc.compostedWaste += day.compostable;
        return acc;
      },
      { totalWaste: 0, recycledWaste: 0, compostedWaste: 0 }
    );
  };

  const stats = calculateStats();
  const divertedPercentage = Math.round(
    ((stats.recycledWaste + stats.compostedWaste) / stats.totalWaste) * 100
  );

  return (
    <div className="min-h-screen bg-gray-50 pb-16">
      {/* Header */}
      <div className="bg-green-800 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Track Your Waste</h1>
          <p className="text-green-100 text-lg max-w-3xl">
            Monitor your waste production, see your progress, and set goals to reduce your environmental footprint.
          </p>
        </div>
      </div>

      {/* Success Message */}
      {showSuccessMessage && (
        <div className="fixed top-24 right-4 bg-green-100 border-l-4 border-green-500 text-green-700 p-4 rounded shadow-md z-50 animate-fadeIn">
          <div className="flex">
            <div className="flex-shrink-0">
              <CheckCircle className="h-5 w-5 text-green-500" />
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium">Waste log added successfully!</p>
            </div>
          </div>
        </div>
      )}
      
      {/* Stats Overview */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-6">Your Impact Summary</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-sm font-medium text-gray-500">Total Waste</h3>
              <p className="text-2xl font-bold text-gray-800">{stats.totalWaste.toFixed(1)} kg</p>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="text-sm font-medium text-blue-700">Recycled</h3>
              <p className="text-2xl font-bold text-blue-800">{stats.recycledWaste.toFixed(1)} kg</p>
              <p className="text-sm text-blue-600">
                {Math.round((stats.recycledWaste / stats.totalWaste) * 100)}% of total
              </p>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="text-sm font-medium text-green-700">Composted</h3>
              <p className="text-2xl font-bold text-green-800">{stats.compostedWaste.toFixed(1)} kg</p>
              <p className="text-sm text-green-600">
                {Math.round((stats.compostedWaste / stats.totalWaste) * 100)}% of total
              </p>
            </div>
            
            <div className="bg-purple-50 p-4 rounded-lg">
              <h3 className="text-sm font-medium text-purple-700">Diverted from Landfill</h3>
              <p className="text-2xl font-bold text-purple-800">{divertedPercentage}%</p>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                <div 
                  className="bg-purple-600 h-2.5 rounded-full" 
                  style={{ width: `${divertedPercentage}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Progress Chart */}
          <div className="lg:col-span-2">
            <ProgressChart data={trackingData} />
            
            <div className="mt-8 bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Your Waste Reduction Goals</h2>
              
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700">Reduce landfill waste by 25%</span>
                    <span className="text-sm font-medium text-gray-700">64%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-green-600 h-2.5 rounded-full" style={{ width: '64%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700">Reach 75% recycling rate</span>
                    <span className="text-sm font-medium text-gray-700">48%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '48%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700">Compost 30% of total waste</span>
                    <span className="text-sm font-medium text-gray-700">83%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-amber-600 h-2.5 rounded-full" style={{ width: '83%' }}></div>
                  </div>
                </div>
              </div>
              
              <button className="mt-6 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors text-sm font-medium">
                Set New Goals
              </button>
            </div>
          </div>
          
          {/* Right Column - Daily Log Form */}
          <div>
            <DailyLogForm onSubmit={handleLogSubmit} />
            
            <div className="mt-8 bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Tips for Reducing Waste</h2>
              
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 bg-green-500 rounded-full text-white flex items-center justify-center text-xs">
                    1
                  </div>
                  <p className="ml-2 text-gray-700">Use reusable shopping bags instead of plastic ones.</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 bg-green-500 rounded-full text-white flex items-center justify-center text-xs">
                    2
                  </div>
                  <p className="ml-2 text-gray-700">Buy in bulk to reduce packaging waste.</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 bg-green-500 rounded-full text-white flex items-center justify-center text-xs">
                    3
                  </div>
                  <p className="ml-2 text-gray-700">Use a reusable water bottle instead of buying bottled water.</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 bg-green-500 rounded-full text-white flex items-center justify-center text-xs">
                    4
                  </div>
                  <p className="ml-2 text-gray-700">Compost food scraps to reduce landfill waste.</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 bg-green-500 rounded-full text-white flex items-center justify-center text-xs">
                    5
                  </div>
                  <p className="ml-2 text-gray-700">Repair items instead of replacing them when possible.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrackingPage;