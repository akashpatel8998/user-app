import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: [],
  status: 'idle',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.value.push({...action.payload.data, id: new Date().getTime().toString()})
    },
    editUser: (state, action ) => {
      const {userId, data} = action.payload;

      console.log(userId, data)

      state.value = state.value.map((user) => {
        if(user.id === userId){
          return {...user, ...data}
         }
         return user
      })
    },
    deleteUser: (state, action) => {
      const {userId} = action.payload;

      state.value = state.value.filter((user) => user.id !== userId)
    },
  },
});

export const { addUser, editUser, deleteUser } = userSlice.actions;

export const selectUsers = (state) => state.user.value;

export default userSlice.reducer;
