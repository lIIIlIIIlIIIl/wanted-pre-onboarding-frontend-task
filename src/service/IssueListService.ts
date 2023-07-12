import { Root, User } from "../types/response";
import HttpClient from "./HttpClient";

class IssueListService extends HttpClient {
  async get(page: number) {
    const response = await this.axiosInstance.get(
      `/repos/facebook/react/issues?state=open&sort=comments&direction=desc&per_page=4&page=${page}`
    );

    this.changeDate("2023-05-18T04:13:02Z");

    return this.filter(response.data);
  }

  filter(fullData: Root[]) {
    return fullData.map((data: Root) => {
      const responseData = {
        number: data.number,
        title: data.title,
        writer: data.user.login,
        date: this.changeDate(data.updated_at),
        comment: data.comments,
      };
      return responseData;
    });
  }
  changeDate(date: string) {
    const newDate = new Date(date);
    const year = newDate.getFullYear();
    const month = newDate.getMonth() + 1;
    const day = newDate.getDate();
    return `${year}년 ${month}월 ${day}일`;
  }
}

export default IssueListService;
