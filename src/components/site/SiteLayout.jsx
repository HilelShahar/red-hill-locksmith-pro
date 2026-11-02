import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import MobileCallBar from "@/components/site/MobileCallBar";

export default function SiteLayout({ children }) {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>{children}</main>
      <Footer />
      <MobileCallBar />
      <div className="h-14 sm:hidden" aria-hidden="true" />
    </div>
  );
}
