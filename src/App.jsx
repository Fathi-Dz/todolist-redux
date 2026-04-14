import { Routes, Route } from 'react-router-dom';
import ListTodo from './ListTodo';
import AddTodo from './AddTodo';
import UpdateTodo from './UpdateTodo';
import './App.css';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ListTodo />} />
        <Route path="/add" element={<AddTodo />} />
        <Route path="/edit/:id" element={<UpdateTodo />} />
      </Routes>
    </div>
  );
}

export default App;