import {CORE_CONCEPTS, EXAMPLES} from "./data";
import Header from "./components/Header/Header";
import CoreConcept from "./components/CoreConcept/CoreConcept";
import TabButton from "./components/TabButton";
import {useState} from "react";

function App() {
  const [selectedTopic, setSelectedTopic] = useState(null);

  function handleSelect(topic) {
    setSelectedTopic(topic);
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {
              CORE_CONCEPTS.map(concept => (
                <CoreConcept key={concept.title} {...concept} />
              ))
            }
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            {
              CORE_CONCEPTS.map(concept => (
                <TabButton
                  key={concept.title}
                  onSelect={() => handleSelect(concept.title.toLowerCase())}
                  isSelected={concept.title.toLowerCase() === selectedTopic}
                >
                  {concept.title}
                </TabButton>
              ))
            }
          </menu>
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
        </section>
      </main>
    </div>
  );
}

export default App;
