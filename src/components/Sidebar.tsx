import styled from "styled-components";
import _ArrowLeft from "../assets/svg/arrow-left.svg?react";
import _Chart from "../assets/svg/chart.svg?react";
import _Master from "../assets/svg/master.svg?react";
import _Thread from "../assets/svg/thread.svg?react";
import _Logout from "../assets/svg/logout.svg?react";
import _Menu from "../assets/svg/sidebar-menu.svg?react";
import monolog from "/png/monolog.png";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const Sidebar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(true);

  if (isOpen) {
    return (
      <Wrapper>
        <SidebarHeader>
          <ArrowLeft onClick={() => setIsOpen(false)} />
        </SidebarHeader>
        <SidebarMain>
          <UserInfo>
            <UserImage>
              <img />
            </UserImage>
            <InfoContainer>
              <UserName>User Name</UserName>
              <UserPosition>employee/sales</UserPosition>
              <UserEmail>sales@youngwon.com</UserEmail>
            </InfoContainer>
          </UserInfo>
          <MainList>
            <Link to={"/line-management"}>
              <MainListItem $isActive={location.pathname === "/line-management"}>
                <Chart $isActive={location.pathname === "/line-management"} />
                <span>Line Management</span>
              </MainListItem>
            </Link>
            <Link to={"/real-time-production"}>
              <MainListItem $isActive={location.pathname === "/real-time-production"}>
                <Chart $isActive={location.pathname === "/real-time-production"} />
                <span>Real-Time Prod.</span>
              </MainListItem>
            </Link>
          </MainList>
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
  }

  return (
    <ClosedWrapper>
      <Menu onClick={() => setIsOpen(true)} />
    </ClosedWrapper>
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

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 170px;
  height: 140px;
  border-radius: 10px;
  padding: 11px 24px 11px 24px;
  background-color: #3e3f41;
  gap: 14px;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2px;
`;

const UserImage = styled.div`
  position: relative;
  width: 46px;
  height: 46px;
  background-color: #8c8f94;
  border-radius: 50%;
`;

const UserName = styled.div`
  color: #ffffff;
  font-size: 14px;
  font-weight: 700;
  text-align: center;
  line-height: 19.6px;
`;

const UserPosition = styled.div`
  color: #8c8f94;
  font-size: 12px;
  font-weight: 400;
  text-align: center;
  line-height: 16.8px;
`;

const UserEmail = styled.div`
  color: #ffffff;
  font-size: 12px;
  font-weight: 400;
  text-align: center;
  line-height: 16.8px;
`;

const Chart = styled(_Chart)<{ $isActive: boolean }>`
  width: 20px;
  height: 20px;
  fill: ${({ $isActive }) => ($isActive ? "#ffffff" : "#8C8F94")};
`;

const MainList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const MainListItem = styled.li<{ $isActive: boolean }>`
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

const ClosedWrapper = styled.div`
  padding: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  min-width: 50px;
  background-color: #2e2e2e;
`;

const Menu = styled(_Menu)`
  width: 15px;
  height: 15px;
  fill: #ffffff;
`;

export default Sidebar;
