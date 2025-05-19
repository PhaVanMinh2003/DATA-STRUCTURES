import { FaListAlt } from "react-icons/fa";
function Array() {
  return (
    <div className="container py-4">
      <h2
        style={{
          textAlign: "center",
          fontWeight: "bold",
          fontSize: "30px",
          color: "#2c3e50",
        }}
      >
        <FaListAlt style={{ marginRight: "10px", color: "#2980b9" }} />
        Cấu trúc dữ liệu: Mảng (Array)
      </h2>

      <section className="mb-3">
        <h4>1. Định nghĩa</h4>
        <p>
          Mảng (Array) là một cấu trúc dữ liệu cơ bản, <strong>thường</strong>{" "}
          là tuyến tính, dùng để lưu trữ một tập hợp các phần tử. Các phần tử
          này
          <strong> thường</strong> có cùng kiểu dữ liệu và được lưu trữ tại các
          vị trí bộ nhớ liên tiếp nhau, cho phép truy cập ngẫu nhiên đến từng
          phần tử thông qua chỉ số (index) của nó.
        </p>
        <p>
          <strong>Giải thích thêm về những từ "thường":</strong>
        </p>
        <ul>
          <li>
            <strong>"Thường" là tuyến tính:</strong> Trong hầu hết các ngôn ngữ
            lập trình và trong cách hiểu cơ bản, mảng là một cấu trúc tuyến
            tính. Tuy nhiên, khái niệm "mảng" đôi khi cũng được mở rộng để mô tả
            các cấu trúc dữ liệu đa chiều (ví dụ: mảng hai chiều, ba chiều), lúc
            này nó không còn là tuyến tính theo nghĩa đơn giản nữa. Dù vậy,
            trong mỗi "chiều" của mảng đa chiều, các phần tử vẫn được sắp xếp
            liên tiếp.
          </li>
          <li>
            <strong>"Thường" có cùng kiểu dữ liệu:</strong> Trong nhiều ngôn ngữ
            lập trình tĩnh (ví dụ: C++, Java), một mảng bắt buộc phải chứa các
            phần tử có cùng kiểu dữ liệu. Tuy nhiên, một số ngôn ngữ lập trình
            động (ví dụ: Python, JavaScript) cho phép một mảng chứa các phần tử
            có kiểu dữ liệu khác nhau. Dù vậy, việc sử dụng mảng với các kiểu dữ
            liệu đồng nhất vẫn mang lại nhiều lợi ích về hiệu suất và dễ quản lý
            hơn.
          </li>
        </ul>
      </section>

      <section className="mb-5 shadow-sm">
        <h4>2. Các thao tác cơ bản trên mảng</h4>
        <ul className="list-group list-group-flush bg-light rounded p-4">
          <li className="list-group-item">✅ Khởi tạo mảng</li>
          <li className="list-group-item">
            ➕ Thêm phần tử (<code>push</code>, <code>unshift</code>)
          </li>
          <li className="list-group-item">
            ➖ Xoá phần tử (<code>pop</code>, <code>shift</code>)
          </li>
          <li className="list-group-item">
            🔁 Duyệt mảng (<code>for</code>, <code>map</code>,{" "}
            <code>forEach</code>)
          </li>
          <li className="list-group-item">
            🔍 Tìm kiếm phần tử (<code>indexOf</code>, <code>find</code>)
          </li>
          <li className="list-group-item">
            ↕️ Sắp xếp (<code>sort</code>)
          </li>
        </ul>
      </section>

      <section className="mb-3">
        <h4>3. Ví dụ minh họa bằng PHP</h4>
        <pre className="bg-light p-3 rounded">
          {`<?php
          $numbers = [1, 2, 3, 4];

          // Thêm phần tử vào cuối
          array_push($numbers, 5); // [1, 2, 3, 4, 5]

          // Xoá phần tử đầu
          array_shift($numbers); // [2, 3, 4, 5]

          // Duyệt mảng
          foreach ($numbers as $num) {
              echo $num . "\\n";
          }
          ?>`}
        </pre>
      </section>

      <section className="mb-5 p-4 bg-info rounded shadow-sm">
        <h4 className="text-center fw-bold mb-3 text-white">
          4. Ứng dụng của mảng
        </h4>
        <p className="text-dark fs-5">
          Mảng được sử dụng nhiều trong các thuật toán như sắp xếp, tìm kiếm, xử
          lý dữ liệu tuần tự, và là nền tảng cho các cấu trúc khác như{" "}
          <strong>Stack</strong>, <strong>Queue</strong>,...
        </p>
      </section>
    </div>
  );
}

export default Array;
