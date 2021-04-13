import './App.css';
import FormComponent from './components/form'
import React,{useState} from 'react';
import ShowData from './components/showData'

function App() {
  const [formData, setFormData] = useState([]);
  return (
    <div>
      <h1>form</h1>
      <FormComponent formData={formData} setFormData={setFormData} />
      <ShowData setFormData={setFormData} formData={formData} />
    </div>
  );
}


export default App;
