import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const sportList = [
  'Football',
  'Volleyball',
  'Basketball',
  'Cricket',
  'Hockey',
  'Athletics',
  'Kabaddi'
];

function Sports() {
  const [selectedSport, setSelectedSport] = useState('Football');
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <Navbar />

      <main className="container py-5">
        <div className="text-center mb-4">
          <h2>Sports Activities</h2>
          <p className="text-muted">Choose a sport and register your interest.</p>
        </div>

        <div className="row g-4">
          <div className="col-lg-7">
            <div className="row g-3">
              {sportList.map((sport) => (
                <div className="col-sm-6 col-md-4" key={sport}>
                  <button
                    type="button"
                    className={`btn w-100 ${selectedSport === sport ? 'btn-primary' : 'btn-outline-primary'}`}
                    onClick={() => setSelectedSport(sport)}
                  >
                    {sport}
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="col-lg-5">
            <div className="card shadow-sm border-0">
              <div className="card-body">
                <h4 className="mb-3">Register for {selectedSport}</h4>

                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label className="form-label">Student Name</label>
                    <input
                      type="text"
                      className="form-control"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Enter your name"
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Selected Sport</label>
                    <input
                      type="text"
                      className="form-control"
                      value={selectedSport}
                      readOnly
                    />
                  </div>

                  <button type="submit" className="btn btn-success w-100">
                    Register
                  </button>
                </form>

                {submitted && (
                  <div className="alert alert-success mt-3 mb-0">
                    Thank you, {name}! Your registration for {selectedSport} has been recorded.
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default Sports;
