import { IoMdArrowDropup } from 'react-icons/io';
import * as Styled from './styles';

const GoTop = () => {
  return (
    <Styled.Button href="#" aria-label="Go to top" title="Go to top">
      <IoMdArrowDropup size="35" color="white" />
    </Styled.Button>
  );
};

export default GoTop;
