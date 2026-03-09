import { useState } from 'react';

function AddRecipeForm() {
  const [formData, setFormData] = useState({
    title: '',
    ingredients: '',
    steps: '',
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const validate = () => {
    const newErrors = {};

    if (!formData.title.trim()) {
      newErrors.title = 'Recipe title is required.';
    }

    if (!formData.ingredients.trim()) {
      newErrors.ingredients = 'Ingredients are required.';
    } else {
      const ingredientList = formData.ingredients
        .split('\n')
        .filter((line) => line.trim() !== '');
      if (ingredientList.length < 2) {
        newErrors.ingredients = 'Please include at least two ingredients.';
      }
    }

    if (!formData.steps.trim()) {
      newErrors.steps = 'Preparation steps are required.';
    }

    return newErrors;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
    setSuccessMessage('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Form is valid - handle submission
    console.log('New Recipe Submitted:', formData);
    setSuccessMessage('🎉 Recipe submitted successfully!');
    setFormData({ title: '', ingredients: '', steps: '' });
    setErrors({});
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-orange-500 py-10 text-center shadow-md">
        <h1 className="text-4xl font-extrabold text-white mb-2">🍴 Recipe Sharing Platform</h1>
        <p className="text-orange-100 text-lg">Share your favorite recipe with the world</p>
      </header>

      {/* Form */}
      <main className="max-w-2xl mx-auto px-4 py-10">
        <div className="bg-white rounded-2xl shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Add a New Recipe</h2>

          {/* Success Message */}
          {successMessage && (
            <div className="bg-green-100 text-green-700 font-semibold px-4 py-3 rounded-lg mb-6">
              {successMessage}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Recipe Title */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Recipe Title
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="e.g. Spaghetti Carbonara"
                className={`w-full border rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-400 transition ${
                  errors.title ? 'border-red-400' : 'border-gray-300'
                }`}
              />
              {errors.title && (
                <p className="text-red-500 text-sm mt-1">{errors.title}</p>
              )}
            </div>

            {/* Ingredients */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Ingredients <span className="text-gray-400 font-normal">(one per line, at least 2)</span>
              </label>
              <textarea
                name="ingredients"
                value={formData.ingredients}
                onChange={handleChange}
                placeholder={`e.g.\n400g spaghetti\n200g pancetta\n4 eggs`}
                rows={5}
                className={`w-full border rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-400 transition resize-none ${
                  errors.ingredients ? 'border-red-400' : 'border-gray-300'
                }`}
              />
              {errors.ingredients && (
                <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>
              )}
            </div>

            {/* Preparation Steps */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Preparation Steps
              </label>
              <textarea
                name="steps"
                value={formData.steps}
                onChange={handleChange}
                placeholder={`e.g.\nBoil water and cook pasta.\nFry pancetta until crispy.\nMix eggs and cheese...`}
                rows={6}
                className={`w-full border rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-400 transition resize-none ${
                  errors.steps ? 'border-red-400' : 'border-gray-300'
                }`}
              />
              {errors.steps && (
                <p className="text-red-500 text-sm mt-1">{errors.steps}</p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-lg shadow transition duration-200"
            >
              Submit Recipe
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}

export default AddRecipeForm;
