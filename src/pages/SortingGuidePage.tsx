import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { wasteTypes } from '../data/wasteTypes';
import WasteCard from '../components/WasteCard';
import WasteDetail from '../components/WasteDetail';
import ImageAnalyzer from '../components/ImageAnalyzer';
import { WasteType } from '../types';

const SortingGuidePage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState<string>('all');
  const [selectedWaste, setSelectedWaste] = useState<WasteType | null>(null);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const filteredWasteTypes = wasteTypes.filter(waste => {
    const matchesSearch = waste.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          waste.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filter === 'all' || waste.category === filter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-gray-50 pb-16">
      {/* Header */}
      <div className="bg-green-800 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Waste Sorting Guide</h1>
          <p className="text-green-100 text-lg max-w-3xl">
            Learn how to properly sort your household waste with our comprehensive guide. 
            Use our image analysis tool to identify waste types or browse our sorting guide.
          </p>
        </div>
      </div>
      
      {/* Image Analyzer Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 mb-8">
        <ImageAnalyzer />
      </div>
      
      {/* Search and Filters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="relative flex-grow max-w-3xl">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search for waste items..."
                value={searchTerm}
                onChange={handleSearch}
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
              />
            </div>
            
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setFilter('all')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  filter === 'all'
                    ? 'bg-green-600 text-white'
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}
              >
                All
              </button>
              <button
                onClick={() => setFilter('recyclable')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  filter === 'recyclable'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}
              >
                Recyclable
              </button>
              <button
                onClick={() => setFilter('compostable')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  filter === 'compostable'
                    ? 'bg-green-600 text-white'
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}
              >
                Compostable
              </button>
              <button
                onClick={() => setFilter('hazardous')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  filter === 'hazardous'
                    ? 'bg-red-600 text-white'
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}
              >
                Hazardous
              </button>
              <button
                onClick={() => setFilter('landfill')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  filter === 'landfill'
                    ? 'bg-gray-600 text-white'
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}
              >
                Landfill
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Waste Items Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredWasteTypes.length > 0 ? (
            filteredWasteTypes.map((waste) => (
              <WasteCard 
                key={waste.id} 
                waste={waste} 
                onClick={() => setSelectedWaste(waste)}
              />
            ))
          ) : (
            <div className="col-span-full py-10 text-center">
              <p className="text-gray-500 text-lg">
                No waste items match your search. Try a different search term or filter.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Tips Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="bg-blue-50 rounded-lg p-6 border border-blue-100">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Pro Tips for Waste Sorting</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium text-gray-800 mb-2">Before Recycling:</h3>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>Rinse food containers to remove food residue</li>
                <li>Remove plastic caps from glass bottles</li>
                <li>Flatten cardboard boxes to save space</li>
                <li>Don't bag recyclables - keep them loose in the bin</li>
                <li>Keep paper dry and clean</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-medium text-gray-800 mb-2">Common Mistakes to Avoid:</h3>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>Pizza boxes with grease stains can't be recycled</li>
                <li>Bottle caps are often made of different materials than bottles</li>
                <li>Plastic bags clog recycling machinery</li>
                <li>Tissues and paper towels are not recyclable</li>
                <li>Not all plastic is recyclable - check the numbers (1-7)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      {/* Waste Detail Modal */}
      {selectedWaste && (
        <WasteDetail 
          waste={selectedWaste} 
          onClose={() => setSelectedWaste(null)} 
        />
      )}
    </div>
  );
};

export default SortingGuidePage;