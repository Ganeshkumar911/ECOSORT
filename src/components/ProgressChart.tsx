import React from 'react';
import { WasteTrackingData } from '../types';

interface ProgressChartProps {
  data: WasteTrackingData[];
}

const ProgressChart: React.FC<ProgressChartProps> = ({ data }) => {
  // Calculate totals
  const totals = data.reduce(
    (acc, day) => {
      acc.recyclable += day.recyclable;
      acc.compostable += day.compostable;
      acc.hazardous += day.hazardous;
      acc.landfill += day.landfill;
      return acc;
    },
    { recyclable: 0, compostable: 0, hazardous: 0, landfill: 0 }
  );

  const total = totals.recyclable + totals.compostable + totals.hazardous + totals.landfill;
  
  // Calculate percentages
  const percentages = {
    recyclable: Math.round((totals.recyclable / total) * 100),
    compostable: Math.round((totals.compostable / total) * 100),
    hazardous: Math.round((totals.hazardous / total) * 100), 
    landfill: Math.round((totals.landfill / total) * 100)
  };

  // Check waste reduction trend (comparing first and last day in data)
  const firstDay = data[0];
  const lastDay = data[data.length - 1];
  const firstDayTotal = firstDay.recyclable + firstDay.compostable + firstDay.hazardous + firstDay.landfill;
  const lastDayTotal = lastDay.recyclable + lastDay.compostable + lastDay.hazardous + lastDay.landfill;
  const wasteTrend = lastDayTotal < firstDayTotal ? 'down' : 'up';
  const wasteTrendPercentage = Math.round(Math.abs((lastDayTotal - firstDayTotal) / firstDayTotal * 100));

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Waste Breakdown</h2>
      
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-blue-50 p-3 rounded-lg">
          <h3 className="text-blue-800 font-medium">Recyclable</h3>
          <p className="text-2xl font-bold text-blue-600">{percentages.recyclable}%</p>
          <p className="text-sm text-gray-600">{totals.recyclable.toFixed(1)} kg</p>
        </div>
        
        <div className="bg-green-50 p-3 rounded-lg">
          <h3 className="text-green-800 font-medium">Compostable</h3>
          <p className="text-2xl font-bold text-green-600">{percentages.compostable}%</p>
          <p className="text-sm text-gray-600">{totals.compostable.toFixed(1)} kg</p>
        </div>
        
        <div className="bg-red-50 p-3 rounded-lg">
          <h3 className="text-red-800 font-medium">Hazardous</h3>
          <p className="text-2xl font-bold text-red-600">{percentages.hazardous}%</p>
          <p className="text-sm text-gray-600">{totals.hazardous.toFixed(1)} kg</p>
        </div>
        
        <div className="bg-gray-50 p-3 rounded-lg">
          <h3 className="text-gray-800 font-medium">Landfill</h3>
          <p className="text-2xl font-bold text-gray-600">{percentages.landfill}%</p>
          <p className="text-sm text-gray-600">{totals.landfill.toFixed(1)} kg</p>
        </div>
      </div>
      
      <div className="h-6 rounded-full overflow-hidden bg-gray-200">
        <div className="flex h-full">
          <div 
            className="bg-blue-500 h-full" 
            style={{ width: `${percentages.recyclable}%` }}
            title={`Recyclable: ${percentages.recyclable}%`}
          ></div>
          <div 
            className="bg-green-500 h-full" 
            style={{ width: `${percentages.compostable}%` }}
            title={`Compostable: ${percentages.compostable}%`}
          ></div>
          <div 
            className="bg-red-500 h-full" 
            style={{ width: `${percentages.hazardous}%` }}
            title={`Hazardous: ${percentages.hazardous}%`}
          ></div>
          <div 
            className="bg-gray-500 h-full" 
            style={{ width: `${percentages.landfill}%` }}
            title={`Landfill: ${percentages.landfill}%`}
          ></div>
        </div>
      </div>
      
      <div className="flex justify-between text-xs text-gray-600 mt-1">
        <span>0%</span>
        <span>100%</span>
      </div>
      
      <div className="mt-6 bg-gray-50 p-4 rounded-lg border border-gray-200">
        <h3 className="font-medium text-gray-800">Weekly Trend</h3>
        <div className="flex items-center mt-2">
          <div className={`text-lg font-bold ${wasteTrend === 'down' ? 'text-green-600' : 'text-red-600'}`}>
            {wasteTrend === 'down' ? '↓' : '↑'} {wasteTrendPercentage}%
          </div>
          <p className="ml-2 text-gray-700">
            {wasteTrend === 'down' 
              ? 'Great job! Your waste is decreasing.' 
              : 'Your waste production has increased. Let\'s work on reducing it.'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProgressChart;