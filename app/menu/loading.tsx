export default function MenuLoading() {
  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category Filter Skeleton */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="h-10 w-24 bg-gray-200 rounded-full animate-pulse"
            />
          ))}
        </div>

        {/* Menu Grid Skeleton */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <div 
              key={i}
              className="bg-white rounded-lg overflow-hidden shadow-md"
            >
              <div className="h-48 w-full bg-gray-200 animate-pulse" />
              <div className="p-4">
                <div className="h-6 bg-gray-200 rounded w-3/4 mb-2 animate-pulse" />
                <div className="h-4 bg-gray-200 rounded w-full mb-4 animate-pulse" />
                <div className="flex justify-between items-center">
                  <div className="h-6 bg-gray-200 rounded w-20 animate-pulse" />
                  <div className="h-10 bg-gray-200 rounded w-24 animate-pulse" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 