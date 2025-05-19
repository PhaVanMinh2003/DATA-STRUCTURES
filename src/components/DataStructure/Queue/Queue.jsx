import { useState } from "react";
// Hàng Đợi
function Queue() {
  const [queue, setQueue] = useState([]);
  const [task, setTask] = useState("");
  const [message, setMessage] = useState("");

  // Hàm thêm phần tử vào queue
  const enqueueTask = () => {
    if (task !== "") {
      setQueue([...queue, task]);
      setTask("");
      setMessage(`Đã thêm công việc "${task}" vào hàng đợi.`);
    } else {
      setMessage("Vui lòng nhập công việc trước khi thêm vào hàng đợi.");
    }
  };

  // Hàm lấy công việc ra khỏi queue
  const dequeueTask = () => {
    if (queue.length > 0) {
      const removedTask = queue[0];
      setQueue(queue.slice(1));
      setMessage(`Đã xử lý công việc "${removedTask}".`);
    } else {
      setMessage("Không có công việc nào trong hàng đợi để xử lý.");
    }
  };

  return (
    <section className="container py-4">
      {/* Tiêu đề nổi bật */}
      <header className="text-center mb-4">
        <h3 className="fw-semibold text-dark mb-1">
          Khám phá cấu trúc dữ liệu{" "}
          <span className="text-primary">Queue (Hàng đợi)</span>
        </h3>
        <p className="text-muted mb-0">
          Nguyên lý hoạt động FIFO và ứng dụng thực tiễn trong lập trình
        </p>
      </header>

      {/* Phần 1: Khái niệm và đặc điểm */}
      <section className="mb-3">
        <h4>1. Khái niệm và đặc điểm của Queue</h4>

        <p>
          <strong>Queue (Hàng đợi)</strong> là một cấu trúc dữ liệu tuyến tính
          hoạt động theo nguyên tắc <strong>FIFO – First In, First Out</strong>,
          nghĩa là phần tử nào được thêm vào trước sẽ được lấy ra trước.
        </p>

        <p>
          Trong đời sống, queue giống như việc xếp hàng mua vé hoặc chờ đến lượt
          trong ngân hàng – người đến trước được phục vụ trước.
        </p>

        <p>
          <strong>Đặc điểm chính của Queue:</strong>
        </p>
        <ul>
          <li>
            Phần tử được thêm vào <strong>cuối hàng</strong> (enqueue).
          </li>
          <li>
            Phần tử được lấy ra từ <strong>đầu hàng</strong> (dequeue).
          </li>
          <li>
            Tuân theo nguyên tắc <strong>FIFO</strong>, khác với Stack (LIFO).
          </li>
          <li>
            Không thể truy cập phần tử ở giữa trực tiếp – chỉ truy cập theo thứ
            tự.
          </li>
        </ul>

        <p>
          Queue rất phù hợp với các hệ thống xử lý theo lượt hoặc theo luồng,
          nơi yếu tố thời gian và thứ tự là quan trọng.
        </p>
      </section>

      <section className="mb-3">
        <h4>2. Cú pháp cơ bản của Queue trong PHP</h4>

        <p>Dưới đây là các thao tác cơ bản để làm việc với queue trong PHP:</p>

        <ul>
          <li>
            <strong>Khởi tạo queue:</strong> Sử dụng mảng hoặc{" "}
            <code>SplQueue</code>
          </li>
          <li>
            <strong>enqueue:</strong> Thêm phần tử vào cuối hàng
          </li>
          <li>
            <strong>dequeue:</strong> Lấy và xoá phần tử ở đầu hàng
          </li>
          <li>
            <strong>peek:</strong> Xem phần tử đầu tiên (nếu dùng SplQueue)
          </li>
        </ul>

        <p className="mt-3">
          <strong>Ví dụ:</strong>
        </p>
        <pre className="bg-light p-3 rounded">
          {`$queue = new SplQueue

$queue->enqueue('Task 1');
$queue->enqueue('Task 2');

echo $queue->bottom(); // 'Task 1'

$queue->dequeue(); // Loại bỏ 'Task 1'

echo $queue->bottom(); // 'Task 2'
`}
        </pre>
      </section>

      <section className="mb-3">
        <h4>3. Minh họa Queue trong PHP</h4>

        <p>
          <strong>
            ✔️ Cách 1: Sử dụng mảng thông thường để mô phỏng Queue
          </strong>
        </p>
        <pre className="bg-light p-3 rounded">
          {`$queue = [];

// Thêm phần tử vào queue (enqueue)
array_push($queue, 'A'); // ['A']
array_push($queue, 'B'); // ['A', 'B']

// Lấy phần tử đầu tiên ra (dequeue)
$first = array_shift($queue); // 'A'
// Queue giờ còn lại: ['B']`}
        </pre>

        <p className="mt-4">
          <strong>✔️ Cách 2: Sử dụng SplQueue chuyên dụng</strong>
        </p>
        <pre className="bg-light p-3 rounded">
          {`$queue = new SplQueue();

// Thêm phần tử
$queue->enqueue('A');
$queue->enqueue('B');

// Xem phần tử đầu
$first = $queue->bottom(); // 'A'

// Lấy phần tử đầu ra
$dequeued = $queue->dequeue(); // 'A'

// Kết quả: queue còn lại ['B']`}
        </pre>
      </section>

      <section className="container py-4">
        <h4>3. Demo thực tế của Queue</h4>
        <p>
          Hãy nhập các công việc vào hàng đợi và thao tác để xử lý chúng theo
          thứ tự.
        </p>

        {/* Form nhập công việc */}
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Nhập công việc"
          />
          <button className="btn btn-success mt-2" onClick={enqueueTask}>
            Thêm vào hàng đợi
          </button>
        </div>

        {/* Hiển thị các công việc trong hàng đợi */}
        <div className="mb-3">
          <h5>Các công việc trong hàng đợi:</h5>
          {queue.length > 0 ? (
            <ul className="list-group">
              {queue.map((item, index) => (
                <li key={index} className="list-group-item">
                  {item}
                </li>
              ))}
            </ul>
          ) : (
            <p>Hàng đợi trống.</p>
          )}
        </div>

        {/* Nút xử lý công việc */}
        <button className="btn btn-danger" onClick={dequeueTask}>
          Xử lý công việc đầu tiên
        </button>

        {/* Thông báo */}
        <div className="mt-3">
          <p>{message}</p>
        </div>
      </section>

      <section className="mb-3">
        <h4>5. Ứng dụng của Queue trong thực tế</h4>

        <p>
          Queue là một cấu trúc dữ liệu cực kỳ hữu ích trong nhiều hệ thống và
          tình huống thực tế. Dưới đây là một số ứng dụng điển hình của Queue
          trong lập trình và công nghệ:
        </p>

        <ul>
          <li>
            <strong>Quản lý các công việc (Task Queue)</strong>: Trong các hệ
            thống xử lý tác vụ, Queue thường được sử dụng để quản lý các công
            việc cần xử lý theo thứ tự. Ví dụ, trong các ứng dụng backend, công
            việc được xếp vào hàng đợi và được xử lý lần lượt để đảm bảo các tác
            vụ không bị bỏ sót.
          </li>
          <li>
            <strong>Hệ thống xử lý tin nhắn</strong>: Các hệ thống gửi tin nhắn
            (Messaging Systems) sử dụng Queue để quản lý và xử lý các tin nhắn.
            Các tin nhắn sẽ được xếp vào hàng đợi và xử lý theo thứ tự, giúp đảm
            bảo rằng mỗi tin nhắn được gửi đi một cách tuần tự.
          </li>
          <li>
            <strong>
              Quản lý yêu cầu trong hệ thống mạng (Networking Requests)
            </strong>
            : Trong các hệ thống mạng, yêu cầu của người dùng (requests) thường
            được xếp vào hàng đợi để xử lý theo thứ tự. Điều này rất quan trọng
            trong các ứng dụng web và API để đảm bảo rằng mỗi yêu cầu đều được
            xử lý đúng thứ tự.
          </li>
          <li>
            <strong>Hệ thống điều phối công việc (Load Balancing)</strong>:
            Queue cũng có thể được sử dụng trong các hệ thống cân bằng tải (load
            balancing) để phân phối công việc đều đặn giữa các máy chủ. Mỗi công
            việc sẽ được lấy ra từ queue và giao cho một máy chủ để xử lý.
          </li>
          <li>
            <strong>Hệ thống trò chơi trực tuyến</strong>: Trong các trò chơi
            trực tuyến, Queue có thể được dùng để quản lý người chơi khi họ xếp
            hàng chờ đợi vào một phòng chơi. Các người chơi sẽ được thêm vào
            queue và vào phòng theo thứ tự.
          </li>
        </ul>

        <p>
          Queue giúp các hệ thống này hoạt động hiệu quả và chính xác, đảm bảo
          rằng mọi yêu cầu hoặc công việc đều được xử lý một cách công bằng và
          tuần tự.
        </p>
      </section>
    </section>
  );
}

export default Queue;
