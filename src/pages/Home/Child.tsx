import { Link } from "react-router-dom";
import { useIssueList } from "../../context/IssueContext";
import IssueItem from "../../components/IssueItem";
import LoadingSpinner from "../../components/LoadingSpinner";

const Child = () => {
  const response = useIssueList();

  return (
    <>
      {response?.issueList.map((item, idx) => (
        <section key={idx} className="list">
          {item.map((issue) => (
            <Link key={issue.number} to={`/detail/${issue.number}`}>
              <IssueItem
                number={issue.number}
                title={issue.title}
                writer={issue.writer}
                date={issue.date}
                comments={issue.comments}
              />
            </Link>
          ))}
          <div className="advertisement">
            <a href="https://www.wanted.co.kr" target="_blank" rel="noreferrer">
              <img
                className="advertisement_img"
                src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Flogo_wanted_black.png&w=110&q=100"
                alt="광고"
              />
            </a>
          </div>
        </section>
      ))}
      {response?.isLoading ? <LoadingSpinner /> : null}
    </>
  );
};

export default Child;
