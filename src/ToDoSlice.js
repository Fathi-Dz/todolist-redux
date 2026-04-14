import { createSlice } from '@reduxjs/toolkit';

const toDoSlice = createSlice({
  name: 'siswa',
  initialState: {
    listSiswa: []
  },
  reducers: {
    // Action untuk tambah siswa (menerima name, alamat, kelas)
    addTodo: (state, action) => {
      state.listSiswa.push({
        id: Date.now(),
        ...action.payload
      });
    },
    // Action untuk hapus berdasarkan ID
    removeTodo: (state, action) => {
      state.listSiswa = state.listSiswa.filter(s => s.id !== action.payload.id);
    },
    // Action untuk update data siswa
    updateTodo: (state, action) => {
      const index = state.listSiswa.findIndex(s => s.id === action.payload.id);
      if (index !== -1) {
        state.listSiswa[index] = action.payload;
      }
    }
  }
});

export const { addTodo, removeTodo, updateTodo } = toDoSlice.actions;
export default toDoSlice.reducer;