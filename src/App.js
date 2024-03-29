import Header from "./components/Header";
import ReferralDashboard from "./components/ReferralDashboard";
import ReferralsList from "./components/ReferralsList";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <Header />
      <ReferralDashboard />
      <ReferralsList />
      <Footer />
    </div>
  );
}

export default App;
