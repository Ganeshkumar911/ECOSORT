import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Play, FileText, Download, ArrowRight } from 'lucide-react';

const EducationPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 pb-16">
      {/* Header */}
      <div className="bg-green-800 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Learn About Waste Management</h1>
          <p className="text-green-100 text-lg max-w-3xl">
            Explore educational resources to deepen your understanding of waste management, sustainability,
            and environmental impact.
          </p>
        </div>
      </div>

      {/* Featured Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2">
              <img 
                src="https://images.pexels.com/photos/2547565/pexels-photo-2547565.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
                alt="Waste management education" 
                className="h-full w-full object-cover"
              />
            </div>
            <div className="p-6 md:w-1/2">
              <span className="inline-block px-3 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded-full mb-3">
                Featured Course
              </span>
              <h2 className="text-2xl font-bold text-gray-800 mb-3">
                Zero Waste Living: A Beginner's Guide
              </h2>
              <p className="text-gray-600 mb-4">
                Learn how to significantly reduce your household waste through simple, practical steps.
                This comprehensive guide covers everything from shopping habits to composting.
              </p>
              <div className="flex flex-wrap gap-3 mb-4">
                <span className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded-md">
                  8 Modules
                </span>
                <span className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded-md">
                  4 Hours
                </span>
                <span className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded-md">
                  Beginner Friendly
                </span>
              </div>
              <button className="bg-green-600 text-white px-5 py-2 rounded-md hover:bg-green-700 transition-colors font-medium inline-flex items-center">
                Start Learning <ArrowRight size={16} className="ml-1" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Learning Modules */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Learning Modules</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Module 1 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <img 
              src="https://images.pexels.com/photos/802221/pexels-photo-802221.jpeg?auto=compress&cs=tinysrgb&w=600" 
              alt="Recycling basics" 
              className="h-48 w-full object-cover"
            />
            <div className="p-5">
              <div className="flex items-center mb-3">
                <BookOpen className="h-5 w-5 text-green-600" />
                <span className="ml-2 text-sm text-green-600 font-medium">Module</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Recycling Basics: What You Need to Know
              </h3>
              <p className="text-gray-600 mb-4">
                Learn the fundamentals of recycling, including what can and cannot be recycled,
                how the recycling process works, and common misconceptions.
              </p>
              <button className="text-green-600 hover:text-green-800 font-medium inline-flex items-center">
                Begin Module <ArrowRight size={16} className="ml-1" />
              </button>
            </div>
          </div>

          {/* Module 2 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <img 
              src="https://images.pexels.com/photos/5240544/pexels-photo-5240544.jpeg?auto=compress&cs=tinysrgb&w=600" 
              alt="Composting guide" 
              className="h-48 w-full object-cover"
            />
            <div className="p-5">
              <div className="flex items-center mb-3">
                <BookOpen className="h-5 w-5 text-green-600" />
                <span className="ml-2 text-sm text-green-600 font-medium">Module</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Home Composting: A Complete Guide
              </h3>
              <p className="text-gray-600 mb-4">
                Master the art of composting at home. This guide covers different composting
                methods, what materials to use, and troubleshooting common issues.
              </p>
              <button className="text-green-600 hover:text-green-800 font-medium inline-flex items-center">
                Begin Module <ArrowRight size={16} className="ml-1" />
              </button>
            </div>
          </div>

          {/* Module 3 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <img 
              src="https://images.pexels.com/photos/6963944/pexels-photo-6963944.jpeg?auto=compress&cs=tinysrgb&w=600" 
              alt="Environmental impact" 
              className="h-48 w-full object-cover"
            />
            <div className="p-5">
              <div className="flex items-center mb-3">
                <BookOpen className="h-5 w-5 text-green-600" />
                <span className="ml-2 text-sm text-green-600 font-medium">Module</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Understanding the Environmental Impact of Waste
              </h3>
              <p className="text-gray-600 mb-4">
                Explore how different types of waste affect our environment, from greenhouse
                gas emissions to pollution of water systems and natural habitats.
              </p>
              <button className="text-green-600 hover:text-green-800 font-medium inline-flex items-center">
                Begin Module <ArrowRight size={16} className="ml-1" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Video Resources */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Video Resources</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Video 1 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/3850512/pexels-photo-3850512.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="How recycling works" 
                className="h-40 w-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                <div className="bg-white bg-opacity-80 rounded-full p-2">
                  <Play className="h-8 w-8 text-green-600" />
                </div>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-medium text-gray-800 mb-1">
                How Recycling Actually Works
              </h3>
              <p className="text-sm text-gray-600">6:24 • 45K views</p>
            </div>
          </div>

          {/* Video 2 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/3850512/pexels-photo-3850512.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Zero waste home tour" 
                className="h-40 w-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                <div className="bg-white bg-opacity-80 rounded-full p-2">
                  <Play className="h-8 w-8 text-green-600" />
                </div>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-medium text-gray-800 mb-1">
                Zero Waste Home Tour
              </h3>
              <p className="text-sm text-gray-600">12:33 • 89K views</p>
            </div>
          </div>

          {/* Video 3 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/3850512/pexels-photo-3850512.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Composting for beginners" 
                className="h-40 w-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                <div className="bg-white bg-opacity-80 rounded-full p-2">
                  <Play className="h-8 w-8 text-green-600" />
                </div>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-medium text-gray-800 mb-1">
                Composting for Beginners
              </h3>
              <p className="text-sm text-gray-600">9:18 • 32K views</p>
            </div>
          </div>

          {/* Video 4 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/3850512/pexels-photo-3850512.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="DIY recycling projects" 
                className="h-40 w-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                <div className="bg-white bg-opacity-80 rounded-full p-2">
                  <Play className="h-8 w-8 text-green-600" />
                </div>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-medium text-gray-800 mb-1">
                5 DIY Recycling Projects
              </h3>
              <p className="text-sm text-gray-600">14:45 • 67K views</p>
            </div>
          </div>
        </div>
      </div>

      {/* Downloadable Resources */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Downloadable Resources</h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          {/* Resource 1 */}
          <div className="bg-white rounded-lg shadow-md p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-3">
              <FileText className="h-6 w-6 text-blue-600" />
              <span className="ml-2 text-sm text-blue-600 font-medium">PDF Guide</span>
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">
              Comprehensive Recycling Symbol Guide
            </h3>
            <p className="text-gray-600 mb-4 text-sm">
              A printable guide to all recycling symbols and what they mean for proper sorting.
            </p>
            <button className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center">
              Download PDF <Download size={16} className="ml-1" />
            </button>
          </div>

          {/* Resource 2 */}
          <div className="bg-white rounded-lg shadow-md p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-3">
              <FileText className="h-6 w-6 text-blue-600" />
              <span className="ml-2 text-sm text-blue-600 font-medium">Worksheet</span>
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">
              Household Waste Audit Worksheet
            </h3>
            <p className="text-gray-600 mb-4 text-sm">
              A step-by-step worksheet to help you conduct a waste audit in your home.
            </p>
            <button className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center">
              Download Worksheet <Download size={16} className="ml-1" />
            </button>
          </div>

          {/* Resource 3 */}
          <div className="bg-white rounded-lg shadow-md p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-3">
              <FileText className="h-6 w-6 text-blue-600" />
              <span className="ml-2 text-sm text-blue-600 font-medium">Checklist</span>
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">
              Zero Waste Shopping Checklist
            </h3>
            <p className="text-gray-600 mb-4 text-sm">
              A handy checklist for reducing packaging waste during your grocery shopping trips.
            </p>
            <button className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center">
              Download Checklist <Download size={16} className="ml-1" />
            </button>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="bg-green-50 rounded-lg p-6 border border-green-100">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Can pizza boxes be recycled?</h3>
              <p className="text-gray-700">
                Pizza boxes with grease stains should not be recycled as the oil contaminates the recycling process. However, clean parts of the box can be torn off and recycled separately.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">What happens to my recyclables after they're collected?</h3>
              <p className="text-gray-700">
                After collection, recyclables are taken to a Materials Recovery Facility (MRF) where they are sorted by type, cleaned, and processed into materials that can be used to make new products.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Can plastic bags be recycled in my curbside bin?</h3>
              <p className="text-gray-700">
                Most curbside recycling programs do not accept plastic bags as they can jam sorting machinery. Instead, many grocery stores offer plastic bag recycling programs.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">What is "wishcycling" and why is it harmful?</h3>
              <p className="text-gray-700">
                "Wishcycling" is the practice of putting items in recycling bins hoping they'll be recycled even when unsure. This is harmful because non-recyclable items contaminate the recycling stream and can damage equipment.
              </p>
            </div>
          </div>
          
          <Link to="/faq" className="mt-6 inline-block text-green-600 hover:text-green-800 font-medium">
            View all FAQs
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EducationPage;