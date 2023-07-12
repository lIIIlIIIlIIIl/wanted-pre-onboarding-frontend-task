export interface IssueType {
  number: number;
  title: string;
  writer: string;
  date: string;
  comment: number;
}

export interface IssueDetailProps extends IssueType {
  avatar_url: string;
}
