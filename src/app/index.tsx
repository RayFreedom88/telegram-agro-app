import { useEffect } from "react";
import { telegram } from "shared/lib";
import { Routing } from "pages";
import { withProviders } from "./providers";

const App = () => {
  const { tg } = telegram.useTelegram();
  tg.expand();

  useEffect(() => {
    tg.ready();
  }, []);

  return (
    <div className="app">
      <Routing />
    </div>
  );
};

export default withProviders(App);
