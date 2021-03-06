import React, { Component } from "react";
import styled, { ThemeProvider } from "styled-components";
import theme from "./theme";

const Container = styled.div`
	height: 100vh;
	width: 100%;
	background-color: #95a5a6;
	${Card} {
		background-color: ${props => props.theme.mainColor};
	}
`;

const Card = styled.div`
	background-color: red;
`;

const Button = styled.button`
	border-radius: 30px;
	padding: 25px 15px;
	background-color: ${props => props.theme.successColor};
`;

class App extends Component {
	render() {
		return (
			<ThemeProvider theme={theme}>
				<Container>
					<Form />
				</Container>
			</ThemeProvider>
		);
	}
}

const Form = () => (
	<Card>
		<Button> Hello </Button>
	</Card>
);

export default App;
