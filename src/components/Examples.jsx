import { EXAMPLES } from "../data.js";
import TabButton from "./TabButton.jsx";
import { useState } from "react";

export default function Examples() {
  /*
    useState() 함수 == React Hooks
    Hook 함수는 컴포넌트 함수 내에서 바로 호출해야 한다.
    기본적으로 컴포넌트가 처음 렌더링될 때, 리액트가 저장하고 사용하는 기본값

    const [counter, setCounter] = useState(0);
      counter: 현재 상태 값
      setCounter: 상태 값 변경 함수

    **클릭이벤트 -> setSelectedTopic() 함수 호출 -> App() 컴포넌트 재실행 -> 변경된 selectedTopic 적용**
  */
  const [selectedTopic, setSelectedTopic] = useState();

  const handleClick = (selectedButtonString) => {
    setSelectedTopic(selectedButtonString);
  };

  let tabContent = <p>Please select a topic!</p>;
  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }

  return (
    <section id="examples">
      <h2>Examples</h2>
      <menu>
        <TabButton
          isSelected={selectedTopic === "components"}
          onClick={() => handleClick("components")}
        >
          Components
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "jsx"}
          onClick={() => handleClick("jsx")}
        >
          JSX
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "props"}
          onClick={() => handleClick("props")}
        >
          Props
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "state"}
          onClick={() => handleClick("state")}
        >
          State
        </TabButton>
      </menu>

      {/* way 1 */}
      {/* {selectedTopic ? (
        <div id="tab-content">
          <h3>{EXAMPLES[selectedTopic].title}</h3>
          <p>{EXAMPLES[selectedTopic].description}</p>
          <pre>
            <code>{EXAMPLES[selectedTopic].code}</code>
          </pre>
        </div>
      ) : (
        <p>Please select a topic!!</p>
      )} */}

      {/* way 2 */}
      {/* {!selectedTopic && <p>Please select a topic!</p>}
      {selectedTopic && (
        <div id="tab-content">
          <h3>{EXAMPLES[selectedTopic].title}</h3>
          <p>{EXAMPLES[selectedTopic].description}</p>
          <pre>
            <code>{EXAMPLES[selectedTopic].code}</code>
          </pre>
        </div>
      )} */}

      {/* way3 */}
      {tabContent}
    </section>
  );
}
