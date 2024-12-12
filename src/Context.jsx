import { createContext, useContext } from "react";
import { useState } from "react";

const AppContext = createContext(null);

const AppProvider = ({ children }) => {
  // shared functions
  const [isFavorited, setIsFavorited] = useState(false);
  const [listFavorites, setListFavorites] = useState({});

  const handleFavoriteList = (movie) => {
    const newIsFavorited = !isFavorited;
    setIsFavorited(newIsFavorited);

    // Atualiza a lista de favoritos
    setListFavorites((prevFavorites) => {
      const newFavorites = { ...prevFavorites };

      if (newIsFavorited) {
        // Adiciona o filme à lista de favoritos
        newFavorites[movie.id] = movie;
      } else {
        // Remove o filme da lista de favoritos
        delete newFavorites[movie.id];
      }

      return newFavorites;
    });
  };

  // Objeto com o estado e as funções que queremos compartilhar
  const sharedState = {
    isFavorited,
    handleFavoriteList,
    listFavorites,
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
