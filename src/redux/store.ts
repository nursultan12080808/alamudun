
import { configureStore } from "@reduxjs/toolkit"
import NewsSlice from "./slice/NewsSlice"

const store = configureStore({
    reducer: {
        news: NewsSlice
    }
})

export type RootState = ReturnType<typeof store.getState>
export default store
