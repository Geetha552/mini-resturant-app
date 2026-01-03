import {Routes, Route} from "react-router-dom";
import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard";
import CustomerDashboard from "./pages/CustomerDashboard";
import UpdateRestaurant from "./pages/UpdateResturant";
import ProtectedRoute from "./components/ProtectedRoute";

function App(){
    return(
      <Routes>
        <Route 
        path="/admin/dashboard"
        elements={
          <ProtectedRoute role="admin">
            <AdminDashboard/>
          </ProtectedRoute>
        }
        />
        <Route 
        path="/customers/dashboard"
        elements={
          <ProtectedRoute role="customer">
            <CustomerDashboard/>
          </ProtectedRoute>
        }
        />
        <Route 
        path="/admin/retaurants/update"
        elements={
          <ProtectedRoute role="admin">
            <UpdatedResturant />
          </ProtectedRoute>
        }
        />
      </Routes>
    )
}

export default App;