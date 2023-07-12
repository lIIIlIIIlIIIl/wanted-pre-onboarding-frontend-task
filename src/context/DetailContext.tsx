import { createContext, useContext, useEffect, useState } from "react";
import { IssueDetailType } from "../types/issueTpye";
import IssueDetailService from "../service/IssueDetailService";

interface DetailContextType {
  issue: IssueType;
  isLoading: boolean;
}

type IssueType = IssueDetailType;

interface IssueListProviderProps {
  id: number | undefined;
  children: React.ReactNode;
}

const DEFAULT_VALUE = {
  number: 0,
  title: "",
  writer: "",
  date: "",
  comment: 0,
  avatar_url: "",
  body: "",
};

const DetailContext = createContext<DetailContextType>({
  issue: DEFAULT_VALUE,
  isLoading: false,
});

export const useIssue = () => useContext(DetailContext);

const issueDetailservice = new IssueDetailService();

export function IssueDetailProvider({
  children,
  id = 0,
}: IssueListProviderProps) {
  const [issue, setIssue] = useState<IssueType>(DEFAULT_VALUE);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const getList = async () => {
      setIsLoading(true);
      const response = await issueDetailservice.get(Number(id));
      setIssue(response);
      setIsLoading(false);
    };
    getList();

    return () => {
      setIssue(DEFAULT_VALUE);
    };
  }, [id]);

  return (
    <DetailContext.Provider value={{ issue, isLoading }}>
      {children}
    </DetailContext.Provider>
  );
}
