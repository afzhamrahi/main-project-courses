import Products from "./component/Products";
import MainPost from "./component/Main-posts";
import NotFound from "./component/NotFound";
import About from "./component/About";
import AdminPanel from "./component/AdminPanel";

let routes = [
    { path: "/" },
    { path: "/courses", element: <Products /> },
    {
        path: "/About/*", element: <About />, children: [
            { path: 'Setting', element: < p style={{ textAlign: "center" }}> setting in About page</p > },
            { path: 'Dashbord', element: <p style={{ textAlign: "center" }}>Dashbord in About page</p> }
        ]
    },
    { path: "/courses/:courseID", element: <MainPost /> },
    { path: "*", element: <NotFound /> },
    { path: "/AdminPanel", element: < AdminPanel /> },
]

export default routes;