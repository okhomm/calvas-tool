import React, { useState } from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'

import SalaryList from './components/SalaryList'
import Calculator from './components/Calculator'

const App = () => {
  const [showCalculator, setShowCalculator] = useState(true)
  const [calculationDone, setCalculationDone] = useState(false)

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
          {calculationDone && <SalaryList/>}
        </Grid>

      </Container>
    </>
  )
}

export default App
