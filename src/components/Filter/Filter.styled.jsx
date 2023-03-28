import styled from "styled-components";

export const TitleFilter = styled.label`
display: flex;
flex-direction: column;
margin-bottom: 20px;
margin-left: 20px;
font-weight: 500;
max-width: 200px;
`;

export const InputFilter = styled.input`
margin-top: 4px;
padding: 4px;
font-size: 14px;
border-radius: 5px;
background-color: inherit;
border: 1px solid rgb(58, 57, 57);

$:hover{
    background-color: rgb(242, 238, 234);
}
`;