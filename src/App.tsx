import { RouterProvider } from "react-router-dom";
import { routers } from "./router";
import { IssueListProvider } from "./context/IssueContext";

function App() {
  return (
    <IssueListProvider>
      <RouterProvider router={routers} />
    </IssueListProvider>
  );
}

export default App;
