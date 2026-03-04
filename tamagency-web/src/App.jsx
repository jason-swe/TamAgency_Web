import { BrowserRouter, Routes, Route } from "react-router-dom";
import QuestionDetail from "./component/Detail/Detail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/question/:id" element={<QuestionDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
