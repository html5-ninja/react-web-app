import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import BluePrint from './component/BluePrint';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <div className="flex w-full justify-center p-4">
                <div className="border p-4 w-full">
                  <BluePrint
                    title="React web app"
                    subtitle="Blue print component"
                  />
                </div>
              </div>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
