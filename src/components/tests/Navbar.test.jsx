import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "../Navbar";
import "@testing-library/jest-dom"; // Importando os matchers personalizados do jest-dom

describe("Navbar Component", () => {
  test("deve renderizar corretamente o título da aplicação", () => {
    render(
      <BrowserRouter>
        <Navbar onSearch={() => {}} />
      </BrowserRouter>
    );

    // Verifica se o título "2098Movies" está na tela
    const title = screen.getByText(/2098Movies/i);
    expect(title).toBeInTheDocument();
  });

  test("deve atualizar o valor do campo de pesquisa", () => {
    render(
      <BrowserRouter>
        <Navbar onSearch={() => {}} />
      </BrowserRouter>
    );

    // Seleciona o campo de input
    const searchInput = screen.getByPlaceholderText(/Procure seu filme/i);

    // Simula a digitação de texto no campo
    fireEvent.change(searchInput, { target: { value: "Inception" } });

    // Verifica se o valor foi atualizado no campo de pesquisa
    expect(searchInput.value).toBe("Inception");
  });

  test("deve chamar a função onSearch quando o usuário digita no campo de pesquisa", () => {
    const mockOnSearch = vi.fn(); // Cria uma função mock para verificar as chamadas

    render(
      <BrowserRouter>
        <Navbar onSearch={mockOnSearch} />
      </BrowserRouter>
    );

    const searchInput = screen.getByPlaceholderText(/Procure seu filme/i);

    // Simula a digitação de texto no campo
    fireEvent.change(searchInput, { target: { value: "Inception" } });

    // Verifica se a função onSearch foi chamada com o valor correto
    expect(mockOnSearch).toHaveBeenCalledWith("Inception");
  });
});
