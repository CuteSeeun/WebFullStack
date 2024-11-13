import styled from 'styled-components';

function LoginPage() {
  return (
    <Wrapper>
      <Header>
        <Logo>TeamToast</Logo>
      </Header>
      
      <Main>
        <LoginForm />

        <GoogleButton>
          <ButtonContent>
            <GoogleIcon />
            <ButtonText>구글 아이디로 로그인</ButtonText>
          </ButtonContent>
        </GoogleButton>

        <KakaoButton>
          <ButtonContent>
            <KakaoIcon />
            <ButtonText>카카오톡으로 로그인</ButtonText>
          </ButtonContent>
        </KakaoButton>

        <Subtitle>TeamToast에 오신 것을 환영합니다.</Subtitle>
        <Title>로그인</Title>

        <Divider>
          <Line />
          <DividerText>또는</DividerText>
          <Line />
        </Divider>

        <EmailInput placeholder="이메일을 입력해 주세요." />
        <PasswordInput placeholder="비밀번호를 입력해 주세요." />

        <LoginButton>로그인</LoginButton>

        <JoinAndFind>
          <LinkText>회원가입</LinkText>
          <VerticalLine />
          <LinkText>비밀번호 찾기</LinkText>
        </JoinAndFind>
      </Main>
    </Wrapper>
  );
}

export default LoginPage;

// Styled Components
const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  background: linear-gradient(0deg, white 0%, white 100%), linear-gradient(0deg, rgba(230, 230, 230, 0.50) 0%, rgba(230, 230, 230, 0.50) 100%);
`;

const Header = styled.header`
  width: 190px;
  height: 50px;
  position: absolute;
  top: 10px;
  left: 35px;
`;

const Logo = styled.h1`
  font-size: 32px;
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  color: #038C8C;
  position: absolute;
  left: 10px;
  top: 5.5px;
`;

const Main = styled.main`
  width: 520px;
  height: 656px;
  position: absolute;
  left: 700px;
  top: 214px;
`;

const LoginForm = styled.section`
  width: 520px;
  height: 656px;
  background-color: white;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.10);
  border-radius: 8px;
  position: absolute;
`;

const GoogleButton = styled.button`
  width: 320px;
  height: 40px;
  padding: 10px 20px;
  position: absolute;
  left: 100px;
  top: 503px;
  background-color: white;
  border-radius: 8px;
  border: 1px solid #D6D6D6;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const KakaoButton = styled.button`
  width: 320px;
  height: 40px;
  padding: 10px 20px;
  position: absolute;
  left: 100px;
  top: 448px;
  background-color: #FEE500;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ButtonContent = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const GoogleIcon = styled.div`
  width: 28px;
  height: 28px;
  background-color: #4285F4;
  position: relative;
`;

const KakaoIcon = styled.div`
  width: 28px;
  height: 28px;
  background-color: #391B1B;
  position: relative;
`;

const ButtonText = styled.span`
  text-align: center;
  color: #4D4D4D;
  font-size: 14px;
  font-family: 'Pretendard', sans-serif;
  font-weight: 400;
  line-height: 20px;
`;

const Subtitle = styled.h3`
  position: absolute;
  top: 142px;
  left: 82px;
  text-align: center;
  color: #4D4D4D;
  font-size: 24px;
  font-family: 'Pretendard', sans-serif;
  font-weight: 400;
  line-height: 31.2px;
`;

const Title = styled.h2`
  position: absolute;
  top: 60px;
  left: 197px;
  text-align: center;
  color: #1A1A1A;
  font-size: 48px;
  font-family: 'Pretendard', sans-serif;
  font-weight: 600;
  line-height: 62.4px;
`;

const Divider = styled.div`
  width: 320px;
  height: 20px;
  position: absolute;
  left: 100px;
  top: 403px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Line = styled.div`
  width: 140px;
  height: 1px;
  background-color: #CCCCCC;
`;

const DividerText = styled.span`
  text-align: center;
  color: #4D4D4D;
  font-size: 14px;
  font-family: 'Pretendard', sans-serif;
  font-weight: 500;
  line-height: 20px;
`;

const EmailInput = styled.input.attrs({ type: 'text' })`
  width: 320px;
  height: 40px;
  padding: 10px 15px;
  position: absolute;
  left: 100px;
  top: 218px;
  background-color: white;
  border-radius: 8px;
  border: 1px solid #CCCCCC;
  color: #B3B3B3;
  font-size: 14px;
  font-family: 'Pretendard', sans-serif;
  font-weight: 400;
  line-height: 20px;
`;

const PasswordInput = styled.input.attrs({ type: 'password' })`
  width: 320px;
  height: 40px;
  padding: 10px 15px;
  position: absolute;
  left: 100px;
  top: 273px;
  background-color: white;
  border-radius: 8px;
  border: 1px solid #CCCCCC;
  color: #B3B3B3;
  font-size: 14px;
  font-family: 'Pretendard', sans-serif;
  font-weight: 400;
  line-height: 20px;
`;

const LoginButton = styled.button`
  width: 320px;
  height: 40px;
  position: absolute;
  left: 100px;
  top: 328px;
  background-color: #038C8C;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 14px;
  font-family: 'Pretendard', sans-serif;
  font-weight: 400;
`;

const JoinAndFind = styled.div`
  width: 145px;
  height: 21px;
  position: absolute;
  left: 187px;
  top: 577px;
  display: flex;
  justify-content: center;
  gap: 10px;
`;

const LinkText = styled.span`
  color: #4D4D4D;
  font-size: 14px;
  font-family: 'Pretendard', sans-serif;
  font-weight: 400;
  line-height: 21px;
`;

const VerticalLine = styled.div`
  width: 1px;
  height: 21px;
  background-color: #4D4D4D;
`;
