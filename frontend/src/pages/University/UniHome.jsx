import React from 'react';
import { Link } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { Award, MapPin, TrendingUp, FileSpreadsheet } from 'lucide-react';

const Unihome = () => {
  const universityData = {
    name: "Global Innovation University",
    location: "Silicon Valley, California",
    ranking: {
      global: 24,
      national: 7,
      fieldSpecific: {
        engineering: 12,
        computerScience: 8
      }
    },
    performanceData: [
      { category: 'Research Output', score: 85 },
      { category: 'Student Satisfaction', score: 78 },
      { category: 'Infrastructure', score: 92 },
      { category: 'International Collaboration', score: 70 }
    ],
    improvements: [
      "Expand research facilities",
      "Increase international student programs",
      "Upgrade technological infrastructure",
      "Enhance student support services"
    ]
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">
          University Infrastructure Analysis Dashboard
        </h1>
        
        {/* University Overview Section */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-4">
              <Award className="w-12 h-12 text-blue-500" />
              <div>
                <h2 className="text-lg font-semibold text-gray-700">University Name</h2>
                <p className="text-gray-600">{universityData.name}</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <MapPin className="w-12 h-12 text-green-500" />
              <div>
                <h2 className="text-lg font-semibold text-gray-700">Location</h2>
                <p className="text-gray-600">{universityData.location}</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <TrendingUp className="w-12 h-12 text-purple-500" />
              <div>
                <h2 className="text-lg font-semibold text-gray-700">Global Ranking</h2>
                <p className="text-gray-600">#{universityData.ranking.global}</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Performance Chart */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
            University Performance Metrics
          </h2>
          <div className="flex justify-center">
            <BarChart width={600} height={300} data={universityData.performanceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="category" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="score" fill="#8884d8" />
            </BarChart>
          </div>
        </div>
        
        {/* Improvements Section */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
            Key Improvement Areas
          </h2>
          <ul className="space-y-3 pl-5 list-disc">
            {universityData.improvements.map((improvement, index) => (
              <li key={index} className="text-gray-700">{improvement}</li>
            ))}
          </ul>
        </div>
        
        {/* Upload Document Button */}
        <div className="flex justify-center">
          <Link to="/dashboard" className="w-full max-w-xs">
            <button className="w-full flex items-center justify-center space-x-2 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors">
              <FileSpreadsheet className="w-6 h-6" />
              <span>Upload Document</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Unihome;
