import React, { useState, useEffect } from "react";
import instance from "@/apis";
import {
  Form,
  Input,
  Button,
  Modal,
  Label,
  FormGroup,
  ModalWrapper,
  CloseButton,
  CloseButtonWrapper,
  Select,
  InputSkillWrapper,
  Span,
  SkillAddButton
} from "./signUpStyles";
import { useNavigate } from "react-router-dom";
import { useDarkMode } from "@/hooks/useDarkMode";

//로그인 인증 테스트용
// import { useAuthContext } from "@/contexts/AuthContext";
//로그인 인증 테스트용

const SignUpForm = () => {
  // 로그인 인증 테스트용
  // const { authState, setAuthState } = useAuthContext();
  // console.log("authState: ", authState);
  // //초기값의 user는 빈 객체라서 api통신이 완료된 user가 빈 객체가 아니게 될 때 authState의 데이터를 사용해야 함
  // console.log(Object.keys(authState.user).length !== 0 && "유저값이 데이터나 에러가 존재할 때 나타남");
  // 로그인 인증 테스트용

  //회원가입 시 서버에 보내는 데이터
  const [email, setEmail] = useState("");
  const [check_email, setCheck_email] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [nickname, setNickname] = useState("");
  const [career_id, setCareer_id] = useState("");
  const [annual, setAnnual] = useState<number>();
  const [skill_id, setSkill_id] = useState<string[]>([]);

  const [emailError, setEmailError] = useState("");
  const [check_emailError, setCheck_emailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [modalOpen, setModalOpen] = useState(false);

  const navigate = useNavigate();
  const { twilightTheme } = useDarkMode();

  //서버에서 받은 직무, 기술스택 데이터 사용에 필요한 타입
  interface FetchDataType {
    _id: string;
    name: string;
  }

  //서버에서 받은 직무 데이터 상태관리
  const [career_idData, setCareer_idData] = useState<FetchDataType[]>([]);

  //서버에서 받은 기술스택 데이터 상태관리
  const [skill_idData, setSkill_idData] = useState<FetchDataType[]>([]);
  //직접 입력하는 기술스택 상태관리
  const [inputSkillText, setInputSkillText] = useState("");

  //서버에서 직무, 기술스택 데이터 가져오는 api통신
  useEffect(() => {
    const fetchCareer_idData = async () => {
      try {
        const response = await instance.get("/career");
        // console.log("직무 데이터", response.data);
        setCareer_idData(response.data);
      } catch (error) {
        // console.error("직무 데이터 가져오기 오류:", error);
      }
    };

    const fetchSkill_idData = async () => {
      try {
        const response = await instance.get("/skill");
        // console.log("기술스택 데이터", response.data);
        setSkill_idData(response.data);
      } catch (error) {
        // console.error("기술스택 데이터 가져오기 오류", error);
      }
    };

    fetchCareer_idData();
    fetchSkill_idData();
  }, []);

  //기술스택 추가
  const handleSelectSkill = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    if (value !== "" && !skill_id.includes(value)) {
      setSkill_id([...skill_id, value]);
    }
  };

  //기술스택 삭제
  const handleRemoveSkill = (index: number) => {
    const updatedSkills = skill_id.filter((_, i) => i !== index);
    setSkill_id(updatedSkills);
  };

  //기술스택 인풋창 텍스트 변화 감지
  const handleInputSkillTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputSkillText(e.target.value);
  };

  const handleAddInputSkillText = () => {
    if (inputSkillText.trim() !== "" && !skill_id.includes(inputSkillText)) {
      setSkill_id([...skill_id, inputSkillText.trim()]);
      setInputSkillText("");
    }
  };

  //모달 닫기
  const closeModal = () => {
    setModalOpen(false);
  };

  //모달 바깥 영역 클릭시 모달 닫기
  const handleCloseModal = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  //회원가입 버튼 클릭해서 submit이 되면 비밀번호 검증 후 모달 열기
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      //이메일 에러관리
      setEmailError("유효한 이메일 주소를 입력해주세요.");
      return;
    } else {
      setEmailError("");
    }

    const check_emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!check_emailRegex.test(check_email)) {
      //확인이메일 에러관리
      setCheck_emailError("유효한 이메일 주소를 입력해주세요.");
      return;
    } else {
      setCheck_emailError("");
    }

    const passwordRegex = /^(?=.*[A-Za-z])(?=.*[!@#$])[A-Za-z0-9!@#$]{8,12}$/;
    if (!passwordRegex.test(password)) {
      //비밀번호 에러관리
      setPasswordError("비밀번호 형식이 올바르지 않습니다. 영문 대/소문자, 특수문자를 포함하여 8-12자로 입력하세요.");
      return;
    } else {
      setPasswordError("");
    }

    if (password !== confirmPassword) {
      // Handle password mismatch error
      return;
    }

    setModalOpen(true);
  };

  //모달 창에서 빈 필드 검증 후 api 요청 보내기
  const handleModalSubmit = async () => {
    // API 요청을 보내는 부분
    if (!nickname || !career_id || (annual !== 0 && !annual)) {
      // 모달 안의 필드들 검증 (빈 필드가 있는지 확인)
      return;
    }
    try {
      // Axios를 사용하여 API 요청 보내기
      const response = await instance.post("/account/signup", {
        email,
        check_email,
        password,
        nickname,
        annual,
        career_id,
        skill_id
      });
      // 성공 시 처리 로직
      console.log("회원가입 성공!", response);
      navigate("/login");
      // 추가적인 로직 구현
    } catch (error) {
      // 에러 처리
      console.error("회원가입 실패:", error);
      // 에러 메시지를 사용자에게 표시하거나 다른 작업 수행
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label htmlFor="email">이메일</Label>
        <Input
          $twilightTheme={twilightTheme}
          type="email"
          id="email"
          placeholder="이메일"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {emailError && <Span style={{ color: "red" }}>{emailError}</Span>}
      </FormGroup>
      <FormGroup>
        <Label htmlFor="check_email">분실시 확인용 이메일</Label>
        <Input
          $twilightTheme={twilightTheme}
          type="email"
          id="check_email"
          placeholder="분실시 확인용 이메일"
          value={check_email}
          onChange={(e) => setCheck_email(e.target.value)}
        />
        {check_emailError && <Span style={{ color: "red" }}>{check_emailError}</Span>}
      </FormGroup>
      <FormGroup>
        <Label htmlFor="password">비밀번호</Label>
        <Input
          $twilightTheme={twilightTheme}
          type="password"
          id="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {passwordError && <Span style={{ color: "red" }}>{passwordError}</Span>}
      </FormGroup>
      <FormGroup>
        <Label htmlFor="confirmPassword">비밀번호 확인</Label>
        <Input
          $twilightTheme={twilightTheme}
          type="password"
          id="confirmPassword"
          placeholder="비밀번호 확인"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        {password !== confirmPassword && <Span $red>비밀번호가 서로 다릅니다. 다시 확인해 주세요.</Span>}
      </FormGroup>
      <Button type="submit">회원가입</Button>

      {modalOpen && (
        <ModalWrapper onClick={handleCloseModal}>
          <Modal $twilightTheme={twilightTheme}>
            <CloseButtonWrapper>
              <CloseButton onClick={closeModal}>X</CloseButton>
            </CloseButtonWrapper>
            <h2>초기 설정</h2>
            <FormGroup>
              <Label htmlFor="nickname">닉네임</Label>
              <Input
                $twilightTheme={twilightTheme}
                type="text"
                id="nickname"
                placeholder="닉네임"
                value={nickname}
                onChange={(e) => setNickname(e.target.value)}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="career_id">직무</Label>
              <Select
                $twilightTheme={twilightTheme}
                id="career_id"
                value={career_id}
                onChange={(e) => setCareer_id(e.target.value)}
                required
              >
                <option value="">직무 선택</option>
                {career_idData.map((data) => (
                  <option key={data._id} value={data._id}>
                    {data.name}
                  </option>
                ))}
              </Select>
            </FormGroup>
            <FormGroup>
              <Label htmlFor="annual">연차</Label>
              <Select
                $twilightTheme={twilightTheme}
                id="annual"
                value={annual}
                onChange={(e) => setAnnual(Number(e.target.value))}
                required
              >
                <option value="">연차 선택</option>
                {Array.from(Array(11).keys()).map((num) => (
                  <option key={num} value={num}>
                    {num}
                  </option>
                ))}
              </Select>
            </FormGroup>
            <FormGroup>
              <Label htmlFor="skill_id">기술스택</Label>
              <div>
                {skill_id.map((skill, index) => (
                  <Span key={index} className="selected-skill">
                    {`#${skill}`}
                    <SkillAddButton type="button" onClick={() => handleRemoveSkill(index)}>
                      X
                    </SkillAddButton>
                  </Span>
                ))}
              </div>
              <Select $twilightTheme={twilightTheme} id="skill_id" value={""} onChange={handleSelectSkill}>
                <option value="">기술스택 선택</option>
                {skill_idData.map((skill) => (
                  <option key={skill._id} value={skill.name}>
                    {skill.name}
                  </option>
                ))}
              </Select>
              <InputSkillWrapper>
                <Input
                  $twilightTheme={twilightTheme}
                  $skill
                  type="text"
                  placeholder="기술스택"
                  value={inputSkillText}
                  onChange={handleInputSkillTextChange}
                />
                <Button type="button" onClick={handleAddInputSkillText}>
                  추가
                </Button>
              </InputSkillWrapper>
            </FormGroup>
            <Button onClick={handleModalSubmit}>등록</Button>
          </Modal>
        </ModalWrapper>
      )}
    </Form>
  );
};

export default SignUpForm;
