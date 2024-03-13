import styled from 'styled-components';
export function Grocery() {
  return (<Grocery_container className="grocery_container">
    <Heading className="heading">Grocery Bud</Heading>
    <Input_box>
      <Input></Input>
      <Button>Add Item</Button>
    </Input_box>
  </Grocery_container>
  )
}
const Heading = styled.h4`
font-size:1.5rem;
letter-spacing:.05rem;
font-weight:300;
`
const Grocery_container = styled.div`
font-family:"Inter", sans-serif;
font-weight: 400;
line-height: 1;
padding:1rem;
border:2px solid grey;
`
const Input_box = styled.div`
display:flex;
align-items:center;
`
const Input = styled.input`
width:300px;
padding: 0.6em 1.2em;
font-size:1em;
height:100%;
border: 1px solid transparent;
&:focus{
outline:1px solid grey;
}
`
const Button = styled.button`
border: 1px solid transparent;
height:100%;
padding: 0.6em 1.2em;
font-size: 1em;
font-weight: 500;
font-family: inherit;
background-color: #1a1a1a;
cursor: pointer;
transition: border-color 0.25s;
`
