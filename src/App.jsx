import { useSelector } from 'react-redux'

import CssBaseline from '@mui/material/CssBaseline'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'

import SalaryList from './components/SalaryList'
import Calculator from './components/Calculator'


const App = () => {

  const showCalculator = useSelector((state) => state.app.showCalculator)
  const showSalaryList = useSelector((state) => state.app.showSalaryList)

  return (
    <>
      <CssBaseline />
      <Container maxWidth="sm">
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          style={{ minHeight: '100vh' }}
        >
          {showCalculator && <Calculator/>}
          {showSalaryList && <SalaryList/>}
        </Grid>

      </Container>
    </>
  )
}

export default App
