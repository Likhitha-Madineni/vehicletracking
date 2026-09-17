import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />

      <main className="dashboard">
        <h1>Vehicle Dashboard</h1>
        <p>Manage your vehicles and service records.</p>

        <div className="cards">
          <div className="card">
            <h3>Total Vehicles</h3>
            <h2>3</h2>
          </div>

          <div className="card">
            <h3>Service Due</h3>
            <h2>1</h2>
          </div>

          <div className="card">
            <h3>Services Completed</h3>
            <h2>5</h2>
          </div>
        </div>

        <div className="vehicle-section">
          <h2>My Vehicles</h2>

          <div className="vehicle">
            <div>
              <h3>Honda City</h3>
              <p>AP 39 AB 1234</p>
            </div>

            <span>Active</span>
          </div>

          <div className="vehicle">
            <div>
              <h3>Royal Enfield</h3>
              <p>AP 39 CD 5678</p>
            </div>

            <span>Active</span>
          </div>

          <div className="vehicle">
            <div>
              <h3>Hyundai Creta</h3>
              <p>AP 39 EF 9012</p>
            </div>

            <span>Service Due</span>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default App;