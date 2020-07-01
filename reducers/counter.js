import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
const slice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value++;
    },
  },
});

export default {
  reducer: slice.reducer,
  actions: slice.actions,
  getState: () => useSelector((state) => state.counter),
};
