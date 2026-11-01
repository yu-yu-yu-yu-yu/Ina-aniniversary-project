import React, { lazy, Suspense, useState } from "react";
import { useLocation } from "react-router-dom";
import { TakoLoading } from "../../Common/TakoLoading";
import { shouldShowIntro } from "./introFlag";

const HomeContent = lazy(() => import("./HomeContent"));
const BookIntro = lazy(() => import("./BookIntro"));

const HomeEntry = (): JSX.Element => {
  const { pathname } = useLocation();
  const [showIntro] = useState(() => shouldShowIntro(pathname));

  return (
    <Suspense fallback={<TakoLoading fullPage />}>
      {showIntro ? <BookIntro /> : <HomeContent />}
    </Suspense>
  );
};

export default HomeEntry;
