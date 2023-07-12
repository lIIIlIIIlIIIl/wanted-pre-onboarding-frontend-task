import { Root, User } from "../types/response";
import HttpClient from "./HttpClient";

class IssueListService extends HttpClient {
  async get(page: number) {
    const response = await this.axiosInstance.get(
      `/repos/facebook/react/issues?state=open&sort=comments&direction=desc&per_page=4&page=${page}`
    );

    return this.filter(response.data);
  }

  filter(fullData: Root[]) {
    return fullData.map((data: Root) => {
      const responseData = {
        number: data.number,
        title: data.title,
        writer: data.user.login,
        date: data.updated_at,
        comment: data.comments,
      };
      return responseData;
    });
  }
}

export default IssueListService;
