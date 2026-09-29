import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const teamStats = [
  { sport: 'Football', team: 'Blue Strikers', wins: 8, losses: 2 },
  { sport: 'Volleyball', team: 'Apex Spikers', wins: 7, losses: 3 },
  { sport: 'Basketball', team: 'Sky Hoopers', wins: 9, losses: 1 },
  { sport: 'Cricket', team: 'Royal Challengers', wins: 6, losses: 4 },
  { sport: 'Hockey', team: 'Storm Riders', wins: 5, losses: 5 },
  { sport: 'Kabaddi', team: 'Warriors XI', wins: 7, losses: 3 }
];

const matches = [
  { sport: 'Football', match: 'Blue Strikers vs Red Falcons', result: '3-1' },
  { sport: 'Basketball', match: 'Sky Hoopers vs City Kings', result: '78-65' },
  { sport: 'Cricket', match: 'Royal Challengers vs Green Derby', result: '189/7 vs 174/9' },
  { sport: 'Volleyball', match: 'Apex Spikers vs Golden Waves', result: '3-1' },
  { sport: 'Hockey', match: 'Storm Riders vs Thunder Sticks', result: '2-2' },
  { sport: 'Kabaddi', match: 'Warriors XI vs Night Raiders', result: '35-31' }
];

function SportsDashboard() {
  return (
    <>
      <Navbar />

      <main className="container py-5">
        <div className="text-center mb-4">
          <h2>Sports Dashboard</h2>
          <p className="text-muted">Performance overview of all college sports teams.</p>
        </div>

        <div className="row g-4 mb-5">
          {teamStats.map((item) => (
            <div className="col-md-6 col-lg-4" key={item.team}>
              <div className="card shadow-sm border-0 h-100">
                <div className="card-body">
                  <h5>{item.team}</h5>
                  <p className="text-muted mb-3">{item.sport}</p>
                  <div className="d-flex justify-content-between">
                    <span>Wins</span>
                    <strong>{item.wins}</strong>
                  </div>
                  <div className="d-flex justify-content-between">
                    <span>Losses</span>
                    <strong>{item.losses}</strong>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="card shadow-sm border-0">
          <div className="card-body">
            <h4 className="mb-3">Recent Match Results</h4>
            <div className="table-responsive">
              <table className="table table-bordered align-middle">
                <thead className="table-dark">
                  <tr>
                    <th>Sport</th>
                    <th>Match</th>
                    <th>Result</th>
                  </tr>
                </thead>
                <tbody>
                  {matches.map((match) => (
                    <tr key={match.match}>
                      <td>{match.sport}</td>
                      <td>{match.match}</td>
                      <td>{match.result}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default SportsDashboard;
