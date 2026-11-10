import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Toaster
        position="top-center"
        toastOptions={{
          className: "text-xl p-6 max-w-lg",
        }}
      />

      <RouterProvider router={router} />
    </>
  );
}

export default App;