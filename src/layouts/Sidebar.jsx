import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Sidebar({ categories, selectedAlgorithm }) {
  const [openCategory, setOpenCategory] = useState(null);

  const handleToggleCategory = (category) => {
    setOpenCategory(openCategory === category ? null : category);
  };

  // Ánh xạ tên danh mục và item sang đường dẫn route
  const getRoutePath = (category, item) => {
    if (category === 'Data Structures') {
      return `/data-structures/${item.toLowerCase()}`;
    }

    return `/algorithms/${encodeURIComponent(category)}/${encodeURIComponent(item)}`;
  };

  return (
    <aside
      className="bg-light border-end p-3"
      style={{ width: '250px', height: '100vh', overflowY: 'auto', position: 'sticky', top: 0 }}
    >
      <h4 className="mb-3">Danh Mục Thuật Toán</h4>
      <ul className="list-group">
        {Object.keys(categories).map((category) => (
          <li key={category} className="list-group-item border-0 p-0">
            <button
              className="btn btn-link w-100 text-start text-dark"
              onClick={() => handleToggleCategory(category)}
            >
              <strong>{category}</strong>
            </button>

            {openCategory === category && (
              <ul className="list-unstyled ps-3">
                {categories[category].map((item) => (
                  <li key={item}>
                    <Link
                      to={getRoutePath(category, item)}
                      className={`btn w-100 text-start p-2 text-dark ${
                        selectedAlgorithm === item ? 'bg-info text-white' : ''
                      }`}
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar;