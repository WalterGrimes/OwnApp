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
    if (newQuestionText.trim()) { // Проверяем, что текст не пустой
      addQuestion();
      updateNewQuestionText(""); // Очищаем поле после отправки
    }
  };

  const onQuestionChange = (event) => {
    const text = event.target.value; // Получаем текст из textarea
    updateNewQuestionText(text); // Передаём его через props
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
          value={newQuestionText} // Значение из props
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
