import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'

import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'

import Stack from '@mui/material/Stack'

import CalculateIcon from '@mui/icons-material/Calculate'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

const Calculator = () => {
  const daysNumList = Array.from({ length: 31 }, (_, index) => index + 1)
  const currencyList = ['$', '€', '£', 'zł', '₴']

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
          Enter the amount and the number of days you want to divide it by in
          the fields below
        </Typography>
      </Box>

      <Stack
        marginTop={3}
        marginBottom={3}
        direction="column"
        spacing={2}
        alignItems="center"
      >
        <TextField
          id="outlined-basic"
          label="Salary"
          variant="outlined"
          placeholder="1500"
          sx={{ width: '100%', maxWidth: 200 }}
        />
        <Stack direction="row" spacing={2} alignItems="center">
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={daysNumList}
            sx={{ width: '100%', minWidth: 120 }}
            placeholder="22"
            renderInput={(params) => <TextField {...params} label="Day" />}
          />
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={currencyList}
            sx={{ width: '100%', minWidth: 120 }}
            placeholder="$"
            renderInput={(params) => <TextField {...params} label="Currency" />}
          />
        </Stack>
      </Stack>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        marginTop={2}
      >
        <Button
          variant="contained"
          size="large"
          endIcon={<ArrowForwardIcon />}
          onClick={() => console.log('Results')}
        >
          Calculate
        </Button>
      </Grid>

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
