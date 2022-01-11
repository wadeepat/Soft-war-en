import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Upload from './components/upload'
import Download from './components/download'
import MyNavbar from './components/navbar'
import Edit from './components/edit'

function App() {
  return (
    <div>
      <MyNavbar/>
      <Routes>
        <Route exact path="/upload" element={<Upload/>} />
        <Route exact path="/download" element={<Download/>} />
        <Route exact path="/edit" element={<Edit/>} />
      </Routes>
    </div>
  );
}

export default App;
