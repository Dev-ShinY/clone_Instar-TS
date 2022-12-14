import styled from "styled-components";

type Props = {
  message: string | undefined;
};

function FormError({ message }: Props) {
  return message === "" || !message ? null : <SFormError> {message} </SFormError>;
}

export default FormError;

const SFormError = styled.span`
  color: tomato;
  font-weight: 600;
  font-size: 12px;
  margin: 5px 0px 10px 0px;
`;
