import { Suspense } from "react";
import { styled } from "styled-components";
import { Spin } from "antd";
import { Layout } from "shared/ui";
import { Header } from "widgets/header";
import { VacancyList } from "widgets/vacancy-list";

const MainPage = () => {
  return (
    <Suspense fallback={<Spin delay={300} className="overlay" size="large" />}>
      <Layout headerSlot={<Header />}>
        <VacancyListSectionStyled>
          <h2 className="vacancy-list-title">Ищут прямо сейчас</h2>
          <VacancyList />
        </VacancyListSectionStyled>
      </Layout>
    </Suspense>
  );
};

export default MainPage;

const VacancyListSectionStyled = styled.section`
  .vacancy-list-title {
    margin-bottom: 16px;
  }
`;
