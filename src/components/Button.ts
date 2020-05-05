import styled from 'styled-components';
import AntdButton from 'antd/lib/button';

const Button: typeof AntdButton = styled(AntdButton)`
  background:  ${({ theme }) => theme.button.primary.background} !important;
  color:  ${({ theme }) => theme.button.primary.color} !important;
`;

export default Button;
