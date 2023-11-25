import { WebApp as tg } from "@grammyjs/web-app";

export const useTelegram = () => {
  return {
    tg,
    user: { ...tg?.initDataUnsafe?.user },
  };
};
