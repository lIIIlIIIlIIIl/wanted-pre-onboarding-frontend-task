import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import IssueItem from "../../components/IssueItem";
import { useIssue } from "../../context/DetailContext";
import LoadingSpinner from "../../components/LoadingSpinner";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism";

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
              comments={response.issue.comments}
              avatar_url={response.issue.avatar_url}
            />
          </div>
          <div className="detail_mark">
            <ReactMarkdown
              children={response.issue.body || ""}
              components={{
                code({ node, inline, className, children, ...props }) {
                  const match = /language-(\w+)/.exec(className || "");
                  return !inline && match ? (
                    <SyntaxHighlighter
                      {...props}
                      children={String(children).replace(/\n$/, "")}
                      style={tomorrow}
                      language={match[1]}
                      PreTag="div"
                    />
                  ) : (
                    <code {...props} className={className}>
                      {children}
                    </code>
                  );
                },
              }}
              remarkPlugins={[remarkGfm]}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Child;
