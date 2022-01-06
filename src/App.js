import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Signup from './pages/signup/signup';
import Signin from './pages/signin/signin';
import Home from './pages/home/home.js';
// import Books from './pages/books/books.js';
import Add from './pages/add/add';
import View from './pages/view/view';
import Edit from './pages/edit/edit';





function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />

        {/* <Route exact path='/' element={<Books />} /> */}

        <Route path='signup' element={<Signup />} />

        <Route path='signin' element={<Signin />} />

        <Route path='add' element={<Add />} />

        <Route path='view' element={<View />} />

        <Route path='/view/:id' element={<Edit />} />
      </Routes>
    </Router>
  );
}

export default App;
