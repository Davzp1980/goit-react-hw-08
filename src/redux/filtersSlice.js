import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filters',
  initialState: {
    name: '',
    isModalDelVisible: false,
    isModalEditVisible: false,
    contactId: null,
  },
  reducers: {
    changeFilter(state, action) {
      state.name = action.payload;
    },
    setModalDelVisible(state, action) {
      state.isModalDelVisible = action.payload;
    },
    setContactId(state, action) {
      state.contactId = action.payload;
    },
    setModalEditVisible(state, action) {
      state.isModalEditVisible = action.payload;
    },
  },
});

export const {
  changeFilter,
  setModalDelVisible,
  setModalEditVisible,
  setContactId,
} = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
