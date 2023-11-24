import { useEffect } from "react";
import { WebApp as telegram } from "@grammyjs/web-app";
import { Routing } from "pages";
import { withProviders } from "./providers";

const App = () => {
  useEffect(() => {
    telegram.ready();
  }, []);

  return (
    <div className="app">
      <Routing />
    </div>
  );
};

export default withProviders(App);
