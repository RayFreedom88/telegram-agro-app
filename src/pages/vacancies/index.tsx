import { useEffect } from "react";
import { useNavigate } from "react-router";
import { Layout } from "shared/ui";
import { telegram } from "shared/lib";
import { Section } from "./ui";

const VacanciesPage = () => {
  const navigate = useNavigate();
  const { tg } = telegram.useTelegram();

  tg.BackButton.show();

  const handleBackButtonClick = () => {
    navigate("/");
    tg.BackButton.hide();
  };

  useEffect(() => {
    tg.BackButton.show();
    tg.BackButton.onClick(handleBackButtonClick);

    return () => {
      tg.BackButton.offClick(handleBackButtonClick);
    };
  }, []);

  return (
    <Layout indented>
      <Section />
    </Layout>
  );
};

export default VacanciesPage;
