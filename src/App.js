import './App.css';
import Navbar from './components/Navbar';
import User from './components/User';
import Error from './components/Error';
import Sidebar from './components/Sidebar';
import { Route, Routes } from 'react-router-dom'
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';
import UserDetail from './components/UserDetail';
import Suscriber from './components/Subscriber';
function App() {
  return (
    <div className='wrapper'>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path="" element={<Dashboard />} />
        <Route path="/users" element={<User />} />
        <Route path="/user-detail/:id" element={<UserDetail />} />
        <Route path="/subscribed-user" element={<Suscriber/>}/>
        <Route path='*' element={<Error />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
