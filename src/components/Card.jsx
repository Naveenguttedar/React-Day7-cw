import { useState } from 'react';
import styled from 'styled-components';
import delect_icon from '../assets/bin.png';
function Card({ cardId, item, deleteCard }) {
    const [isDone, setIsDone] = useState(false);
    return (
        <Card_cantainer>
            <Left_side>
                <Check_box onChange={(e) => setIsDone(e.target.checked)} />
                <Item isDone={isDone} item={item} />
            </Left_side>
            <Delete_icon src={delect_icon} alt="Delete" onClick={() => deleteCard(cardId)} />
        </Card_cantainer>
    )
}
const Card_cantainer = styled.div`
// border:2px solid white;
display:flex;
justify-content:space-between;
place-items:center;
padding:0 1rem;
background-color:#3B3B3B;
border-radius:5px;

`
const Left_side = styled.div`
display:flex;
gap:.5rem;
place-items:center;
`
const Check_box = styled.input.attrs({ type: "checkbox" })`
`
const Item = ({ item, isDone }) => {
    const ItemWrapper = styled.p`
text-decoration-line:${props => isDone ? "line-through" : "none"};
`;
    return <ItemWrapper>{item}</ItemWrapper>;
}
const Delete_icon = styled.img`
align-self:right;
height:1.5rem;
object-fit:center;
`
export default Card;
