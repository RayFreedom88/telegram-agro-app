import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { Spin } from "antd"; // ~ shared/ui/spin

export const withRouter = (component: () => React.ReactNode) => () => (
  <BrowserRouter>
    <Suspense fallback={<Spin delay={100} className="overlay" size="large" />}>
      {component()}
    </Suspense>
  </BrowserRouter>
);
