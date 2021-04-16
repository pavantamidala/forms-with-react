import './App.css';
import FormComponent from './components/form'
import React,{useState} from 'react';
import ShowData from './components/showData'

function App() {
  const [formData, setFormData] = useState([]);
  const [userObj, setUserObj] = useState({ firstName: "", lastName: '',email: '', number: ''})
  return (
    <div className='container'>
      <h1 className="heading">Enter your data</h1>
      <FormComponent userObj={userObj} setUserObj = {setUserObj} formData={formData} setFormData={setFormData} />
      <ShowData userObj={userObj} setUserObj={setUserObj} setFormData={setFormData} formData={formData} />
    </div>
  );
}


export default App;
