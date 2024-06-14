import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Home2 from "./pages/Home2";
import Cari from "./pages/CariKos";
import styled from "styled-components";
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
import Profile from "./admin/components/Profile";
import Update from "./admin/components/Update";
import DashboardLayout from "./admin/components/DashboardLayout";
import MainLayout from "./admin/components/MainLayout";
import NotFound from "./components/NotFound";
import { RoomsProvider } from "./components/RoomsContext";

const Content = styled.div`
  padding-top: 60px;
`;

const App = () => {
  const [toggle, setToggle] = useState(false);
  const Toggle = () => setToggle(!toggle);

  return (
    <RoomsProvider>
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/personalinfo" element={<PersonalInfoPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/edit-profile" element={<EditProfilePage />} />
            <Route path="/kos/:id" element={<DetailKosPage />} />
            <Route path="/kos2/:id" element={<DetailKosPage2 />} />
            <Route path="/apply-rent/:id" element={<ApplyRentPage />} />
            <Route path="/home2" element={<Home2 />} />
            <Route path="/check-order" element={<CheckOrderPage />} />
            <Route path="/confirm" element={<ConfirmPage />} />
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
          <Route
            path="/"
            element={<DashboardLayout toggle={toggle} Toggle={Toggle} />}
          >
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/tambah" element={<Tambahkost />} />
            <Route path="/data" element={<Room />} />
            <Route path="/transaksi" element={<Transaksi />} />
            <Route path="/penyewa" element={<Penyewakost />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/update/:roomId" element={<Update />} />
          </Route>
        </Routes>
      </Router>
    </RoomsProvider>
  );
};

export default App;
