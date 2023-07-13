import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="error_wrap">
      <div className="error_messages">
        <div className="error_title">
          <p>Error Page</p>
        </div>
        <div className="error_message">
          <p>잘못된 접근입니다.</p>
        </div>
        <div className="error_link">
          <Link to="/">홈으로 이동하기</Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
