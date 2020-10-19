import React,{ useState ,useEffect }  from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
function ProgramSelection(){
 ///dropdown
    
 const [Faculty, setFaculty] = React.useState('');
 const [Master_p, setMaster_p] = React.useState('');
    const [EntryTerm, setEntryTerm] = React.useState('');
    const Faculties = [" _ Engineering", " _ Dentistry", " _ Arts&Humanities", " _ Baeps"," _ CMM" ," _ ICS"," _ Law"," _ Nursing"," _ Parmacy"];
  let masters = ["__________________________ "];
  const [stateOptions, setStateValues] = useState(masters);
    const handleChange_drop_1 = (event) => {
     

   setFaculty(event.target.value);
     
        
     
  };
  
  
    useEffect(() => {
      if (Faculty == " _ Engineering") {
           
        masters = ["Master of science", "Master of Engineering"]
        setStateValues(masters);
        console.log(masters);
      }
      else if (Faculty == " _ Dentistry") {
        masters = ["Master of Science in Endodontics", "Master of Science in Operative Dentistry"]
        setStateValues(masters);
      }
      else if (Faculty == " _ ICS") {
        masters = ["Master of Science in “Web Science”"]
        setStateValues(masters);
      }
      else if (Faculty == " _ Baeps") {
        masters = ["MBA in “Applied Finance & Economics”", "MBA in “Contemporary Marketing”"]
        setStateValues(masters);
      }
      else { 
        masters = ["__________________________ "];
        setStateValues(masters);
      }
     }, [Faculty])
    
 const handleChange_drop_2 = (event) => {
   
    setMaster_p(event.target.value);
  
  }

 const handleChange_drop_3 = (event) => {
   
    setEntryTerm(event.target.value);
  }
 ///style
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
    return( <div className="_content">

    <form className={classes.root} noValidate autoComplete="off">
        <div className="inside">
    <div className="drop_p" >
          <FormControl variant="outlined" className={classes.formControl}   color="secondary" >
           <InputLabel htmlFor="outlined-age-native-simple"   color="secondary" >Faculty</InputLabel >
        <Select
          native
          value={Faculty}
          onChange={handleChange_drop_1}
          label="Highest level of Education"
          inputProps={{
            name: 'Faculty',
            id: 'outlined-age-native-simple',
          }}
        >
          <option aria-label="None" value="" />
                        
                        {Faculties.map(list => (<option key={list} value={list} >
                            {list}
                            
                        </option>))}
          
        </Select>
        </FormControl>
        </div>
        <div className="drop_p" >
          <FormControl variant="outlined" className={classes.formControl}   color="secondary" >
           <InputLabel htmlFor="outlined-age-native-simple"   color="secondary" >Master's Program</InputLabel >
        <Select
          native
          value={Master_p}
          onChange={handleChange_drop_2}
          label="Highest level of Education"
          inputProps={{
            name: 'Master_p',
            id: 'outlined-age-native-simple',
          }}><option aria-label="None" value="" />
                        
            {stateOptions.map(list => (<option key={list} value={list}>
                                {list}
                                
            </option>))}
          
        </Select>
        </FormControl>
        </div>
        <div className="drop_p">
          <FormControl variant="outlined" className={classes.formControl}   color="secondary" >
           <InputLabel htmlFor="outlined-age-native-simple"   color="secondary" >Expected entry term</InputLabel >
        <Select
          native
          value={EntryTerm}
          onChange={handleChange_drop_3}
          label="Entry Term"
          inputProps={{
            name: 'EntryTerm',
            id: 'outlined-age-native-simple',
          }}
        >
          <option aria-label="None" value="" />
          <option value={"September Term"}>   _   September  Term  _</option>
          <option value={"February Term" }>   _   February  Term  _ </option>
         

          
        </Select>
        </FormControl>
        </div>
        </div>
        <div className="inside">
        <Button variant="contained" color="secondary">
Submit
</Button>
            </div>

</form>
    </div>);
}
export default ProgramSelection;