import P from 'prop-types';
import * as Styled from './styles';
import SectionBackground from '../SectionBackground/';
import Heading from '../Heading';
import TextComponent from '../TextComponent';
import Button from '../Button';

const SectionTwoColumns = ({
  title,
  text,
  srcImg,
  background = false,
  button,
}) => {
  return (
    <SectionBackground background={background}>
      <Styled.Container background={+background}>
        <Styled.TextContainer>
          <Heading uppercase>{title}</Heading>
          <TextComponent>{text}</TextComponent>
          {button && (
            <Button url={button.urlButton} size={button.size}>
              {button.textButton}
            </Button>
          )}
        </Styled.TextContainer>
        <Styled.Image src={srcImg} alt={title} />
      </Styled.Container>
    </SectionBackground>
  );
};

SectionTwoColumns.propTypes = {
  title: P.string.isRequired,
  text: P.string.isRequired,
  srcImg: P.string.isRequired,
  background: P.bool,
  button: Button.propTypes,
};

export default SectionTwoColumns;
