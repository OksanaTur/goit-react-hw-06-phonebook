import styled from "styled-components";

export const Wrapper = styled.form`
margin-bottom: 20px;
padding: 28px;
max-width: 250px;
border:1px solid rgb(58,57,57);
border-radius: 4px;
`;

export const Title = styled.label`
display: flex;
flex-direction: column;
margin-bottom: 20px;
font-weight: 500;
max-width: 200px;
`;

export const Text = styled.input`
margin-top: 4px;
padding: 4px;
font-size: 14px;
border:1px solid rgb(58,57,57);
border-radius: 5px;
background-color: inherit;

&:hover{
  border: 1px solid rgb(58, 57, 57);
  background-color: rgb(242, 238, 234);
}
`;

export const Btn = styled.button`
padding: 5px 8px;
cursor: pointer;
border: none;
border-radius: 5px;
background-color: rgb(180, 180, 180);

&:hover{
background-color: rgb(39, 43, 48);
color: #fff;
}
`;