import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Students from './pages/Students';
import StudentDetails from './pages/StudentDetails';
import Login from './pages/Login';
import Signup from './pages/Signup';
import StudentDashboard from './pages/StudentDashboard';
import Attendance from './pages/Attendance';
import Marks from './pages/Marks';
import Timetable from './pages/Timetable';
import Subjects from './pages/Subjects';
import Notices from './pages/Notices';
import Sports from './pages/Sports';
import SportsDashboard from './pages/SportsDashboard';
import AdminDashboard from './pages/AdminDashboard';
import AddStudent from './pages/AddStudent';
import EditStudent from './pages/EditStudent';
import NotFound from './pages/NotFound';
import ProtectedRoute from './components/ProtectedRoute';
import AdminRoute from './components/AdminRoute';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/students" element={<Students />} />
      <Route path="/students/:id" element={<StudentDetails />} />
      <Route path="/attendance" element={<ProtectedRoute><Attendance /></ProtectedRoute>} />
      <Route path="/marks" element={<ProtectedRoute><Marks /></ProtectedRoute>} />
      <Route path="/timetable" element={<ProtectedRoute><Timetable /></ProtectedRoute>} />
      <Route path="/subjects" element={<ProtectedRoute><Subjects /></ProtectedRoute>} />
      <Route path="/notices" element={<ProtectedRoute><Notices /></ProtectedRoute>} />
      <Route path="/sports" element={<ProtectedRoute><Sports /></ProtectedRoute>} />
      <Route path="/sports-dashboard" element={<ProtectedRoute><SportsDashboard /></ProtectedRoute>} />
      <Route path="/dashboard" element={<ProtectedRoute><StudentDashboard /></ProtectedRoute>} />
      <Route path="/admin" element={<AdminRoute><AdminDashboard /></AdminRoute>} />
      <Route path="/admin/add-student" element={<AdminRoute><AddStudent /></AdminRoute>} />
      <Route path="/admin/edit-student/:id" element={<AdminRoute><EditStudent /></AdminRoute>} />
      <Route path="/not-found" element={<NotFound />} />
      <Route path="*" element={<Navigate to="/not-found" replace />} />
    </Routes>
  );
}

export default App;
