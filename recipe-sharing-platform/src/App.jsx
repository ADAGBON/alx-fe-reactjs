import React from 'react'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="bg-white shadow-md px-6 py-4">
        <h1 className="text-2xl font-bold text-orange-500">🍴 Recipe Sharing Platform</h1>
      </nav>

      {/* Hero Section */}
      <main className="flex flex-col items-center justify-center py-20 px-4">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-4 text-center">
          Welcome to the Recipe Sharing Platform
        </h2>
        <p className="text-lg text-gray-500 mb-8 text-center max-w-xl">
          Discover, share, and enjoy delicious recipes from around the world.
        </p>
        <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg shadow transition duration-200">
          Browse Recipes
        </button>

        {/* Tailwind Integration Test */}
        <p className="mt-10 text-blue-500 text-sm font-medium">
          ✅ Tailwind CSS is working correctly!
        </p>
      </main>
    </div>
  )
}

export default App
