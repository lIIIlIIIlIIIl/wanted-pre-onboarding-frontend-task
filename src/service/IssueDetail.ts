import HttpClient from "./HttpClient";

class IssueDetailService extends HttpClient {
  async get(post_number: number) {
    const response = await this.axiosInstance.get(
      `/repos/facebook/react/issues/${post_number}`
    );
    return response;
  }
}

export default IssueDetailService;
