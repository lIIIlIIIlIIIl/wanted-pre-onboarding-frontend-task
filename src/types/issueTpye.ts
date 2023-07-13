export interface IssueType {
  number: number;
  title: string;
  writer: string;
  date: string;
  comments: number;
}

export interface IssueDetailType extends IssueType {
  avatar_url: string;
  body: string;
}

export interface IssueDetail extends IssueType {
  avatar_url?: string;
  body?: string;
}

export interface IssuseServiceType {
  getIssueList: (page: number) => Promise<IssueType[][]>;
  getIssueDetail: (issueNumber: number) => Promise<IssueDetail>;
}
