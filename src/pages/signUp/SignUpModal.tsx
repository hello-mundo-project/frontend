// import React from "react";
// import Box from "@mui/material/Box";
// import Modal from "@mui/material/Modal";

// const style = {
//   position: "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   width: 600,
//   bgcolor: "background.paper",
//   boxShadow: 24,
//   p: 4,
//   border: "5px solid #ccbafe",
//   borderRadius: "30px"
// };

// interface ModalProps {
//   open: boolean;
//   onClose: () => void;
// }

// export const SignUpModal: React.FC<ModalProps> = ({ open, onClose }) => {
//   return (
//     <Modal open={open} onClose={onClose}>
//       <Box sx={style}></Box>
//     </Modal>
//   );
// };

//두번째 모달
// import React, { useState } from "react";
// import Box from "@mui/material/Box";
// import Modal from "@mui/material/Modal";
// import TextField from "@mui/material/TextField";
// import Button from "@mui/material/Button";

// const modalStyle = {
//   position: "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   width: 600,
//   bgcolor: "background.paper",
//   boxShadow: 24,
//   p: 4,
//   border: "5px solid #ccbafe",
//   borderRadius: "30px"
// };

// interface ModalProps {
//   open: boolean;
//   onClose: () => void;
// }

// export const SignUpModal: React.FC<ModalProps> = ({ open, onClose }) => {
//   const [formData, setFormData] = useState({
//     nickname: "",
//     jobTitle: "",
//     experience: "",
//     techInterest: ""
//   });

//   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = event.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const handleSubmit = () => {
//     // 이 곳에서 수집된 데이터를 활용하여 원하는 작업을 수행할 수 있습니다.
//     console.log("양식 데이터:", formData);

//     // 추가적으로 필요한 작업을 수행하세요. 예를 들어, 서버에 데이터를 전송하는 등의 작업이 있을 수 있습니다.

//     // 모달을 닫습니다.
//     onClose();
//   };

//   return (
//     <Modal open={open} onClose={onClose}>
//       <Box sx={modalStyle}>
//         <TextField
//           label="닉네임"
//           name="nickname"
//           value={formData.nickname}
//           onChange={handleChange}
//           fullWidth
//           margin="normal"
//         />
//         <TextField
//           label="직무"
//           name="jobTitle"
//           value={formData.jobTitle}
//           onChange={handleChange}
//           fullWidth
//           margin="normal"
//         />
//         <TextField
//           label="연차"
//           name="experience"
//           value={formData.experience}
//           onChange={handleChange}
//           fullWidth
//           margin="normal"
//         />
//         <TextField
//           label="관심 기술"
//           name="techInterest"
//           value={formData.techInterest}
//           onChange={handleChange}
//           fullWidth
//           margin="normal"
//         />
//         <Button variant="contained" color="primary" onClick={handleSubmit}>
//           제출
//         </Button>
//       </Box>
//     </Modal>
//   );
// };
