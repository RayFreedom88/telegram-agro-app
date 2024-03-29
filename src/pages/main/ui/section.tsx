import { styled, css } from "styled-components";
import { Link } from "react-router-dom";
import { useGate } from "effector-react";
import { images } from "shared/assets";
import { Gate, stores } from "../model";

export const Section = () => {
  const vacanciesCount = stores.useVacanciesCount();

  useGate(Gate);

  return (
    <SectionStyled>
      <h2 className="visually-hidden">Content</h2>

      <ContentStyled>
        <LinkStyled to={"vacancies"}>
          <div>
            <h3 className="link-title">
              Каталог <br />
              агро-вакансий
            </h3>

            <p className="link-text">
              {vacanciesCount} актуальных <br />
              предложения
            </p>
          </div>
        </LinkStyled>

        <LinkStyled to={""} disabled>
          <div>
            <h3 className="link-title">
              Обратиться к HR <SpanStyled>скоро</SpanStyled>
            </h3>

            <p className="link-text">
              Персональный HR поможет с резюме, <br />
              найдёт подходящие варианты
            </p>
          </div>
        </LinkStyled>

        <LinkStyled to={""} disabled>
          <div>
            <h3 className="link-title">Пройти стажировку</h3>

            <p className="link-title">
              <SpanStyled>скоро</SpanStyled>
            </p>
            <p className="link-text">Для школьников и студентов</p>
          </div>
        </LinkStyled>
      </ContentStyled>
    </SectionStyled>
  );
};

const SectionStyled = styled.section`
  height: auto;
`;

const SpanStyled = styled.span`
  display: inline-block;
  padding: var(--spacing-01) var(--spacing-03) var(--spacing-02)
    var(--spacing-03);
  border-radius: 10px;

  background-color: var(--text-03);

  color: var(--text-02);
  font-size: 10px;
  font-weight: 400;
  line-height: normal;
  vertical-align: text-top;
`;

const disabledStyles = css`
  box-shadow: 0px 0px 0px 1px var(--ui-01) inset;
  background-image: none;
  background-color: inherit;
  color: var(--text-04);
  cursor: auto;
`;

interface ILinkStyled {
  readonly disabled: boolean;
}

const LinkStyled = styled(Link)<ILinkStyled>`
  padding: var(--spacing-05);
  border-radius: 10px;

  background-color: var(--sky);
  background-image: url(${images.vacanciesApk});
  background-position: right bottom;
  background-repeat: no-repeat;
  background-size: auto;

  color: var(--tg-theme-text-color);
  font-size: 10px;
  font-weight: 400;
  line-height: 14px;

  .link-title {
    margin-bottom: var(--spacing-03);

    font-size: 16px;
    font-weight: 700;
    line-height: 21px;
    letter-spacing: -0.32px;
    white-space: break-spaces;
  }

  .link-text {
    color: var(--text-03);
  }

  ${({ disabled }) => disabled && disabledStyles}

  &:not(:last-child) {
    margin-bottom: var(--spacing-04);
  }
`;

const ContentStyled = styled.div`
  display: flex;
  flex-direction: column;
`;
