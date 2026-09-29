import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function EditStudent() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: 'Rushil Vishal G',
    registerNumber: '2403727710521089',
    email: 'rushil@example.com',
    phone: '9876543210',
    department: 'EEE',
    year: 3,
    section: 'A',
    batch: '2024-2028',
    dateOfBirth: '2005-06-12',
    gender: 'Male',
    address: 'Bangalore, Karnataka',
    parentName: 'Vishal',
    parentPhone: '9988776655',
    status: 'Active'
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Student updated:', formData);
    navigate('/admin');
  };

  return (
    <>
      <Navbar />

      <main className="container py-5">
        <h2 className="mb-4">Edit Student</h2>

        <form onSubmit={handleSubmit} className="card shadow-sm border-0 p-4">
          <div className="row g-3">
            <div className="col-md-6">
              <label className="form-label">Name</label>
              <input type="text" name="name" className="form-control" value={formData.name} onChange={handleChange} />
            </div>

            <div className="col-md-6">
              <label className="form-label">Register Number</label>
              <input type="text" name="registerNumber" className="form-control" value={formData.registerNumber} onChange={handleChange} />
            </div>

            <div className="col-md-6">
              <label className="form-label">Email</label>
              <input type="email" name="email" className="form-control" value={formData.email} onChange={handleChange} />
            </div>

            <div className="col-md-6">
              <label className="form-label">Phone</label>
              <input type="text" name="phone" className="form-control" value={formData.phone} onChange={handleChange} />
            </div>

            <div className="col-md-4">
              <label className="form-label">Department</label>
              <select name="department" className="form-select" value={formData.department} onChange={handleChange}>
                <option value="EEE">EEE</option>
                <option value="CSE">CSE</option>
                <option value="ECE">ECE</option>
              </select>
            </div>

            <div className="col-md-4">
              <label className="form-label">Year</label>
              <select name="year" className="form-select" value={formData.year} onChange={handleChange}>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
              </select>
            </div>

            <div className="col-md-4">
              <label className="form-label">Section</label>
              <select name="section" className="form-select" value={formData.section} onChange={handleChange}>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
              </select>
            </div>

            <div className="col-md-6">
              <label className="form-label">Batch</label>
              <input type="text" name="batch" className="form-control" value={formData.batch} onChange={handleChange} />
            </div>

            <div className="col-md-6">
              <label className="form-label">Date of Birth</label>
              <input type="date" name="dateOfBirth" className="form-control" value={formData.dateOfBirth} onChange={handleChange} />
            </div>

            <div className="col-md-6">
              <label className="form-label">Gender</label>
              <select name="gender" className="form-select" value={formData.gender} onChange={handleChange}>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="col-md-6">
              <label className="form-label">Status</label>
              <select name="status" className="form-select" value={formData.status} onChange={handleChange}>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
                <option value="Pending">Pending</option>
              </select>
            </div>

            <div className="col-12">
              <label className="form-label">Address</label>
              <textarea name="address" className="form-control" rows="3" value={formData.address} onChange={handleChange}></textarea>
            </div>

            <div className="col-md-6">
              <label className="form-label">Parent Name</label>
              <input type="text" name="parentName" className="form-control" value={formData.parentName} onChange={handleChange} />
            </div>

            <div className="col-md-6">
              <label className="form-label">Parent Phone</label>
              <input type="text" name="parentPhone" className="form-control" value={formData.parentPhone} onChange={handleChange} />
            </div>
          </div>

          <div className="mt-4 d-flex gap-2">
            <button type="submit" className="btn btn-primary">Update Student</button>
            <button type="button" className="btn btn-secondary" onClick={() => navigate('/admin')}>Cancel</button>
          </div>
        </form>
      </main>

      <Footer />
    </>
  );
}

export default EditStudent;
