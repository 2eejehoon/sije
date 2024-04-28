import { HTMLAttributes, PropsWithChildren, createContext, useContext, useRef, useState } from "react";
import _SelectArrow from "../assets/svg/select-arrow.svg?react";
import styled from "styled-components";

const initialValue = {
  isOpen: false,
  toggle: () => {},
  close: () => {},
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  selectedValue: undefined as any,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setSelectedValue: (_value: string) => {},
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onChange: (_value: string) => {},
};

const SelectContext = createContext(initialValue);

const useSelect = () => {
  return useContext(SelectContext);
};

type SelectProps = Omit<HTMLAttributes<HTMLUListElement>, "onChange"> &
  PropsWithChildren & {
    defaultValue: string;
    onChange?: (value: string) => void;
  };

const Select = ({ defaultValue, children, onChange = () => {}, ...props }: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(defaultValue);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const listLeft = triggerRef.current?.getBoundingClientRect().left as number;
  const listTop = (triggerRef.current?.getBoundingClientRect().bottom as number) + 5;
  const listWidth = triggerRef.current?.getBoundingClientRect().width as number;

  const toggle = () => {
    setIsOpen((prev) => !prev);
  };

  const close = () => {
    setIsOpen(false);
  };

  return (
    <SelectContext.Provider value={{ isOpen, toggle, close, selectedValue, setSelectedValue, onChange }}>
      <Trigger ref={triggerRef} onClick={toggle}>
        <span>{selectedValue}</span>
        <SelectArrow />
      </Trigger>
      {isOpen && (
        <List {...props} $left={listLeft} $top={listTop} $width={listWidth}>
          {children}
        </List>
      )}
    </SelectContext.Provider>
  );
};

const Trigger = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  outline: none;
  background-color: #ffffff;
  border: 1px solid #dedfdf;
  border-radius: 10px;
  padding: 8px 12px 8px 12px;
  color: #2e2e2e;
  font-size: 14px;
  font-weight: 500;
  line-height: 19.6px;
`;

const SelectArrow = styled(_SelectArrow)`
  width: 15px;
  height: 15px;
`;

const List = styled.ul<{ $left: number; $top: number; $width: number }>`
  list-style: none;
  left: ${({ $left }) => `${$left}px`};
  top: ${({ $top }) => `${$top}px`};
  width: ${({ $width }) => `${$width}px`};
  max-height: ${({ $width }) => `${$width * 2}px`};
  border: 1px solid #dedfdf;
  border-radius: 10px;
  background-color: #ffffff;
  overflow-y: auto;
  position: absolute;
  z-index: 1;
`;

type OptionProps = HTMLAttributes<HTMLLIElement> &
  PropsWithChildren & {
    value: string;
  };

const Option = ({ value, children, ...props }: OptionProps) => {
  const { selectedValue, setSelectedValue, close, onChange } = useSelect();

  return (
    <_Option
      {...props}
      onClick={() => {
        setSelectedValue(value);
        onChange(value);
        close();
      }}
      $isSelected={selectedValue === value}
    >
      {children}
    </_Option>
  );
};

const _Option = styled.li<{ $isSelected: boolean }>`
  color: #2e2e2e;
  font-size: 14px;
  font-weight: 500;
  line-height: 19.6px;
  padding: 8px 12px 8px 12px;
  background-color: ${({ $isSelected }) => ($isSelected ? "#F5F6F8" : "#ffffff")};
  &:hover {
    cursor: pointer;
    background-color: #f5f6f8;
  }
`;

Select.Trigger = Trigger;
Select.Option = Option;

export default Select;
