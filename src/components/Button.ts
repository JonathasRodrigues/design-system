import styled from 'styled-components';
import AntdButton from 'antd/lib/button';

const Button: typeof AntdButton = styled(AntdButton)`
  ${props => (!props.type || props.type === 'default') && props.theme.button.default}
  ${props => props.type === 'primary' && props.theme.button.primary}
  ${props => props.shape === 'circle' && props.theme.button.shape.circle}
`;

export default Button;
