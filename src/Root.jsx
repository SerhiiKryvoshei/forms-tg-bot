import React from "react";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./components/App/App";
import ErrorPage from "./components/ErrorPage/ErrorPage";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: ":filter",
				element: <App />,
			},
		],
	},
]);

function Root({ store }) {
	return (
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	);
}

export default Root;
