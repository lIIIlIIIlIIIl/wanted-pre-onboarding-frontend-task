import { createContext, useContext, useEffect, useState } from "react";
import { IssueType } from "../types/issueTpye";
import IssueService from "../service/IssueService";

interface IssueContextType {
  issueList: IssueType[][];
}

interface IssueListProviderProps {
  children: React.ReactNode;
}

const IssueContext = createContext<IssueContextType | null>(null);

export const useIssueList = () => useContext(IssueContext);

const issueListservice = new IssueService();

export function IssueListProvider({ children }: IssueListProviderProps) {
  const [issueList, setIssueList] = useState<IssueType[][]>([]);
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    const getList = async () => {
      const response = await issueListservice.getIssueList(page);

      if (response) setIssueList((prev) => [...prev, ...response]);
    };

    getList();

    return () => {
      setIssueList([]);
      setPage(1);
    };
  }, [page]);

  return (
    <IssueContext.Provider value={{ issueList }}>
      {children}
    </IssueContext.Provider>
  );
}
