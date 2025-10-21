import React, { useState } from 'react';
import { recyclingCenters } from '../data/recyclingCenters';
import RecyclingCenterCard from '../components/RecyclingCenterCard';
import { Search, MapPin } from 'lucide-react';

const RecyclingCentersPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterItems, setFilterItems] = useState<string[]>([]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const toggleFilterItem = (item: string) => {
    if (filterItems.includes(item)) {
      setFilterItems(filterItems.filter(i => i !== item));
    } else {
      setFilterItems([...filterItems, item]);
    }
  };

  const allAcceptedItems = Array.from(
    new Set(recyclingCenters.flatMap(center => center.acceptedItems))
  ).sort();

  const filteredCenters = recyclingCenters.filter(center => {
    const matchesSearch = center.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          center.address.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesFilter = filterItems.length === 0 || 
                          filterItems.every(item => center.acceptedItems.includes(item));
    
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-gray-50 pb-16">
      {/* Header */}
      <div className="bg-green-800 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Recycling Centers</h1>
          <p className="text-green-100 text-lg max-w-3xl">
            Find recycling centers near you that accept specific types of waste. Drop off items that can't 
            be included in your regular curbside recycling.
          </p>
        </div>
      </div>
      
      {/* Search and Filters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex flex-col lg:flex-row lg:items-start gap-6">
            <div className="lg:w-1/3">
              <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">
                Search Location
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="search"
                  type="text"
                  placeholder="Enter city, address or center name..."
                  value={searchTerm}
                  onChange={handleSearch}
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                />
              </div>
            </div>
            
            <div className="lg:w-2/3">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Filter by Accepted Items
              </label>
              <div className="flex flex-wrap gap-2">
                {allAcceptedItems.map((item) => (
                  <button
                    key={item}
                    onClick={() => toggleFilterItem(item)}
                    className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                      filterItems.includes(item)
                        ? 'bg-green-600 text-white'
                        : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCenters.length > 0 ? (
            filteredCenters.map((center) => (
              <RecyclingCenterCard key={center.id} center={center} />
            ))
          ) : (
            <div className="col-span-full py-10 text-center">
              <div className="inline-flex items-center justify-center p-3 bg-amber-100 rounded-full mb-4">
                <MapPin className="h-7 w-7 text-amber-600" />
              </div>
              <p className="text-gray-500 text-lg mb-2">
                No recycling centers match your search criteria.
              </p>
              <p className="text-gray-600">
                Try adjusting your filters or search a different location.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Map Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Map View</h2>
          <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
            <p className="text-gray-500">Map integration would be displayed here.</p>
            <p className="text-gray-500 text-sm">
              (This would show the locations of the recycling centers on a map.)
            </p>
          </div>
        </div>
      </div>

      {/* Additional Resources */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="bg-blue-50 rounded-lg p-6 border border-blue-100">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Additional Resources</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium text-gray-800 mb-2">Hazardous Waste Collection Events</h3>
              <p className="text-gray-700 mb-4">
                Many communities host special collection events for hazardous waste items that cannot be disposed of in regular trash or recycling.
              </p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors text-sm font-medium">
                Find Upcoming Events
              </button>
            </div>
            
            <div>
              <h3 className="font-medium text-gray-800 mb-2">Retailer Take-Back Programs</h3>
              <p className="text-gray-700 mb-4">
                Many retailers offer take-back programs for specific items like electronics, batteries, and light bulbs.
              </p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors text-sm font-medium">
                View Participating Retailers
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecyclingCentersPage;