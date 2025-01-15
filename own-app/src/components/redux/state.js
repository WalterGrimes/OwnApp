import rerenderEntireTree from '../../render';

let state = {
  profileProduct: {
    productData: [
      { rating: "Most popular", ratingStatus: "4.6 stars", comment: "I like this protein" },
      { rating: "Best value", ratingStatus: "2.0 stars", comment: "Guys, that's not a protein(" },
      { rating: "New release", ratingStatus: "5.0 stars", comment: "Amazing product!" },
      { rating: "Budget option", ratingStatus: "3.5 stars", comment: "Good for the price." },
    ],
  },
  NewProducts: {
    NewsData: [
      { id: 1, advantage: "Protein Maxler" },
      { id: 2, advantage: "Mezomorf crazy" },
      { id: 3, advantage: "Creatine blue" },
      { id: 4, advantage: "Gainer Bucked up" },
    ],
    Whyus: ["First Advantage", "Second Advantage", "Third Advantage", "Fourth Advantage"],
    reviews: [
      "Top Quality Products – Guaranteed 100% original and effective.",
      "Endorsed by Celebrities – Trusted by Dwayne 'The Rock' Johnson, Chris Hemsworth, and other top athletes.",
      "Innovative Solutions – Cutting-edge designs and formulas.",
      "Nationwide Leader – Recognized as the best in the country.",
    ],
    newQuestionText: "",
    questions: [], // Добавляем массив для хранения вопросов
  },
};

export const addQuestion = () => {
  const text = state.NewProducts.newQuestionText.trim(); // Очищаем от пробелов
  if (text) {
    const newQuestion = {
      id: state.NewProducts.questions.length + 1, // Динамический ID
      question: text,
    };
    state.NewProducts.questions.push(newQuestion); // Добавляем новый вопрос
    state.NewProducts.newQuestionText = ""; // Очищаем поле
    rerenderEntireTree(state); // Перерендериваем дерево
    console.log("Question added:", newQuestion); // Логируем добавленный вопрос
  }
};

export const updateNewQuestionText = (newText) => {
  state.NewProducts.newQuestionText = newText; // Обновляем текст
  rerenderEntireTree(state); // Перерендериваем дерево
};

export const addProduct = (product) => {
  let newProduct = {
    id: state.profileProduct.productData.length + 1, // Динамический ID
    message: product,
    rating: 0,
  };
  state.profileProduct.productData.push(newProduct); // Добавляем продукт
  rerenderEntireTree(state);
};

export default state;
