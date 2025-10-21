import React, { useRef, useState, useCallback } from 'react';
import Webcam from 'react-webcam';
import * as tf from '@tensorflow/tfjs';
import { Camera, RefreshCw, Image as ImageIcon } from 'lucide-react';

const ImageAnalyzer: React.FC = () => {
  const webcamRef = useRef<Webcam>(null);
  const [image, setImage] = useState<string | null>(null);
  const [prediction, setPrediction] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const captureImage = useCallback(() => {
    const imageSrc = webcamRef.current?.getScreenshot();
    if (imageSrc) {
      setImage(imageSrc);
      analyzeImage(imageSrc);
    }
  }, [webcamRef]);

  const analyzeImage = async (imageSrc: string) => {
    setIsAnalyzing(true);
    try {
      // Load the image
      const img = new Image();
      img.src = imageSrc;
      await img.decode();

      // Create a tensor from the image
      const tensor = tf.browser.fromPixels(img)
        .resizeNearestNeighbor([224, 224])
        .toFloat()
        .expandDims();

      // For demo purposes, we'll simulate classification
      // In production, you would load a trained model:
      // const model = await tf.loadLayersModel('path/to/model');
      // const prediction = await model.predict(tensor);
      
      // Simulate processing time
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Mock classification result
      const wasteTypes = ['recyclable', 'compostable', 'hazardous', 'landfill'];
      const randomType = wasteTypes[Math.floor(Math.random() * wasteTypes.length)];
      setPrediction(randomType);
    } catch (error) {
      console.error('Error analyzing image:', error);
      setPrediction('Error analyzing image');
    } finally {
      setIsAnalyzing(false);
    }
  };

  const resetImage = () => {
    setImage(null);
    setPrediction(null);
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const imageSrc = reader.result as string;
        setImage(imageSrc);
        analyzeImage(imageSrc);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Waste Image Analysis</h2>
      
      <div className="space-y-6">
        {!image ? (
          <div className="relative">
            <Webcam
              ref={webcamRef}
              screenshotFormat="image/jpeg"
              className="w-full rounded-lg"
            />
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-4">
              <button
                onClick={captureImage}
                className="bg-green-600 text-white p-3 rounded-full hover:bg-green-700 transition-colors"
              >
                <Camera className="h-6 w-6" />
              </button>
              
              <label className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-colors cursor-pointer">
                <ImageIcon className="h-6 w-6" />
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileUpload}
                  className="hidden"
                />
              </label>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <img
              src={image}
              alt="Captured waste"
              className="w-full rounded-lg"
            />
            
            <div className="flex justify-center">
              <button
                onClick={resetImage}
                className="bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition-colors flex items-center"
              >
                <RefreshCw className="h-4 w-4 mr-2" />
                Take Another Photo
              </button>
            </div>
          </div>
        )}
        
        {isAnalyzing && (
          <div className="text-center py-4">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-600 mx-auto"></div>
            <p className="mt-2 text-gray-600">Analyzing image...</p>
          </div>
        )}
        
        {prediction && !isAnalyzing && (
          <div className={`p-4 rounded-lg ${
            prediction === 'recyclable' ? 'bg-blue-50 text-blue-800' :
            prediction === 'compostable' ? 'bg-green-50 text-green-800' :
            prediction === 'hazardous' ? 'bg-red-50 text-red-800' :
            'bg-gray-50 text-gray-800'
          }`}>
            <h3 className="font-semibold mb-2">Analysis Result:</h3>
            <p className="capitalize">This appears to be {prediction} waste</p>
            <p className="text-sm mt-2 text-gray-600">
              Please verify this classification and refer to our sorting guide for detailed instructions.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageAnalyzer;