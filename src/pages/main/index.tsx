import {styled} from "styled-components";
import { Layout } from "shared/ui";
import { Header } from "widgets/header";
import { VacancyList } from "widgets/vacancy-list";

const MainPage = () => {
  return (
    <Layout headerSlot={<Header />}>
      <VacancyListSectionStyled>
        <h2 className="vacancy-list-title">Ищут прямо сейчас</h2>
        <VacancyList />
      </VacancyListSectionStyled>
    </Layout>
  );
};

export default MainPage;

const VacancyListSectionStyled = styled.section`
  .vacancy-list-title {
    margin-bottom: var(--spacing-05);
  }
`