import Footer from "./Footer";
import Header from "./Header";

interface LayoutProps {
  seoTitle?: string;
  children: React.ReactNode;
}

const layout = ({ seoTitle, children }: LayoutProps) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default layout;
