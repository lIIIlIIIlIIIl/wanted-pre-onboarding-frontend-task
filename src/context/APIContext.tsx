import { createContext, useContext } from "react";
import IssueListService from "../service/IssueService";
import { IssuseServiceType } from "../types/issueTpye";

type ProviderProps = {
  children: React.ReactElement;
  issueService: InstanceType<typeof IssueListService>;
};

const ApiContext = createContext<IssuseServiceType | null>(null);

export const useApi = () => useContext(ApiContext);

const ApiProvider = ({ children, issueService }: ProviderProps) => {
  const getIssueList = issueService.getIssueList.bind(issueService);
  const getIssueDetail = issueService.getIssueDetail.bind(issueService);

  const value = {
    getIssueList,
    getIssueDetail,
  };

  return <ApiContext.Provider value={value}>{children}</ApiContext.Provider>;
};

export default ApiProvider;
