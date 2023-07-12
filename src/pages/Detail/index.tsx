import { IssueDetailProvider } from "../../context/DetailContext";
import Child from "./Child";

export default function Detail() {
  return (
    <IssueDetailProvider>
      <Child></Child>
    </IssueDetailProvider>
  );
}
