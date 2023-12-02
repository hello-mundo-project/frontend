// 로그인 후에, 로그인 버튼을 누르면 보이는 드롭박스임 (로그인 로직 끝난 후에 넣기)

// import React from 'react';
// import { useDispatch } from 'react-redux';
// import { Link } from 'react-router-dom';
// import { clearUser } from 'store/user';
// import authService from 'service/auth_service';
// import { clearStep } from 'store/loginStep';
// import { useNavigate } from 'react-router-dom';
// import styled from 'styled-components';

// const MenuWrapper = styled.div`
//   position: absolute;
//   top: 100%;
//   margin-top: 1rem;
//   right: 0px;
// `;

// const Menu = styled.ul`
//   position: relative;
//   z-index: 5;
//   width: 12rem;
//   background: white;
//   border: 0.5px solid rgba(37, 53, 98, 0.1);
//   border-radius: 2px;
//   box-shadow: rgba(0, 0, 0, 0.08) 0px 2px 10px;
//   list-style: none;
// `;

// const MenuItem = styled.li<{ display?: string }>`
//   padding: 0.75rem 1rem;
//   line-height: 1.5;
//   font-weight: 500;
//   cursor: ${(props) => props.display === 'none' ? 'auto' : 'pointer'};
//   display: ${(props) => props.display || 'block'};

//   &:hover {
//     background-color: #f7f7f7;
//   }
// `;

// const StyledLink = styled(Link)`
//   display: inline-block;
//   width: 100%;
//   text-decoration: none;
//   color: black;

//   &:hover {
//     text-decoration: underline;
//   }
// `;

// const LoginAfterDrop = () => {
//     const dispatch = useDispatch();
//     const navigate = useNavigate();

//     const handleLogout = async () => {
//         await authService.logout();
//         authService.resetToken();
//         dispatch(clearUser());
//         dispatch(clearStep());
//         navigate('/');
//     };

//     return (
//         <MenuWrapper>
//             <Menu>
//                 <MenuItem display="none">
//                     <StyledLink to='/register'>새 글 작성</StyledLink>
//                 </MenuItem>
//                 <MenuItem>
//                     <StyledLink to='/myPosts'>내 작성글</StyledLink>
//                 </MenuItem>
//                 <MenuItem>
//                     <StyledLink to='/myLikes'>내 관심글</StyledLink>
//                 </MenuItem>
//                 <MenuItem>
//                     <StyledLink to='/setting'>설정</StyledLink>
//                 </MenuItem>
//                 <MenuItem onClick={handleLogout}>
//                     로그아웃
//                 </MenuItem>
//             </Menu>
//         </MenuWrapper>
//     );
// };

// export default LoginAfterDrop;
