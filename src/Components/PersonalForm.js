import React,{ useState }  from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import FormLabel from '@material-ui/core/FormLabel';
import DateFnsUtils from "@date-io/date-fns";
import Form from 'react-bootstrap/Form';
import { useFormik } from 'formik';
import AcademicInformation from './AcademicInformation';
///country
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';

//import * as Yup from 'yup'
import {
  MuiPickersUtilsProvider,
 
  KeyboardDatePicker,

} from '@material-ui/pickers';



const ValidateData = personal_info => {
  const errors = {}
  if (!personal_info.Fname) {
    errors.Fname = " First Name required";
    
  }
 if (!personal_info.Lname) {
    errors.Lname = " Last Name required";
    
}
 if (!personal_info.Zip) {
  errors.Zip = " Zip required";
  
  }
 if (!personal_info.Email) {
  errors.Email = " Email required";
  
  }
  else if (!(/^$|.+@+..+/).test(personal_info.Email)) {
    errors.Email = " Invalid  Email";
    
  }
  if (!personal_info.City) {
    errors.City = " City required";
    
    }
  return errors;
}


function PersonalForm(){
    ////Radio button
    const [value, setValue] = React.useState('female');

    const handleChange = (event) => {
      setValue(event.target.value);
    };
    ///dropdown
    
    const [IdType, setIdType] = React.useState('');
  
    const handleChange_drop = (event) => {
      setIdType(event.target.value);
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
    ///Date
    const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

    const handleDateChange_date = (date) => {
      setSelectedDate(date);
    };
   
      const classes = useStyles();
    ////Validation
  const formik = useFormik({
    initialValues: {
      Fname: '',
      Lname: '',
      Zip: '',
      Email: '',
      City:''
    },
    validate:ValidateData,
    onSubmit: values => {
      //alert(JSON.stringify(values));
     // this.props.history.push('/AcademicInformation'); 
     // this.props.history.push('/MainModule');
     return(<AcademicInformation />)
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


  ///country List
  const [Country, setCountry] = React.useState('Country of Citizenship');
  const [Region, setRegion] = React.useState('');
  ///step ------------------
  const [Step,setStep]=React.useState(0);
  //const currentChild = childerenArray = [step];
/// transformation
//handelSubmit = event => {
  //event.preventDefault();}

  





  return (
      <div className="_content">
    <form className={classes.root} noValidate autoComplete="off" onSubmit={formik.handleSubmit} >
     
      <div>
       <div>
      <TextField
        
              label="First Name"
              type="text"
              color="secondary"
              variant="outlined"
              id="Fname"
              name="Fname"
              onChange={formik.handleChange}
              value={formik.values.Fname}
              helperText={formik.touched.Fname && formik.errors.Fname ? formik.errors.Fname : null} 
              error={formik.touched.Fname && formik.errors.Fname}
              
              
              
            />
         <TextField
        
        label="Middle Name"
        type="text"
        color="secondary"
              variant="outlined"
              
      />
       <TextField
        
        label="Last Name"
        type="text"
        color="secondary"
              variant="outlined"
              id="Lname"
              name="Lname"
              onChange={formik.handleChange}
              value={formik.values.Lname}
              helperText={formik.touched.Lname && formik.errors.Lname ? formik.errors.Lname : null} 
              error={formik.touched.Lname && formik.errors.Lname}
            /></div>
          

      <div>
       <TextField
        
        label="Street"
        type="text"
        color="secondary"
        variant="outlined"
      />
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
          margin="normal"
          id="date-picker-dialog"
          label="Date of Birth"
          format="MM/dd/yyyy"
          value={selectedDate}
          onChange={handleDateChange_date}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        /></MuiPickersUtilsProvider>
      <span  style={{display:"inline"}} className="dif"  >
      <FormLabel component="legend">Gender</FormLabel>
      <RadioGroup aria-label="gender" label="gender" name="gender1" value={value} onChange={handleChange} className="dif" style={{display:"inline "}}>
        <FormControlLabel value="female" control={<Radio />} label="Female" style={{display:"inline", color:"gray"}} />
        <FormControlLabel value="male" control={<Radio />} label="Male" style={{display:"inline" ,color:"gray"}} />
              </RadioGroup>
            
              <TextField
        
        label="ZIP/PostalCode"
        type="text"
        color="secondary"
              variant="outlined"
              id="Zip"
              name="Zip"
              onChange={formik.handleChange}
              value={formik.values.Zip}
              helperText={formik.touched.Zip && formik.errors.Zip? formik.errors.Zip : null} 
              error={formik.touched.Zip && formik.errors.Zip}
      />
            
            </span>
        
</div>
       <div>
       <TextField
        
        label="City"
        type="text"
        color="secondary"
              variant="outlined"
              id="City"
              name="City"
              onChange={formik.handleChange}
              value={formik.values.City}
              helperText={formik.touched.City && formik.errors.City? formik.errors.City : null} 
              error={formik.touched.City && formik.errors.City}
      />
      <div className="dif">
          <FormControl variant="outlined" className={classes.formControl}   color="secondary" >
           <InputLabel htmlFor="outlined-age-native-simple"   color="secondary" >ID  Type</InputLabel >
        <Select
          native
          value={IdType}
          onChange={handleChange_drop}
          label="Id Type"
          inputProps={{
            name: 'IdType',
            id: 'outlined-age-native-simple',
          }}
        >
          <option aria-label="None" value="" />
          <option value={"Passport"}>Passport</option>
          <option value={"National ID" }>National ID</option>
          
        </Select>
        </FormControl>
        </div>
        <TextField
        
        label={IdType}
        type="text"
        color="secondary"
        variant="outlined"
      />
     

       </div>
       <div>
<TextField
        
        label="Email"
        type="text"
        color="secondary"
              variant="outlined"
              id="Email"
              name="Email"
              onChange={formik.handleChange}
              value={formik.values.Email}
              helperText={formik.touched.Email && formik.errors.Email ? formik.errors.Email : null} 
              error={formik.touched.Email&& formik.errors.Email}
      />
       <TextField
        
        label="Varify Email"
        type="text"
        color="secondary"
        variant="outlined"
      />
      <TextField
        
        label="LandLine"
        type="text"
        color="secondary"
        variant="outlined"
      />
</div>


<div>
 

</div>
<div className="file">
<Form.File 
    id="custom-file"
    label="Upload File"
    custom
  />
  </div>
  <div className="file">
  <Form.File 
    id="custom-file-translate-scss"
    label=" Birth  Certificate"
    custom
  />
</div>
<div className="file">
<Form.File 
    id="custom-file"
    label=" Personal Photo"
    custom
  />
</div>
<div   className="inside">
<div >
<TextField
        
        label="Mobile Phone"
        type="number"
        color="secondary"
        variant="outlined"
      />
<TextField
        
        label="Secondry Mobile Phone"
        type="number"
        color="secondary"
        variant="outlined"
      />
</div>
<div>
  
<CountryDropdown
              variant="outlined" className={classes.formControl} color="secondary"
                htmlFor="outlined-age-native-simple" color="secondary"
                native
                label="Country of Citizenship"
                style={{ padding:"10px" ,color:"gray"}}
          value={Country}
          onChange={(val) => setCountry(val)} />
            <RegionDropdown
               variant="outlined" className={classes.formControl} color="secondary"
               htmlFor="outlined-age-native-simple" color="secondary"
               native
               style={{ padding:"10px" ,color:"gray"}}
          country={Country}
          value={Region}
          onChange={(val) => setRegion(val)} />
      
      </div>
          </div>
         
<div  className="inside">

 
            
            <Button variant="contained" color="secondary" type="submit" > 
  Next
            </Button>
            
            
   
  
</div>
      </div>
      
    </form>
  

    </div>)
}export default PersonalForm;