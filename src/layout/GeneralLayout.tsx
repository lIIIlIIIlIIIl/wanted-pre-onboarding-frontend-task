import Header from "../components/Header";

interface GeneralLayoutProps {
  children: React.ReactNode;
}
const GeneralLayout: React.FC<GeneralLayoutProps> = ({ children }) => {
  return (
    <div className="root">
      <Header />
      <main className="main">{children}</main>
    </div>
  );
};

export default GeneralLayout;
