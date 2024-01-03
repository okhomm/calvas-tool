import { useDispatch } from 'react-redux'
import { Formik } from 'formik'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import CalculateIcon from '@mui/icons-material/Calculate'
import CalculatorForm from './CalculatorForm'
import { setData, setShowDataHandler } from '../store/appSlice'

const Calculator = () => {
  const dispatch = useDispatch()

  const handleSubmit = (values) => {
    dispatch(setData(values))
    dispatch(setShowDataHandler())
  }

  return (
    <Box sx={{ maxWidth: 345 }}>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <CalculateIcon sx={{ fontSize: 62, color: 'primary.main' }} />
        <Typography
          gutterBottom
          variant="h4"
          component="div"
          sx={{ fontWeight: 'bold', color: 'primary.main' }}
        >
          Calvas Tool
        </Typography>
      </Grid>
      <Box marginBottom={2}>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ textAlign: 'center' }}
        >
          Enter the amount, currency and the number of days you want to divide
          it by in the fields below
        </Typography>
      </Box>
      <Formik
        initialValues={{
          days: '',
          salary: '',
          currency: '',
        }}
        onSubmit={handleSubmit}
      >
        <CalculatorForm />
      </Formik>
      <Typography
        marginBottom={2}
        marginTop={4}
        variant="body2"
        color="text.secondary"
        sx={{ textAlign: 'center' }}
      >
        idea by Vasiliy K.
      </Typography>
    </Box>
  )
}

export default Calculator
