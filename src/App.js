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
              <Route path='profile/'
                element={<Profile postsData={props.state.profilePage} />} />
              <Route path='dialogs/'
                element={<Dialogs dialogsMessagesData={props.state.dialogsPage} />} />
            </Routes>
          </div>
        </div>
    </BrowserRouter>
  );
}

export default App;
