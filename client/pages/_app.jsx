import "../styles/globals.css";

import Layout from "../components/layout/layout";
import Provider from "../context api/ContextApi";

function MyApp({ Component, pageProps }) {
  return (
    <Provider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
