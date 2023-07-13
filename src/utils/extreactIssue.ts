import { IssueDetailType, IssueType } from "../types/issueTpye";
import { RootIssue } from "../types/response";

export const extractIssue = (item: RootIssue, type: "list" | "item") => {
  const isItem = type === "item";
  const _created_at = item.created_at;
  const regex = /(\w+)-(\w+)-(\w+)T/;
  const created_at = _created_at.replace(regex, "$1년 $2월 $3일").slice(0, 13);
  return {
    number: item.number,
    title: item.title,
    writer: item.user.login,
    date: created_at,
    comments: item.comments,
    ...(isItem && { user_avatar_url: item.user.avatar_url }),
    ...(isItem && { body: item.body }),
  };
};

export const extractList = (list: RootIssue[]) => {
  return list.map((item: RootIssue) => extractIssue(item, "list"));
};

export const extractDetail = (item: RootIssue) => {
  return extractIssue(item, "item");
};

export const listDivide = (data: IssueType[] | IssueDetailType[]) => {
  const result = [];
  for (let i = 0; i < data.length; i += 4) {
    result.push(data.slice(i, i + 4));
  }
  return result;
};
