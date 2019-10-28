import {default as styled} from "react-emotion";
import {Input, Select, MenuItem} from "@material-ui/core";
import {Button, getBackgroundWithHoverCSS} from "@twilio/flex-ui";

export const Container = styled("div")`
    display: flex;
    padding: 32px;
    flex-direction: column;
`;

export const TabContainer = styled("div")`
    margin-top: 24px;
`;

export const ButtonContainer = styled("div")`
    display: flex;
    margin-top: 24px;
`;

export const Header1 = styled("h1")`
    font-size: 24px;
    font-weight: bold;
    margin: 8px 0;
`;
export const Header2 = styled("h2")`
    font-size: 20px;
    font-weight: bold;
    margin: 8px 0;
`;
export const Header3 = styled("h3")`
    font-size: 16px;
    font-weight: bold;
    margin: 8px 0;
`;
export const Text = styled("p")`
    font-size: 14px;
    line-height: 1.5;
`;
export const StyledInput = styled(Input)`
    display: flex;
    flex-grow: 1;
    font-size: 12px;
    line-height: 1.33;
    letter-spacing: normal;
    input {
        padding-right: 26px;
    }
    background-color: ${props => props.theme.colors.base1};
    color: ${props =>
        props.theme.calculated.lightTheme ? props.theme.colors.darkTextColor : props.theme.colors.lightTextColor};
`;

export const TextField = styled("div")`
    display: flex;
    flex-direction: column;
    margin: 8px 0;
    width: 320px;
`;

export const StyledLabel = styled("label")`
    text-transform: uppercase;
    margin-bottom: 8px;
    font-size: 12px;
    letter-spacing: 2px;
`;

export const StyledSelect = styled(Select)`
    width: 100%;
    flex-grow: 0;
    flex-shrink: 0;
    .Twilio-Dropdown {
        height: 100%;
    }
    [class*="MuiSelect-selectMenu"] {
        padding-top: 7px;
        padding-bottom: 7px;
        border-right-width: 0px;
        &:focus {
            border-right-width: 1px;
        }
    }
    background-color: ${props => props.theme.colors.base1};
    color: ${props =>
        props.theme.calculated.lightTheme ? props.theme.colors.darkTextColor : props.theme.colors.lightTextColor};
`;

export const StyledMenuItem = styled(MenuItem)`
    box-sizing: border-box;
    height: 32px;
    display: flex;
    margin: 0;
    padding: 0 12px;
    min-width: 0;
`;

export const StyledButton = styled(Button)`
    color: white;
    text-transform: uppercase;
    margin-right: 5px;
    width: 320px;
    background-color: ${props => (props.disabled ? props.theme.colors.base5 : props.theme.colors.defaultButtonColor)};
    ${p =>
        getBackgroundWithHoverCSS(
            p.disabled ? p.theme.colors.base5 : p.theme.colors.defaultButtonColor,
            true,
            false,
            p.disabled,
        )};
`;
