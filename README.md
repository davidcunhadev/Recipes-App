<h1 align="center"> 🍝 🍔 Recipes App 🍹🍸 </h1>

<br>

<h3 align="center">
O Recipes App é uma aplicação web frontend focado especialmente para smartphones com o intuito de possibilitar o usuário logar para ver, buscar, filtrar, favoritar, compartilhar e acompanhar o progresso de preparação de receitas de comidas e bebidas.<br/>
</h3>

<br>

## 🚀 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias e bibliotecas:

- React
- TypeScript
- Context API
- React Hooks
- React Testing Library
- CSS Modules

<br>

## 📑 Estrutura de pastas
<p>O projeto segue a seguinte estrutura de pastas:</p>
<ul>
  <li><strong>src:</strong> Contém o código fonte da aplicação.</li>
  <li><strong>src/Components:</strong> Todos os componentes utilizados na aplicação.</li>
  <li><strong>src/Context:</strong> Contexto utilizado para controlar os estados da aplicação.</li>
  <li><strong>src/Hooks:</strong> Todos os hooks que foram utilizados na aplicação.</li>
  <li><strong>src/Pages:</strong> Todas as páginas utilizadas na aplicação</li>
  <li><strong>src/Tests:</strong> Testes automatizados.</li>
</ul>

<br>

## ✨ Funcionalidades

As seguintes funcionalidades estão disponíveis para o usuário:

- **Procurar Receita:** Permite o usuário pesquisar qualquer receita por: nome, ingrediente ou primeira letra.

- **Filtrar Receita por Categoria:** Permite o usuário filtrar qualquer receita por categoria, por exemplo: breakfest, dessert, cocktail, shake, etc...

- **Começar Receita:** Permite que o usuário comece a preparação de uma receita de sua escolha.

- **Acompanhar os Ingredientes da Receita:** Após o usuário começar a preparação de sua receita, poderá acompanhar através de uma <strong>checklist</strong> os ingredientes necessários para a realização da receita.

- **Favoritar Receita:** Caso o usuário goste de alguma receita, pode se sentir a vontade para favoritá-la e assegurar de que ela estará sempre ali caso queira vê-la novamente.

- **Compartilhar Receita:** Caso o usuário queira compartilhar alguma receita com outra pessoa, poderá clicar no botão <strong>share</strong>.

<br>

## ⚙️ Como Usar

### Instalação

1. Clone o repositório:

```
 git@github.com:davidcunhadev/Recipes-App.git
```

2. Vá para a pasta do projeto:

```
cd Recipes-App
```

3. Instale as dependências do projeto:
```
npm install
```

4. Rode o projeto com o comando:
```
npm run dev
```

5. Com isso a aplicação já estará no ar no <a href="http://localhost:3000/" target="_blank"> localhost:3000 </a>.

<br>

## 🔀 Rotas da Aplicação

<ul>
  <li>
    Após inicializar o projeto, você começará na rota /login:
  </li>
  
<br>

  <details>
  <summary><strong>Tela de Login</strong></summary>
  
  <h3>Imagem da tela:</h3>
  
  ![LoginScreen](/public/LoginScreen.png)
  
  </details>

<br>

  <li>
    Após realizar o login, o usuário será redirecionado para a rota /meals que lhe mostrará todas as comidas:
  </li>

<br>
  
  <details>
  <summary><strong>Tela de Comidas</strong></summary>
  
  <h3>Imagem da tela:</h3>
  
  ![SearchMealsScreen](/public/SearchMealsScreen.png)
  
  </details>

<br>

  <li>
    Caso queira apenas bebidas, clique no ícone da <strong>taça</strong> no rodapé da página e será redirecionado para a rota /drinks que lhe mostrará todas as bebidas:
  </li>
  
<br>

  <details>
  <summary><strong>Tela de Bebidas</strong></summary>
  
  <h3>Imagem da tela:</h3>
  
  ![SearchDrinksScreen](/public/SearchDrinksScreen.png)
  
  </details>

<br>

  <li>
    Após escolher uma receita como uma comida por exemplo, o usuário será redirecionado para a rota /meals/id, onde id é o id da comida:
  </li>

<br>

  <details>
  <summary><strong>Tela de Detalhes da Receita</strong></summary>
  
  <h3>Imagem da tela:</h3>
  
  ![RecipeDetailScreen](/public/RecipeDetailScreen.png)
  
  </details>

<br>

  <li>
    Após começar a preparação da receita, o usuário será redirecionado para a rota /meals/id/in-progress, na qual poderá acompanhar os ingredientes para realização da receita:    
  </li>
  
<br>

  <details>
  <summary><strong>Tela de Ingredientes da Receita</strong></summary>
  
  <h3>Imagem da tela:</h3>
  
  ![RecipeIngredientsScreen](/public/RecipeIngredientsScreen.png)
  
  </details>

<br>

  <li>
    Após terminar a receita, o usuário será redirecionado para a rota /done-recipes, onde mostrará todas as receitas já feitas pelo usuário:
  </li>
  
<br>

  <details>
  <summary><strong>Tela de Receitas Feitas</strong></summary>
  
  <h3>Imagem da tela:</h3>
  
  ![DoneRecipesScreen](/public/DoneRecipesScreen.png)
  
  </details>

<br>

  <li>
    O usuário poderá clicar no ícone de seu perfil e clicar em <strong>Favorite Recipes</strong> e ser redirecionado para a rota /favorite-recipes, na qual poderá ver suas receitas favoritadas:
  </li>

<br>

  <details>
  <summary><strong>Tela de Receitas Favoritadas</strong></summary>
  
  <h3>Imagem da tela:</h3>
  
  ![FavoriteRecipesScreen](/public/FavoriteRecipesScreen.png)
  
  </details>

</ul>

<br>

## 🧪 Testes

A aplicação está com mais de 99% de <strong>coverage</strong> dos testes, garantindo assim uma maior segurança e confiança no código e suas respectivas funcionalidades.

Para rodar todos os testes da aplicação execute o comando:
```
npm run test
```

Para rodar a cobertura de testes da aplicação execute o comando:
```
npm run coverage
```

<br>

## 🎊 Equipe de Desenvolvimento

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/davidcunhadev" target="_blank">
        <img src="https://avatars.githubusercontent.com/u/99369505?v=4" width="180px" alt="David Cunha"/>
        <p>David Cunha</p>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/LeonardoLelisL" target="_blank">
        <img src="https://avatars.githubusercontent.com/u/128411030?v=4" width="180px" alt="Leonardo Lelis"/>
        <p>Leonardo Lelis</p>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/vCiolac" target="_blank">
        <img src="https://avatars.githubusercontent.com/u/127816406?v=4" width="180px" alt="Victor Ciolac"/>
        <p>Victor Ciolac</p>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/beatrizreisnunes" target="_blank">
        <img src="https://avatars.githubusercontent.com/u/128172271?v=4" width="180px" alt="Beatriz Reis"/>
        <p>Beatriz Reis</p>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/Carpinett1" target="_blank">
        <img src="https://avatars.githubusercontent.com/u/126475226?v=4" width="180px" alt="Thiago Carpinetti"/>
        <p>Thiago Carpinetti</p>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/nataliavianadev" target="_blank">
        <img src="https://avatars.githubusercontent.com/u/125075853?v=4" width="180px" alt="Natália Viana"/>
        <p>Natália Viana</p>
      </a>
    </td>
  </tr>
</table>
