import React from "react";
import s from "./Whyus.module.css";
import { updateNewQuestionAC, addQuestionAC } from "../redux/questions-reducer";

const Whyus = (props) => {
  console.log("Whyus rendered with newQuestionText:", props.newQuestionText); // Лог, когда компонент рендерится

  const {
    advantages,  
    reviews,
    newQuestionText = "",
  } = props;

  const onSendQuestion = () => {
    console.log("onSendQuestion triggered with:", newQuestionText); // Лог, когда нажата кнопка "Send Question"
    if (props.newQuestionText.trim()) {
      props.onSendQuestion();
    }
  };

  const onQuestionChange = (event) => {
    // debugger; // Останавливаем выполнение кода для отладки
    const text = event.target.value;
    console.log("onQuestionChange event:", event); // Логируем событие при изменении текста
    console.log("New text input value:", text); // Логируем новое значение

    props.updateNewQuestionAC(text); // Передаем новый текст в хранилище
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
