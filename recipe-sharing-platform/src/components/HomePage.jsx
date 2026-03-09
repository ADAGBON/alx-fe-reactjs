import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import recipeData from '../data.json';

function HomePage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    setRecipes(recipeData);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-orange-500 py-10 text-center shadow-md">
        <h1 className="text-4xl font-extrabold text-white mb-2">🍴 Recipe Sharing Platform</h1>
        <p className="text-orange-100 text-lg">Discover and share amazing recipes from around the world</p>
      </header>

      {/* Recipe Grid */}
      <main className="max-w-6xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold text-gray-700 mb-6">All Recipes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {recipes.map((recipe) => (
            <div
              key={recipe.id}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl hover:scale-105 transition-transform duration-300 cursor-pointer"
            >
              <img
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{recipe.title}</h3>
                <p className="text-gray-500 text-sm mb-4">{recipe.summary}</p>
                <Link
                  to={`/recipe/${recipe.id}`}
                  className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-4 py-2 rounded-lg transition duration-200 inline-block"
                >
                  View Recipe →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default HomePage;
