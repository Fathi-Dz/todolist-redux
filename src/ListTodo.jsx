import { useSelector, useDispatch } from 'react-redux';
import { removeTodo } from './ToDoSlice';
import { Link } from 'react-router-dom';

const ListTodo = () => {
  const siswa = useSelector((state) => state.siswa.listSiswa);
  const dispatch = useDispatch();

  return (
    <div className="container">
      <h1>👨‍🎓 Manajemen Siswa</h1>
      <div style={{ marginBottom: '20px' }}>
        <Link to="/add" className="btn btn-primary">+ Tambah Siswa</Link>
      </div>
      
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Nama</th>
              <th>Alamat</th>
              <th>Kelas</th>
              <th style={{ textAlign: 'center' }}>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {siswa.map((s) => (
              <tr key={s.id}>
                <td style={{ fontWeight: '600' }}>{s.name}</td>
                <td>{s.alamat}</td>
                <td><span className="badge">{s.kelas}</span></td>
                <td style={{ textAlign: 'center' }}>
                  <Link to={`/edit/${s.id}`} className="btn" style={{color: '#6366f1'}}>Edit</Link>
                  <button className="btn btn-danger" onClick={() => dispatch(removeTodo({ id: s.id }))}>
                    Hapus
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListTodo;