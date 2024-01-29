import Heading from '../../components/Heading';
import TextComponent from '../../components/TextComponent';
import * as Styled from './styles';

const PageNotFound = () => {
  return (
    <Styled.Container>
      <div>
        <Heading uppercase size="huge">
          Página não encontrada
        </Heading>
        <TextComponent>
          Não foi possível localizar a página solicitada
        </TextComponent>
      </div>
    </Styled.Container>
  );
};

export default PageNotFound;
