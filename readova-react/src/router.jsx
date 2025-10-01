import { Route, Routes } from "react-router";
import IndexPage from "./pages/IndexPage";
import BrowsePage from "./pages/BrowsePage";
import LibraryPage from "./pages/LibraryPage";
import RegisterPage from "./pages/auth/RegisterPage";
import BorrowCheckout from "./pages/BorrowCheckout";
import SubscribedCheckout from "./pages/SubscribedCheckout";
import BookDetail from "./pages/BookDetail";
import Pricing from "./pages/Pricing";

const Router = () => {
  return (
    <Routes>
      <Route index path="/" element={<IndexPage />} />
      <Route path="/browse" element={<BrowsePage />} />
      <Route path="/library" element={<LibraryPage />} />
      <Route path="/auth/register" element={<RegisterPage />} />
      <Route path="/borrowcheckout" element={<BorrowCheckout />} />
      <Route path="/subscribedcheckout" element={<SubscribedCheckout />} />
      <Route path="/bookdetail" element={<BookDetail />} />
      <Route path="/pricing" element={<Pricing />} />
    </Routes>
  );
};

export default Router;
