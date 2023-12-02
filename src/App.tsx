import { RouteConfig as Router } from "@/routes";
import Layout from "@/components/Layout";
import { AuthProvider } from "@/contexts/AuthContext";
import { DarkModeProvider } from "@/contexts/DarkModeContext";
import { EditorProvider } from "@/contexts/EditorContext";
import { ThemeProvider } from "styled-components";
import theme from "@/styles/theme";
import GlobalStyle from "@/styles/GlobalStyle";

const App = () => {
  return (
    <AuthProvider>
      <EditorProvider>
        <DarkModeProvider>
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Layout>
              <Router />
            </Layout>
          </ThemeProvider>
        </DarkModeProvider>
      </EditorProvider>
    </AuthProvider>
  );
};

export default App;
