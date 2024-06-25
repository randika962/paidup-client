import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
  Routes
} from "react-router-dom";
import Header from "./components/home/Header/Header";
import Home from "./pages/Home/Home";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Account from "./pages/Account/Account";
import Layout from "./components/layout/Layout";

// const Layout = () => {
//   return (
//     <div>
//       <ToastContainer
//         position="top-right"
//         autoClose={1000}
//         hideProgressBar={false}
//         newestOnTop={false}
//         closeOnClick
//         rtl={false}
//         pauseOnFocusLoss
//         draggable
//         pauseOnHover
//         theme="colored"
//       />
//       <Header />
//     </div>
//   );
// };
// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Routes>
//       <Route path="/" element={<Layout />}>
//         <Route index element={<Home />}/>
//         <Route path="/account" element={<Account />}/>
//       </Route>
//     </Routes>
//   )
// );

function App() {
  return (
    <div className="font-bodyFont">
      <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}/>
        <Route path="/account" element={<Account />}/>
      </Route>
    </Routes>
    </div>
  );
}

export default App;
