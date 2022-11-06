import styled from "styled-components";
import * as colors from "../../../assets/variables/colors";

interface IDropdownHeaderProps {
  isListOpen: boolean;
}

interface IListItemProps {
  disabled?: boolean;
}

export const DropdownContainer = styled("div")`
  margin: 1em auto;
  width: 18em;
  font-weight: 500;
  font-size: 1em;
`;

export const DropdownHeader = styled("div")<IDropdownHeaderProps>`
  margin-bottom: 0.2em;
  color: #151515;
  background-color: ${({ isListOpen }) =>
    isListOpen ? colors.lightenSecondary : colors.white}};
  padding: 0.8em;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
`;

export const DropdownList = styled("ul")`
  padding: 0;
  margin: 0;
  padding-left: 1em;
  border: 1px solid ${colors.secondary};
  background-color: ${colors.white};
`;

export const ListItem = styled("li")<IListItemProps>`
  list-style-type: none;
  margin: 0.8em 0;
  cursor: pointer;
  display: flex;
  gap: 0.5em;
  opacity: ${({ disabled }) => (disabled ? 0.2 : 1)};
`;
