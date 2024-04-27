import { PropsWithChildren } from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import styled from "styled-components";

type BaseLayoutProps = PropsWithChildren;

const BaseLayout = ({ children }: BaseLayoutProps) => {
  return (
    <Wrapper>
      <Sidebar />
      <Main>{children}</Main>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
`;

const Main = styled.main`
  width: 100%;
  min-height: 100vh;
  background-color: #f9fafb;
`;

export default BaseLayout;
