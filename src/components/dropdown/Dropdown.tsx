import { FC, useState } from "react";
import {
  DropdownContainer,
  DropdownHeader,
  DropdownList,
  ListItem,
} from "./dropdown-styles/dropdown.styles";
import ClickOutsideWrapper from "../../custom-hooks/useClickOutside";
import {
  BsCheckSquare,
  BsDashCircle,
  BsXCircle,
  BsPlusCircle,
  BsSquare,
  BsPlusCircleFill,
  BsXCircleFill,
  BsDashCircleFill,
  BsSquareFill,
} from "react-icons/bs";

import * as colors from "../../assets/variables/colors";

interface IDropdownData {
  id: string;
  value: string;
}
interface IDropdownProps {
  data: IDropdownData[];
  onOptionSelected?: () => void;
}

const Dropdown: FC<IDropdownProps> = ({ data, onOptionSelected }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<IDropdownData>();

  const onToggle = () => setIsOpen(!isOpen);

  const onOptionClicked = (option: IDropdownData) => {
    if (option.id === selectedOption?.id) {
      option = null;
    }
    setSelectedOption(option);
    setIsOpen(false);
    onOptionSelected();
  };

  const removeOption = (ev: React.MouseEvent) => {
    ev.stopPropagation();
    setSelectedOption(null);
  };

  const handleOutsideClick = () => {
    setIsOpen(false);
  };

  const getIcon = () => {
    if (isOpen) {
      return <BsDashCircleFill color={colors.primary} />;
    }

    if (selectedOption) {
      return <BsXCircleFill color={colors.primary} onClick={removeOption} />;
    }

    return <BsPlusCircleFill color={colors.primary} />;
  };

  return (
    <>
      <DropdownContainer>
        <ClickOutsideWrapper handleClickOutside={handleOutsideClick}>
          <DropdownHeader onClick={onToggle} isListOpen={isOpen}>
            <span>
              {selectedOption
                ? `Option (${selectedOption.value})`
                : "Filter title"}
            </span>
            {getIcon()}
          </DropdownHeader>
          {isOpen && (
            <DropdownList>
              {data.map((option) => (
                <ListItem
                  onClick={() => onOptionClicked(option)}
                  key={option.id}
                  disabled={selectedOption && selectedOption.id !== option.id}
                >
                  {selectedOption && option.id === selectedOption?.id ? (
                    <BsCheckSquare color={colors.primary} />
                  ) : (
                    <BsSquareFill color={colors.lightenSecondary} />
                  )}
                  <span>Option ({option.value})</span>
                </ListItem>
              ))}
            </DropdownList>
          )}
        </ClickOutsideWrapper>
      </DropdownContainer>
    </>
  );
};

export default Dropdown;
