import logo from './logo.svg';
import './App.css';
import Profil from './Profil/Profil';
function App() {
const handleName=(name)=> {alert(`my name is ${name}`)}
  return (
    <div className="App">
      <Profil fullName="yazid"  bio="la vie est belle "  profision="web développeur" handleName={handleName}  /> 
        
      
    </div>
    
  );
}

export default App;

