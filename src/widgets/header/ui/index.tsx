import { FC, useState } from "react";
import styled from "styled-components";
import { Button } from "antd";
import { Plus } from "lucide-react";
import { images } from "shared/assets";
import { telegram } from "shared/lib";

// TODO: Часть компонента нужно будет декомпозировать в слой features. К примеру кнопки из блока actions

export const Header: FC = () => {
  const [isVisible, setVisible] = useState(true); // TODO: Временный код
  const userPhoto = "" || images.userPhotoDefault;

  const {
    user: { username = "Noname", first_name, last_name },
  } = telegram.useTelegram();

  const userText =
    first_name && last_name ? `${first_name} ${last_name}` : username;

  const options: Intl.DateTimeFormatOptions = {
    hour: "numeric",
    minute: "numeric",
  }; // TODO: Временный код
  const modifiedDate = new Date().toLocaleDateString("ru-RU", options); // TODO: Временный код

  return (
    <HeaderStyled>
      <div className="header-wrapper">
        <div className="title">
          <h1 className="title__text">Моё резюме</h1>
          <p className="title__sub">изм. {modifiedDate}</p>
        </div>

        <div className="info">
          <div className="user">
            <img
              className="user__img"
              src={userPhoto}
              alt="фото пользователя"
            />
            <p className="user__text">{userText}</p>
          </div>
        </div>
      </div>

      {isVisible ? (
        <ButtonStyled
          type="primary"
          size="large"
          icon={<Plus size={24} absoluteStrokeWidth={true} />}
          onClick={(e) => {
            setVisible(!isVisible);
          }}
        >
          Создать
        </ButtonStyled>
      ) : (
        <div className="analytics">
          <div className="analytics__item">
            <p className="analytics__text">Просмотров</p>
            <p className="analytics__number">
              1197 <span className="analytics__sub-number">+199</span>
            </p>
          </div>

          <div className="analytics__item">
            <p className="analytics__text">Действий</p>
            <p className="analytics__number">20</p>
          </div>
        </div>
      )}
    </HeaderStyled>
  );
};

const ButtonStyled = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px var(--spacing-05);
  margin-bottom: var(--spacing-05);

  background-color: var(--tg-theme-button-color);
  box-shadow: none;

  span:first-child {
    order: 1;
    margin-left: var(--spacing-05);
  }

  &:hover {
    transition: 0.2s opacity;
    background: var(--tg-theme-button-color);
  }
`;

const HeaderStyled = styled.header`
  display: flex;
  flex-direction: column;
  margin-top: var(--spacing-05);
  margin-right: var(--spacing-05);
  margin-bottom: var(--spacing-04);
  margin-left: var(--spacing-05);
  border-radius: 8px;

  background-color: var(--tg-theme-bg-color);
  overflow: hidden;

  .header-wrapper {
    display: flex;
    flex-direction: column;
    padding: 16px;
  }

  .title {
    margin-bottom: 16px;
  }

  .title,
  .info {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }

  .title__text {
    margin-right: 24px;
  }

  .title__sub {
    color: var(--tg-theme-hint-color);
  }

  .user {
    display: flex;
    align-items: center;
    padding-right: 16px;
    margin-right: 16px;
    overflow: hidden;
  }

  .user__img {
    border-radius: 50%;
    width: 48px;
    height: 48px;
    object-fit: contain;
    margin-right: 8px;
    background-color: var(--ui-01);
  }

  .user__text {
    font-size: 18px;
    line-height: 18px;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .analytics {
    display: flex;
    justify-content: space-between;
  }

  .analytics__item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 12px 16px;
    background-color: var(--blue-sky);

    &:last-of-type {
      margin-left: 4px;
      background-color: var(--green-light);
    }
  }

  .analytics__text {
    color: var(--helper-text-01);
  }

  .analytics__number {
    display: inline-block;
    text-align: end;
    font-size: 20px;
    font-weight: 700;
    line-height: 20px;
  }

  .analytics__sub-number {
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 120%;
    color: var(--tertiary-text);
  }
`;
