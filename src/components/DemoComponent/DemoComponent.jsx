import React from "react";

import {
    Container,
    Header1,
    Header2,
    Header3,
    Text,
    TabContainer,
    StyledInput,
    StyledLabel,
    TextField,
    StyledSelect,
    StyledMenuItem,
    StyledButton,
    ButtonContainer,
} from "./DemoComponent.Styles";
import {Tabs, Tab, Typography} from "@material-ui/core";
import { withTheme } from "@twilio/flex-ui";

// It is recommended to keep components stateless and use redux for managing states
class DemoComponent extends React.PureComponent {
    state = {
        tab: 0,
    };

    tabChange = (event, tab) => this.setState({tab});

    render() {
        return (
            <Container>
                <Header1>Header 1</Header1>
                <Header2>Header 2</Header2>
                <Header3>Header 3</Header3>
                <Text>
                    lorem ipsum dolor sit amet consectetuer lorem ipsum dolor sit amet consectetuer. Lorem ipsum dolor
                    sit amet consectetuer lorem ipsum dolor sit amet consectetuer. Lorem ipsum dolor sit amet
                    consectetuer lorem ipsum dolor sit amet consectetuer
                </Text>

                <TabContainer>
                    <Tabs
                        value={this.state.tab}
                        onChange={this.tabChange}
                        indicatorColor="primary"
                        textColor="primary"
                        centered
                    >
                        <Tab label="Item One" />
                        <Tab label="Item Two" />
                        <Tab label="Item Three" />
                    </Tabs>
                </TabContainer>

                <Typography component="div" hidden={this.state.tab !== 0}>
                <TextField>
                    <StyledLabel>text entry label</StyledLabel>
                    <StyledInput theme={this.props.theme} />
                </TextField>

                <TextField>
                    <StyledLabel>text entry label</StyledLabel>
                    <StyledInput multiline={true} rows={10} theme={this.props.theme} />
                </TextField>

                <TextField>
                    <StyledLabel>text entry label</StyledLabel>
                    <StyledSelect>
                      <StyledMenuItem>1</StyledMenuItem>
                      <StyledMenuItem>2</StyledMenuItem>
                    </StyledSelect>
                </TextField>

                <ButtonContainer>
                  <StyledButton roundCorners={false} theme={this.props.theme}>Button</StyledButton>
                  <StyledButton roundCorners={false} disabled theme={this.props.theme}>Button</StyledButton>
                </ButtonContainer>
                </Typography>
            </Container>
        );
    }
}

export default withTheme(DemoComponent);
