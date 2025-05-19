import { useState } from "react";
// Ngăn xếp
function Stack() {
  const [stack, setStack] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const pushToStack = () => {
    if (inputValue.trim() !== "") {
      setStack((prevStack) => [...prevStack, inputValue.trim()]);
      setInputValue(""); // reset input sau khi add
    }
  };

  const popFromStack = () => {
    setStack((prevStack) => prevStack.slice(0, -1));
  };

  return (
    <section className="container py-4">
      {/* Tiêu đề lý thuyết */}
      <h2 className="text-center fw-bold mb-4">
        Cấu trúc dữ liệu: Ngăn Xếp (Stack)
      </h2>

      {/* Phần lý thuyết */}
      <section className="mb-3">
        <h4>1. Lý thuyết về Ngăn Xếp (Stack)</h4>
        <p>
          Ngăn xếp (Stack) là một cấu trúc dữ liệu theo kiểu **LIFO** (Last In,
          First Out), nghĩa là phần tử được thêm vào sau cùng sẽ được lấy ra đầu
          tiên. Các thao tác cơ bản trên ngăn xếp gồm:
          <strong>push</strong> (thêm phần tử vào cuối), <strong>pop</strong>{" "}
          (xoá phần tử cuối), và <strong>peek</strong> (xem phần tử cuối mà
          không xoá).
        </p>
      </section>

      {/* Phần cú pháp */}
      <section className="mb-3">
        <h4>2. Cú pháp cơ bản</h4>
        <ul>
          <li>
            <strong>push</strong>: Thêm phần tử vào ngăn xếp
            <pre className="bg-light p-3 rounded">{`stack.push(element);`}</pre>
          </li>
          <li>
            <strong>pop</strong>: Xoá phần tử khỏi ngăn xếp
            <pre className="bg-light p-3 rounded">{`stack.pop();`}</pre>
          </li>
          <li>
            <strong>peek</strong>: Xem phần tử cuối cùng mà không xoá
            <pre className="bg-light p-3 rounded">
              {`stack[stack.length - 1];`}
            </pre>
          </li>
        </ul>
      </section>

      {/* Ví dụ minh họa */}
      <section className="mb-3">
        <h4>3. Ví dụ minh họa bằng PHP sử dụng stack array</h4>
        <pre className="bg-light p-3 rounded">
          {`<?php

$stack = [];

// thêm phần tử vào ngăn xếp (stack)
array_push($stack, "A");
array_push($stack, "B");
array_push($stack, "C");

// lấy phần tử khỏi ngăn xếp (stack)
cho array_pop($stack); // "C"
echo Array_pop($stack); // "B"

//xem phần tử còn lại trên đỉnh stack
echo end($stack); // "A"
          `}
        </pre>
      </section>

      <section className="mb-3">
        <h4>4. Demo stack</h4>
        <p>
          Stack có thể được dùng trong React để mô phỏng lịch sử, điều hướng
          hoặc quản lý trạng thái phức tạp.
        </p>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Nhập phần tử"
          />
          <button className="btn btn-success mt-2" onClick={pushToStack}>
            Thêm vào Stack
          </button>
        </div>

        {/* Stack UI biểu diễn theo chiều dọc */}
        <div className="mb-3">
          <h5 className="mb-2">Biểu diễn Stack (đỉnh ở trên):</h5>
          <div
            style={{
              display: "flex",
              flexDirection: "column-reverse",
              alignItems: "flex-start",
            }}
          >
            {stack.length > 0 ? (
              stack.map((item, index) => (
                <div
                  key={index}
                  className="p-2 mb-1 bg-primary text-white rounded"
                  style={{ minWidth: "100px", textAlign: "center" }}
                >
                  {item}
                </div>
              ))
            ) : (
              <p className="text-muted">Stack rỗng</p>
            )}
          </div>
        </div>
        <button
          className="btn btn-danger"
          onClick={popFromStack}
          disabled={stack.length === 0}
        >
          Lấy phần tử ra khỏi stack
        </button>
      </section>

      <section className="mb-3">
        <h4>5. Ứng dụng của Stack trong thực chiến</h4>
        <ul>
          <li>
            <strong>Lịch sử trình duyệt:</strong> Stack được dùng để lưu lịch sử
            trang đã truy cập. Khi nhấn nút "Back", trình duyệt sẽ lấy URL cuối
            cùng từ stack.
          </li>
          <li>
            <strong>Undo/Redo trong phần mềm:</strong> Các hành động được lưu
            vào stack để có thể hoàn tác hoặc làm lại thao tác.
          </li>
          <li>
            <strong>Đệ quy (Recursion):</strong> Stack dùng để lưu trạng thái
            của từng lần gọi hàm, giúp chương trình quay lại sau khi hoàn tất.
          </li>
          <li>
            <strong>Kiểm tra dấu ngoặc hợp lệ:</strong> Stack giúp xác định biểu
            thức có các cặp dấu ngoặc đóng/mở đúng thứ tự hay không.
          </li>
          <li>
            <strong>Duyệt cây hoặc đồ thị (DFS):</strong> Stack được dùng để lưu
            các node cần truy cập trong thuật toán tìm kiếm theo chiều sâu.
          </li>
          <li>
            <strong>Biến đổi biểu thức (Infix → Postfix):</strong> Stack hỗ trợ
            xử lý thứ tự ưu tiên của toán tử trong biểu thức toán học.
          </li>
        </ul>

        <p>
          Với khả năng lưu trữ tạm thời và hoàn tác theo thứ tự ngược, stack là
          công cụ không thể thiếu trong lập trình thực chiến, đặc biệt trong các
          bài toán liên quan đến cấu trúc logic, điều hướng, và biểu thức.
        </p>
      </section>
    </section>
  );
}

export default Stack;
