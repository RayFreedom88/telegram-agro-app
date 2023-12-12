import { styled } from "styled-components";
import { useNavigate, useParams } from "react-router";
import { Layout } from "shared/ui";
import { telegram } from "shared/lib";
import { useEffect } from "react";

const VacancyPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { tg } = telegram.useTelegram();

  tg.BackButton.show();

  const handleBackButtonClick = () => {
    navigate("/", { replace: true });
    tg.BackButton.hide();
  };

  useEffect(() => {
    tg.BackButton.onClick(handleBackButtonClick);

    return () => {
      tg.BackButton.offClick(handleBackButtonClick);
    };
  }, []);

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
