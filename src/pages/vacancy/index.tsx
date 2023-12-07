import { styled } from "styled-components";
import { Layout } from "shared/ui";
import { useParams } from "react-router";

const VacancyPage = () => {
  const { id } = useParams();

  return (
    <Layout>
      <VacancySectionStyled>
        <h2 className="vacancy-title">Страница вакансии id={id}</h2>
      </VacancySectionStyled>
    </Layout>
  );
};

export default VacancyPage;

const VacancySectionStyled = styled.section`
  .vacancy-title {
    margin: 0 auto;
  }
`;
