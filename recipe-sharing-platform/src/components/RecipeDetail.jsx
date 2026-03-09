import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import recipeData from '../data.json';

function RecipeDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const found = recipeData.find((r) => r.id === parseInt(id));
    setRecipe(found);
  }, [id]);

  if (!recipe) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500 text-xl">Recipe not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-orange-500 py-6 px-4 shadow-md">
        <div className="max-w-4xl mx-auto flex items-center gap-4">
          <button
            onClick={() => navigate('/')}
            className="text-white font-semibold hover:underline text-sm"
          >
            ← Back to Recipes
          </button>
          <h1 className="text-2xl font-extrabold text-white">🍴 Recipe Sharing Platform</h1>
        </div>
      </header>

      {/* Recipe Detail */}
      <main className="max-w-4xl mx-auto px-4 py-10">
        {/* Title & Image */}
        <div className="bg-white rounded-2xl shadow-md overflow-hidden mb-8">
          <img
            src={recipe.image}
            alt={recipe.title}
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h2 className="text-3xl font-extrabold text-gray-800 mb-2">{recipe.title}</h2>
            <p className="text-gray-500 text-base">{recipe.summary}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Ingredients */}
          <div className="bg-white rounded-2xl shadow-md p-6">
            <h3 className="text-xl font-bold text-orange-500 mb-4">🛒 Ingredients</h3>
            <ul className="space-y-2">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index} className="flex items-start gap-2 text-gray-700">
                  <span className="text-orange-400 font-bold">•</span>
                  {ingredient}
                </li>
              ))}
            </ul>
          </div>

          {/* Instructions */}
          <div className="bg-white rounded-2xl shadow-md p-6">
            <h3 className="text-xl font-bold text-orange-500 mb-4">👨‍🍳 Instructions</h3>
            <ol className="space-y-3">
              {recipe.instructions.map((step, index) => (
                <li key={index} className="flex items-start gap-3 text-gray-700">
                  <span className="bg-orange-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                    {index + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </main>
    </div>
  );
}

export default RecipeDetail;
