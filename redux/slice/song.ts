import { createSlice } from "@reduxjs/toolkit";
const songSlice = createSlice({
  name: "song",
  initialState: null,
  reducers: {
    setSong: (state, { payload }) => {
      return payload;
    },
    clearSong: () => {
      return null;
    },
  },
});

const { reducer, actions } = songSlice;
export const { setSong, clearSong } = actions;
export default reducer;
