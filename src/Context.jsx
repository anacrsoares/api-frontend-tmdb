import { createContext, useContext } from "react";
import { useState } from "react";

const AppContext = createContext(null);

const AppProvider = ({ children }) => {
  // shared functions
  // Estado compartilhado
  const [isFavorited, setIsFavorited] = useState(false);

  // Função compartilhada
  const handleFavoriteClick = () => {
    setIsFavorited((prev) => !prev);
  };

  // Objeto com o estado e as funções que queremos compartilhar
  const sharedState = {
    isFavorited,
    handleFavoriteClick,
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
