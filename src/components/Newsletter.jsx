import styled from "styled-components";
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
const Container = styled.div`
  height: 60vh;
  background-color: #fcf5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
`;

const Desc = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
`;

const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
`;

const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
`;

const Button = styled.button`
  flex: 1;
  border: none;
  background-color: teal;
  color: white;
`;

/**
 * It returns a container with a title, description, and input container with an input and button
 * @returns A functional component that returns a container with a title, description, and input
 * container.
 */
const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Desc>Join now and get 10% off your next purchase!</Desc>
      <InputContainer>
        <Input placeholder="Your email" />
        <Button>
          <SendOutlinedIcon />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;