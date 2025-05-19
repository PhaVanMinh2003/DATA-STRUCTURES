import { useState } from 'react';

function Heap() {
  // State để lưu trữ Heap (mô phỏng bằng mảng)
  const [heap, setHeap] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState('');

  // Hàm thêm phần tử vào Heap
  const addToHeap = () => {
    const value = inputValue.trim();
    if (!value || isNaN(value)) {
      setError('Vui lòng nhập một số hợp lệ!');
      return;
    }
    const num = Number(value);
    const newHeap = [...heap, num];
    
    // Sắp xếp lại để duy trì tính chất Max-Heap
    bubbleUp(newHeap, newHeap.length - 1);
    setHeap(newHeap);
    setInputValue('');
    setError('');
  };

  // Hàm bubbleUp để duy trì tính chất Max-Heap
  const bubbleUp = (arr, index) => {
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (arr[parentIndex] < arr[index]) {
        [arr[parentIndex], arr[index]] = [arr[index], arr[parentIndex]];
        index = parentIndex;
      } else {
        break;
      }
    }
  };

  // Hàm xóa phần tử gốc (root) của Heap
  const removeFromHeap = () => {
    if (heap.length === 0) {
      setError('Heap rỗng, không thể xóa!');
      return;
    }
    const newHeap = [...heap];
    newHeap[0] = newHeap.pop(); // Thay root bằng phần tử cuối
    if (newHeap.length > 0) {
      heapify(newHeap, 0); // Sắp xếp lại từ root
    }
    setHeap(newHeap);
    setError('');
  };

  // Hàm heapify để duy trì tính chất Max-Heap
  const heapify = (arr, index) => {
    const left = 2 * index + 1;
    const right = 2 * index + 2;
    let largest = index;

    if (left < arr.length && arr[left] > arr[largest]) {
      largest = left;
    }
    if (right < arr.length && arr[right] > arr[largest]) {
      largest = right;
    }
    if (largest !== index) {
      [arr[index], arr[largest]] = [arr[largest], arr[index]];
      heapify(arr, largest);
    }
  };

  // Xử lý khi nhấn Enter
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addToHeap();
    }
  };

  return (
    <section className="container py-4">
      {/* Tiêu đề lý thuyết */}
      <h2 className="text-center fw-bold mb-4">
        Cấu trúc dữ liệu: Heap (Cây đống)
      </h2>

      {/* Phần lý thuyết */}
      <section className="mb-3">
        <h4>1. Lý thuyết về Heap</h4>
        <p>
          Heap là một cấu trúc dữ liệu dạng cây nhị phân, trong đó giá trị của mỗi nút cha luôn thỏa mãn một điều kiện so với các nút con. Trong <strong>Max-Heap</strong>, giá trị của nút cha lớn hơn hoặc bằng giá trị các nút con. Ngược lại, trong <strong>Min-Heap</strong>, nút cha nhỏ hơn hoặc bằng các nút con. Heap thường được triển khai bằng mảng, với hiệu suất cao cho các thao tác như thêm phần tử (O(log n)) và xóa phần tử lớn nhất/nhỏ nhất (O(log n)).
        </p>
      </section>

      {/* Phần cú pháp */}
      <section className="mb-3">
        <h4>2. Cú pháp cơ bản</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <strong>Thêm phần tử</strong>: Thêm phần tử vào cuối Heap và điều chỉnh (bubble up) để duy trì tính chất Heap.
            <pre className="bg-light p-3 rounded">{`heap.push(element); bubbleUp(heap, heap.length - 1);`}</pre>
          </li>
          <li className="list-group-item">
            <strong>Xóa phần tử gốc</strong>: Thay phần tử gốc bằng phần tử cuối, sau đó điều chỉnh (heapify) từ gốc.
            <pre className="bg-light p-3 rounded">{`heap[0] = heap.pop(); heapify(heap, 0);`}</pre>
          </li>
          <li className="list-group-item">
            <strong>Lấy phần tử lớn nhất (Max-Heap)</strong>: Truy cập phần tử đầu tiên của mảng.
            <pre className="bg-light p-3 rounded">{`heap[0];`}</pre>
          </li>
        </ul>
      </section>

      {/* Ví dụ minh họa */}
      <section className="mb-3">
        <h4>3. Ví dụ minh họa bằng PHP sử dụng array</h4>
        <pre className="bg-light p-3 rounded">
{`<?php
// Mô phỏng Max-Heap bằng mảng
$heap = [];

// Hàm thêm phần tử
function pushToHeap(&$heap, $value) {
    $heap[] = $value;
    $index = count($heap) - 1;
    while ($index > 0) {
        $parent = floor(($index - 1) / 2);
        if ($heap[$parent] < $heap[$index]) {
            [$heap[$parent], $heap[$index]] = [$heap[$index], $heap[$parent]];
            $index = $parent;
        } else {
            break;
        }
    }
}

// Hàm xóa phần tử gốc
function popFromHeap(&$heap) {
    if (empty($heap)) return null;
    $result = $heap[0];
    $heap[0] = array_pop($heap);
    $index = 0;
    while (true) {
        $left = 2 * $index + 1;
        $right = 2 * $index + 2;
        $largest = $index;
        if ($left < count($heap) && $heap[$left] > $heap[$largest]) {
            $largest = $left;
        }
        if ($right < count($heap) && $heap[$right] > $heap[$largest]) {
            $largest = $right;
        }
        if ($largest != $index) {
            [$heap[$index], $heap[$largest]] = [$heap[$largest], $heap[$index]];
            $index = $largest;
        } else {
            break;
        }
    }
    return $result;
}

// Thêm phần tử
pushToHeap($heap, 10);
pushToHeap($heap, 20);
pushToHeap($heap, 15);

// Hiển thị Heap
echo implode(', ', $heap); // 20, 10, 15

// Xóa phần tử gốc
echo popFromHeap($heap); // 20
echo implode(', ', $heap); // 15, 10
?>`}
        </pre>
      </section>

      {/* Demo Heap */}
      <section className="mb-3">
        <h4>4. Demo Heap</h4>
        <p>
          Heap có thể được dùng trong React để quản lý danh sách ưu tiên, chẳng hạn sắp xếp các tác vụ theo độ ưu tiên.
        </p>
        <div className="mb-3">
          <input
            type="text"
            className="form-control form-control-sm"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Nhập số (VD: 10, 20)"
            aria-label="Nhập số để thêm vào Heap"
          />
          <div className="mt-2">
            <button
              className="btn btn-success btn-sm me-2"
              onClick={addToHeap}
              aria-label="Thêm số vào Heap"
            >
              Thêm vào Heap
            </button>
            <button
              className="btn btn-danger btn-sm"
              onClick={removeFromHeap}
              aria-label="Xóa phần tử gốc khỏi Heap"
            >
              Xóa phần tử gốc
            </button>
          </div>
          {error && <div className="alert alert-danger mt-2" role="alert">{error}</div>}
        </div>

        {/* Heap UI biểu diễn dưới dạng danh sách */}
        <div className="mb-3">
          <h5 className="mb-2">Danh sách phần tử trong Heap:</h5>
          <div style={{ maxWidth: '300px' }}>
            {heap.length > 0 ? (
              heap.map((item, index) => (
                <div
                  key={item + '-' + index}
                  className="p-1 bg-primary text-white rounded d-flex justify-content-between align-items-center mb-1"
                  style={{ fontSize: '0.9em', height: '30px' }}
                >
                  <span className="ms-2">{item}</span>
                </div>
              ))
            ) : (
              <p className="text-muted">Heap rỗng</p>
            )}
          </div>
        </div>
      </section>

      {/* Ứng dụng thực tế */}
      <section className="mb-3">
        <h4>5. Ứng dụng của Heap trong thực chiến</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <strong>Hàng đợi ưu tiên</strong>: Sử dụng Heap để quản lý các tác vụ có độ ưu tiên, như lập lịch công việc hoặc xử lý sự kiện.
          </li>
          <li className="list-group-item">
            <strong>Tìm kiếm phần tử lớn nhất/nhỏ nhất</strong>: Heap cho phép truy xuất nhanh phần tử lớn nhất (Max-Heap) hoặc nhỏ nhất (Min-Heap).
          </li>
          <li className="list-group-item">
            <strong>Thuật toán Dijkstra/Kruskal</strong>: Heap được sử dụng để tối ưu hóa việc tìm đường đi ngắn nhất hoặc cây bao trùm tối thiểu.
          </li>
          <li className="list-group-item">
            <strong>Xử lý dữ liệu thời gian thực</strong>: Heap hỗ trợ quản lý dữ liệu theo thứ tự ưu tiên trong các ứng dụng như hệ thống xếp hàng hoặc xử lý luồng dữ liệu.
          </li>
        </ul>
        <p>
          Với hiệu suất cao và khả năng duy trì thứ tự, Heap là công cụ lý tưởng trong các ứng dụng cần quản lý ưu tiên hoặc sắp xếp dữ liệu.
        </p>
      </section>
    </section>
  );
}

export default Heap;