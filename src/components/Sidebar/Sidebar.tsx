import styled from "styled-components";
import SiderbarUserinfo from "./SidebarUserInfo";
import SidebarNavigation from "./SidebarNavigation";
import _ArrowLeft from "../../assets/svg/arrow-left.svg?react";
import _Master from "../../assets/svg/master.svg?react";
import _Thread from "../../assets/svg/thread.svg?react";
import _Logout from "../../assets/svg/logout.svg?react";
import monolog from "/png/monolog.png";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();

  return (
    <Wrapper>
      <SidebarHeader>
        <Link to="/">
          <ArrowLeft />
        </Link>
      </SidebarHeader>
      <SidebarMain>
        <SiderbarUserinfo />
        <SidebarNavigation />
      </SidebarMain>
      <SidebarFooter>
        <FooterList>
          <Link to="/master">
            <FooterListItem $isActive={location.pathname === "/master"}>
              <Master $isActive={location.pathname === "/master"} />
              <span>Master</span>
            </FooterListItem>
          </Link>
          <Link to="/thread">
            <FooterListItem $isActive={location.pathname === "/thread"}>
              <Thread $isActive={location.pathname === "/thread"} />
              <span>Thread</span>
            </FooterListItem>
          </Link>
          <FooterListItem>
            <Logout />
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

const ArrowLeft = styled(_ArrowLeft)`
  position: absolute;
  top: 10px;
  right: 20px;
  width: 20px;
  height: 20px;
  fill: #ffffff;
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

const FooterListItem = styled.li<{ $isActive?: boolean }>`
  width: 170px;
  height: 36px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
  color: ${({ $isActive = false }) => ($isActive ? "#ffffff" : "#8C8F94")};
  font-weight: 500;
  font-size: 14px;
  line-height: 19.6px;
`;

const Master = styled(_Master)<{ $isActive?: boolean }>`
  width: 20px;
  height: 20px;
  stroke: ${({ $isActive = false }) => ($isActive ? "#ffffff" : "#8C8F94")};
  fill: ${({ $isActive = false }) => ($isActive ? "#ffffff" : "#8C8F94")};
`;

const Thread = styled(_Thread)<{ $isActive?: boolean }>`
  width: 20px;
  height: 20px;
  stroke: ${({ $isActive = false }) => ($isActive ? "#ffffff" : "#8C8F94")};
  fill: ${({ $isActive = false }) => ($isActive ? "#ffffff" : "#8C8F94")};
`;

const Logout = styled(_Logout)`
  width: 20px;
  height: 20px;
  fill: "#8C8F94";
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
