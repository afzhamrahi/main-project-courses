import "bootstrap/dist/css/bootstrap.css"
import Home from "./component/Home";
import routes from "./routes";
import { useRoutes } from "react-router-dom";

function App() {
  let router = useRoutes(routes)
  return (
    <>

      <Home />
      {router}

    </>
  )
}


export default App;



// برای اینکه روت هایمان بصورت استاندارد باشد
// و بصورت routes انها را درون یک فایلی با اسم 
// یک ارایه قرار میدهیم 


// استفاده میکنیم useRoute و از هوک 