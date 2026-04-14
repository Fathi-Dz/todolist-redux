import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from './ToDoSlice';
import { useNavigate } from 'react-router-dom';

const AddTodo = () => {
  const [form, setForm] = useState({ name: '', alamat: '', kelas: '' });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(form));
    navigate('/');
  };

  return (
    <div className="container">
      <h2>Tambah Siswa Baru</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder="Nama Lengkap" required onChange={e => setForm({...form, name: e.target.value})} />
        <input placeholder="Alamat Rumah" required onChange={e => setForm({...form, alamat: e.target.value})} />
        <input placeholder="Kelas" required onChange={e => setForm({...form, kelas: e.target.value})} />
        <button type="submit" className="btn btn-save">💾 Simpan Data Siswa</button>
      </form>
    </div>
  );
};

export default AddTodo;