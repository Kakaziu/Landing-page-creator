import * as Styled from './styles';
import ReactLoading from 'react-loading';
import { theme } from '../../styles/theme';

const Loading = () => {
  return (
    <Styled.Container>
      <ReactLoading
        type="spin"
        color={theme.colors.secondaryColor}
        width="150px"
        height="150px"
      />
    </Styled.Container>
  );
};

export default Loading;
