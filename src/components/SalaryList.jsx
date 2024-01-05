import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { setShowDataHandler } from '../store/appSlice'
import salaryHandler from '../helpers/calculateSalary'
import SalaryItem from './SalaryItem'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'

const SalaryList = () => {
  const dispatch = useDispatch()
  const days = useSelector((state) => state.app.days)
  const userSalary = useSelector((state) => state.app.salary)
  const currency = useSelector((state) => state.app.currency )
  
  const salarySums = salaryHandler(userSalary, days)

  const salaryList = salarySums.map((sum, index) => (
    <SalaryItem key={index} sum={sum} day={index + 1} currency={currency} />
  ))

  return (
    <Box marginTop={3} marginBottom={3}>
      <Button
        variant="contained"
        size="large"
        startIcon={<ArrowBackIcon />}
        onClick={() => dispatch(setShowDataHandler())}
      >
        Go back
      </Button>
      {salaryList}
    </Box>
  )
}

export default SalaryList
