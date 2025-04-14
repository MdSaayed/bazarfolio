import { createBrowserRouter, RouterProvider } from "react-router-dom"; 
import Wrapper from "./layouts/Wrapper";
import { HomeOne, HomeTwo } from "./pages";
 


const router = createBrowserRouter([
	{ path: "/", element: <HomeOne /> },
	{ path: "/home-2", element: <HomeTwo /> },
]);


function App() {

	return (
		<>
        <Wrapper>
          <RouterProvider router={router} />
        </Wrapper>
		</>
	);
}

export default App;