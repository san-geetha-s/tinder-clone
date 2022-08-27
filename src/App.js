
import './App.css';
import PersonIcon from '@mui/icons-material/Person';

import IconButton from '@mui/material/IconButton';



function App() {
  return (
    <div className="app">
      <h2>I am header</h2>
      <IconButton>
      <PersonIcon fontSize='large' className='header__icon'/>
      </IconButton>
    </div>
  );
}

export default App;
