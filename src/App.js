import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from './layouts/MainLayout.jsx';
import Home from './components/Home/Home.jsx';
import DataStructure from './components/DataStructure/DataStructure.jsx';
import Array from './components/DataStructure/Array/Array.jsx';
import Stack from './components/DataStructure/Stack/Stack.jsx';
import Queue from './components/DataStructure/Queue/Queue.jsx';
import LinkedList from './components/DataStructure/Linked-List/LinkedList.jsx';
import HashTable from './components/DataStructure/HashTable/HashTable.jsx';
import Set from './components/DataStructure/Set/Set.jsx';
import Tree from './components/DataStructure/Tree/Tree.jsx';
import Heap from './components/DataStructure/Heap/Heap.jsx';


function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/data-structure" element={<DataStructure />} />

          {/* Dynamic route cho danh mục và thuật toán */}
          <Route path="/data-structures/array" element={<Array />} />
          <Route path="/data-structures/stack" element={<Stack />} />
          <Route path="/data-structures/Queue" element={<Queue />} />
          <Route path="/data-structures/LinkedList" element={<LinkedList />} />
          <Route path="/data-structures/HashTable" element={<HashTable />} />
          <Route path="/data-structures/Set" element={<Set />} />
          <Route path="/data-structures/Tree" element={<Tree />} />
          <Route path="/data-structures/Heap" element={<Heap />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
