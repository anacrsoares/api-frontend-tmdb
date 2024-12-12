import { createContext, useContext } from "react";
import { useState } from "react";

const AppContext = createContext(null);

const AppProvider = ({ children }) => {
  // shared functions
  const loadFavoritesFromStorage = () => {
    const storedFavorites = localStorage.getItem("favorites");
    return storedFavorites ? JSON.parse(storedFavorites) : {};
  };

  const [listFavorites, setListFavorites] = useState(loadFavoritesFromStorage);

  // Função para adicionar ou remover filmes dos favoritos
  const handleFavoriteList = (movie) => {
    setListFavorites((prevFavorites) => {
      const newFavorites = { ...prevFavorites };

      if (newFavorites[movie.id]) {
        // Remove o filme da lista de favoritos
        delete newFavorites[movie.id];
      } else {
        // Adiciona o filme à lista de favoritos
        newFavorites[movie.id] = movie;
      }

      // Salva os favoritos no localStorage
      localStorage.setItem("favorites", JSON.stringify(newFavorites));

      return newFavorites;
    });
  };

  // Objeto com o estado e as funções que queremos compartilhar
  const sharedState = {
    listFavorites,
    handleFavoriteList,
  };

  return (
    <AppContext.Provider value={sharedState}>{children}</AppContext.Provider>
  );
};

export default AppProvider;

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === null) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
