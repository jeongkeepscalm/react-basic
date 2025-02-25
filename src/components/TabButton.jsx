export default function TabButton({ children, isSelected, ...props }) {

  // ...props 에는 onClick 

  return (
      <li>
        <button className={isSelected ? 'active' : undefined} {...props}>
          {children}
        </button>
      </li>
  );

}