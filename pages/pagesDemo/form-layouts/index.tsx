// ** MUI Imports
import Grid from '@mui/material/Grid'



// ** Third Party Styles Imports
import 'react-datepicker/dist/react-datepicker.css'
import DatePickerWrapper from '../../../components/libs/react-datepicker'
import FormLayoutsAlignment from '../../../componentsDemo/form-layouts/FormLayoutsAlignment'
import FormLayoutsBasic from '../../../componentsDemo/form-layouts/FormLayoutsBasic'
import FormLayoutsIcons from '../../../componentsDemo/form-layouts/FormLayoutsIcons'
import FormLayoutsSeparator from '../../../componentsDemo/form-layouts/FormLayoutsSeparator'


const FormLayouts = () => {
  return (
    <DatePickerWrapper>
      <Grid container spacing={6}>
        <Grid item xs={12} md={6}>
          <FormLayoutsBasic />
        </Grid>
        <Grid item xs={12} md={6}>
          <FormLayoutsIcons />
        </Grid>
        <Grid item xs={12}>
          <FormLayoutsSeparator />
        </Grid>
        <Grid item xs={12}>
          <FormLayoutsAlignment />
        </Grid>
      </Grid>
    </DatePickerWrapper>
  )
}

export default FormLayouts
