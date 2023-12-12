import React from 'react'
import SalaryItem from './SalaryItem'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'

const salary = [
  77.74, 71.0, 67.28, 77.74, 64.29, 61.82, 77.74, 62.95, 77.74, 57.74, 66.64,
  57.74, 57.74, 73.41, 57.74, 71.07, 67.87, 75.6, 66.9, 63.7, 70.54, 61.75,
  77.74, 57.74, 57.74, 67.72, 77.74, 57.74, 74.46, 67.29, 57.74,
]

const SalaryList = () => {
  const salaryList = salary.map((sum, index) => (
    <SalaryItem key={index} sum={sum} day={index + 1} />
  ))

  return (
    <Box marginTop={3} marginBottom={3}>
      <Button
        variant="contained"
        size="large"
        startIcon={<ArrowBackIcon />}
        onClick={() => console.log('Go back')}
      >
        Go back
      </Button>
      {salaryList}
      <Button
        variant="contained"
        size="large"
        startIcon={<ArrowBackIcon />}
        onClick={() => console.log('Go back')}
      >
        Go back
      </Button>
    </Box>
  )
}

export default SalaryList
