import { Layout } from "shared/ui/layout/layout";
import { Header } from "widgets/header";

const MainPage = () => {
  return (
    <Layout headerSlot={<Header />}>
      <div>MAIN</div>
    </Layout>
  );
};

export default MainPage;
