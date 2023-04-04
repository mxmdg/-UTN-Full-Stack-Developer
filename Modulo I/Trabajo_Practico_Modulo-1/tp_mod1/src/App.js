import Form from './components/Form'
import {useState} from 'react'
import Header from './components/Header'
import MainSection from './components/mainSection'
import Footer from './components/Footer'

// Styles
import './App.css'
import './Styles/noGarpamos.css'

//import Select from './components/Select';

function App() {
  const [form, setForm] = useState('')

  const selectForm = (f)=> {
    setForm(f)
  } 

  const resetForms = ()=>setForm('');

  return (
    <div className="App">
      <Header selectForm={selectForm}/>
      <MainSection />
      <Footer />
          {(form === '')? (
            <></>
          ) : (
            <div className="nodal">
              <div className="formContainer">
                <Form form={form} selectForm={selectForm} resetForms={resetForms}/>
              </div>
            </div>
          )}
    </div>
  );
}

export default App;
