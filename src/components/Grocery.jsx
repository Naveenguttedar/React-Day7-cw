import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Card from './Card';
let list = localStorage.getItem('list');
if (list == null) {
    localStorage.setItem('list', JSON.stringify(["Bakery and Bread ", " Meat and Seafood  "]))
    list = localStorage.getItem('list');
}
list = JSON.parse(list);
export function Grocery() {
    const [itemList, setItemList] = useState(list);
    useEffect(() => localStorage.setItem('list', JSON.stringify(itemList)), [itemList])
    function handleOnSubmit(e) {
        e.preventDefault();
        setItemList([...itemList, item])
        e.target.reset();
    }
    function handleOnChange(e) {
        setItem(e.target.value);
    }
    function handleOnDelete(id) {
        console.log(id)
        setItemList(itemList.filter((item, i) => i != id))
    }
    const [item, setItem] = useState("");
    return (<>
        <Grocery_container className="grocery_container">
            <Heading className="heading">Grocery Bud</Heading>
            <Input_box>
                <form onSubmit={handleOnSubmit}>
                    <Input required onChange={handleOnChange}></Input>
                    <Button>Add Item</Button>
                </form>
            </Input_box>
        </Grocery_container>
        <List_items>
            {itemList.map((item, i) => <Card key={i} cardId={i} item={item} deleteCard={handleOnDelete} />)}
        </List_items>
    </>
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
padding:1rem 0;
// border:2px solid grey;
`
const Input_box = styled.div`
display:flex;
align-items:center;
// border:2px solid grey;
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
const List_items = styled.div`
display:flex;
flex-direction:column;
gap:.5rem;
`
