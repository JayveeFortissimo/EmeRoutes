import {createBrowserRouter,RouterProvider} from 'react-router-dom';

import Root from './Pages/Root';
import Homepage, {loads as load} from './Pages/Homepage';
import Bodys from './Pages/Bodys';

function App() {

  const routes = createBrowserRouter([
{
  path:'/',
  element:<Root/>,
  children:[
   {path:'/',element:<Homepage/>,loader:load},
   {path:'/Bodys',element:<Bodys/>}
  ]
}
  ]);

  return (
    <>

   <RouterProvider router={routes}/>
    </>
  )
}

export default App
