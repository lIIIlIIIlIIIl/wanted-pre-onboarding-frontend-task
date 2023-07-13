/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useContext, useEffect, useRef, useState } from "react";
import { IssueType } from "../types/issueTpye";
import { useApi } from "./APIContext";
interface IssueContextType {
  issueList: IssueType[][];
  isLoading: boolean;
}

interface IssueListProviderProps {
  children: React.ReactNode;
}

const IssueContext = createContext<IssueContextType | null>(null);

export const useIssueList = () => useContext(IssueContext);

export function IssueListProvider({ children }: IssueListProviderProps) {
  const [issueList, setIssueList] = useState<IssueType[][]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);

  const API = useApi();

  useEffect(() => {
    return () => {
      setIssueList([]);
      setPage(1);
    };
  }, []);

  const observer = useRef<IntersectionObserver | null>(null);
  const target = useRef<HTMLDivElement | null>(null);

  const handleIntersection = async (entries: IntersectionObserverEntry[]) => {
    const entry = entries[0];
    if (entry.isIntersecting) {
      setIsLoading(true);
      const response = await API?.getIssueList(page);

      if (response) setIssueList((prev) => [...prev, ...response]);
      setPage((prev) => prev + 1);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    observer.current = new IntersectionObserver(handleIntersection);
    if (target.current) {
      observer.current.observe(target.current);
    }

    return () => {
      if (observer.current && target.current) {
        observer.current.unobserve(target.current);
      }
    };
  }, [page]);

  return (
    <IssueContext.Provider value={{ issueList, isLoading }}>
      {children}
      <div ref={target}></div>
    </IssueContext.Provider>
  );
}
