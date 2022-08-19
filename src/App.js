import React, { Component } from "react";
import Navbar from "./Navbar";
import Form from "./Form";
import PageContent from "./PageContent";
import { ThemeProivider } from "./context/ThemeContext";
import { LanguageProvider } from "./context/LanguageContext";

class App extends Component {
  render() {
    return (
      <>
        <ThemeProivider>
          <LanguageProvider>
            <PageContent>
              <Navbar />
              <Form />
            </PageContent>
          </LanguageProvider>
        </ThemeProivider>
      </>
    );
  }
}

export default App;
