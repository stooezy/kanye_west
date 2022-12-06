import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addFavoriteQuote, fetchQuote } from "../stores/quoteSlice";

export default function KanyeQuoteView() {
  const quote = useSelector(state => state.quote.quote)
  const favoriteQuotes = useSelector(state => state.quote.favoriteQuotes)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchQuote())
  }, [])

  const handleGetQuote = () => {
    dispatch(fetchQuote())
  }

  const handleAddFavorite = () => {
    dispatch(addFavoriteQuote(quote))
  }
  

  return (
    <section style={{ textAlign: "center" }}>
      <img
        src="https://images.businessoffashion.com/profiles/asset/1797/43897e2e4a6d155d72dd9df352017b546ef9e229.jpeg"
        alt="W3Schools.com"
        style={{ width: "300px" }}
      />
      <h1 style={{ fontSize: "40px", marginTop: "10px" }}>Kanye-West Quote</h1>

      <h2 style={{marginTop: '1rem'}}>{quote}</h2>

      <button onClick={handleGetQuote}>Get Quote</button>
      <button onClick={handleAddFavorite}>Add Favorite</button>

      <div>
        {
          favoriteQuotes.map((fQuote) => (
            <p key={fQuote}>{fQuote}</p>
          ))
        }
      </div>
    </section>
  );
}
