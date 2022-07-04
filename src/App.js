import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";

function App(props) {
  // console.log('props in APP :',props);
  return (
    <BrowserRouter>
        <HeaderContainer />
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
