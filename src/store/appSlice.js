import { createSlice } from '@reduxjs/toolkit'

const appSlice = createSlice({
  name: 'app',

  initialState: {
    showCalculator: true,
    showSalaryList: false,
    days: 0,
    salary: 0,
    currency: '',
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
    },
    setData: (state, action) => {
      const { days, salary, currency } = action.payload;
      state.days = parseInt(days);
      state.salary = parseFloat(salary);
      state.currency = currency;
    }
  }
})

export const {setShowCalculator, setShowSalaryList, setShowDataHandler, setData} = appSlice.actions
export default appSlice.reducer