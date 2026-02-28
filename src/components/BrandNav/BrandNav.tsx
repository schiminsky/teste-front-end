import './BrandNav.scss';

const BrandNav = () => {
  const brands = [1, 2, 3, 4, 5];

  return (
    <section className="brand-nav-container">
      <h2 className="brand-title">Navegue por marcas</h2>
      
      <div className="brands-wrapper">
        {brands.map((brand) => (
          <div key={brand} className="brand-circle">
            <img src="/assets/images/brandseconverse.png" alt="Logo Econverse" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default BrandNav;