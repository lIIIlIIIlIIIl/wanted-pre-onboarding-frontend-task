import { IssueType } from "../types/issueTpye";

interface IssueItemProps extends IssueType {
  avatar_url?: string;
}

const IssueItem: React.FC<IssueItemProps> = ({
  number,
  title,
  writer,
  date,
  comment,
  avatar_url,
}) => {
  return (
    <>
      {avatar_url ? (
        <div className="detail_avatar item_fr">
          <img src={avatar_url} alt="유저 이미지" />
        </div>
      ) : null}
      <div className="item">
        <div className="item_title_date item_sec">
          <div className="item_title">
            <p>#{number}</p>
            <p>{title}</p>
          </div>
          <div className="item_name_date">
            <span>작성자 : {writer}</span>
            <span>작성일 : {date}</span>
          </div>
        </div>

        <div className="item_comment item_tr">
          <span>코맨트 : {comment}</span>
        </div>
      </div>
    </>
  );
};
export default IssueItem;
