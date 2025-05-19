import React from 'react';
import { FaCode, FaBrain, FaPlay, FaProjectDiagram } from 'react-icons/fa';

function Home({ selectedAlgorithm }) {
  return (
    <div className="container py-5 text-center">
      {!selectedAlgorithm ? (
        <>
          <h1 className="display-5 fw-bold text-primary mb-3">Chào mừng bạn đến với Thế giới Thuật Toán</h1>
          <p className="lead text-muted mb-4">
            Trang web này giúp bạn học và tương tác với các <strong>thuật toán kinh điển</strong> thông qua trải nghiệm trực quan và thân thiện.
          </p>

          <div className="row row-cols-1 row-cols-md-2 g-4 mb-5">
            <div className="col">
              <div className="h-100 p-4 border rounded shadow-sm bg-light">
                <FaCode size={32} className="text-primary mb-2" />
                <h5 className="fw-semibold">Khám phá các thuật toán</h5>
                <p className="text-muted mb-0">Từ sắp xếp, tìm kiếm, đồ thị đến tối ưu hóa.</p>
              </div>
            </div>
            <div className="col">
              <div className="h-100 p-4 border rounded shadow-sm bg-light">
                <FaBrain size={32} className="text-success mb-2" />
                <h5 className="fw-semibold">Hiểu cốt lõi</h5>
                <p className="text-muted mb-0">Giải thích ngắn gọn, rõ ràng, và dễ hiểu.</p>
              </div>
            </div>
            <div className="col">
              <div className="h-100 p-4 border rounded shadow-sm bg-light">
                <FaPlay size={32} className="text-danger mb-2" />
                <h5 className="fw-semibold">Chạy thử trực tiếp</h5>
                <p className="text-muted mb-0">Nhập dữ liệu và quan sát kết quả tức thì.</p>
              </div>
            </div>
            <div className="col">
              <div className="h-100 p-4 border rounded shadow-sm bg-light">
                <FaProjectDiagram size={32} className="text-warning mb-2" />
                <h5 className="fw-semibold">Trực quan hóa thuật toán</h5>
                <p className="text-muted mb-0">Dễ dàng hình dung từng bước xử lý.</p>
              </div>
            </div>
          </div>

          <div className="alert alert-info fs-5">
            👉 Hãy chọn một thuật toán từ thanh bên để bắt đầu hành trình!
          </div>
        </>
      ) : (
        <div className="alert alert-success fs-5">
          ✨ Bạn đã chọn thuật toán: <strong>{selectedAlgorithm}</strong> <br />
          Điền dữ liệu để bắt đầu chạy thử và hiểu sâu hơn!
        </div>
      )}
    </div>
  );
}

export default Home;
