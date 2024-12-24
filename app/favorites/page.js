import FavoritesClient from "./FavoritesClient";

async function fetchFavorites() {
  const response = await fetch("http://localhost:3000/api/favorites", { cache: "no-store" });
  if (!response.ok) {
    throw new Error("Failed to fetch favorites");
  }
  return await response.json();
}

export default async function Favorites() {
  const favorites = await fetchFavorites();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl text-center font-bold mb-4">Favorite Recipes</h1>
      <FavoritesClient favorites={favorites} />
    </div>
  );
}
