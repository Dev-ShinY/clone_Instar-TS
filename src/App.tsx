import { ApolloProvider, useReactiveVar } from "@apollo/client";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { client, darkModeVar, isLoggedInVar } from "./apollo";
import Home from "./screens/Home";
import Login from "./screens/Login";
import NotFound from "./screens/Notfound";
import routes from "./screens/routes";
import SignUp from "./screens/SignUp";
import { darkTheme, GlobalStyles, lightTheme } from './screens/styles';
import Layout from "./components/Layout";

function App() {
  const isLoggendIn = useReactiveVar( isLoggedInVar );
  const darkMode = useReactiveVar( darkModeVar );

  return (
    <ApolloProvider client={client}>
    <HelmetProvider>
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          {
            isLoggendIn ? 
            <Route path={ routes.home } element={ <Layout> <Home/> </Layout> } />
          :
            <Route path={ routes.home } element={ <Login/>  } />
          }
          {
            !isLoggendIn ? 
            <Route path={ routes.signUp } element={ <SignUp />  } />
            : 
            null
          }
          <Route path="*" element={ <NotFound />  } />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
    </HelmetProvider>
    </ApolloProvider>
  );
}

export default App;
