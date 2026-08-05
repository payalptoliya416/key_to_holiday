import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";

export default function WebsiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="pt-[72px] lg:pt-[108px]">
  {children}
</main>
      <Footer />
    </>
  );
}