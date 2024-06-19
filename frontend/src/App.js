import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import axios from "axios";
import Home from "./pages/Home";
import Home2 from "./pages/Home2";
import Cari from "./pages/CariKos";
import Bantuan from "./pages/PusatBantuanPages";
import Cari2 from "./pages/CariKos2";
import Bantuan2 from "./pages/PusatBantuan2Pages";
import Kontak from "./pages/HubungiKami";
import Kontak2 from "./pages/HubungiKami2";
import "bootstrap/dist/css/bootstrap.min.css";
import DetailKosPage from "./pages/DetailKosPage";
import DetailKosPage2 from "./pages/DetailKosPage2";
import LoginPage from "./components/Login";
import RegisterPage from "./components/Register";
import PersonalInfoPage from "./pages/PersonalInfoPage";
import ApplyRentPage from "./pages/ApplyRentPage";
import CheckOrderPage from "./pages/CheckOrderPage";
import ConfirmPage from "./pages/ConfirmPage";
import ProfilePage from "./pages/ProfilePage";
import EditProfilePage from "./pages/EditProfilePage";
import Dashboard from "./admin/components/Dashboard";
import Tambahkost from "./admin/components/Tambahkost";
import Room from "./admin/components/Datakost";
import Transaksi from "./admin/components/Transaksi";
import Penyewakost from "./admin/components/Penyewakost";
import Update from "./admin/components/Update";
import DashboardLayout from "./admin/components/DashboardLayout";
import MainLayout from "./admin/components/MainLayout";
import NotFound from "./components/NotFound";
import { RoomsProvider } from "./components/RoomsContext";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap-icons/font/bootstrap-icons.css";
const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isUser, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkLoggedIn = async () => {
      try {
        const response = await axios.get("http://localhost:5000/token", {
          withCredentials: true,
        });
        setIsLoggedIn(true);
        if (response.data.role === "admin") {
          setIsAdmin(true);
        }
      } catch (error) {
        setIsLoggedIn(false);
        setIsAdmin(false);
      } finally {
        setLoading(false);
      }
    };

    checkLoggedIn();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  const PrivateRoute = ({ element: Element, userOnly, ...rest }) => {
    if (userOnly && !isUser) {
      return <Navigate to="/home2" />;
    } else if (!isLoggedIn) {
      return <Navigate to="/login" />;
    } else {
      return <Element {...rest} />;
    }
  };

  return (
    <RoomsProvider>
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route
              path="/login"
              element={
                <LoginPage
                  setIsLoggedIn={setIsLoggedIn}
                  setIsAdmin={setIsAdmin}
                />
              }
            />
            <Route path="/register" element={<RegisterPage />} />
            <Route
              path="/personalinfo"
              element={<PrivateRoute element={PersonalInfoPage} />}
            />
            <Route path="/profile/:id" element={<ProfilePage />} />
            <Route
              path="/edit-profile"
              element={
                <PrivateRoute element={<EditProfilePage></EditProfilePage>} />
              }
            />
            <Route path="/kos/:id" element={<DetailKosPage></DetailKosPage>} />
            <Route
              path="/kos2/:id"
              element={<PrivateRoute element={DetailKosPage2} />}
            />
            <Route
              path="/apply-rent/:id"
              element={<ApplyRentPage></ApplyRentPage>}
            />
            <Route path="/home2" element={<PrivateRoute element={Home2} />} />
            <Route
              path="/check-order"
              element={<CheckOrderPage></CheckOrderPage>}
            />
            <Route
              path="/confirm"
              element={<PrivateRoute element={ConfirmPage} />}
            />
            <Route path="/cari" element={<Cari />} />
            <Route path="/cari2" element={<Cari2 />} />
            <Route path="/cari/:id" element={<Cari />} />
            <Route path="/cari2/:id" element={<Cari2 />} />
            <Route path="/bantuan" element={<Bantuan />} />
            <Route path="/bantuan2" element={<Bantuan2 />} />
            <Route path="/kontak" element={<Kontak />} />
            <Route path="/kontak2" element={<Kontak2 />} />
            <Route path="*" element={<NotFound />} />
          </Route>
          <Route path="/" element={<DashboardLayout />}>
            <Route
              path="/dashboard"
              element={<PrivateRoute element={Dashboard} adminOnly />}
            />
            <Route
              path="/tambah"
              element={<PrivateRoute element={Tambahkost} adminOnly />}
            />
            <Route
              path="/data"
              element={<PrivateRoute element={Room} adminOnly />}
            />
            <Route
              path="/transaksi"
              element={<PrivateRoute element={Transaksi} adminOnly />}
            />
            <Route
              path="/penyewa"
              element={<PrivateRoute element={Penyewakost} adminOnly />}
            />
            <Route
              path="/update/:roomId"
              element={<PrivateRoute element={Update} adminOnly />}
            />
          </Route>
        </Routes>
      </Router>
    </RoomsProvider>
  );
};

export default App;
