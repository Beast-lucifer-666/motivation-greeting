import { useState } from "react";

const quotes = [
  {
    text: "The secret of getting ahead is getting started.",
    author: "Mark Twain"
  },
  {
    text: "Success is the sum of small efforts, repeated day in and day out.",
    author: "Robert Collier"
  },
  {
    text: "It always seems impossible until it's done.",
    author: "Nelson Mandela"
  },
  {
    text: "The future depends on what you do today.",
    author: "Mahatma Gandhi"
  },
  {
    text: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt"
  },
  {
    text: "Great things are done by a series of small things brought together.",
    author: "Vincent van Gogh"
  },
  {
    text: "Don't watch the clock; do what it does. Keep going.",
    author: "Sam Levenson"
  },
  {
    text: "Your only limit is the one you set yourself.",
    author: "Unknown"
  }
];

function Quote() {
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [changing, setChanging] = useState(false);

  const quote = quotes[quoteIndex];

  const newQuote = () => {
    setChanging(true);

    setTimeout(() => {
      let nextIndex;

      do {
        nextIndex = Math.floor(
          Math.random() * quotes.length
        );
      } while (
        quotes.length > 1 &&
        nextIndex === quoteIndex
      );

      setQuoteIndex(nextIndex);
      setChanging(false);
    }, 250);
  };

  return (
    <div className="quote-card">

      <div className="quote-decoration quote-left">
        “
      </div>

      <div
        className={`quote-content ${
          changing ? "quote-changing" : ""
        }`}
      >

        <div className="quote-mark">
          “
        </div>

        <blockquote>
          {quote.text}
        </blockquote>

        <div className="quote-author">
          <span></span>
          {quote.author}
        </div>

      </div>

      <div className="quote-bottom">

        <div className="quote-dots">
          {quotes.map((_, index) => (
            <span
              key={index}
              className={
                index === quoteIndex
                  ? "active"
                  : ""
              }
            ></span>
          ))}
        </div>

        <button
          className="quote-button"
          onClick={newQuote}
        >
          <span>New Quote</span>
          <span className="refresh-icon">↻</span>
        </button>

      </div>

    </div>
  );
}

export default Quote;