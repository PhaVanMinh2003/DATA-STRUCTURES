import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [search, setSearch] = useState('');

  return (
    <header className="bg-dark text-light py-4 border-bottom border-secondary">
      <div className="container">
        {/* Title and Description */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mb-3">
          <div className="d-flex align-items-center gap-3">
            <i className="bi bi-code-slash fs-1 text-info"></i>
            <div>
              <h1 className="h3 mb-0 fw-bold">Thuật Toán & Giải Thuật</h1>
              <p className="mb-0 text-secondary">Nơi bạn học cách tư duy như một lập trình viên</p>
            </div>
          </div>

          {/* Search */}
          <form className="mt-3 mt-md-0 d-flex" role="search">
            <input
              type="search"
              className="form-control me-2"
              placeholder="Tìm kiếm thuật toán..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button className="btn btn-outline-info" type="submit">
              <i className="bi bi-search"></i>
            </button>
          </form>
        </div>

        {/* Navbar */}
        <nav className="navbar navbar-expand-md navbar-dark">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#algoNavbar"
            aria-controls="algoNavbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="algoNavbar">
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
              <li className="nav-item">
                <Link className="nav-link" to="/"><i className="bi bi-house-fill me-1"></i> Tổng quan</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/data-structure"><i className="bi bi-diagram-3-fill me-1"></i> Cấu trúc dữ liệu</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/basic-algorithms"><i className="bi bi-sort-up-alt me-1"></i> Giải thuật cơ bản</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/greedy"><i className="bi bi-lightning-fill me-1"></i> Tham lam (Greedy)</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/dynamic-programming"><i className="bi bi-graph-up-arrow me-1"></i> Quy hoạch động (DP)</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/backtracking"><i className="bi bi-cpu-fill me-1"></i> Backtracking & Branch and Bound</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/graph-theory"><i className="bi bi-diagram-2-fill me-1"></i> Lý thuyết đồ thị</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/optimization"><i className="bi bi-bar-chart-fill me-1"></i> Tối ưu hóa & Lập lịch</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/divide-conquer"><i className="bi bi-bezier me-1"></i> Chia để trị & Đệ quy</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}
