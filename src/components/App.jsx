import React from "react";
import "/src/styles/App.scss";
import { DATA } from "../data.js";

import Section from "/src/components/Section";
import Contacts from "/src/components/Contacts";

const sections = DATA.sections;
const contacts = DATA.contacts;

const App = () => {
    return (
        <div className="App">
            <h1>William Kuo</h1>
            <div className="App__Contacts">
                <Contacts data={contacts} />
            </div>
            <div className="App__Sections">
                {sections.map((data) => (
                    <Section key={data.section} data={data} />
                ))}
            </div>
        </div>
    );
};

export default App;
