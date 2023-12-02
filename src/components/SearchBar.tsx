import { useState } from "react";
//import { useDarkMode } from "@/hooks/useDarkMode";
import { Container, TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import styled from "styled-components";

const SearchContainer = styled.div`
  flexgrow: 1;
  display: flex;
  justifycontent: flex-end;
`;

const StyledContainer = styled(Container)`
  mt: 20;
`;

const StyledTextField = styled(TextField)`
  width: 600px;
`;

export const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  //const{ twilightTheme } = useDarkMode();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <SearchContainer>
      <StyledContainer maxWidth="md">
        <StyledTextField
          id="search"
          type="search"
          label="Search"
          value={searchTerm}
          onChange={handleChange}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <SearchIcon />
              </InputAdornment>
            )
          }}
        />
      </StyledContainer>
    </SearchContainer>
  );
};
