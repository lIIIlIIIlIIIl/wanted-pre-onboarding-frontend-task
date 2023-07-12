import IssueItem from "../components/IssueItem";
import { useIssue } from "../context/IssueContext";

export default function Home() {
  const response = useIssue();
  console.log(response);

  return (
    <main className="main">
      {response?.issueList.map((item, idx) => (
        <section key={idx} className="list">
          {item.map((issue) => (
            <IssueItem
              key={issue.number}
              number={issue.number}
              title={issue.title}
              writer={issue.writer}
              date={issue.date}
              comment={issue.comment}
            />
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
    </main>
  );
}
