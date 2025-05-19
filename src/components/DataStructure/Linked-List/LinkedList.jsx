import { useState } from 'react';
// Danh sách liên kết
function LinkedList() {
  const [list, setList] = useState([]);
  const [value, setValue] = useState('');
  const [message, setMessage] = useState('');

  const addNode = () => {
    if (value !== '') {
      setList([...list, value]);
      setMessage(`Đã thêm node "${value}" vào danh sách.`);
      setValue('');
    } else {
      setMessage('Vui lòng nhập giá trị node.');
    }
  };

  return (
    <section className="container py-4">
      {/* 1. Khái niệm */}
      <section className="mb-3">
        <h4>1. Linked List là gì?</h4>
        <p>
          <strong>Linked List (Danh sách liên kết)</strong> là một cấu trúc dữ liệu tuyến tính, trong đó các phần tử
          (gọi là node) được liên kết với nhau thông qua con trỏ. Mỗi node chứa dữ liệu và một con trỏ trỏ đến node tiếp theo.
        </p>
        <p>Khác với mảng, các phần tử trong Linked List không lưu trữ liền kề trong bộ nhớ.</p>
      </section>

      {/* 2. Đặc điểm */}
      <section className="mb-3">
        <h4>2. Đặc điểm của Linked List</h4>
        <ul>
          <li>Khả năng mở rộng linh hoạt mà không cần cấp phát bộ nhớ lại như mảng.</li>
          <li>Chèn và xoá phần tử dễ dàng tại bất kỳ vị trí nào.</li>
          <li>Không truy cập ngẫu nhiên – phải duyệt từ đầu danh sách.</li>
        </ul>
      </section>

      {/* 3. Cú pháp PHP */}
      <section className="mb-3">
        <h4>3. Ví dụ minh họa bằng PHP</h4>
        <pre className="bg-light p-3 rounded">
{`// Tạo một node cơ bản
class Node {
  public $data;
  public $next;

  public function __construct($data) {
    $this->data = $data;
    $this->next = null;
  }
}

// Tạo danh sách liên kết
$head = new Node("A");
$head->next = new Node("B");
$head->next->next = new Node("C");

// Duyệt danh sách
$current = $head;
while ($current !== null) {
  echo $current->data . "\\n";
  $current = $current->next;
}`}
        </pre>
      </section>

      {/* 4. Demo giao diện */}
      <section className="mb-3">
        <h4>4. Demo danh sách liên kết</h4>
        <input
          type="text"
          className="form-control"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Nhập giá trị node"
        />
        <button className="btn btn-primary mt-2" onClick={addNode}>
          Thêm Node
        </button>

        <div className="mt-3">
          <h5>Danh sách liên kết:</h5>
          <div className="d-flex flex-wrap align-items-center">
            {list.map((item, index) => (
              <div key={index} className="d-flex align-items-center me-3">
                <div className="p-2 border rounded">{item}</div>
                {index < list.length - 1 && <span className="mx-2">→</span>}
              </div>
            ))}
          </div>
          {list.length === 0 && <p>Chưa có node nào.</p>}
        </div>

        {message && <div className="alert alert-info mt-3">{message}</div>}
      </section>

      {/* 5. Ứng dụng thực tế */}
      <section className="mb-3">
        <h4>5. Ứng dụng của Linked List trong thực tế</h4>
        <ul>
          <li>Triển khai các cấu trúc dữ liệu khác như Stack, Queue, Hash Table.</li>
          <li>Quản lý bộ nhớ động, ví dụ: danh sách các tiến trình trong hệ điều hành.</li>
          <li>Chuyển đổi giữa các trạng thái trong trình duyệt hoặc phần mềm (Undo/Redo).</li>
        </ul>
      </section>
    </section>
  );
}

export default LinkedList;
