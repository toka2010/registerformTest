

import React,{ useState }  from 'react';
import PersonalForm from './PersonalForm';
import AcademicInformation from './AcademicInformation';
import ProgramSelection from './ProgramSelection';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
//import {Tabs, Tab} from 'react-bootstrap-tabs-styled';
function Tabnav() {
  const [key, setKey] = useState('home');

  return (
    <div style={{ display:"block"}}>
    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      color="secondary"
      onSelect={(k) => setKey(k)} 
      
    >
      <Tab   eventKey="home" title="Personal Information"  color="secondary"  style={{color:"red"}}  >
      <PersonalForm />
      </Tab>
      <Tab eventKey="profile" title="Academic Information" color="secondary">
      <AcademicInformation />
      </Tab>
      <Tab eventKey="contact" title="Program Selection" color="secondary">
      <ProgramSelection />
      </Tab>
      </Tabs>
      <br/>
    </div>
  );
}

export default Tabnav;