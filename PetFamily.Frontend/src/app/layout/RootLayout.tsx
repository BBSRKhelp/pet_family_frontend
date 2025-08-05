import { Outlet } from "react-router";
import { Header } from "../../widgets/header/Header";
import { ContentBlock } from "../../shared/ui/ContentBlock";
import { Footer } from "../../widgets/footer/Footer";

export function RootLayout() {
  return (
    <>
      <div className="h-screen flex flex-col bg-main-color">
        <Header />
        <main className="flex flex-col h-full px-2 sm:px-8 py-2 sm:py-5">
          <ContentBlock>
            <Outlet />
          </ContentBlock>
        </main>
        <Footer />
      </div>
    </>
  );
}
