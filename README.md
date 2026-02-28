# <p align="center">🛒 Econverse Front-end Test</p>

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

### 🏷️ Vitrine de Produtos
* **Carrossel Inteligente**: Navegação fluida com scroll suave.
* **Preços Dinâmicos**: Formatação automática para o padrão BRL.
* **Badges Visuais**: Destaques para frete grátis e parcelamento.

### 🖥️ Componentes de UI
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

### 📋 Pré-requisitos
Antes de começar, você precisará ter instalado em sua máquina:
* **Node.js** (Versão 16 ou superior)
* **npm** ou **Yarn**
* Um navegador moderno para visualização (Chrome, Firefox ou Edge)

---

### 🛠️ Passo a Passo
1. **Clonar o Repositório:**
```bash
  git clone [https://github.com/schiminsky/teste-front-end.git](https://github.com/schiminsky/teste-front-end.git)
```
2. **Instale as bibliotecas necessárias:**
```bash
  npm install
  npm install sass
```
3. **Iniciar o projeto:**
```bash
  npm start
```

---

### 🧪 Como Testar as Funcionalidades
Para validar a implementação, você pode realizar os seguintes testes manuais:

Navegação: Utilize o scroll manual na vitrine de produtos para testar o carrossel.
Modal: Clique em um produto e verifique se está tudo correto nas fotos, títulos e preços.
Toast: Adicione um item ao carrinho clicando em "COMPRAR" dentro do modal e observe se a notificação de sucesso aparece após o fechamento.

---

 <p align="center">
Desenvolvido com ❤️ por <strong>Claudio Schiminsky Junior</strong>
</p>
