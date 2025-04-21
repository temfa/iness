import { createSlice } from "@reduxjs/toolkit";
const songSlice = createSlice({
  name: "song",
  initialState: "",
  reducers: {
    setSong: (state, { payload }) => {
      return payload;
    },
    clearSong: () => {
      return "";
    },
  },
});

const { reducer, actions } = songSlice;
export const { setSong, clearSong } = actions;
export default reducer;
