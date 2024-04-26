import styled from "styled-components";
import SiderbarUserinfo from "./SidebarUserInfo";
import SidebarNavigation from "./SidebarNavigation";
import monolog from "/png/monolog.png";

const Sidebar = () => {
  return (
    <Wrapper>
      <SidebarHeader></SidebarHeader>
      <SidebarMain>
        <SiderbarUserinfo />
        <SidebarNavigation />
      </SidebarMain>
      <SidebarFooter>
        <FooterList>
          <FooterListItem>
            <span>Master</span>
          </FooterListItem>
          <FooterListItem>
            <span>Thread</span>
          </FooterListItem>
          <FooterListItem>
            <span>Log out</span>
          </FooterListItem>
        </FooterList>
      </SidebarFooter>
      <LogoContainer>
        <LogoImage src={monolog} alt="monolog-logo" />
      </LogoContainer>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  min-width: 200px;
  background-color: #2e2e2e;
`;

const SidebarHeader = styled.div`
  position: relative;
  width: 100%;
  min-height: 40px;
  display: flex;
`;

const SidebarMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  width: 100%;
  min-height: calc(100% - (32px + 200px));
`;

const SidebarFooter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 200px;
`;

const FooterList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const FooterListItem = styled.li`
  width: 170px;
  height: 36px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
  color: #ffffff;
  font-weight: 500;
  font-size: 14px;
  line-height: 19.6px;
`;

const LogoContainer = styled.div`
  position: relative;
  width: 170px;
  height: 36px;
  margin: 24px;
`;

const LogoImage = styled.img`
  width: 170px;
  height: 36px;
  object-fit: cover;
`;

export default Sidebar;
