import {CORE_CONCEPTS, EXAMPLES} from "../../data";
import {useState} from "react";
import "./Examples.css";
import Section from "../Section";
import Tabs from "../Tabs";
import TabButton from "../TabButton";

function Examples() {
  const [selectedTopic, setSelectedTopic] = useState(null);

  function handleSelect(topic) {
    setSelectedTopic(topic);
  }

  return (
    <Section title={"Examples"} id="examples">
      <Tabs
        buttons={
          CORE_CONCEPTS.map(concept => (
            <TabButton
              key={concept.title}
              isSelected={concept.title.toLowerCase() === selectedTopic}
              onClick={() => handleSelect(concept.title.toLowerCase())}
            >
              {concept.title}
            </TabButton>
          ))
        }
      >
        {
          selectedTopic ? (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                  <code>{EXAMPLES[selectedTopic].code}</code>
                </pre>
            </div>) : (<p>Please select a topic.</p>
          )
        }
      </Tabs>
    </Section>
  );
}

export default Examples;
