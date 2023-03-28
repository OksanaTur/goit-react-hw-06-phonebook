import styled from "styled-components";

export const Item = styled.li`
display: flex;
padding: 5px;
width: fit-content;
font-size: 18px;
`;

export const Contact = styled.p`
margin-right: 15px;
margin: 0;
font-weight: 500;
`;

export const Number = styled.span`
font-weight: normal;
`;

export const BtnList = styled.button`
max-height: 32px;
padding: 5px 8px;
cursor: pointer;
border: none;
border-radius: 5px;
background-color: rgb(180, 180, 180);

$:hover{
    background-color: rgb(242, 124, 124);
}
`;

export const List = styled.ul`
margin: 30px;
padding: 0;
`;