import "./TitleContainer.scss"

function TitleContainer() {
  return (
    <div className="shelf-header">
      <div className="title-wrapper">
        <hr />
        <h2>Produtos relacionados</h2>
        <hr />
      </div>
      <p className="view-all">Ver todos</p>
    </div>
  );
}

export default TitleContainer;