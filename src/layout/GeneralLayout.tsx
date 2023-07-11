import Header from "../components/Header";

interface GeneralLayoutProps {
  children: React.ReactNode;
}
const GeneralLayout: React.FC<GeneralLayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};

export default GeneralLayout;
