import { CORE_CONCEPTS } from "../data.js";
import CoreConcept from './CoreConcept.jsx';

export default function CoreConcepts() {
  return (
    <section id="core-concepts">
      <ul>
        {/* 컨텐츠 동적 출력:map으로 데이터를 JSX 코드로 변환 */}
        {CORE_CONCEPTS.map((conceptItem, index) => (
          <CoreConcept key={conceptItem.title} {...conceptItem} />
        ))}

        {/* <CoreConcept
                title={CORE_CONCEPTS[0].title}
                description={CORE_CONCEPTS[0].description}
                image={CORE_CONCEPTS[0].image}
              />
              <CoreConcept {...CORE_CONCEPTS[1]} />
              <CoreConcept {...CORE_CONCEPTS[2]} />
              <CoreConcept {...CORE_CONCEPTS[3]} /> */}
      </ul>
    </section>
  );
}
