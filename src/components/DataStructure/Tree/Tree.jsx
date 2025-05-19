import { useState } from 'react';

function Tree() {
  // State để lưu trữ cây (dùng object để mô phỏng cây nhị phân)
  const [tree, setTree] = useState(null); // Cây bắt đầu rỗng
  const [value, setValue] = useState(''); // Giá trị node nhập vào

  // Thêm node vào cây (thêm đơn giản vào bên trái hoặc phải)
  const addNode = () => {
    const nodeValue = value.trim();
    if (nodeValue === '') return;

    const newNode = { value: nodeValue, left: null, right: null };

    if (!tree) {
      // Nếu cây rỗng, node mới là root
      setTree(newNode);
    } else {
      // Thêm vào cây (đơn giản: thêm vào bên trái nếu rỗng, nếu không thì bên phải)
      const newTree = { ...tree };
      const queue = [newTree];
      while (queue.length > 0) {
        const current = queue.shift();
        if (!current.left) {
          current.left = newNode;
          break;
        } else if (!current.right) {
          current.right = newNode;
          break;
        } else {
          queue.push(current.left);
          queue.push(current.right);
        }
      }
      setTree(newTree);
    }
    setValue(''); // Reset input
  };

  // Xóa node (đơn giản: xóa node cuối cùng theo thứ tự duyệt BFS)
  const removeNode = () => {
    if (!tree) return;

    const newTree = { ...tree };
    const queue = [newTree];
    const parents = new Map(); // Lưu cha của mỗi node

    let lastNode = null;
    let lastParent = null;

    // Duyệt BFS để tìm node cuối cùng
    while (queue.length > 0) {
      const current = queue.shift();
      if (current.left) {
        parents.set(current.left, current);
        queue.push(current.left);
      }
      if (current.right) {
        parents.set(current.right, current);
        queue.push(current.right);
      }
      lastNode = current;
      lastParent = parents.get(current);
    }

    // Xóa node cuối cùng
    if (lastNode === newTree) {
      setTree(null); // Nếu chỉ có root, xóa root
    } else if (lastParent) {
      if (lastParent.left === lastNode) lastParent.left = null;
      else if (lastParent.right === lastNode) lastParent.right = null;
      setTree(newTree);
    }
  };

  // Hiển thị cây dưới dạng danh sách phân cấp (đơn giản)
  const renderTree = (node, level = 0) => {
    if (!node) return null;
    return (
      <div key={node.value} style={{ marginLeft: `${level * 20}px` }}>
        <div
          className="p-1 bg-success text-white rounded d-flex justify-content-between align-items-center mb-1"
          style={{ fontSize: '0.9em', height: '30px', maxWidth: '200px' }}
        >
          <span className="ms-2">{node.value}</span>
        </div>
        {renderTree(node.left, level + 1)}
        {renderTree(node.right, level + 1)}
      </div>
    );
  };

  return (
    <section className="container py-4">
      {/* Tiêu đề lý thuyết */}
      <h2 className="text-center fw-bold mb-4">
        Cấu trúc dữ liệu: Tree
      </h2>

      {/* Phần lý thuyết */}
      <section className="mb-3">
        <h4>1. Lý thuyết</h4>
        <p>
          Cây (Tree) là một cấu trúc dữ liệu phân cấp, gồm các **node** (nút) được liên kết với nhau theo dạng cha-con. 
          Node gốc (root) ở trên cùng, các node lá (leaf) ở dưới cùng. Mỗi node có thể có nhiều node con, nhưng chỉ có một node cha (trừ root). 
          Cây nhị phân (Binary Tree) là loại phổ biến, mỗi node có tối đa 2 con (trái và phải).
        </p>
        <p>
          Các thao tác cơ bản trên cây gồm: **thêm node**, **xóa node**, **duyệt cây** (theo thứ tự trước - preorder, giữa - inorder, sau - postorder), và **tìm kiếm**.
          Cây được dùng để biểu diễn cấu trúc phân cấp như cây gia đình, hệ thống tệp, hoặc cây biểu thức.
        </p>
      </section>

      {/* Phần cú pháp */}
      <section className="mb-3">
        <h4>2. Cú pháp cơ bản</h4>
        <p>
          Trong JavaScript, Tree không có cấu trúc sẵn, ta tự định nghĩa bằng object với các thuộc tính: giá trị node (`value`), con trái (`left`), và con phải (`right`).
        </p>
        <ul>
          <li>
            Tạo node:
            <pre className="bg-light p-3 rounded">{`const node = { value: "A", left: null, right: null };`}</pre>
          </li>
          <li>
            Thêm node con:
            <pre className="bg-light p-3 rounded">{`node.left = { value: "B", left: null, right: null };`}</pre>
          </li>
          <li>
            Duyệt cây (preorder - gốc, trái, phải):
            <pre className="bg-light p-3 rounded">{`
function preorder(node) {
  if (!node) return;
  console.log(node.value);
  preorder(node.left);
  preorder(node.right);
}
            `}</pre>
          </li>
        </ul>
      </section>

      {/* Ví dụ minh họa */}
      <section className="mb-3">
        <h4>3. Ví dụ minh họa bằng PHP</h4>
        <p>
          PHP không có cấu trúc Tree tích hợp, nên ta mô phỏng bằng array hoặc object. Dưới đây là cách tạo và duyệt cây nhị phân.
        </p>
        <pre className="bg-light p-3 rounded">
          {`<?php
// Định nghĩa node bằng array
$tree = [
    'value' => 'A',
    'left' => [
        'value' => 'B',
        'left' => null,
        'right' => null,
    ],
    'right' => [
        'value' => 'C',
        'left' => null,
        'right' => null,
    ],
];

// Duyệt cây theo thứ tự trước (preorder)
function preorder($node) {
    if ($node === null) return;
    echo $node['value'] . ' ';
    preorder($node['left']);
    preorder($node['right']);
}

preorder($tree); // A B C
?>`}
        </pre>
      </section>

      {/* Demo Tree */}
      <section className="mb-3">
        <h4>4. Demo Tree</h4>
        <p>
          Dưới đây là demo đơn giản: thêm node vào cây nhị phân và xóa node cuối cùng (theo thứ tự BFS).
        </p>
        <div className="mb-3">
          <input
            type="text"
            className="form-control form-control-sm"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Nhập giá trị node (VD: A, B)"
          />
          <button className="btn btn-success btn-sm mt-2" onClick={addNode}>
            Thêm Node
          </button>
          <button
            className="btn btn-danger btn-sm mt-2 ms-2"
            onClick={removeNode}
            disabled={!tree}
          >
            Xóa Node Cuối
          </button>
        </div>

        {/* Hiển thị cây */}
        <div className="mb-3">
          <h5 className="mb-2">Cấu trúc cây (root ở trên):</h5>
          <div style={{ maxWidth: '300px' }}>
            {tree ? (
              renderTree(tree)
            ) : (
              <p className="text-muted">Cây rỗng</p>
            )}
          </div>
        </div>
      </section>

      {/* Ứng dụng thực tế */}
      <section className="mb-3">
        <h4>5. Ứng dụng trong thực chiến</h4>
        <ul>
          <li>
            <strong>Hệ thống tệp</strong>: Cây được dùng để biểu diễn thư mục và tệp trong hệ điều hành (VD: thư mục gốc, thư mục con, tệp).
          </li>
          <li>
            <strong>Cây biểu thức</strong>: Biểu diễn biểu thức toán học để tính toán hoặc tối ưu hóa (VD: (a + b) * c).
          </li>
          <li>
            <strong>Tìm kiếm và sắp xếp</strong>: Cây nhị phân tìm kiếm (BST) giúp tìm kiếm và sắp xếp dữ liệu hiệu quả.
          </li>
          <li>
            <strong>DOM trong HTML</strong>: Trình duyệt sử dụng cây DOM để biểu diễn cấu trúc trang web.
          </li>
          <li>
            <strong>Quyết định và AI</strong>: Cây quyết định (Decision Tree) được dùng trong học máy để phân loại và dự đoán.
          </li>
        </ul>
        <p>
          Cây là cấu trúc dữ liệu mạnh mẽ để biểu diễn quan hệ phân cấp, tối ưu hóa tìm kiếm, và xử lý dữ liệu phức tạp.
        </p>
      </section>
    </section>
  );
}

export default Tree;