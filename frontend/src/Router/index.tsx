import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

const NotFound = lazy(() => import("../pages/NotFound"));
const Home = lazy(() => import("../pages/Home"));
const POST_04OUT25 = lazy(() => import("../pages/posts/OUT/D04"));

export function Router() {
  return (
    <Suspense fallback={<div>Carregando</div>}>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/ronydt/04OUT25" element={<POST_04OUT25 />} />
      </Routes>
    </Suspense>
  );
}
