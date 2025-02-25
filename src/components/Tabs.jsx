
// ButtonContainer 를 컴포넌트로 사용하기 위해 대문자로 시작하여 설정하고 값을 받는다. 
export default function Tabs({ children, buttons, ButtonsContainer = 'menu'}) {
  return (
    <>
      <ButtonsContainer>
        {buttons}
      </ButtonsContainer>
      
      {children}
    </>
  )
}