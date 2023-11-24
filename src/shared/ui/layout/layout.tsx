import { FC, PropsWithChildren, type ReactNode } from "react";

interface IProps extends PropsWithChildren {
  headerSlot?: ReactNode;
  bottomSlot?: ReactNode;
}

export const Layout: FC<IProps> = (props) => {
  return (
    <>
      {props.headerSlot}

      <main className="main">{props.children}</main>

      {props.bottomSlot}
    </>
  );
};
