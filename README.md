# <p align="center">🛒 Econverse Front-end Test</p>

<p align="center">
<a href="https://schiminsky.github.io/teste-front-end">
<strong>🌐 Visualize o Projeto Online (Live Demo)</strong>
</a>
</p>

---

## 📝 Sobre o Projeto
Este projeto foi desenvolvido como um desafio técnico de Front-end, focado na criação de uma interface de e-commerce modular, responsiva e de alta fidelidade visual. A arquitetura foi pensada para manter o arquivo principal (index.tsx) o mais limpo possível

---

## 🛠️ Stacks Utilizadas

<p align="left">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white" />
</p>

---

## ✨ Funcionalidades em Destaque
* **Carrossel Inteligente**: Navegação fluida com scroll suave.
* **Preços Dinâmicos**: Formatação automática para o padrão BRL.
* **Badges Visuais**: Destaques para frete grátis e parcelamento.
* **Modal de Produto**: Popup detalhado com lógica de seleção de quantidade e dados dinâmicos.
* **Toast Notification**: Notificação que mostra que um produto foi adicionado ao carrinho.
* **Modularidade**: Header, Banner, Marcas, Newsletter e Footer totalmente desacoplados.

---

## 📂 Estrutura de Arquivos
```bash
src/
 ├── components/        Componentes isolados (TSX + SCSS)
 ├── data/              products.json
 └── assets/            Imagens e ícones
 ```

---

## 🚀 Guia de Instalação e Execução

Siga as instruções abaixo para configurar o ambiente e rodar o projeto localmente em sua máquina.

## 📋 Pré-requisitos
Antes de começar, você precisará ter instalado em sua máquina:
* **Node.js** 
* **npm** ou **Yarn**
* Um navegador moderno para visualização (Chrome, Firefox ou Edge)

---

## 🛠️ Passo a Passo
**Clonar o Repositório:**
```bash
  git clone https://github.com/schiminsky/teste-front-end.git
```
**Instale as dependências e rode (npm):**
```bash
  npm install
  npm install sass

  npm start
```
**se preferir usar o Yarn:**
```bash
  yarn install
  yarn install sass

  yarn start
```

---

## 🧪 Como Testar as Funcionalidades
**Para validar a implementação, você pode realizar os seguintes testes manuais:**

Navegação: Utilize o scroll manual na vitrine de produtos para testar o carrossel.

Modal: Clique em um produto e verifique se está tudo correto nas fotos, títulos e preços.

Toast: Adicione um item ao carrinho clicando em "COMPRAR" dentro do modal e observe se a notificação de sucesso aparece após o fechamento.

---

 <p align="center">
Desenvolvido por <strong>Claudio Schiminsky Junior</strong>
</p>
