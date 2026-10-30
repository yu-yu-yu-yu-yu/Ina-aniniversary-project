import React, { lazy, Suspense, useState } from "react";
import { useLocation } from "react-router-dom";
import { TakoLoading } from "../../Common/TakoLoading";
import { shouldShowIntro } from "./introFlag";

const HomeContent = lazy(() => import("./HomeContent"));
const BookIntro = lazy(() => import("./BookIntro"));

const HomeEntry = (): JSX.Element => {
  const { search } = useLocation();
  const [showIntro] = useState(() => shouldShowIntro(search));

  return (
    <Suspense fallback={<TakoLoading fullPage />}>
      {showIntro ? <BookIntro /> : <HomeContent />}
    </Suspense>
  );
};

export default HomeEntry;
