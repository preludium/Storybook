import styled from "styled-components";

export const Wrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
`;

export const Window = styled.div`
    width: 400px;
    height: 500px;
    display: flex;
    flex-direction: column;
    margin: 0 30px 30px 0;
    border: 0.0625rem solid gray;
    background: white;
`;

export const Header = styled.div`
    padding: 1rem;
    border-bottom: 0.0625rem solid gray;
`;

export const Content = styled.div`
    flex-grow: 100;
    padding: 1rem;

`;

export const Footer = styled.div`
    padding: 1rem;
    border-top: 0.0625rem solid gray;
`;
