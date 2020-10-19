import React,{ useState }  from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import Form from 'react-bootstrap/Form';
import Select from '@material-ui/core/Select';
import DateFnsUtils from "@date-io/date-fns";
///Validation
import { useFormik } from 'formik';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
  
  } from '@material-ui/pickers';
//import { DateTimePicker } from "@material-ui/pickers";
const ValidateData = Academic_info => {
  const errors = {}
  
 if (!Academic_info.Univercity) {
    errors.Univercity = " Univercity required";
    
}
 if (!Academic_info.Specialization) {
  errors.Specialization= " Specialization required";
  
  }
 if (!Academic_info.Letter_Grade) {
  errors.Letter_Grade = " Letter_Grade required";
  
 }
 if (!Academic_info.GPA) {
  errors.GPA = " GPA required";
  
  }
  else if (isNaN(Academic_info.GPA )) {
    errors.GPA = " Invalid  GPA";
    
  }

  if (!Academic_info.Percentage) {
    errors.Percentage = " Letter_Grade required";
    
    }
    else if (isNaN(Academic_info.Percentage )) {
      errors.Percentage= " Invalid  Percentage";
      
    }
  return errors;
}


function AcademicInformation(){
  ///dropdown
    
  const [EduLevel, setEduLevel] = React.useState('');
  
  const handleChange_drop = (event) => {
    setEduLevel(event.target.value);
  };

  ////Text Field
  const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
      formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
      },
      selectEmpty: {
        marginTop: theme.spacing(2),
      },
    },
  }));
  const classes = useStyles();
///Date
const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

const handleDateChange_date = (date) => {
  setSelectedDate(date);
  };
  ////Validation
  const formik = useFormik({
    initialValues: {
      Univercity: '',
      Specialization: '',
      GPA: '',
      Percentage: '',
      Letter_Grade: ''
    },
    validate:ValidateData,
    onSubmit: values => {
      alert(JSON.stringify(values));
    },
  })
  ////helper TextStyle
  const helperTextStyles = makeStyles(theme => ({
    root: {
      margin: 4,
      '&$error': {
        color: 'white'
      }
    },
    error: {} //<--this is required to make it work
  }));

  
    return(

      
          <div className="_content">
    <form className={classes.root} noValidate autoComplete="off" onSubmit={formik.handleSubmit}>
        <div>
      <TextField
        
          label="Univercity"
          type="text"
          color="secondary"
              variant="outlined"
              id="Univercity"
              name="Univercity"
              onChange={formik.handleChange}
              value={formik.values.Univercity}
              helperText={formik.touched.Univercity && formik.errors.Univercity? formik.errors.Univercity : null} 
              error={formik.touched.Univercity && formik.errors.Univercity}
              
        />
         <TextField
        
        label="Specialization"
        type="text"
        color="secondary"
              variant="outlined"
              id="Specialization"
              name="Specialization"
              onChange={formik.handleChange}
              value={formik.values.Specialization}
              helperText={formik.touched.Specialization && formik.errors.Specialization? formik.errors.Specialization : null} 
              error={formik.touched.Specialization && formik.errors.Specialization}
      />
      </div>
      <div>
      <TextField
        
          label="Univercity"
          type="text"
          color="secondary"
          variant="outlined"
        />
         <TextField
        
        label="Letter Grade"
        type="text"
        color="secondary"
        variant="outlined"
        id="Letter_Grade"
        name="Letter_Grade"
        onChange={formik.handleChange}
        value={formik.values.Letter_Grade}
        helperText={formik.touched.Letter_Grade && formik.errors.Letter_Grade ? formik.errors.Letter_Grade : null}
        error={formik.touched.Letter_Grade && formik.errors.Letter_Grade}
      />
      </div>
      <div>
       <TextField
        
        label="GPA"
        type="text"
        color="secondary"
              variant="outlined"
              id="GPA"
              name="GPA"
              onChange={formik.handleChange}
              value={formik.values.GPA}
              helperText={formik.touched.GPA && formik.errors.GPA? formik.errors.GPA : null} 
              error={formik.touched.GPA && formik.errors.GPA}
      />
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
          margin="normal"
          id="date-picker-dialog"
          label="Graduation Date"
          format="MM/dd/yyyy"
          value={selectedDate}
          onChange={handleDateChange_date}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        /></MuiPickersUtilsProvider>
        </div>
        <div>
      <TextField
        
          label="Percentage"
          type="text"
          color="secondary"
              variant="outlined"
              id="Percentage"
              name="Percentage"
              onChange={formik.handleChange}
              value={formik.values.Percentage}
              helperText={formik.touched.Percentage && formik.errors.Percentage ? formik.errors.Percentage : null}
              error={formik.touched.Percentage && formik.errors.Percentage}
        />
         <TextField
        
              label="specialization"
              type="text"
              color="secondary"
              variant="outlined"
              
      />
      </div>
      <div className="file">
<Form.File 
    id="custom-file"
    label="Transcript"
    custom
  />
  </div>
  <div className="file">
  <Form.File 
    id="custom-file-translate-scss"
    label=" Grade Scale"
    custom
  />
</div>
<div className="file">
<Form.File 
    id="custom-file"
    label=" Certificate"
    custom
  />
</div>
      <div className="dif" className="inside">
          <FormControl variant="outlined" className={classes.formControl}   color="secondary" >
           <InputLabel htmlFor="outlined-age-native-simple"   color="secondary" >Highest level of Education</InputLabel >
        <Select
          native
          value={EduLevel}
          onChange={handleChange_drop}
          label="Highest level of Education"
          inputProps={{
            name: 'IdType',
            id: 'outlined-age-native-simple',
          }}
        >
          <option aria-label="None" value="" />
          <option value={"Secondary"}>Secondary</option>
          <option value={"Bachillerato" }>Bachillerato </option>
          <option value={"Master's Degree" }>Master's Degree </option>

          
        </Select>
        </FormControl>
        </div>
        <div  className="inside">

<Button variant="contained" color="secondary"     type="submit"  >
  Next
</Button>
</div>

</form>
        </div>
    );
}
export default AcademicInformation;