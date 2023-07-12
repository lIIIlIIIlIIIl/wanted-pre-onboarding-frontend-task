import { createContext, useContext, useEffect, useState } from "react";
import { IssueDetailType, IssueType } from "../types/issueTpye";
import IssueService from "../service/IssueService";

interface DetailContextType {
  issue: IssueDetailType | null;
}

type issueType = IssueDetailType | null;

interface IssueListProviderProps {
  children: React.ReactNode;
}

const DetailContext = createContext<DetailContextType | null>(null);

export const useIssue = () => useContext(DetailContext);

const issueDetailservice = new IssueService();

export function IssueDetailProvider({ children }: IssueListProviderProps) {
  const [issue, setIssue] = useState<issueType>(null);

  useEffect(() => {
    const getList = async () => {
      const response = await issueDetailservice.getIssueDetail(13991);

      console.log(response);
    };

    getList();

    return () => {
      setIssue(null);
    };
  }, []);

  return (
    <DetailContext.Provider value={{ issue }}>
      {children}
    </DetailContext.Provider>
  );
}

/**
 * export interface IssueType {
  number: number;
  title: string;
  writer: string;
  date: string;
  comment: number;
}

export interface IssueDetailType extends IssueType {
  avatar_url: string;
}
 */
