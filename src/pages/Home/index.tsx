import { IssueListProvider } from "../../context/IssueContext";
import Child from "./Child";

export default function Home() {
  return (
    <IssueListProvider>
      <Child />
    </IssueListProvider>
  );
}
