import { FC, PropsWithChildren, type ReactNode } from "react";
import styled from "styled-components";

interface IProps extends PropsWithChildren {
  headerSlot?: ReactNode;
  bottomSlot?: ReactNode;
}

export const Layout: FC<IProps> = (props) => {
  return (
    <>
      {props.headerSlot}

      <MainStyled>{props.children}</MainStyled>

      {props.bottomSlot}
    </>
  );
};

const MainStyled = styled.main`
  section:not(:last-child) {
    margin-bottom: 16px;
  }
`;
