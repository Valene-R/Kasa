export const formatLocation = (location) => {
  // Sépare la chaîne en deux parties à partir de " - "
  const parts = location.split(" - "); 

  // Si la chaîne est bien composée de deux parties, on inverse l'ordre
  return parts.length === 2 ? `${parts[1]}, ${parts[0]}` : location;
};