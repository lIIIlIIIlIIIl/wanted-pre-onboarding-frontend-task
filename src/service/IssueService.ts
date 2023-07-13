import { IssuseServiceType } from "../types/issueTpye";
import { extractDetail, extractList, listDivide } from "../utils/extreactIssue";
import HttpClient from "./HttpClient";

class IssueListService extends HttpClient implements IssuseServiceType {
  async getIssueList(page: number) {
    const response = await this.axiosInstance.get(
      `/repos/facebook/react/issues?state=open&sort=comments&direction=desc&per_page=12&page=${page}`
    );
    return listDivide(extractList(response.data));
  }

  async getIssueDetail(issueNumber: number) {
    const response = await this.axiosInstance.get(
      `/repos/facebook/react/issues/${issueNumber}`
    );

    return extractDetail(response.data);
  }
}

export default IssueListService;
