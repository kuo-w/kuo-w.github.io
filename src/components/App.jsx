import React from "react";
import "./App.scss";
import { DATA } from "../data.js";

import Section from "./Section";
import Contacts from "./Contacts";

const sectionsData = DATA.sections;
const contactsData = DATA.contacts;

const App = () => {
  return (
    <div className="App">
      <h1>William Kuo</h1>
      <div className="App-contacts">
        <Contacts data={contactsData} />
      </div>
      <div className="App-sections">
        {sectionsData &&
          sectionsData.map((data) => (
            <Section key={data.section} data={data} />
          ))}
      </div>
    </div>
  );
};

export default App;
