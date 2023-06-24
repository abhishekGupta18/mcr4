import "./App.css";

import { Routes, Route } from "react-router-dom";

import { Home } from "./Pages/Home";
import { PostDetail } from "./Pages/PostDetail";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="postDetail/:postId" element={<PostDetail />} />
      </Routes>
    </div>
  );
}

export default App;

// https://fluffy-boba-4d3ab9.netlify.app/
