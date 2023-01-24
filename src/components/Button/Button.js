import { Btn, BtnWrapper } from './Button.styled';

export const Button = ({ onClick }) => {
  return (
    <BtnWrapper>
      <Btn type="button" onClick={onClick}>
        Load more
      </Btn>
    </BtnWrapper>
  );
};
