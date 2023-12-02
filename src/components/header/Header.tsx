/* eslint-disable react/prop-types */
import React from "react";
import logoImage from "@/assets/Logo.png";
import { useDarkMode } from "@/hooks/useDarkMode";
import { MdSunny } from "react-icons/md";
import { FaMoon } from "react-icons/fa";
import { useAuthContext } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import {
  HeaderWrapper,
  Logo,
  MainText,
  ButtonGroup,
  Button,
  ThemeToggleButton,
  LogoWrapper,
  MyPageWrapper
} from "./headerStyles";
import { darkTheme, lightTheme } from "@/styles/theme";

interface HeaderProps {
  onHomeClick?: () => void;
}

export const Header: React.FC<HeaderProps> = () => {
  const { twilightTheme, toggleDarkMode, isDarkMode } = useDarkMode();
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = React.useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  // 페이지 이동 함수
  const navigateToPage = () => {
    navigate("/");
    setShowDropdown(false);
  };

  // 로그인 페이지 이동
  const handleLoginClick = () => {
    navigate("/login");
    // 여기서 로그인 함수 호출해야 한다.
  };

  // 로그아웃 부분
  const handleLogoutClick = () => {
    //logout();
    navigate("/");
  };

  // 글 작성 페이지 이동
  const handleWriteClick = () => {
    // navigate("/write");
    if (authState.isAuthenticated) {
      navigate("/write");
    } else {
      navigate("/login");
    }
  };

  const [dropdownOpen, setDropdownOpen] = React.useState(false); // 드롭다운 상태와 그 상태를 변경하는 함수 추가
  const { authState, setAuthState } = useAuthContext();
  // console.log("authState: ", authState);
  // //초기값의 user는 빈 객체라서 api통신이 완료된 user가 빈 객체가 아니게 될 때 authState의 데이터를 사용해야 함
  // console.log(Object.keys(authState.user).length !== 0 && "유저값이 데이터나 에러가 존재할 때 나타남");

  return (
    <HeaderWrapper $twilightTheme={twilightTheme}>
      <LogoWrapper onClick={() => navigate("/")}>
        <Logo src={logoImage} />
        <MainText $twilightTheme={twilightTheme}>Hello!! Mundo!</MainText>
      </LogoWrapper>
      <ButtonGroup>
        <ThemeToggleButton $twilightTheme={twilightTheme} onClick={toggleDarkMode}>
          {isDarkMode ? (
            <MdSunny
              style={{
                width: "18px",
                height: "18px",
                position: "relative",
                top: "2px",
                color: darkTheme.background_primary
              }}
            />
          ) : (
            <FaMoon
              style={{
                width: "18px",
                height: "18px",
                position: "relative",
                top: "2px",
                color: lightTheme.background_primary
              }}
            />
          )}
        </ThemeToggleButton>
        <Button onClick={handleWriteClick} $twilightTheme={twilightTheme}>
          글쓰기
        </Button>
        {authState.isAuthenticated ? (
          <div style={{ position: "relative" }}>
            <Button onClick={() => setDropdownOpen(!dropdownOpen)} $twilightTheme={twilightTheme}>
              마이페이지
            </Button>
            {dropdownOpen && (
              <MyPageWrapper
                style={{
                  position: "absolute",
                  top: "100%",
                  right: 0,
                  zIndex: 10,
                  padding: "5px",
                  borderRadius: "5px",
                  boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)"
                }}
                $twilightTheme={twilightTheme}
              >
                <Button onClick={() => navigate("/my-posts")} $twilightTheme={twilightTheme}>
                  내 작성글
                </Button>
                <Button onClick={() => navigate("/bookmark")} $twilightTheme={twilightTheme}>
                  북마크
                </Button>
                <Button onClick={() => navigate("/my-info")} $twilightTheme={twilightTheme}>
                  내 정보
                </Button>
                <Button
                  onClick={() => {
                    // 로그아웃 로직 추가
                    setAuthState({ isAuthenticated: false, user: {} });
                    // 기타 로그아웃 관련 처리
                    navigate("/"); // 로그아웃 후 홈으로 이동하도록 설정
                  }}
                  $twilightTheme={twilightTheme}
                >
                  로그아웃
                </Button>
              </MyPageWrapper>
            )}
          </div>
        ) : (
          <Button onClick={() => navigate("/login")} $twilightTheme={twilightTheme}>
            로그인
          </Button>
        )}
      </ButtonGroup>
    </HeaderWrapper>
  );
};
