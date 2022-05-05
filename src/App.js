import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Dialogs from './components/Dialogs/Dialogs';
import Profile from './components/Profile/Profile';

function App(props) {
  return (
    <BrowserRouter>
        <Header />
        <div className='content-wrapper'>
          <Navbar />
          <div className='content'>
            <Routes>
              <Route path='profile/' element={<Profile />} />
              <Route path='dialogs/' element={<Dialogs dialogs={props.dialogs} messages={props.messages}/>} />
            </Routes>
          </div>
        </div>
    </BrowserRouter>
  );
}

export default App;
