import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Recycle, Map, BookOpen, BarChart } from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-green-800 text-white">
        <div 
          className="absolute inset-0 z-0 opacity-20"
          style={{
            backgroundImage: "url('https://images.pexels.com/photos/802221/pexels-photo-802221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 animate-fadeIn">
              Sort Smarter, <span className="text-green-300">Live Greener</span>
            </h1>
            <p className="text-xl mb-8 text-green-50 animate-fadeIn animation-delay-200">
              Join thousands of households making a positive environmental impact through proper waste management.
            </p>
            <div className="flex space-x-4 animate-fadeIn animation-delay-400">
              <Link 
                to="/sorting-guide" 
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors shadow-lg hover:shadow-xl"
              >
                Get Started
              </Link>
              <Link 
                to="/education" 
                className="bg-transparent border-2 border-green-300 text-green-300 px-6 py-3 rounded-lg font-medium hover:bg-green-900 hover:bg-opacity-50 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white to-transparent"></div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How EcoSort Helps You</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our easy-to-use platform provides all the tools you need to make sustainable waste management a part of your daily routine.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div className="bg-blue-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow animate-fadeUp">
              <div className="inline-flex items-center justify-center p-3 bg-blue-100 rounded-full mb-4">
                <Recycle className="h-7 w-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Sorting Guide</h3>
              <p className="text-gray-600 mb-4">Learn how to properly sort different types of waste with our comprehensive guide.</p>
              <Link to="/sorting-guide" className="text-blue-600 hover:text-blue-800 inline-flex items-center font-medium">
                Explore Guide <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>

            {/* Feature 2 */}
            <div className="bg-green-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow animate-fadeUp animation-delay-200">
              <div className="inline-flex items-center justify-center p-3 bg-green-100 rounded-full mb-4">
                <BarChart className="h-7 w-7 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Waste Tracking</h3>
              <p className="text-gray-600 mb-4">Monitor your waste reduction progress and set personal sustainability goals.</p>
              <Link to="/tracking" className="text-green-600 hover:text-green-800 inline-flex items-center font-medium">
                Track Waste <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>

            {/* Feature 3 */}
            <div className="bg-amber-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow animate-fadeUp animation-delay-400">
              <div className="inline-flex items-center justify-center p-3 bg-amber-100 rounded-full mb-4">
                <Map className="h-7 w-7 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Recycling Centers</h3>
              <p className="text-gray-600 mb-4">Find nearby recycling centers and learn what materials they accept.</p>
              <Link to="/centers" className="text-amber-600 hover:text-amber-800 inline-flex items-center font-medium">
                Find Centers <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>

            {/* Feature 4 */}
            <div className="bg-purple-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow animate-fadeUp animation-delay-600">
              <div className="inline-flex items-center justify-center p-3 bg-purple-100 rounded-full mb-4">
                <BookOpen className="h-7 w-7 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Learning Resources</h3>
              <p className="text-gray-600 mb-4">Deepen your understanding of waste management and environmental impact.</p>
              <Link to="/education" className="text-purple-600 hover:text-purple-800 inline-flex items-center font-medium">
                Learn More <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Impact Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="lg:w-1/2 mb-10 lg:mb-0">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Make a Real Impact</h2>
              <p className="text-lg text-gray-600 mb-6">
                Every piece of waste properly sorted makes a difference. Join our community of eco-conscious individuals making the world a cleaner place.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 bg-green-500 rounded-full text-white flex items-center justify-center">
                    <span className="text-sm font-bold">1</span>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-800">Reduce Landfill Waste</h4>
                    <p className="mt-1 text-gray-600">When you properly sort recyclables and compostables, you significantly reduce what goes to landfills.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 bg-green-500 rounded-full text-white flex items-center justify-center">
                    <span className="text-sm font-bold">2</span>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-800">Conserve Resources</h4>
                    <p className="mt-1 text-gray-600">Recycling conserves natural resources and reduces the energy needed to produce new materials.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 bg-green-500 rounded-full text-white flex items-center justify-center">
                    <span className="text-sm font-bold">3</span>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-800">Reduce Pollution</h4>
                    <p className="mt-1 text-gray-600">Proper waste management reduces greenhouse gas emissions and prevents toxic substances from entering our environment.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-5/12">
              <div className="rounded-xl overflow-hidden shadow-xl">
                <img 
                  src="https://thaka.bing.com/th/id/OIP.CYyxyseBSiYt2vuN2jePSgHaFj?rs=1&pid=ImgDetMain" 
                  alt="Environmental impact" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-green-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Make a Difference?</h2>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
            Start using EcoSort today and join thousands of households reducing their environmental footprint.
          </p>
          <Link
            to="/sorting-guide"
            className="inline-block bg-white text-green-700 px-8 py-3 rounded-lg font-medium hover:bg-green-50 transition-colors shadow-lg hover:shadow-xl"
          >
            Get Started Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;