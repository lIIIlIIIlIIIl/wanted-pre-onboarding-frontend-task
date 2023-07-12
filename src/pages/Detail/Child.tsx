import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import IssueItem from "../../components/IssueItem";
import { useIssue } from "../../context/DetailContext";
import LoadingSpinner from "../../components/LoadingSpinner";

const Child = () => {
  const response = useIssue();
  return (
    <>
      {response.isLoading ? (
        <LoadingSpinner />
      ) : (
        <div>
          <div className="fl">
            <IssueItem
              number={response.issue.number}
              title={response.issue.title}
              writer={response.issue.writer}
              date={response.issue.date}
              comment={response.issue.comment}
              avatar_url={response.issue.avatar_url}
            />
          </div>
          <div className="detail_mark">
            <ReactMarkdown
              children={response.issue.body}
              remarkPlugins={[remarkGfm]}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Child;
