import React from "react";
import s from "./Whyus.module.css";
import { updateNewQuestionAC,addQuestionAC } from "../redux/questions-reducer";

const Whyus = (props) => {
  
  const {
    advantages,  
    reviews,
    newQuestionText = "",
  } = props;

  const onSendQuestion = () => {
    if (props.newQuestionText.trim()) {
      props.dispatch(addQuestionAC());
 // Отправляем вопрос
    }
  };
  

  const onQuestionChange = (event) => {
    const text = event.target.value;
    props.dispatch( updateNewQuestionAC(text) ); // Передаем текст в сторе
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
