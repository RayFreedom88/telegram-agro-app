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

  const handleBackButtonClick = () => {
    navigate("/vacancies");
    tg.MainButton.hide();
  };

  const handleMainButtonClick = () => {
    if (tg.MainButton.isActive) {
      tg.MainButton.setParams({
        text: TextButton.SUBMITTED,
        text_color: "#707070",
      });
      tg.MainButton.disable();
    }
  };

  if (tg.MainButton.isActive) {
    tg.MainButton.setParams({
      text: TextButton.RESPOND,
      text_color: "#ffffff",
    });
  }

  useEffect(() => {
    tg.BackButton.onClick(handleBackButtonClick);
    tg.MainButton.onClick(handleMainButtonClick);

    tg.BackButton.show();
    tg.MainButton.show();
    tg.MainButton.setParams({
      is_active: true,
    });

    return () => {
      tg.BackButton.offClick(handleBackButtonClick);
      tg.MainButton.onClick(handleMainButtonClick);
      tg.BackButton.show();
      tg.MainButton.hide();
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
