import styled from 'styled-components';
function Card(item){
  return(
    <Card_cantainer>
      <Left_side>
        <Check_box></Check_box>
        <Item>{item}</Item>
      </Left_side>
    </Card_cantainer>
  )
}
const Card_cantainer=styled.div``
const Left_side=styled.div``
const Check_box=styled.input.attrs({type:check})``
