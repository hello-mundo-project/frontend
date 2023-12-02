// import { useState } from "react";
// // import signupApi from "@/apis/signupAPI";
// // import { useNavigate } from "react-router-dom";

// interface FormData {
//   email: string;
//   check_email: string;
//   password: string;
//   confirmPassword: string;
// }

// interface SignUpError {
//   email: string;
//   check_email: string;
//   password: string;
//   confirmPassword: string;
//   general: string;
// }

// const useSignup = () => {
//   // const navigate = useNavigate();

//   const [formData, setFormData] = useState<FormData>({
//     email: "",
//     check_email: "",
//     password: "",
//     confirmPassword: ""
//   });

//   const [errors, setErrors] = useState<SignUpError>({
//     email: "",
//     check_email: "",
//     password: "",
//     confirmPassword: "",
//     general: ""
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { id, value } = e.target;
//     setFormData({ ...formData, [id]: value });
//   };

//   const valitateSignup = () => {
//     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     let valid = true;
//     const newErrors: Partial<SignUpError> = {};

//     if (!formData.email || !emailPattern.test(formData.email)) {
//       newErrors.email = "올바른 이메일 주소를 입력해주세요.";
//       valid = false;
//     } else {
//       newErrors.email = "";
//     }

//     if (!formData.check_email || !emailPattern.test(formData.check_email)) {
//       newErrors.check_email = "올바른 분실 시 확인용 이메일 주소를 입력해주세요.";
//       valid = false;
//     } else {
//       newErrors.check_email = "";
//     }

//     if (formData.password.length < 8) {
//       newErrors.password = "비밀번호는 최소 8자 이상이어야 합니다.";
//       valid = false;
//     } else {
//       newErrors.password = "";
//     }

//     if (formData.password !== formData.confirmPassword) {
//       newErrors.confirmPassword = "비밀번호가 일치하지 않습니다.";
//       valid = false;
//     } else {
//       newErrors.confirmPassword = "";
//     }

//     setErrors({ ...errors, ...newErrors });
//     return valid;
//   };

//   const handleSignUp = async (e: React.FormEvent) => {
//     e.preventDefault();

//     const isValid = valitateSignup();

//     if (!isValid) {
//       return;
//     }

//     // try {
//     //   const response = await signupApi(formData);
//     //   setErrors({ ...errors, general: "" });
//     //   console.log("회원가입 성공:", response);
//     //   window.alert("회원가입이 완료되었습니다.");
//     //   navigate("/login");
//     // } catch (error) {
//     //   console.error("회원가입 실패:", error);
//     //   setErrors({
//     //     ...errors,
//     //     general: "회원가입에 실패했습니다. 다시 시도해주세요."
//     //   });
//     // }
//   };

//   return {
//     formData,
//     errors,
//     handleChange,
//     handleSignUp
//   };
// };

// export default useSignup;
