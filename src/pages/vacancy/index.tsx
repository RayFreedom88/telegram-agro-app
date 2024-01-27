import { useEffect } from "react";
import { useNavigate } from "react-router";
import { telegram } from "shared/lib";
import { Layout } from 'shared/ui';
import { Section } from './ui';

const TextButton = {
  Respond: "Откликнуться",
  Submitted: "Отправлено",
};

const VacancyPage = () => {
  const navigate = useNavigate();
  const { tg } = telegram.useTelegram();

  const handleBackButtonClick = () => {
    navigate("/vacancies");
    tg.MainButton.hide();
  };

  const handleMainButtonClick = () => {
    if (tg.MainButton.isActive) {
      tg.MainButton.setParams({
        text: TextButton.Submitted,
        text_color: "#707070",
      });
      tg.MainButton.disable();
    }
  };

  if (tg.MainButton.isActive) {
    tg.MainButton.setParams({
      text: TextButton.Respond,
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
      <Section/>
    </Layout>
  );
};

export default VacancyPage;
