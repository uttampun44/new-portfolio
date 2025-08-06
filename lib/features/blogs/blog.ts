import { createSlice } from "@reduxjs/toolkit";

interface blogState {
    blog: {
        id: number;
        title: string;
        description: string;
        image: string;
        date: string;
        author: string;
        url: string;
    }
}

const initialState: blogState = {
    blog: {
        id: 0,
        title: "",
        description: "",
        image: "",
        date: "",
        author: "",
        url: "",
    }
}

export const blogSlice = createSlice({
    name: "blog",
    initialState,
    reducers: {
        setBlog: (state, action) => {
            state.blog = action.payload;
        }
    }
})

export const { setBlog } = blogSlice.actions;
export default blogSlice.reducer;