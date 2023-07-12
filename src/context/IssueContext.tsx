import { createContext, useContext, useEffect, useState } from "react";
import { IssueType } from "../types/issueTpye";
import IssueListService from "../service/IssueListService";

interface IssueContextType {
  issueList: IssueType[][];
  isLoading: boolean;
}

interface IssueListProviderProps {
  children: React.ReactNode;
}

const IssueContext = createContext<IssueContextType | null>(null);

export const useIssueList = () => useContext(IssueContext);

const issueListservice = new IssueListService();

export function IssueListProvider({ children }: IssueListProviderProps) {
  const [issueList, setIssueList] = useState<IssueType[][]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    const getList = async () => {
      setIsLoading(true);
      const response = await issueListservice.get(page);

      if (response) setIssueList((prev) => [...prev, ...response]);
      setIsLoading(false);
    };

    getList();

    return () => {
      setIssueList([]);
      setPage(1);
    };
  }, [page]);

  return (
    <IssueContext.Provider value={{ issueList, isLoading }}>
      {children}
    </IssueContext.Provider>
  );
}
