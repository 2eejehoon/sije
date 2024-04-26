import styled from "styled-components";

const SidebarNavigation = () => {
  return (
    <Wrapper>
      <List>
        <ListItem>Line Management</ListItem>
        <ListItem>Real-Time Prod.</ListItem>
      </List>
    </Wrapper>
  );
};

const Wrapper = styled.nav``;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const ListItem = styled.li`
  width: 170px;
  height: 36px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
  color: #ffffff;
  font-size: 14px;
  font-weight: 400;
  line-height: 19.6px;
`;

export default SidebarNavigation;
