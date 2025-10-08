import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

const NotFound = lazy(() => import("../pages/NotFound"));
const Home = lazy(() => import("../pages/Home"));

const POST_07OUT25 = lazy(() => import("../pages/posts/OUT/D07"));
const POST_06OUT25 = lazy(() => import("../pages/posts/OUT/D06"));
const POST_05OUT25 = lazy(() => import("../pages/posts/OUT/D05"));
const POST_04OUT25 = lazy(() => import("../pages/posts/OUT/D04"));

export function Router() {
  return (
    <Suspense fallback={<div>Carregando</div>}>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/ronydt/07OUT25" element={<POST_07OUT25 />} />
        <Route path="/ronydt/06OUT25" element={<POST_06OUT25 />} />
        <Route path="/ronydt/05OUT25" element={<POST_05OUT25 />} />
        <Route path="/ronydt/04OUT25" element={<POST_04OUT25 />} />
      </Routes>
    </Suspense>
  );
}
