import React from 'react';
import './ShelfHeader.scss';

interface ShelfHeaderProps {
  title?: string;
  showTabs?: boolean;
}

const ShelfHeader: React.FC<ShelfHeaderProps> = ({ 
  title = "Produtos relacionados", 
  showTabs = true 
}) => {
  return (
    <div className="shelf-header-container">
      <div className="title-wrapper">
        <hr className="hr-left"/>
        <h2>{title}</h2>
        <hr className="hr-right"/>
      </div>
      
      {showTabs && (
        <nav className="shelf-tabs">
          <ul>
            <li className="active">CELULAR</li>
            <li>ACESSÓRIOS</li>
            <li>TABLETS</li>
            <li>NOTEBOOKS</li>
            <li>TVS</li>
            <li>VER TODOS</li>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default ShelfHeader;