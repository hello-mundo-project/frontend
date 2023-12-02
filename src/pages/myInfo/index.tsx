import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Select from "react-select";

import { Header } from "@/components/header/Header";
import { Footer } from "@/components/footer/Footer";
import { BasicSaveModal } from "./MyInfoSaveModal";
import {
  LogoImage,
  InfoContainer,
  InfoTitle,
  InfoForm,
  InfoInputGroup,
  InfoLabel,
  InfoInput,
  InfoSelect,
  InfoTextArea,
  InfoButton,
  InfoTag,
  RowContainer,
  StackInputGroup,
  InfoButtonSmall,
  TagContainer,
  SelectStyles,
  SelectContainer,
  NewSkillContainer,
  NewSkillInput,
  AddSkillButton
} from "./myInfoStyles";

import logo from "@/assets/Logo.png";

interface UserData {
  email: string;
  secondaryEmail?: string;
  nickname: string;
  career: string;
  annual: string;
  skillStack: string[];
  bio: string;
}

export type OptionType = { value: string; label: string };
export type SelectValueType = any;

export const MyInfo: React.FC = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState<UserData>({
    email: "exam123@gmail.com",
    secondaryEmail: "exam456@gmail.com",
    nickname: "느므힘든새싹개발자",
    career: "",
    annual: "",
    skillStack: [],
    bio: "안녕하세요. 밤샘 3일차 새싹 개발자입니다."
  });
  const [skillStack, setSkillStack] = useState<string[]>(userData.skillStack);
  const [newSkill, setNewSkill] = useState<string>("");
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalDescription, setModalDescription] = useState("");
  const [deleteConfirmOpen, setDeleteConfirmOpen] = useState(false);

  // 데이터 가져오기 (백단에서 하면 연결 예정)
  // useEffect(() => {
  //   const fetchUserData = async () => {
  //     try {
  //       const response = await axios.get("./mockData/myInfoMockData.json");
  //       setUserData(response.data);
  //       setSkillStack(response.data.skillStack || []);
  //     } catch (error) {
  //       // alert("사용자 데이터를 가져오는데 실패했습니다.");
  //       // console.error("mock 데이터가 맞지 않습니다:", error);
  //     }
  //   };

  //   fetchUserData();
  // }, []);

  // 이벤트 핸들러 부분 (select 오류 수정 예정)
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const target = event.target as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;
    const { name, value } = target;
    setUserData((prev) => ({ ...prev, [name]: value }));
  };

  // 기술 드롭 선택 부분
  const handleSelectSkillStack = (selectedOptions: SelectValueType) => {
    if (selectedOptions && Array.isArray(selectedOptions)) {
      const selectedSkills = selectedOptions.map((option) => option.value);
      setSkillStack(selectedSkills);
    } else {
      setSkillStack([]);
    }
  };

  const handleRemoveSkill = (skillToRemove: string) => {
    setUserData({
      ...userData,
      skillStack: userData.skillStack.filter((skill) => skill !== skillToRemove)
    });
  };

  // 새로운 기술 추가하는 부분
  const handleNewSkillInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewSkill(event.target.value);
  };

  const handleAddNewSkill = () => {
    if (newSkill && !userData.skillStack.includes(newSkill)) {
      const updatedSkillStack = [...userData.skillStack, newSkill];
      setUserData({ ...userData, skillStack: updatedSkillStack });
      setNewSkill("");
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const updatedUserData = { ...userData, skillStack };
    setUserData(updatedUserData);
    console.log("Updated User Data:", updatedUserData);
  };

  // 모달 돌아가는 부분 (저장이랑 회원 계정 삭제 부분)
  const handleSave = () => {
    setModalTitle("저장 완료");
    setModalDescription("저장되었습니다.");
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleDeleteAccount = () => {
    setDeleteConfirmOpen(true);
  };

  const handleConfirmDelete = async () => {
    try {
      setModalTitle("삭제 완료");
      setModalDescription("삭제되었습니다.");
      setDeleteConfirmOpen(false);
      setModalOpen(true);
      setTimeout(() => {
        setModalOpen(false);
        navigate("/");
      }, 2000);
    } catch (error) {
      console.error("회원 탈퇴 중 에러 발생", error);
    }
  };

  // 스킬 옵션 작성해 줌. 그냥 프론트단에서 함..
  const skillOptions = [
    { value: "JavaScript", label: "JavaScript" },
    { value: "TypeScript", label: "TypeScript" },
    { value: "React", label: "React" },
    { value: "Vue", label: "Vue" },
    { value: "Svelte", label: "Svelte" },
    { value: "Nextjs", label: "Next.js" },
    { value: "Nodejs", label: "Node.js" },
    { value: "Java", label: "Java" },
    { value: "Spring", label: "Spring" },
    { value: "Go", label: "Go" },
    { value: "Nestjs", label: "NestJS" },
    { value: "Kotlin", label: "Kotlin" },
    { value: "Express", label: "Express" },
    { value: "MySQL", label: "MySQL" },
    { value: "MongoDB", label: "MongoDB" },
    { value: "Python", label: "Python" },
    { value: "GraphQL", label: "GraphQL" },
    { value: "Firebase", label: "Firebase" },
    { value: "Flutter", label: "Flutter" },
    { value: "Swift", label: "Swift" },
    { value: "ReactNative", label: "React Native" },
    { value: "Unity", label: "Unity" },
    { value: "AWS", label: "AWS" },
    { value: "Kubernetes", label: "Kubernetes" },
    { value: "Docker", label: "Docker" },
    { value: "Git", label: "Git" },
    { value: "Figma", label: "Figma" },
    { value: "Zeplin", label: "Zeplin" },
    { value: "Jest", label: "Jest" },
    { value: "Django", label: "Django" },
    { value: "php", label: "PHP" }
  ];

  return (
    <>
      <Header />
      <InfoContainer>
        <LogoImage src={logo} />
        <InfoTitle>내 정보 조회</InfoTitle>
        <InfoForm onSubmit={handleSubmit}>
          {/* 이메일이랑 2차 이메일이랑, 닉네임이랑 들어감, 연차 직군도!  */}
          <InfoInputGroup>
            <InfoLabel htmlFor="email">이메일</InfoLabel>
            <InfoInput type="email" name="email" value={userData.email} onChange={handleInputChange} required />
          </InfoInputGroup>
          <InfoInputGroup>
            <InfoLabel htmlFor="secondaryEmail">인증용 이메일</InfoLabel>
            <InfoInput
              name="secondaryEmail"
              value={userData.secondaryEmail}
              onChange={handleInputChange}
              placeholder="2차 인증용 이메일을 입력하세요"
            />
          </InfoInputGroup>
          <InfoInputGroup>
            <InfoLabel htmlFor="nickname">닉네임</InfoLabel>
            <InfoInput name="nickname" value={userData.nickname} onChange={handleInputChange} />
          </InfoInputGroup>
          <RowContainer>
            <InfoInputGroup>
              <InfoLabel htmlFor="career">직군</InfoLabel>
              <InfoSelect name="career" value={userData.career} onChange={handleInputChange} required>
                <option value="">선택하세요</option>
                <option value="fullstack">풀스택</option>
                <option value="frontend">프론트엔드</option>
                <option value="backend">백엔드</option>
              </InfoSelect>
            </InfoInputGroup>

            <InfoInputGroup>
              <InfoLabel htmlFor="annual">연차</InfoLabel>
              <InfoSelect name="annual" value={userData.annual} onChange={handleInputChange} required>
                <option value="">선택하세요</option>
                <option value="0년차">0년차</option>
                <option value="1년차">1년차</option>
                <option value="2년차">2년차</option>
                <option value="3년차">3년차</option>
                <option value="4년차">4년차</option>
                <option value="5년차">5년차</option>
                <option value="6년차">6년차</option>
                <option value="7년차">7년차</option>
                <option value="8년차">8년차</option>
                <option value="9년차">9년차</option>
                <option value="10년 이상">10년 이상</option>
              </InfoSelect>
            </InfoInputGroup>
          </RowContainer>

          {/* 기술스택 드롭 필터 부분 */}
          <StackInputGroup>
            <InfoLabel htmlFor="skillStack">기술 스택</InfoLabel>
            <SelectContainer>
              <Select
                styles={SelectStyles}
                isMulti
                name="skillStack"
                options={skillOptions}
                className="basic-multi-select"
                classNamePrefix="select"
                onChange={handleSelectSkillStack}
                value={skillOptions.filter((option) => skillStack.includes(option.value))}
              />
            </SelectContainer>

            {/* 선택한 스택들을 태그로 표시해 줄 예정 */}
            <TagContainer>
              {userData.skillStack.map((skill, index) => (
                <InfoTag key={index} onClick={() => handleRemoveSkill(skill)}>
                  {skill} &#10005;
                </InfoTag>
              ))}
            </TagContainer>
          </StackInputGroup>

          {/* 자기가 추가로 선택한 기술들을 인풋에 넣는 부분 */}
          <StackInputGroup>
            <InfoLabel htmlFor="newSkill">새로운 기술 스택</InfoLabel>
            <NewSkillContainer>
              {/* <div className="select-container">
              <InfoInput */}
              <NewSkillInput
                name="newSkill"
                value={newSkill}
                onChange={handleNewSkillInputChange}
                placeholder="기술 스택을 입력하세요 (예: #React)"
              />
              <AddSkillButton onClick={handleAddNewSkill} type="button">
                {/* <InfoButtonSmall onClick={handleAddNewSkill} type="button"> */}
                추가
              </AddSkillButton>
            </NewSkillContainer>
            {/* </InfoButtonSmall>
            </div> */}
          </StackInputGroup>

          {/* 자기소개 필드에 입력하는 부분 - 모달 로직 다시 확인 */}
          <InfoInputGroup>
            <InfoLabel htmlFor="bio">자기소개</InfoLabel>
            <InfoTextArea name="bio" value={userData.bio} onChange={handleInputChange} rows={4} required />
          </InfoInputGroup>
          <InfoButton onClick={handleSave} type="button">
            저장
          </InfoButton>
        </InfoForm>

        {/* 모달 부분 (저장 및 회원 계정 삭제) */}
        {modalOpen && (
          <BasicSaveModal
            open={modalOpen}
            onClose={handleCloseModal}
            title={modalTitle}
            description={modalDescription}
          />
        )}
        <InfoButton onClick={handleDeleteAccount} type="button">
          회원 탈퇴
        </InfoButton>
        {deleteConfirmOpen && (
          <BasicSaveModal
            open={deleteConfirmOpen}
            onClose={() => setDeleteConfirmOpen(false)}
            title="계정 삭제 확인"
            description="계정을 삭제하시겠습니까?"
            actions={
              <>
                <InfoButton onClick={handleConfirmDelete} type="button">
                  네
                </InfoButton>
                <InfoButton onClick={() => setDeleteConfirmOpen(false)} type="button">
                  아니오
                </InfoButton>
              </>
            }
          />
        )}
      </InfoContainer>
      <Footer />
    </>
  );
};

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import Select from "react-select";

// import { Header } from "@/components/header/Header";
// import { Footer } from "@/components/footer/Footer";
// import { BasicSaveModal } from "./myInfoSaveModal";
// import {
//   LogoImage,
//   InfoContainer,
//   InfoTitle,
//   InfoForm,
//   InfoInputGroup,
//   InfoLabel,
//   InfoInput,
//   InfoSelect,
//   InfoTextArea,
//   InfoButton,
//   InfoTag,
//   RowContainer,
//   StackInputGroup,
//   InfoButtonSmall,
//   TagContainer,
//   SelectStyles,
//   SelectContainer
// } from "./myInfoStyles";

// import logo from "@/assets/Logo.png";

// interface UserData {
//   email: string;
//   secondaryEmail?: string;
//   nickname: string;
//   career: string;
//   annual: string;
//   skillStack: string[];
//   bio: string;
// }

// export type OptionType = { value: string; label: string };
// export type SelectValueType = ValueType<OptionType, true>;

// export const MyInfo: React.FC = () => {
//   const navigate = useNavigate();
//   const [userData, setUserData] = useState<UserData>({
//     email: "exam123@gmail.com",
//     secondaryEmail: "exam456@gmail.com",
//     nickname: "느므힘든새싹개발자",
//     career: "",
//     annual: "",
//     skillStack: [],
//     bio: "안녕하세요. 밤샘 3일차 새싹 개발자입니다."
//   });
//   const [skillStack, setSkillStack] = useState<string[]>(userData.skillStack);
//   const [newSkill, setNewSkill] = useState<string>("");
//   const [modalOpen, setModalOpen] = useState(false);
//   const [modalTitle, setModalTitle] = useState("");
//   const [modalDescription, setModalDescription] = useState("");
//   const [deleteConfirmOpen, setDeleteConfirmOpen] = useState(false);

//   // 데이터 가져오기 (백단에서 하면 연결 예정)
//   useEffect(() => {
//     const fetchUserData = async () => {
//       try {
//         const response = await axios.get("./mockData/myInfoMockData.json");
//         setUserData(response.data);
//         setSkillStack(response.data.skillStack || []);
//       } catch (error) {
//         alert("사용자 데이터를 가져오는데 실패했습니다.");
//         console.error("mock 데이터가 맞지 않습니다:", error);
//       }
//     };

//     fetchUserData();
//   }, []);

//   // 이벤트 핸들러 부분 (select 오류 수정 예정)
//   const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
//     const target = event.target as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;
//     const { name, value } = target;
//     setUserData((prev) => ({ ...prev, [name]: value }));
//   };

//   // 기술 드롭 선택 부분
//   const handleSelectSkillStack = (selectedOptions: SelectValueType) => {
//     if (selectedOptions && Array.isArray(selectedOptions)) {
//       const selectedSkills = selectedOptions.map((option) => option.value);
//       setSkillStack(selectedSkills);
//     } else {
//       setSkillStack([]);
//     }
//   };

//   const handleRemoveSkill = (skillToRemove: string) => {
//     setUserData({
//       ...userData,
//       skillStack: userData.skillStack.filter((skill) => skill !== skillToRemove)
//     });
//   };

//   // 새로운 기술 추가하는 부분임 (인풋에 화살표 넣기)
//   const handleNewSkillInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setNewSkill(event.target.value);
//   };

//   const handleAddNewSkill = () => {
//     if (newSkill && !userData.skillStack.includes(newSkill)) {
//       setUserData({
//         ...userData,
//         skillStack: [...userData.skillStack, newSkill]
//       });
//       setNewSkill("");
//     }
//   };

//   const handleSubmit = (event: React.FormEvent) => {
//     event.preventDefault();
//     const updatedUserData = { ...userData, skillStack };
//     setUserData(updatedUserData);
//     console.log("Updated User Data:", updatedUserData);
//   };

//   // 모달 돌아가는 부분 (저장이랑 회원 계정 삭제 부분)
//   const handleSave = () => {
//     setModalTitle("저장 완료");
//     setModalDescription("저장되었습니다.");
//     setModalOpen(true);
//   };

//   const handleCloseModal = () => {
//     setModalOpen(false);
//   };

//   const handleDeleteAccount = () => {
//     setDeleteConfirmOpen(true);
//   };

//   const handleConfirmDelete = async () => {
//     try {
//       setModalTitle("삭제 완료");
//       setModalDescription("삭제되었습니다.");
//       setDeleteConfirmOpen(false);
//       setModalOpen(true);
//       setTimeout(() => {
//         setModalOpen(false);
//         navigate("/");
//       }, 2000);
//     } catch (error) {
//       console.error("회원 탈퇴 중 에러 발생", error);
//     }
//   };

//   // 스킬 옵션 작성해 줌. 그냥 프론트단에서 함..
//   const skillOptions = [
//     { value: "JavaScript", label: "JavaScript" },
//     { value: "TypeScript", label: "TypeScript" },
//     { value: "React", label: "React" },
//     { value: "Vue", label: "Vue" },
//     { value: "Svelte", label: "Svelte" },
//     { value: "Nextjs", label: "Next.js" },
//     { value: "Nodejs", label: "Node.js" },
//     { value: "Java", label: "Java" },
//     { value: "Spring", label: "Spring" },
//     { value: "Go", label: "Go" },
//     { value: "Nestjs", label: "NestJS" },
//     { value: "Kotlin", label: "Kotlin" },
//     { value: "Express", label: "Express" },
//     { value: "MySQL", label: "MySQL" },
//     { value: "MongoDB", label: "MongoDB" },
//     { value: "Python", label: "Python" },
//     { value: "Django", label: "Django" },
//     { value: "php", label: "PHP" },
//     { value: "GraphQL", label: "GraphQL" },
//     { value: "Firebase", label: "Firebase" },
//     { value: "Flutter", label: "Flutter" },
//     { value: "Swift", label: "Swift" },
//     { value: "ReactNative", label: "React Native" },
//     { value: "Unity", label: "Unity" },
//     { value: "AWS", label: "AWS" },
//     { value: "Kubernetes", label: "Kubernetes" },
//     { value: "Docker", label: "Docker" },
//     { value: "Git", label: "Git" },
//     { value: "Figma", label: "Figma" },
//     { value: "Zeplin", label: "Zeplin" },
//     { value: "Jest", label: "Jest" }
//   ];

//   return (
//     <>
//       <Header />
//       <InfoContainer>
//         <LogoImage src={logo} />
//         <InfoTitle>내 정보 조회</InfoTitle>
//         <InfoForm onSubmit={handleSubmit}>
//           {/* 이메일이랑 2차 이메일이랑, 닉네임이랑 들어감, 연차 직군도!  */}
//           <InfoInputGroup>
//             <InfoLabel htmlFor="email">이메일</InfoLabel>
//             <InfoInput type="email" name="email" value={userData.email} onChange={handleInputChange} required />
//           </InfoInputGroup>
//           <InfoInputGroup>
//             <InfoLabel htmlFor="secondaryEmail">인증용 이메일</InfoLabel>
//             <InfoInput
//               name="secondaryEmail"
//               value={userData.secondaryEmail}
//               onChange={handleInputChange}
//               placeholder="2차 인증용 이메일을 입력하세요"
//             />
//           </InfoInputGroup>
//           <InfoInputGroup>
//             <InfoLabel htmlFor="nickname">닉네임</InfoLabel>
//             <InfoInput name="nickname" value={userData.nickname} onChange={handleInputChange} />
//           </InfoInputGroup>
//           <RowContainer>
//             <InfoInputGroup>
//               <InfoLabel htmlFor="career">직군</InfoLabel>
//               <InfoSelect name="career" value={userData.career} onChange={handleInputChange} required>
//                 <option value="">선택하세요</option>
//                 <option value="fullstack">풀스택</option>
//                 <option value="frontend">프론트엔드</option>
//                 <option value="backend">백엔드</option>
//               </InfoSelect>
//             </InfoInputGroup>

//             <InfoInputGroup>
//               <InfoLabel htmlFor="annual">연차</InfoLabel>
//               <InfoSelect name="annual" value={userData.annual} onChange={handleInputChange} required>
//                 <option value="">선택하세요</option>
//                 <option value="0년차">0년차</option>
//                 <option value="1년차">1년차</option>
//                 <option value="2년차">2년차</option>
//                 <option value="3년차">3년차</option>
//                 <option value="4년차">4년차</option>
//                 <option value="5년차">5년차</option>
//                 <option value="6년차">6년차</option>
//                 <option value="7년차">7년차</option>
//                 <option value="8년차">8년차</option>
//                 <option value="9년차">9년차</option>
//                 <option value="10년 이상">10년 이상</option>
//               </InfoSelect>
//             </InfoInputGroup>
//           </RowContainer>

//           {/* // 기술스택 드롭 필터 부분 */}
//           <StackInputGroup>
//             <InfoLabel htmlFor="skillStack">기술 스택</InfoLabel>
//             <SelectContainer>
//               <Select
//                 styles={SelectStyles}
//                 isMulti
//                 name="skillStack"
//                 options={skillOptions}
//                 className="basic-multi-select"
//                 classNamePrefix="select"
//                 onChange={handleSelectSkillStack}
//                 value={skillOptions.filter((option) => skillStack.includes(option.value))}
//               />
//               {/* 다른 인풋 필드와 '추가' 버튼 */}
//             </SelectContainer>

//             {/* 선택한 스택들을 태그로 표시해 줄 예정 */}
//             <TagContainer>
//               {userData.skillStack.map((skill, index) => (
//                 <InfoTag key={index} onClick={() => handleRemoveSkill(skill)}>
//                   {skill} &#10005;
//                 </InfoTag>
//               ))}
//             </TagContainer>
//           </StackInputGroup>

//           {/* 자기가 추가로 선택한 기술들을 인풋에 넣는??  부분  */}
//           <StackInputGroup>
//             <InfoLabel htmlFor="newSkill">새로운 기술 스택</InfoLabel>
//             <div className="select-container">
//               <InfoInput
//                 name="newSkill"
//                 value={newSkill}
//                 onChange={handleNewSkillInputChange}
//                 placeholder="기술 스택을 입력하세요 (예: #React)"
//               />
//               <InfoButtonSmall onClick={handleAddNewSkill} type="button">
//                 추가
//               </InfoButtonSmall>
//             </div>
//             <div className="tags-container">
//               {userData.skillStack.map((skill, index) => (
//                 <InfoTag key={index} onClick={() => handleRemoveSkill(skill)}>
//                   {skill} &#10005;
//                 </InfoTag>
//               ))}
//             </div>
//           </StackInputGroup>

//           {/* 자기소개 필드에 입력하는 부분 - 모달 로직 다시 확인 */}
//           <InfoInputGroup>
//             <InfoLabel htmlFor="bio">자기소개</InfoLabel>
//             <InfoTextArea name="bio" value={userData.bio} onChange={handleInputChange} rows={4} required />
//           </InfoInputGroup>
//           <InfoButton onClick={handleSave} type="button">
//             저장
//           </InfoButton>
//         </InfoForm>

//         {/* // 모달 들어간다, 회원 삭제랑, 수정 부분 */}
//         {modalOpen && (
//           <BasicSaveModal
//             open={modalOpen}
//             onClose={handleCloseModal}
//             title={modalTitle}
//             description={modalDescription}
//           />
//         )}
//         <InfoButton onClick={handleDeleteAccount} type="button">
//           회원 탈퇴
//         </InfoButton>
//         {deleteConfirmOpen && (
//           <BasicSaveModal
//             open={deleteConfirmOpen}
//             onClose={() => setDeleteConfirmOpen(false)}
//             title="계정 삭제 확인"
//             description="계정을 삭제하시겠습니까?"
//             actions={
//               <>
//                 <InfoButton onClick={handleConfirmDelete} type="button">
//                   네
//                 </InfoButton>
//                 <InfoButton onClick={() => setDeleteConfirmOpen(false)} type="button">
//                   아니오
//                 </InfoButton>
//               </>
//             }
//           />
//         )}
//       </InfoContainer>
//       <Footer />
//     </>
//   );
// };
