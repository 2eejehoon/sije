import { PropsWithChildren } from "react";
import styled from "styled-components";

type HeaderProps = PropsWithChildren;

const Header = ({ children }: HeaderProps) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.header`
  background-color: #ffffff;
  border-bottom: 1px solid #dedfdf;
  width: 100%;
  height: 63px;
`;

export default Header;
