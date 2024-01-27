import { Layout } from "shared/ui";
import { Header } from "widgets/header";
import { Section } from "./ui";

const MainPage = () => {
  return (
    <Layout headerSlot={<Header />} indented>
      <Section />
    </Layout>
  );
};

export default MainPage;
