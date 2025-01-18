let store = {
  _state: {
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
      questions: [],
    },
  },

  // Методы с правильным доступом к данным
  getState() {
    return this._state; // Возвращаем внутреннее состояние
  },

  _callsubscriber() {
    console.log("State changed");
  },

  addQuestion() {
    const text = this._state.NewProducts.newQuestionText.trim();
    if (text) {
      const newQuestion = {
        id: this._state.NewProducts.questions.length + 1,
        question: text,
      };
      // Пока не добавляем вопрос в массив
    }
  },

  updateNewQuestionText(newText) {
    this._state.NewProducts.newQuestionText = newText;
    // Перерендеринг убран
  },

  addProduct(product) {
    const newProduct = {
      id: this._state.profileProduct.productData.length + 1,
      rating: "Unrated",
      ratingStatus: "No stars yet",
      comment: product,
    };
    // Пока не добавляем продукт в массив
  },

  subscribe(observer) {
    this._callsubscriber = observer;
  },
};

export default store;
