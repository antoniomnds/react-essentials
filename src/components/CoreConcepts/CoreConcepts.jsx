import {CORE_CONCEPTS} from "../../data";
import CoreConcept from "../CoreConcept/CoreConcept";
import "./CoreConcepts.css";
import Section from "../Section";

function CoreConcepts() {
  return (
    <Section title={"Core Concepts"} id="core-concepts">
      <ul>
        {
          CORE_CONCEPTS.map(concept => (
            <CoreConcept key={concept.title} {...concept} />
          ))
        }
      </ul>
    </Section>
  );
}

export default CoreConcepts;
