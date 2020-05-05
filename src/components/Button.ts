import styled from 'styled-components';
import { Button as AntdButton } from 'antd';

const Button = styled(AntdButton)`
  background:  ${({ theme }) => theme.button.primary.background} !important;
  color:  ${({ theme }) => theme.button.primary.color} !important;
`;

export default Button;
