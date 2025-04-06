import { createBrowserRouter, RouterProvider } from "react-router-dom"; 
import Wrapper from "./layouts/Wrapper";
import HomeOne from "./pages/HomeOne";


const router = createBrowserRouter([
	{ path: "/", element: <HomeOne /> },
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