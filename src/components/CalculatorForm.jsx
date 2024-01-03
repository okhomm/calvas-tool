import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import InputLabel from '@mui/material/InputLabel'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Stack from '@mui/material/Stack'
import Grid from '@mui/material/Grid'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import {Form, Field, useFormikContext } from 'formik'


const CalculatorForm = () => {
  const formik = useFormikContext()

  const handleChange = ({ target }) => {
    const { name, value } = target
    formik.setFieldValue(name, value)
  }

  return (
    <Form>
      <Stack
        marginTop={3}
        marginBottom={3}
        direction="column"
        spacing={2}
        alignItems="center"
      >
        
        <Stack direction="row" spacing={2} alignItems="center">
          <Field
            as={TextField}
            type="text"
            name="days"
            id="outlined-basic"
            label="Days"
            variant="outlined"
            placeholder="22"
            sx={{ width: '100%', maxWidth: 200 }}
          />
          <Field
          as={TextField}
          type="text"
          name="salary"
          id="outlined-basic"
          label="Salary"
          variant="outlined"
          placeholder="1500"
          sx={{ width: '100%', maxWidth: 200 }}
        />
          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-helper-label">
              Currency
            </InputLabel>
            <Field
              as={Select}
              name="currency"
              label="Currency"
              id="demo-simple-select-helper"
              sx={{ width: '100%', maxWidth: 200 }}
              onChange={handleChange}
            >
              <MenuItem value={'$'}>$</MenuItem>
              <MenuItem value={'€'}>€</MenuItem>
              <MenuItem value={'£'}>£</MenuItem>
            </Field>
          </FormControl>
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
          type="submit"
        >
          Calculate
        </Button>
      </Grid>
    </Form>
  )
}

export default CalculatorForm