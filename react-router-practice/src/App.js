import React, { Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";

//import AllQuotes from "./pages/AllQuotes";
//import NewQuote from "./pages/NewQuote";
//import QuoteDetail from "./pages/QuoteDetail";
import Layout from "./components/layout/Layout";
//import NotFound from "./pages/NotFound";
import LoadingSpinner from "./components/UI/LoadingSpinner";

const NewQuote = React.lazy(() => import("./pages/NewQuote")); //lazy loading 이 컴포넌트가 필요할때 js를 다운로드 받는다.
const QuoteDetail = React.lazy(()=> import('./pages/QuoteDetail'));
const NotFound = React.lazy(()=> import('./pages/NotFound'));
const AllQuotes = React.lazy(()=> import('./pages/AllQuotes'));
//초기에 복잡한 로직, 규모가 큰 컴포넌트를 로딩하는 것은 초기 로딩속도를 느리게 만든다. 
//이런 초기 로딩속도를 잡기 위해 Lazy Loading 사용
//build transpile and optimization
//Deploy 
// Uploading Files
// SPA HTML css javascript 
// 빌드하면 많은 js가 만들어지고 이건 서버에서 실행된다.
// npm run build
// sudo npm install -g firebase-tools react Specific tool이 디플로이를 위해 파이어베이스가 만든 아니라 일반적인 소프트웨어 
//const LoadingSpinner = React.lazy(()=> import('./components/UI/LoadingSpinner'));

function App() {
  return (
    <Layout>
      <Suspense
        fallback={
          <div className="centered">
            <LoadingSpinner />
          </div>
        }
      >
        <Switch>
          <Route path="/" exact>
            <Redirect to="/quotes" />
          </Route>
          <Route path="/quotes" exact>
            <AllQuotes />
          </Route>
          <Route path="/quotes/:quoteId">
            <QuoteDetail />
          </Route>
          <Route path="/new-quote">
            <NewQuote />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Suspense>
    </Layout>
  );
}

export default App;
