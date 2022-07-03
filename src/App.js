import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from "./components/Profile/ProfileContainer";

function App(props) {
  // console.log('props in APP :',props);
  return (
    <BrowserRouter>
        <Header />
        <div className='content-wrapper'>
          <Navbar />
          <div className='content'>
            <Routes>
                <Route path='profile/' element={<ProfileContainer />} />
                <Route path='profile/:userId' element={<ProfileContainer />} />
              <Route path='dialogs/' element={<DialogsContainer />} />
              <Route path='users/' element={<UsersContainer />} />
            </Routes>
          </div>
        </div>
    </BrowserRouter>
  );
}

export default App;
