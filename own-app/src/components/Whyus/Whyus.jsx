import React from "react";
import s from "./Whyus.module.css";

const Whyus = (props) => {
  console.log("Advantages (Whyus):", props.advantages);
  console.log("Reviews:", props.reviews);

  const {
    advantages,
    reviews,
    newQuestionText = "",
    updateNewQuestionText,
    addQuestion,
  } = props;

  const onSendQuestion = () => {
    if (newQuestionText.trim()) { // Используем newQuestionText из props
      addQuestion();
      updateNewQuestionText(""); // Очищаем текст
    }
  };

  const onQuestionChange = (event) => {
    const text = event.target.value; // Получаем значение из event
    updateNewQuestionText(text); // Обновляем текст
  };

  return (
    <div className={s.Whyus}>
      {advantages && (
        <div className={s.WhyusItem}>
          {advantages.map((advantage, i) => (
            <div key={i} className={s.benefits}>
              {advantage}
            </div>
          ))}
        </div>
      )}
      {reviews && (
        <div className={s.CelebrityReviews}>
          {reviews.map((review, i) => (
            <div key={i} className={s.review}>
              {review}
            </div>
          ))}
        </div>
      )}
      <div className={s.textareaWrapper}>
        <textarea
          onChange={onQuestionChange} // Обработчик изменения текста
          className={s.textarea}
          placeholder="Have questions? Please ask us!"
          value={newQuestionText} // Значение берётся из props
        ></textarea>
      </div>
      <div className={s.buttonWrapper}>
        <button className={s.button} onClick={onSendQuestion}>
          Send question
        </button>
      </div>
    </div>
  );
};

export default Whyus;
