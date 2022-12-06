import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMyQuote } from "../stores/quoteSlice";

export default function PersonalQuoteView() {
  const dispatch = useDispatch()
  const myQuotes = useSelector(state => state.quote.myQuotes)
  const [myQuote, setMyQuote] = useState()

  const handleChangeQuote = (event) => {
    setMyQuote(event.target.value)
  }

  const handleSubmitQuote = (event) => {
    dispatch(addMyQuote(myQuote))

    event.preventDefault();
  }

  return (
    <section style={{ textAlign: "center", marginTop: "60px" }}>
      <hr style={{ maxWidth: "30%" }} />
      <h2>My Quotes</h2>
      <form onSubmit={handleSubmitQuote}>
        <input
          value={myQuote}
          onChange={handleChangeQuote}
        />
        <button
          type={`submit`}
        >
          Submit
        </button>

        
      <div>
        {
          myQuotes.map((mQuote) => (
            <p key={mQuote}>{mQuote}</p>
          ))
        }
      </div>
      </form>
    </section>
  );
}
