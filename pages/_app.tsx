import React from "react"
import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider, Hydrate } from "react-query";
import { ToastContainer } from "react-toastify";
import "bootstrap/dist/css/bootstrap.min.css";
import 'react-toastify/dist/ReactToastify.css';
import "../styles/styles.scss";

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = React.useState(() => new QueryClient());

  return <QueryClientProvider client={queryClient}>
  <Hydrate state={pageProps.dehydratedState}>
    <Component {...pageProps} />
    <ToastContainer
          position="bottom-left"
          autoClose={8000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
  </Hydrate>
</QueryClientProvider>
}

export default MyApp
