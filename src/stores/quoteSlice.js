import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { quoteAPI } from '../provider/api'

const initialState = {
  quote: '',
  loading: false,
  favoriteQuotes: [],
  myQuotes: []
}

export const fetchQuote = createAsyncThunk('quote/fetchQuote', async () => {
  const response = await quoteAPI.get()
  return response.data.quote
})

export const quoteSlice = createSlice({
  name: 'quote',
  initialState,
  reducers: {
    setQuote: (state, action) => {
      return {
        ...state,
        quote: action.payload
      }
    },
    addFavoriteQuote: (state, action) => {
      if(state.favoriteQuotes.filter(q => q === action.payload).length === 0) {
        state.favoriteQuotes.push(action.payload)
      }
    },
    addMyQuote: (state, action) => {
      if(state.myQuotes.filter(q => q === action.payload).length === 0) {
        state.myQuotes.push(action.payload)
      }
    }
  },
  extraReducers: {
    [fetchQuote.pending]: (state) => {
      state.loading = true
    },
    [fetchQuote.fulfilled]: (state, {payload}) => {
      state.loading = false
      state.quote = payload
    },
    [fetchQuote.rejected]: (state) => {
      state.loading = false
    }
  }
})

export const { setQuote, addFavoriteQuote, addMyQuote } = quoteSlice.actions

export default quoteSlice.reducer