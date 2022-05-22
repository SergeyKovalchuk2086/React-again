import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';

function App(props) {
  // console.log('props in APP :',props);
  return (
    <BrowserRouter>
        <Header />
        <div className='content-wrapper'>
          <Navbar />
          <div className='content'>
            <Routes>
              <Route path='profile/' element={<Profile />} />
              <Route path='dialogs/' element={<DialogsContainer />} />
              <Route path='users/' element={<UsersContainer />} />
              {/* <Route path='profile/'
                element={<Profile postsData={props.state.profilePage} dispatch={props.dispatch} />} />
              <Route path='dialogs/'
                element={<Dialogs dialogsMessagesData={props.state.dialogsPage} dispatch={props.dispatch} />} /> */}
            </Routes>
          </div>
        </div>
    </BrowserRouter>
  );
}

export default App;
