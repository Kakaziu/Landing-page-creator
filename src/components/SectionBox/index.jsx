import P from 'prop-types';
import * as Styled from './styles';
import SectionBackground from '../SectionBackground/index';
import Heading from '../Heading/index';
import TextComponent from '../TextComponent/index';
import Button from '../Button/index';

const SectionBox = ({
  background,
  title,
  paragraphs = [],
  sectionId = '',
  button = null,
}) => {
  return (
    <SectionBackground background={background}>
      <Styled.Container id={sectionId}>
        <Heading isdark={!background} uppercase>
          {title}
        </Heading>
        {paragraphs.map((paragraph, index) => (
          <TextComponent key={index}>{paragraph}</TextComponent>
        ))}
        {button.children && (
          <Button url={button.urlButton} size={button.size}>
            {button.children}
          </Button>
        )}
      </Styled.Container>
    </SectionBackground>
  );
};

SectionBox.propTypes = {
  background: P.bool,
  title: P.string.isRequired,
  paragraphs: P.arrayOf(P.string.isRequired),
  sectionId: P.string,
  ...Button.propTypes,
};

export default SectionBox;
