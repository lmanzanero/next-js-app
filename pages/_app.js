import '../styles/globals.css';
import { createContext } from 'react';

import 'react-tabs/style/react-tabs.css';

// Store Strapi Global object in context
export const GlobalContext = createContext({});

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}


//Get inital props from here
 
export default MyApp
