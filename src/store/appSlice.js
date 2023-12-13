import { createSlice } from '@reduxjs/toolkit'

const appSlice = createSlice({
  name: 'app',

  initialState: {
    showCalculator: true,
    showSalaryList: false,
    salary: 0,
    days: 0,
  },

  reducers: {
    setShowCalculator: (state, action) => {
      state.showCalculator = action.payload
    },
    setShowSalaryList: (state, action) => {
      state.showSalaryList = action.payload
    },
    setShowDataHandler: (state, action) => {
      state.showCalculator = !state.showCalculator
      state.showSalaryList = !state.showSalaryList
    }
  }
})

export const {setShowCalculator, setShowSalaryList, setShowDataHandler} = appSlice.actions
export default appSlice.reducer