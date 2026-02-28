import './Category.scss';

import techIcon from '../../assets/images/tech.png';
import marketIcon from '../../assets/images/market.png';
import drinksIcon from '../../assets/images/drinks.png';
import toolsIcon from '../../assets/images/tools.png';
import healthIcon from '../../assets/images/health.png';
import fitnessIcon from '../../assets/images/fitness.png';
import modaIcon from '../../assets/images/moda.png';

function Category() {
  return (
    <nav className="categories-icons" aria-label="Navegação por categorias">
      <ul>
        <li>
          <a href="/tecnologia" className="category-item active">
            <div className="icon-box">
              <img src={techIcon} alt="Tecnologia" />
            </div>
            <span>Tecnologia</span>
          </a>
        </li>
        <li>
          <a href="/supermercado" className="category-item">
            <div className="icon-box">
              <img src={marketIcon} alt="Supermercado" />
            </div>
            <span>Supermercado</span>
          </a>
        </li>
        <li>
          <a href="/bebidas" className="category-item">
            <div className="icon-box">
              <img src={drinksIcon} alt="Bebidas" />
            </div>
            <span>Bebidas</span>
          </a>
        </li>
        <li>
          <a href="/ferramentas" className="category-item">
            <div className="icon-box">
              <img src={toolsIcon} alt="Ferramentas" />
            </div>
            <span>Ferramentas</span>
          </a>
        </li>
        <li>
          <a href="/saude" className="category-item">
            <div className="icon-box">
              <img src={healthIcon} alt="Saúde" />
            </div>
            <span>Saúde</span>
          </a>
        </li>
        <li>
          <a href="/fitness" className="category-item">
            <div className="icon-box">
              <img src={fitnessIcon} alt="Esportes e Fitness" />
            </div>
            <span>Esportes e Fitness</span>
          </a>
        </li>
        <li>
          <a href="/moda" className="category-item">
            <div className="icon-box">
              <img src={modaIcon} alt="Moda" />
            </div>
            <span>Moda</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Category;