import { IssueType } from "../types/issueTpye";
import { Root } from "../types/response";
import HttpClient from "./HttpClient";

class IssueDetailService extends HttpClient {
  async get(issueNumber: number) {
    const response = await this.axiosInstance.get(
      `/repos/facebook/react/issues/${issueNumber}`
    );
    return this.filter(response.data);
  }

  filter(data: Root) {
    return {
      number: data.number,
      title: data.title,
      writer: data.user.login,
      date: this.changeDate(data.updated_at),
      comment: data.comments,
      body: data.body,
      avatar_url: data.user.avatar_url,
    };
  }

  changeDate(date: string) {
    const newDate = new Date(date);
    const year = newDate.getFullYear();
    const month = newDate.getMonth() + 1;
    const day = newDate.getDate();
    return `${year}년 ${month}월 ${day}일`;
  }

  issueDivide(data: IssueType[]) {
    const result = [];
    for (let i = 0; i < data.length; i += 4) {
      result.push(data.slice(i, i + 4));
    }
    return result;
  }
}

export default IssueDetailService;
