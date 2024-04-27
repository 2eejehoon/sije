import { Link, useLocation } from "react-router-dom";
import _Chart from "../../assets/svg/chart.svg?react";
import styled from "styled-components";

const SidebarNavigation = () => {
  const location = useLocation();

  return (
    <Wrapper>
      <List>
        <Link to={"/line-management"}>
          <ListItem $isActive={location.pathname === "/line-management"}>
            <Chart $isActive={location.pathname === "/line-management"} />
            <span>Line Management</span>
          </ListItem>
        </Link>
        <Link to={"/real-time-production"}>
          <ListItem $isActive={location.pathname === "/real-time-production"}>
            <Chart $isActive={location.pathname === "/real-time-production"} />
            <span>Real-Time Prod.</span>
          </ListItem>
        </Link>
      </List>
    </Wrapper>
  );
};

const Wrapper = styled.nav``;

const Chart = styled(_Chart)<{ $isActive: boolean }>`
  width: 20px;
  height: 20px;
  fill: ${({ $isActive }) => ($isActive ? "#ffffff" : "#8C8F94")};
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const ListItem = styled.li<{ $isActive: boolean }>`
  width: 170px;
  height: 36px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
  color: ${({ $isActive }) => ($isActive ? "#ffffff" : "#8C8F94")};
  font-size: 14px;
  font-weight: 400;
  line-height: 19.6px;
`;

export default SidebarNavigation;
