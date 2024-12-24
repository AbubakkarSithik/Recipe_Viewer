import Link from "next/link";

async function fetchRecipes() {
  const response = await fetch(
    "https://www.themealdb.com/api/json/v1/1/search.php?s="
  );
  const data = await response.json();
  return data.meals || [];
}

export default async function Home() {
  const recipes = await fetchRecipes();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-3 text-center ">RECIPE VIEWER</h1>
      <p className="text-lg text-center mb-6">Come lets get cooked!!!</p>
      <div className="m-4 grid grid-cols-1 md:grid-cols-3 gap-12">
        {recipes.map((recipe) => (
          <Link key={recipe.idMeal} href={`/recipe/${recipe.idMeal}`}>
              <div className="card w-50 bg-orange-200  shadow-xl transition-all duration-700 hover:scale-110">
              <figure className="px-10 pt-10">
                <img
                  src={recipe.strMealThumb}
                  alt={recipe.strMeal}
                  className="rounded-xl"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title text-2xl">{recipe.strMeal}</h2>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
