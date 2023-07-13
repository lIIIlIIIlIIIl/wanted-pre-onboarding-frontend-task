import { createContext, useContext, useEffect, useState } from "react";
import { IssueDetail } from "../types/issueTpye";
import { useApi } from "./APIContext";

interface DetailContextType {
  issue: IssueType;
  isLoading: boolean;
}

type IssueType = IssueDetail;

interface IssueListProviderProps {
  id: number | undefined;
  children: React.ReactNode;
}

const DEFAULT_VALUE = {
  number: 0,
  title: "",
  writer: "",
  date: "",
  comments: 0,
  avatar_url: "",
  body: "",
};

const DetailContext = createContext<DetailContextType>({
  issue: DEFAULT_VALUE,
  isLoading: false,
});

export const useIssue = () => useContext(DetailContext);

export function IssueDetailProvider({
  children,
  id = 0,
}: IssueListProviderProps) {
  const [issue, setIssue] = useState<IssueType>(DEFAULT_VALUE);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const API = useApi();

  useEffect(() => {
    const getList = async () => {
      setIsLoading(true);
      const response = await API?.getIssueDetail(Number(id));

      if (response) {
        setIssue(response);
        setIsLoading(false);
      }
    };
    getList();

    return () => {
      setIssue(DEFAULT_VALUE);
    };
  }, [id, API]);

  return (
    <DetailContext.Provider value={{ issue, isLoading }}>
      {children}
    </DetailContext.Provider>
  );
}
