import styled from "styled-components";

const UserInfo = () => {
  return (
    <Wrapper>
      <UserImage>
        <img />
      </UserImage>
      <InfoContainer>
        <UserName>User Name</UserName>
        <UserPosition>employee/sales</UserPosition>
        <UserEmail>sales@youngwon.com</UserEmail>
      </InfoContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
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

export default UserInfo;
