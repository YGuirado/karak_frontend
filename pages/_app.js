import '../styles/globals.css';
import Head from 'next/head';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import games from '../reducers/games'


const store = configureStore({
  reducer: { games },
 });

function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Head>
        <title>Karak</title>
      </Head>
      <Component {...pageProps} />
      </Provider>
  );
}

export default App;
