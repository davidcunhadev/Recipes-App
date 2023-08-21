import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Meals from '../Pages/Meals/Meals';
import { renderWithRouter } from '../utils/renderWithRouter';
import App from '../App';

describe('Testes referentes ao Header', () => {
  test('Testa se o header possui o nome Recipes App e seu respectivo ícone de imagem.', () => {
    renderWithRouter(<Meals />);

    const appTitle = screen.getByRole('heading', { name: /recipes app/i });
    expect(appTitle).toBeInTheDocument();
    const iconTitle = screen.getByRole('img', { name: /ícone recipes app/i });
    expect(iconTitle).toBeInTheDocument();
  });

  test('Testa se ao clicar no botão de perfil o usuário é redirecionado para a rota /profile.', async () => {
    renderWithRouter(<App />, { route: '/profile' });

    const iconeDePerfil = screen.getByRole('img', { name: /ícone de perfil/i });
    await userEvent.click(iconeDePerfil);
    expect(await screen.findByRole('heading', { name: /profile/i })).toBeInTheDocument();
  });
});

test('Testa o botão de busca que, ao ser clicado, permite a visualização da barra de busca ou a esconda', async () => {
  renderWithRouter(<Meals />);
  const searchBtn = screen.getByRole('img', { name: /lupa de pesquisa/i });
  await userEvent.click(searchBtn);
  const searchBar = screen.getByPlaceholderText(/search/i);

  expect(searchBar).toBeInTheDocument();

  await userEvent.click(searchBtn);
  expect(searchBar).not.toBeInTheDocument();
});
