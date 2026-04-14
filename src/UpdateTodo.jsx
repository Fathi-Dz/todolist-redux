import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { updateTodo } from './ToDoSlice';

const UpdateTodo = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  // Ambil data siswa lama berdasarkan ID di URL
  const dataLama = useSelector(state => 
    state.siswa.listSiswa.find(s => s.id === parseInt(id))
  );

  const [form, setForm] = useState(dataLama);

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(updateTodo(form));
    navigate('/');
  };

  if (!dataLama) return <p>Siswa tidak ditemukan!</p>;

// Di dalam UpdateTodo.jsx
return (
  <div className="container">
    <h2>Edit Data Siswa</h2>
    <form onSubmit={handleUpdate}>
      <input 
        value={form.name} 
        onChange={e => setForm({...form, name: e.target.value})} 
        placeholder="Nama Siswa"
      />
      <input 
        value={form.alamat} 
        onChange={e => setForm({...form, alamat: e.target.value})} 
        placeholder="Alamat"
      />
      <input 
        value={form.kelas} 
        onChange={e => setForm({...form, kelas: e.target.value})} 
        placeholder="Kelas"
      />
      
      {/* Pastikan className nya seperti ini */}
      <button type="submit" className="btn btn-save">
        💾 Perbarui Data
      </button>
      
      {/* Tambahan: Tombol Batal biar gak terjebak di page edit */}
      <button 
        type="button" 
        className="btn" 
        style={{marginTop: '10px', background: '#ccc'}} 
        onClick={() => navigate('/')}
      >
        Batal
      </button>
    </form>
  </div>
);
};

export default UpdateTodo;