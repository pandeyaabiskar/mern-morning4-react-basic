import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    data: [],
    isLoading: false,
    isError: false
}

export const fetchData = createAsyncThunk('product/fetchData', async () => {
    try {
        const { data } = await axios.get('http://localhost:4000/api/products');
        return data;
    } catch (err) {
        return err;
    }
})

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    },
    extraReducers: {
        [fetchData.pending]: (state) => {
            state.isLoading = true
        },
        [fetchData.fulfilled]: (state, action) => {
            state.isLoading = false
            state.data = action.payload
        },
        [fetchData.rejected]: (state) => {
            state.isLoading = false
            state.isError = true
        }
  }
})

export default productSlice.reducer