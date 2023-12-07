import { FC, useEffect, useState } from "react";
import styled from "styled-components";
import pencilIcon from "shared/assets/icons/pencil.svg";
import userIcon from "shared/assets/icons/user.svg";
import { telegram } from "shared/lib";

export const Header: FC = () => {
  const userPhotoDefault =
    "https://p7.hiclipart.com/preview/375/142/528/computer-software-computer-icons-youtube-business-woman.jpg";
  const userPhoto = "" || userPhotoDefault;

  const {
    user: { username = "Noname", first_name, last_name },
  } = telegram.useTelegram();

  const userText =
    first_name && last_name ? `${first_name} ${last_name}` : username;

  return (
    <HeaderStyled>
      <div className="header-wrapper">
        <div className="title">
          <h1 className="title__text">Моё резюме</h1>
          <p className="title__sub">изм. 20 сен 2023 в 17:42</p>
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

          <div className="actions">
            <button className="actions__button" />
            <button className="actions__button" />
          </div>
        </div>
      </div>

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
    </HeaderStyled>
  );
};

const HeaderStyled = styled.header`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 16px;
  border-radius: 8px;
  /* background-color: var(--tg-theme-secondary-bg-color); */
  background-color: white;
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

  .actions {
    display: flex;
    /* gap: 16px; */
  }

  .actions__button {
    width: 50px;
    height: 50px;
    border-radius: 12px;
    border: 1px solid var(--ui-01);
    background-image: url(${pencilIcon});
    background-repeat: no-repeat;
    background-position: center;

    &:last-of-type {
      margin-left: 16px;
      border-color: var(--primary);
      background-image: url(${userIcon});
      background-color: var(--primary);
    }
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
