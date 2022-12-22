import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Board from './pages/board';
import BoardPage from './pages/boardpage';
import BoardWriteForm from './pages/boardWirteForm';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Routes>
      < Route path='/' element={<Board />}></Route>
        <Route path='/:id' element={<BoardPage />}></Route>
        <Route path='/modifyform' element={<BoardWriteForm />}></Route>
      </Routes>
    </div>
  );
}

export default App;
