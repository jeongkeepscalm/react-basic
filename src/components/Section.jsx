
// 속성을 전달하는 패턴 컴포넌트
export default function Section({ title, children, ...props}) {
  return (
    <section {...props}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}
