import { useState } from "react";

function HashTable() {
  const [hashTable, setHashTable] = useState({});
  const [key, setKey] = useState("");
  const [value, setValue] = useState("");
  const [message, setMessage] = useState("");

  const hashFunction = (key) => {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash << 5) - hash + key.charCodeAt(i);
      hash = hash & hash;
    }
    return hash;
  };

  const insert = () => {
    const hash = hashFunction(key);
    setHashTable((prev) => ({ ...prev, [hash]: value }));
    setMessage(`Đã thêm key: ${key} với giá trị: ${value}`);
    setKey("");
    setValue("");
  };

  const search = () => {
    const hash = hashFunction(key);
    if (hashTable[hash]) {
      setMessage(`Tìm thấy key: ${key}, giá trị: ${hashTable[hash]}`);
    } else {
      setMessage(`Không tìm thấy key: ${key}`);
    }
    setKey("");
  };

  const remove = () => {
    const hash = hashFunction(key);
    const newTable = { ...hashTable };
    delete newTable[hash];
    setHashTable(newTable);
    setMessage(`Đã xóa key: ${key}`);
    setKey("");
  };

  return (
    <div className="container py-4">
      <h3 className="mb-4">Hash Table - Bảng Băm</h3>

      {/* 1. Khái niệm */}
      <section className="mb-3">
        <h4>1. Hash Table là gì?</h4>
        <p>
          <strong>Hash Table (Bảng băm)</strong> là một cấu trúc dữ liệu lưu trữ
          các cặp <code>key-value</code>. Nó sử dụng một{" "}
          <strong>hàm băm (hash function)</strong> để chuyển đổi khóa (key)
          thành chỉ số, từ đó lưu và truy xuất giá trị (value) tương ứng một
          cách hiệu quả.
        </p>
        <p>
          Hash Table nổi bật với khả năng{" "}
          <strong>tìm kiếm, thêm và xóa dữ liệu rất nhanh</strong> – trung bình
          là <code>O(1)</code> thời gian.
        </p>
        <p>
          Ví dụ điển hình: trong thực tế, Hash Table được sử dụng để{" "}
          <strong>
            quản lý dữ liệu người dùng theo mã định danh (ID), caching, từ điển,
            bảng ánh xạ
          </strong>
          , v.v.
        </p>
        <h5 className="mt-3">⚠️ Vấn đề va chạm (collision)</h5>
        <p>
          Khi hai <code>key</code> khác nhau có thể tạo ra cùng một chỉ số (hash
          index), ta gọi đó là <strong>collision</strong>.
        </p>
        <p>
          Để xử lý, một trong những cách đơn giản là dùng{" "}
          <strong>chaining</strong> – tức là lưu các giá trị trùng chỉ số vào
          một danh sách (array hoặc linked list).
        </p>
        <pre className="bg-light p-3 rounded">
          {`// Mô phỏng chaining trong PHP
$hashTable = [];

$index = hash_function("key1");
$hashTable[$index][] = "value1";

$index = hash_function("key2"); // Nếu trùng index
$hashTable[$index][] = "value2"; // Cùng lưu tại đó`}
        </pre>
      </section>

      {/* 2. Đặc điểm */}
      <section className="mb-3">
        <h4>2. Đặc điểm của Hash Table</h4>
        <ul>
          <li>Truy xuất nhanh chóng với thời gian trung bình O(1).</li>
          <li>Key không cần theo thứ tự, chỉ cần duy nhất (unique).</li>
          <li>
            Có thể xảy ra xung đột (collision), cần xử lý bằng kỹ thuật như
            chaining hoặc open addressing.
          </li>
        </ul>
      </section>

      {/* 3. Ví dụ minh họa bằng PHP */}
      <section className="mb-3">
        <h4>3. Ví dụ minh họa bằng PHP</h4>
        <pre className="bg-light p-3 rounded">
          {`// Khởi tạo bảng băm
$hashTable = [];

// Thêm phần tử
$hashTable["username"] = "john_doe";

// Truy cập
echo $hashTable["username"];

// Xóa
unset($hashTable["username"]);`}
        </pre>
      </section>

      {/* 4. Demo giao diện */}
      <section className="mb-3">
        <h4>4. Demo thao tác Hash Table</h4>
        <input
          type="text"
          className="form-control"
          placeholder="Nhập Key"
          value={key}
          onChange={(e) => setKey(e.target.value)}
        />
        <input
          type="text"
          className="form-control mt-2"
          placeholder="Nhập Value"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <div className="mt-2">
          <button className="btn btn-primary me-2" onClick={insert}>
            Thêm Key-Value
          </button>
          <button className="btn btn-secondary me-2" onClick={search}>
            Tìm Key
          </button>
          <button className="btn btn-danger" onClick={remove}>
            Xóa Key
          </button>
        </div>
        {message && <div className="alert alert-info mt-3">{message}</div>}
      </section>

      {/* 5. Bảng hiển thị */}
      <section className="mb-3">
        <h5>Bảng Băm hiện tại:</h5>
        <pre>{JSON.stringify(hashTable, null, 2)}</pre>
      </section>

      {/* 6. Ứng dụng thực tế */}
      <section className="mb-3">
        <h4>6. Ứng dụng của Hash Table trong thực tế</h4>
        <ul>
          <li>Cache (Redis, Memcached)</li>
          <li>Quản lý session, user lookup theo ID</li>
          <li>Hệ thống từ điển, tra cứu</li>
          <li>DNS – ánh xạ domain về IP</li>
        </ul>
      </section>
    </div>
  );
}

export default HashTable;
