import { useParams } from "react-router-dom";
import { IssueDetailProvider } from "../../context/DetailContext";
import Child from "./Child";

export default function Detail() {
  const params = useParams();
  const id = Number(params.id);
  return (
    <IssueDetailProvider id={id}>
      <Child />
    </IssueDetailProvider>
  );
}
