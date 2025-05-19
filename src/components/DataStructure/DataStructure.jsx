import React from 'react';

function DataStructure() {
  return (
    <div className="container py-4">
      <div className="mb-4 text-center">
        <h1 className="fw-bold text-primary">🧩 Cấu Trúc Dữ Liệu</h1>
        <p className="text-muted fs-5">Nền tảng quan trọng trong lập trình và giải thuật</p>
      </div>

      <div className="bg-white shadow-sm p-4 rounded mb-4 border-start border-4 border-info">
        <h4 className="text-info">Tổng quan</h4>
        <p>
          <strong>Cấu trúc dữ liệu</strong> là phương pháp tổ chức và lưu trữ dữ liệu để tối ưu quá trình truy cập và xử lý. 
          Chọn đúng cấu trúc dữ liệu giúp viết chương trình ngắn gọn, hiệu quả và dễ bảo trì.
        </p>
      </div>

      <div className="row g-4">
        {/* Phân loại */}
        <div className="col-md-6">
          <div className="p-4 border rounded h-100 bg-light">
            <h5 className="text-secondary">📂 Phân loại chính</h5>
            <ul className="mb-0">
              <li><strong>Tuyến tính:</strong> Array, Stack, Queue, Linked List</li>
              <li><strong>Phi tuyến:</strong> Tree, Graph</li>
              <li><strong>Hash-based:</strong> Hash Table, Set</li>
              <li><strong>Chuyên biệt:</strong> Heap, Trie, Segment Tree, DSU</li>
            </ul>
          </div>
        </div>

        {/* Ứng dụng thực tế */}
        <div className="col-md-6">
          <div className="p-4 border rounded h-100 bg-light">
            <h5 className="text-secondary">🛠️ Ứng dụng thực tế</h5>
            <ul className="mb-0">
              <li>Mảng – quản lý danh sách, cấu trúc bảng</li>
              <li>Stack/Queue – xử lý yêu cầu, undo/redo</li>
              <li>Hash Table – tìm kiếm nhanh, cấu trúc dữ liệu từ điển</li>
              <li>Tree – hệ thống file, cơ sở dữ liệu</li>
              <li>Graph – mạng xã hội, bản đồ, thuật toán tìm đường</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Chi tiết các cấu trúc */}
      <div className="mt-5">
        <h4 className="text-success mb-3">🧠 Một số cấu trúc phổ biến</h4>
        <div className="row row-cols-1 row-cols-md-2 g-3">
          {[
            ["Array", "Truy cập nhanh qua chỉ số, kích thước cố định."],
            ["Linked List", "Danh sách liên kết động, dễ thêm/xoá phần tử."],
            ["Stack", "LIFO – dùng trong duyệt cây, kiểm tra ngoặc."],
            ["Queue", "FIFO – dùng trong lập lịch, xử lý hàng đợi."],
            ["Hash Table", "Lưu key-value, tìm kiếm O(1)."],
            ["Tree", "Biểu diễn cấu trúc phân cấp, cây nhị phân."],
            ["Heap", "Cây ưu tiên, dùng trong thuật toán Dijkstra."],
            ["Graph", "Dữ liệu phi tuyến với các mối quan hệ phức tạp."],
            ["Disjoint Set", "Dùng trong Kruskal, kiểm tra chu trình."]
          ].map(([title, desc]) => (
            <div className="col" key={title}>
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body">
                  <h6 className="card-title text-primary fw-bold">{title}</h6>
                  <p className="card-text text-muted mb-0">{desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lý do học */}
      <div className="bg-warning-subtle rounded p-4 mt-5">
        <h5 className="text-warning">🎯 Vì sao cần học cấu trúc dữ liệu?</h5>
        <ul>
          <li>Hiểu bản chất và logic hoạt động của chương trình</li>
          <li>Tối ưu hoá hiệu năng và thời gian xử lý</li>
          <li>Làm nền tảng học thuật toán hiệu quả</li>
          <li>Phục vụ phỏng vấn, thi đấu lập trình</li>
        </ul>
        <p className="mb-0 text-muted"><em>“Người giỏi thuật toán là người hiểu rõ cấu trúc dữ liệu.”</em></p>
      </div>
    </div>
  );
}

export default DataStructure;
