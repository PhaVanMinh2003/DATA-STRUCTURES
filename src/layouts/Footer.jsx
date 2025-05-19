import React from 'react';

function Footer() {
  return (
    <footer className="bg-dark text-light mt-5 pt-4 border-top border-secondary">
      <div className="container">
        <div className="row text-center text-md-start">

          {/* Cột 1: Logo & mô tả */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold">
              <i className="bi bi-code-slash me-2 text-info"></i>Thuật Toán & Giải Thuật
            </h5>
            <p className="text-secondary small">
              Khám phá và rèn luyện kỹ năng giải thuật từ cơ bản đến nâng cao. Cộng đồng dành cho những người yêu thích tư duy lập trình.
            </p>
          </div>

          {/* Cột 2: Liên kết nhanh */}
          <div className="col-md-4 mb-4">
            <h6 className="text-uppercase fw-semibold">Chuyên mục</h6>
            <ul className="list-unstyled small">
              <li><a href="#" className="text-secondary text-decoration-none">Cấu trúc dữ liệu</a></li>
              <li><a href="#" className="text-secondary text-decoration-none">Thuật toán tìm kiếm</a></li>
              <li><a href="#" className="text-secondary text-decoration-none">Quy hoạch động</a></li>
              <li><a href="#" className="text-secondary text-decoration-none">Backtracking & DFS/BFS</a></li>
            </ul>
          </div>

          {/* Cột 3: Mạng xã hội */}
          <div className="col-md-4 mb-4">
            <h6 className="text-uppercase fw-semibold">Theo dõi</h6>
            <div className="d-flex justify-content-center justify-content-md-start gap-3 mt-2">
              <a href="#" className="text-info fs-5"><i className="bi bi-facebook"></i></a>
              <a href="#" className="text-info fs-5"><i className="bi bi-twitter-x"></i></a>
              <a href="#" className="text-info fs-5"><i className="bi bi-github"></i></a>
              <a href="#" className="text-info fs-5"><i className="bi bi-youtube"></i></a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center border-top border-secondary pt-3 mt-3 small text-muted">
          © 2025 Thuật Toán & Giải Thuật. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
