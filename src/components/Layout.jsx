import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { ToastContainer } from "react-toastify";

function Layout() {
  return (
    <div className="bg-gray-700 flex flex-col min-h-screen">
      <Header />
      <main className="grow">
        <Outlet />
      </main>
      <Footer />
      <ToastContainer
        position="bottom-right" // 알람 위치 지정
        autoClose={1000} // 자동 off 시간
        hideProgressBar={true} // 진행시간바 숨김
        closeOnClick // 클릭으로 알람 닫기
      />
    </div>
  );
}

export default Layout;
