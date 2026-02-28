import './Category.scss';

function Category() {
  return (
    <nav className="categories-icons" aria-label="Navegação por categorias">
      <ul>
        <li>
          <a href="/tecnologia" className="category-item active">
            <div className="icon-box">
              <img src="/assets/images/tech.png" alt="Tecnologia" />
            </div>
            <span>Tecnologia</span>
          </a>
        </li>
        <li>
          <a href="/supermercado" className="category-item">
            <div className="icon-box">
              <img src="/assets/images/market.png" alt="Supermercado" />
            </div>
            <span>Supermercado</span>
          </a>
        </li>
        <li>
          <a href="/bebidas" className="category-item">
            <div className="icon-box">
              <img src="/assets/images/drinks.png" alt="Bebidas" />
            </div>
            <span>Bebidas</span>
          </a>
        </li>
        <li>
          <a href="/ferramentas" className="category-item">
            <div className="icon-box">
              <img src="/assets/images/tools.png" alt="Ferramentas" />
            </div>
            <span>Ferramentas</span>
          </a>
        </li>
        <li>
          <a href="/saude" className="category-item">
            <div className="icon-box">
              <img src="/assets/images/health.png" alt="Saúde" />
            </div>
            <span>Saúde</span>
          </a>
        </li>
        <li>
          <a href="/fitness" className="category-item">
            <div className="icon-box">
              <img src="/assets/images/fitness.png" alt="Esportes e Fitness" />
            </div>
            <span>Esportes e Fitness</span>
          </a>
        </li>
        <li>
          <a href="/moda" className="category-item">
            <div className="icon-box">
              <img src="/assets/images/moda.png" alt="Moda" />
            </div>
            <span>Moda</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Category;