import React from "react";
import { useParams, Link } from "react-router-dom";
import questionsData from "../../data/question.json";
import logo from "../../images/logo.png";
import "./Detail.css";

const Detail = () => {
  // Lấy ID từ URL (ví dụ: /question/1)
  const { id } = useParams();

  // Tìm câu hỏi tương ứng dựa trên ID
  const currentQuestion = questionsData.find((q) => q.id === parseInt(id));

  if (!currentQuestion) {
    return <div>Không tìm thấy câu hỏi!</div>;
  }

  // Format số có 2 chữ số (01, 02...)
  const formattedNumber =
    currentQuestion.id < 10 ? `0${currentQuestion.id}` : currentQuestion.id;

  return (
    <div className="quiz-container">
      <header className="quiz-header">
        <img src={logo} alt="Logo Tâm Agency" className="logo-image" />
        <h1 className="question-number">NUMBER {formattedNumber}</h1>
      </header>

      <main className="quiz-main">
        <h2 className="question-text">{currentQuestion.question}</h2>

        <div className="options-wrapper">
          <div className="options-grid">
            <div className="option-column">
              <div className="option-item">
                <span className="option-letter">A</span>
                <button className="option-btn">
                  {currentQuestion.options.A}
                </button>
              </div>
              <div className="option-item">
                <span className="option-letter">B</span>
                <button className="option-btn">
                  {currentQuestion.options.B}
                </button>
              </div>
            </div>

            {/* Cột phải: C và D */}
            <div className="option-column">
              <div className="option-item">
                <span className="option-letter">C</span>
                <button className="option-btn">
                  {currentQuestion.options.C}
                </button>
              </div>
              <div className="option-item">
                <span className="option-letter">D</span>
                <button className="option-btn">
                  {currentQuestion.options.D}
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Nút quay lại trang 100 số của bạn bạn */}
      <Link to="/" className="back-btn">
        Quay lại danh sách
      </Link>
    </div>
  );
};

export default Detail;
