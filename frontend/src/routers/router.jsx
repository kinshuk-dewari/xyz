import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
  import App from "../App";
  import Home from "../pages/Home";
  import Inshome from "../pages/Inspector/Inshome";
  import Insights from "../pages/Inspector/Insights";
  import Inspect from "../pages/Inspector/Inspect";
  import { Signup } from "../pages/Signup";
  import { Signin } from "../pages/Signin";
  import { University } from "../pages/University";
   import { Inspector } from "../pages/Inspector";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children:[
        {
            path:"/",
            element:<Home/>
        },        
        {
             path:"/signup",
             element:<Signup/>
        },
        {
          path:"/signin",
          element:<Signin/>
        },
        // {
        //     path:"/university/:id",
        //     element:<SingleUniversity/>, 
        //     loader: ({params}) => fetch(`http://localhost:5000/university/${params.id}`)      
        
        // }
     ]
    },
    {
      path:"/inspector",
      element:<App/>,
       children:[
         {
           path:"/inspector/Home",
           element:<Inspector/> 
         },
        {
          path:"/inspector/insHome",
          element:<Inshome/> 
        },
        {
              path:"/inspector/inspect",
              element:<Inspect />
              // yea vo panna hai jis mai ja kai inspector uni's ko inspect karega 
              // unki photo uplaod karpayega ya fir direct apnai phone sai keech payega 
              // jaha sai uska yea data  hamarai model o feed hoga aur uska score nikalegai 
              // yea score koi bhi change ne karsakta to prevent ghoose khori 
              // aur yea sb data base mai update hota rahega 
        },
        {
          // jab data ayega links kai throught tb mujhey isko hatana hi 
          path:"/inspector/insights",
          element: <Insights/>,
          // loader: ({params}) => fetch(`http://localhost:5000/university/${params.id}`)
        }
        // {
        //   path:"/inspector/university/:id",
        //   element: <Insights/>,
        //   loader: ({params}) => fetch(`http://localhost:5000/university/${params.id}`)
        // }
     ]
    },
    {
       path:"/university",
       element:<University/>,
    //    children:[
    //      {
    //        path:"/university/unihome",
    //        element:<Dashboard/>
    //      },
    //     {
    //       path:"/admin/dashboard/editUni/:id",
    //       element: <EditUni/>,
    //       loader: ({params}) => fetch(`http://localhost:5000/university/${params.id}`)
    //     }
    //  ]
    }
]);

  export default router;