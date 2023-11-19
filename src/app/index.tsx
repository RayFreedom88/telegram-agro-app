import { useEffect } from "react";
import { WebApp as tg } from "@grammyjs/web-app";
import { Routing } from "pages";
import { withProviders } from "./providers";
import "./styles/index.scss";

const App = () => {
  useEffect(() => {
    tg.ready()
  }, [])

  return (
    <div className="app">
      <Routing />
    </div>
  );
};

export default withProviders(App);
