import { Header } from "./components/Header/Header.jsx";
import CoreConcepts from "./components/CoreConcepts.jsx";
import Exampels from "./components/Examples.jsx";

function App() {
  return (
    // JSX 코드는 하나의 상위 혹은 부모 요소를 가지고 있어야 한다.
    // div 를 넣는 이유? 모든 값을 감싸는 객체 혹은 배열의 역할
    // React.Fragment: 불필요한 div 태그를 생성하지 않고 여러 요소를 렌더링할 수 있다.
    // <> </>: Fragment의 축약형. 이전 버전에서는 안될 가능성 존재
    <>
      <Header />
      <main>
        <CoreConcepts />
        <Exampels />
      </main>
    </>
  );
}

export default App;
