import './Header.scss';

import shieldIcon from '../../assets/images/ShieldCheck.png';
import truckIcon from '../../assets/images/Truck.png';
import creditCardIcon from '../../assets/images/Credit-card.png';
import logoHeader from '../../assets/images/Logo-econverse-header.png';
import searchIcon from '../../assets/images/MagnifyingGlass.png';
import boxIcon from '../../assets/images/Box.png';
import heartIcon from '../../assets/images/Heart.png';
import userIcon from '../../assets/images/UserCircle.png';
import cartIcon from '../../assets/images/ShoppingCart.png';
import crownIcon from '../../assets/images/CrownSimple.png';

function Header() {
  return (
    <header className="main">
      <section className="top">
        <ul className="topbar">
          <li className="topbar-contents">
            <img src={shieldIcon} alt="Compra Segura" />
            <p>Compra <span>100% segura</span></p>
          </li>
          <li className="topbar-contents">
            <img src={truckIcon} alt="Frete" />
            <p><span>Frete grátis</span> acima de R$ 200</p>
          </li>
          <li className="topbar-contents">
            <img src={creditCardIcon} alt="Cartão de Crédito" />
            <p><span>Parcele</span> suas compras</p>
          </li>
        </ul>

        <div className="middle">
          <div className="middle-menu">
            <div className="logo">
              <img src={logoHeader} alt="Logo econverse" />
            </div>
            
            <div className="search">
              <form className="search-container" role="search">
                <input 
                  type="text" 
                  placeholder="O que você está buscando?" 
                  aria-label="Buscar produtos"
                />
                <button type="submit" aria-label="Pesquisar">
                  <img src={searchIcon} alt="Lupa" /> 
                </button>
              </form>
            </div>

            <nav className="header-actions" aria-label="Ações do usuário">
              <ul>
                <li>
                  <a href="/pedidos" title="Meus Pedidos">
                    <img src={boxIcon} alt="Meus Pedidos" />
                  </a>
                </li>
                <li>
                  <a href="/favoritos" title="Meus Favoritos">
                    <img src={heartIcon} alt="Meus Favoritos" />
                  </a>
                </li>
                <li>
                  <a href="/login" title="Minha Conta">
                    <img src={userIcon} alt="Minha Conta" />
                  </a>
                </li>
                <li>
                  <a href="/carrinho" title="Carrinho de Compras" className="cart-icon">
                    <img src={cartIcon} alt="Carrinho de compras" />
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
                  <img src={crownIcon} alt="" />
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