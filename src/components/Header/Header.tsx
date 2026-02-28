import './Header.scss';

function Header() {
  return (
    <header className="main">
      <section className="top">
        <ul className="topbar">
          <li className="topbar-contents">
            <img src="assets/images/ShieldCheck.png" alt="Compra Segura" />
            <p>Compra <span>100% segura</span></p>
          </li>
          <li className="topbar-contents">
            <img src="assets/images/Truck.png" alt="Frete" />
            <p><span>Frete grátis</span> acima de R$ 200</p>
          </li>
          <li className="topbar-contents">
            <img src="assets/images/CreditCard.png" alt="Cartão de Crédito" />
            <p><span>Parcele</span> suas compras</p>
          </li>
        </ul>
        <div className="middle">
          <div className="middle-menu">
            <div className="logo">
              <img src="assets/images/Logo-econverse-header.png" alt="Logo econverse" />
            </div>
            <div className="search">
              <form className="search-container" role="search">
                <input 
                  type="text" 
                  placeholder="O que você está buscando?" 
                  aria-label="Buscar produtos"
                />
                <button type="submit" aria-label="Pesquisar">
                  <img src="/assets/images/MagnifyingGlass.png" alt="Lupa" /> 
                </button>
              </form>
            </div>
            <nav className="header-actions" aria-label="Ações do usuário">
              <ul>
                <li>
                  <a href="/pedidos" title="Meus Pedidos">
                    <img src="/assets/images/Box.png" alt="Meus Pedidos" />
                  </a>
                </li>
                <li>
                  <a href="/favoritos" title="Meus Favoritos">
                    <img src="/assets/images/Heart.png" alt="Meus Favoritos" />
                  </a>
                </li>
                <li>
                  <a href="/login" title="Minha Conta">
                    <img src="/assets/images/UserCircle.png" alt="Minha Conta" />
                  </a>
                </li>
                <li>
                  <a href="/carrinho" title="Carrinho de Compras" className="cart-icon">
                    <img src="/assets/images/ShoppingCart.png" alt="Carrinho de compras" />
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="menu">
          <nav className="categories-nav" aria-label="Categorias de produtos">
            <ul>
              <li><a href="/categorias" className="all-categories">TODAS CATEGORIAS</a></li>
              <li><a href="/supermercado">SUPERMERCADO</a></li>
              <li><a href="/livros">LIVROS</a></li>
              <li><a href="/moda">MODA</a></li>
              <li><a href="/lancamentos">LANÇAMENTOS</a></li>
              <li><a href="/ofertas" className="active">OFERTAS DO DIA</a></li>
              <li>
                <a href="/assinatura" className="subscription">
                  <img src="/assets/images/CrownSimple.png" alt="" />
                  ASSINATURA
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </section>
    </header>
  );
}

export default Header;
