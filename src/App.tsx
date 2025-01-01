import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={<div className="h-1 text-cyan-300">xxx</div>}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
