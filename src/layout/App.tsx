import React from "react";
import Styled from "styled-components";

const Wrapper = Styled.div`
    width: fit-content;
    * {
        font-family: "Open Sans", sans-serif;
    }
`;

class App extends React.Component {
    render() {
        return (
            <Wrapper>
                { this.props.children }
            </Wrapper>
        )
    }
}

export default App;