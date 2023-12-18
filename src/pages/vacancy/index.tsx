import { styled } from "styled-components";
import { useNavigate, useParams } from "react-router";
import { Layout } from "shared/ui";
import { telegram } from "shared/lib";
import { useEffect } from "react";

const TextButton = {
  RESPOND: "Откликнуться",
  SUBMITTED: "Отправлено",
};

const VacancyPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { tg } = telegram.useTelegram();

  tg.BackButton.show();

  const handleBackButtonClick = () => {
    navigate(-1);
  };

  if (tg.MainButton.isActive) {
    tg.MainButton.setParams({
      text: TextButton.RESPOND,
      text_color: "#ffffff",
    });
  }

  tg.MainButton.show();

  const handleMainButtonClick = () => {
    if (tg.MainButton.isActive) {
      tg.MainButton.setParams({
        text: TextButton.SUBMITTED,
        text_color: "#707070",
      });
      tg.MainButton.disable();
    }
  };

  useEffect(() => {
    tg.BackButton.onClick(handleBackButtonClick);
    tg.MainButton.onClick(handleMainButtonClick);

    return () => {
      tg.BackButton.offClick(handleBackButtonClick);
      tg.MainButton.onClick(handleMainButtonClick);
      tg.MainButton.enable();
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
