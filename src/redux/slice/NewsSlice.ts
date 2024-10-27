
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import API from "../../axios";

export const FetchNews = createAsyncThunk(
    "news/FetchNews",
    async (_, { rejectWithValue }) => {
        try {
            const respons = await API.get("news/?offset=1")
            return respons.data
        } catch (err: any) {
            return rejectWithValue(err.response)
        }
    }
)

export const FetchNewsParams = createAsyncThunk(
    "news/FetchNewsParams",
    async (payload: any, { rejectWithValue }) => {
        try {
            const respons = await API.get(`news/?offset=${payload.id}`)
            return respons.data
        } catch (err: any) {
            return rejectWithValue(err.response)
        }
    }
)

const IinitialState = {
    news: {
        data: null,
        loading: false,
        error: ""
    },
    paramsNews: {
        data: null,
        loading: false,
        error: ""
    }
}

const news_slice = createSlice({
    name: "news",
    initialState: IinitialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(FetchNews.pending, state => {
                state.news.loading = true
            })
            .addCase(FetchNews.fulfilled, (state, action) => {
                state.news.loading = false
                state.news.data = {
                    ...action.payload,
                    results: action.payload.results.reverse()
                }
            })
            .addCase(FetchNews.rejected, state => {
                state.news.loading = false
            })

            .addCase(FetchNewsParams.pending, state => {
                state.paramsNews.loading = true
            })
            .addCase(FetchNewsParams.fulfilled, (state, action) => {
                state.paramsNews.loading = false
                state.paramsNews.data = action.payload
            })
            .addCase(FetchNewsParams.rejected, state => {
                state.paramsNews.loading = false
            })
    }
})

export const { } = news_slice.actions
export default news_slice.reducer

