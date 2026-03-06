import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import { UserRoutes } from './routes/UserRoutes';
// import Dashboard from './pages/Dashboard'; // Future page

function App() {
  return (
    <div className="app-container">
      {/* If you want a Navbar on every page, put it HERE */}
      <Routes>
        {UserRoutes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={route.element}
          />
        ))}
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
      </Routes>
    </div>
  );
}

export default App;