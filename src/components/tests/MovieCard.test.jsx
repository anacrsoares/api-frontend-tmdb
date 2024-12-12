import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import AppProvider from "../../Context";
import MovieCard from "../MovieCard";
import "@testing-library/jest-dom"; // Importando os matchers personalizados do jest-dom

// testando um filme qualquer
const movie = {
  id: 1,
  title: "Inception",
  poster_path: "/path/to/poster.jpg",
  vote_average: 8.8,
  overview: "A mind-bending thriller about dreams within dreams.",
};

describe("MovieCard Component", () => {
  test("deve renderizar corretamente o título e o pôster do filme", () => {
    render(
      <AppProvider>
        <BrowserRouter>
          <MovieCard movie={movie} />
        </BrowserRouter>
      </AppProvider>
    );

    // Verifica se o título do filme está na tela
    expect(screen.getByText(/Inception/i)).toBeInTheDocument();

    // Verifica se o pôster do filme está na tela
    const poster = screen.getByAltText(/Inception/i);
    expect(poster).toBeInTheDocument();
    expect(poster).toHaveAttribute(
      "src",
      expect.stringContaining("/path/to/poster.jpg")
    );
  });
});

test("deve alternar o ícone de favorito ao clicar", () => {
  render(
    <AppProvider>
      <BrowserRouter>
        <MovieCard movie={movie} />
      </BrowserRouter>
    </AppProvider>
  );

  // Buscando os IconButton
  const favoriteButton = screen.getByLabelText("favorite-button"); // Procurando pelo role 'button'

  // Verifica se o ícone inicial é o de coração vazio
  expect(screen.getByLabelText("favorite-border")).toBeInTheDocument();

  // Simula o clique para favoritar
  fireEvent.click(favoriteButton);

  // Verifica se o ícone agora é o de coração preenchido
  expect(screen.getByLabelText("favorite-filled")).toBeInTheDocument();
});
