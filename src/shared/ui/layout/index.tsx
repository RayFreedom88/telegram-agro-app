import { FC, PropsWithChildren, type ReactNode } from "react";
import styled from "styled-components";

interface IProps extends PropsWithChildren {
  headerSlot?: ReactNode;
  bottomSlot?: ReactNode;
  indented?: boolean;
}

export const Layout: FC<IProps> = ({ ...props }) => {
  return (
    <>
      {props.headerSlot}

      <MainStyled $indented={props.indented}>{props.children}</MainStyled>

      {props.bottomSlot}
    </>
  );
};

interface IMainStyled {
  $indented?: boolean;
}

const MainStyled = styled.main<IMainStyled>`
  ${(props) => props.$indented && "padding: 0 var(--spacing-05);"}

  section:not(:last-child) {
    margin-bottom: var(--spacing-04);
  }
`;
