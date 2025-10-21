import React from 'react';
import { RecyclingCenter } from '../types';
import { MapPin, Clock, Phone, Globe } from 'lucide-react';

interface RecyclingCenterCardProps {
  center: RecyclingCenter;
}

const RecyclingCenterCard: React.FC<RecyclingCenterCardProps> = ({ center }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="p-5">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{center.name}</h3>
        
        <div className="flex items-start mb-3">
          <MapPin className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
          <span className="ml-2 text-gray-700">{center.address}</span>
        </div>
        
        <div className="flex items-start mb-3">
          <Clock className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
          <span className="ml-2 text-gray-700">{center.hours}</span>
        </div>
        
        <div className="flex items-start mb-3">
          <Phone className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
          <span className="ml-2 text-gray-700">{center.phone}</span>
        </div>
        
        {center.website && (
          <div className="flex items-start mb-3">
            <Globe className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
            <a 
              href={center.website} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="ml-2 text-blue-600 hover:underline"
            >
              Visit Website
            </a>
          </div>
        )}
        
        <div className="mt-4">
          <h4 className="font-medium text-gray-700 mb-2">Accepted Items:</h4>
          <div className="flex flex-wrap gap-2">
            {center.acceptedItems.map((item, index) => (
              <span 
                key={index} 
                className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
      
      <div className="px-5 pb-5">
        <button className="w-full py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors">
          Get Directions
        </button>
      </div>
    </div>
  );
};

export default RecyclingCenterCard;