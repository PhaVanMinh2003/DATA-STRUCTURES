import { useState } from 'react';

function Set() {
  // State để lưu trữ tập hợp (dùng mảng để mô phỏng Set, đảm bảo không trùng lặp)
  const [elements, setElements] = useState([]);
  const [inputValue, setInputValue] = useState('');

  // Thêm phần tử vào tập hợp
  const addToSet = () => {
    const value = inputValue.trim();
    if (value !== '') {
      // Chỉ thêm nếu giá trị chưa tồn tại
      if (!elements.includes(value)) {
        setElements([...elements, value]);
      }
      setInputValue(''); // Reset input
    }
  };

  // Xóa phần tử khỏi tập hợp
  const removeFromSet = (value) => {
    setElements(elements.filter((item) => item !== value));
  };

  return (
    <section className="container py-4">
      {/* Tiêu đề lý thuyết */}
      <h2 className="text-center fw-bold mb-4">
        Cấu trúc dữ liệu: Tập hợp (Set)
      </h2>

      {/* Phần lý thuyết */}
      <section className="mb-3">
        <h4>1. Lý thuyết về Tập hợp (Set)</h4>
        <p>
          Tập hợp (Set) là một cấu trúc dữ liệu lưu trữ các phần tử <strong>duy nhất</strong>, không cho phép trùng lặp. 
          Các thao tác cơ bản trên Set gồm: <strong>add</strong> (thêm phần tử), <strong>delete</strong> (xóa phần tử), 
          <strong>has</strong> (kiểm tra sự tồn tại), và <strong>size</strong> (lấy số lượng phần tử). 
          Set không duy trì thứ tự cụ thể và có hiệu suất cao (O(1) trung bình) cho các thao tác cơ bản.
        </p>
      </section>

      {/* Phần cú pháp */}
      <section className="mb-3">
        <h4>2. Cú pháp cơ bản</h4>
        <ul>
          <li>
            <strong>add</strong>: Thêm phần tử vào Set (bỏ qua nếu đã tồn tại)
            <pre className="bg-light p-3 rounded">{`set.add(element);`}</pre>
          </li>
          <li>
            <strong>delete</strong>: Xóa phần tử khỏi Set
            <pre className="bg-light p-3 rounded">{`set.delete(element);`}</pre>
          </li>
          <li>
            <strong>has</strong>: Kiểm tra phần tử có trong Set
            <pre className="bg-light p-3 rounded">{`set.has(element);`}</pre>
          </li>
          <li>
            <strong>size</strong>: Lấy số lượng phần tử
            <pre className="bg-light p-3 rounded">{`set.size;`}</pre>
          </li>
        </ul>
      </section>

      {/* Ví dụ minh họa */}
      <section className="mb-3">
        <h4>3. Ví dụ minh họa bằng PHP sử dụng array</h4>
        <pre className="bg-light p-3 rounded">
          {`<?php
// Mô phỏng Set bằng array
$set = [];

// Thêm phần tử
$set['A'] = true;
$set['B'] = true;
$set['A'] = true; // Không thêm vì đã tồn tại

// Kiểm tra sự tồn tại
echo isset($set['A']) ? 'A exists' : 'A not found'; // A exists

// Xóa phần tử
unset($set['B']);

// Hiển thị danh sách
echo implode(', ', array_keys($set)); // A
?>`}
        </pre>
      </section>

      {/* Demo Set */}
      <section className="mb-3">
        <h4>4. Demo Set</h4>
        <p>
          Set có thể được dùng trong React để quản lý danh sách các phần tử duy nhất, chẳng hạn danh sách ID hoặc tên.
        </p>
        <div className="mb-3">
          <input
            type="text"
            className="form-control form-control-sm"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Nhập phần tử (VD: A, B)"
          />
          <button className="btn btn-success btn-sm mt-2" onClick={addToSet}>
            Thêm vào Set
          </button>
        </div>

        {/* Set UI biểu diễn dưới dạng danh sách */}
        <div className="mb-3">
          <h5 className="mb-2">Danh sách phần tử trong Set:</h5>
          <div style={{ maxWidth: '300px' }}>
            {elements.length > 0 ? (
              elements.map((item, index) => (
                <div
                  key={index}
                  className="p-1 bg-primary text-white rounded d-flex justify-content-between align-items-center mb-1"
                  style={{ fontSize: '0.9em', height: '30px' }}
                >
                  <span className="ms-2">{item}</span>
                  <button
                    className="btn btn-danger btn-sm me-2"
                    onClick={() => removeFromSet(item)}
                    style={{ padding: '0 6px', height: '24px', lineHeight: '1' }}
                  >
                    Xóa
                  </button>
                </div>
              ))
            ) : (
              <p className="text-muted">Set rỗng</p>
            )}
          </div>
        </div>
      </section>

      {/* Ứng dụng thực tế */}
      <section className="mb-3">
        <h4>5. Ứng dụng của Set trong thực chiến</h4>
        <ul>
          <li>
            <strong>Lọc dữ liệu duy nhất</strong>: Loại bỏ các giá trị trùng lặp trong danh sách (ví dụ: danh sách email, ID).
          </li>
          <li>
            <strong>Kiểm tra sự tồn tại</strong>: Nhanh chóng kiểm tra một phần tử có trong tập hợp không (ví dụ: kiểm tra ID người dùng).
          </li>
          <li>
            <strong>Quản lý quyền truy cập</strong>: Lưu trữ tập hợp các quyền hoặc vai trò, đảm bảo không trùng lặp.
          </li>
          <li>
            <strong>Tối ưu hóa thuật toán</strong>: Sử dụng Set để tìm giao, hợp, hoặc hiệu của hai tập hợp.
          </li>
        </ul>
        <p>
          Với khả năng lưu trữ các giá trị duy nhất và hiệu suất cao, Set là công cụ lý tưởng trong các ứng dụng cần quản lý danh sách không trùng lặp.
        </p>
      </section>
    </section>
  );
}

export default Set;