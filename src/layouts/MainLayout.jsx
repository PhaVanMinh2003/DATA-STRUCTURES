import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

function MainLayout({ children }) {
  const categories = {
    "Data Structures": [
      "Array",
      "Stack",
      "Queue",
      "LinkedList",
      "HashTable",
      "Set",
      "Tree",
      "Heap",
      "GraphRepresentation",
      "DisjointSetUnion",
      "Trie",
      "PriorityQueue",
      "BinarySearchTree",
    ],
    "Basic Algorithms": [
      "Sorting",
      "Searching",
      "Recursion",
      "Bit Manipulation",
      "Divide and Conquer",
      "Greedy",
      "Dynamic Programming",
      "Sliding Window",
      "Two Pointers",
    ],
    "Graph Theory": [
      "DFS",
      "BFS",
      "Topological Sort",
      "Dijkstra",
      "Bellman-Ford",
      "Floyd-Warshall",
      "MST",
      "Union-Find",
      "SCC",
      "Network Flow",
    ],
    "Number Theory": [
      "GCD",
      "Modular Arithmetic",
      "Prime Testing",
      "Modular Inverse",
      "CRT",
    ],
    Combinatorics: [
      "Factorial",
      "nCr",
      "Catalan",
      "Permutations",
      "Inclusion-Exclusion",
    ],
    "Computational Geometry": [
      "Line Intersection",
      "Convex Hull",
      "Point in Polygon",
    ],
    Optimization: ["Knapsack", "LP", "DP Optimization", "Greedy Optimization"],
    "AI / Machine Learning": [
      "A*",
      "Minimax",
      "Gradient Descent",
      "K-Means",
      "Neural Network",
    ],
    "Advanced Data Structures": [
      "Suffix Array",
      "KMP",
      "Trie",
      "HLD",
      "Mo’s Algorithm",
    ],
    "Theoretical CS": ["Automata", "P vs NP", "Time Complexity"],
    "Practical Applications": [
      "Cryptography",
      "Compilers",
      "Databases",
      "OS",
      "Blockchain",
    ],
  };

  return (
    <div className="d-flex flex-column min-vh-100 bg-light">
      <Header categories={categories} />

      <div className="d-flex flex-1 flex-md-row">
        <div className="flex-shrink-0" style={{ width: "250px" }}>
          <Sidebar categories={categories} />
        </div>

        <main className="flex-grow-1 p-4 bg-white">{children}</main>
      </div>

      <Footer />
    </div>
  );
}

export default MainLayout;
