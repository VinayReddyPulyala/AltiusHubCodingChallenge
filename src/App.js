import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Invoices from "./Components/Invoices";
import Home from "./Components/Home";
import CreateInvoiceComponent from "./Components/CreateInvoiceComponent";

function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        <Router>
          <Home />
          <Routes>
            <Route path="/" element={<Invoices />} />
            <Route path="/InvoiceDetailComponent/0" element={<CreateInvoiceComponent />} />
            <Route path="/InvoiceDetailComponent/:id" element={<CreateInvoiceComponent />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
