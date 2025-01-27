import React from 'react';

const ResponsiveSkeleton = () => {
  return (
    <div className="w-full min-h-screen bg-white p-4">
      <div className="w-full max-w-7xl mx-auto">
        {/* Flex container that changes to column on mobile */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Main Content Area */}
          <div className="flex-1 space-y-6">
            {/* Header Skeleton */}
            <div className="w-full h-16 bg-gray-200 rounded-lg animate-pulse"/>
            
            {/* Text Lines */}
            <div className="space-y-3">
              <div className="w-3/4 h-4 bg-gray-200 rounded animate-pulse"/>
              <div className="w-full h-4 bg-gray-200 rounded animate-pulse"/>
              <div className="w-5/6 h-4 bg-gray-200 rounded animate-pulse"/>
            </div>
            
            {/* Grid Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[...Array(6)].map((_, i) => (
                <div 
                  key={i} 
                  className="aspect-video bg-gray-200 rounded-lg animate-pulse"
                />
              ))}
            </div>
            
            {/* Additional Content Blocks */}
            <div className="space-y-4">
              <div className="w-full h-24 bg-gray-200 rounded-lg animate-pulse"/>
              <div className="w-full h-24 bg-gray-200 rounded-lg animate-pulse"/>
            </div>
          </div>
          
          {/* Sidebar - moves to bottom on mobile */}
          <div className="lg:w-80 space-y-4">
            {/* Sidebar Items */}
            <div className="h-32 bg-gray-200 rounded-lg animate-pulse"/>
            <div className="h-48 bg-gray-200 rounded-lg animate-pulse"/>
            <div className="h-64 bg-gray-200 rounded-lg animate-pulse"/>
          </div>
        </div>
      </div>
      
      {/* Shimmer Overlay */}
      <style jsx>{`
        @keyframes shimmer {
          0% {
            background-position: -1000px 0;
          }
          100% {
            background-position: 1000px 0;
          }
        }
        
        .animate-pulse {
          background: linear-gradient(
            90deg,
            rgba(229, 231, 235, 0.6) 25%,
            rgba(229, 231, 235, 0.8) 50%,
            rgba(229, 231, 235, 0.6) 75%
          );
          background-size: 1000px 100%;
          animation: shimmer 2s infinite linear;
        }
      `}</style>
    </div>
  );
};

export default ResponsiveSkeleton;