import P from 'prop-types';
import SectionBackground from '../SectionBackground';
import * as Styled from './styles';
import Heading from '../Heading';
import Button from '../Button';

const SectionContent = ({
  title,
  html,
  background = false,
  sectionId = '',
  button,
}) => {
  return (
    <SectionBackground background={background}>
      <Styled.Container background={+background} id={sectionId}>
        <Styled.TitleContainer>
          <Heading uppercase>{title}</Heading>
        </Styled.TitleContainer>
        <Styled.HtmlContainer dangerouslySetInnerHTML={{ __html: html }} />
        {button && button.children && (
          <Button url={button.urlButton} size={button.size}>
            {button.children}
          </Button>
        )}
      </Styled.Container>
    </SectionBackground>
  );
};

SectionContent.propTypes = {
  title: P.string.isRequired,
  html: P.string.isRequired,
  background: P.bool,
  sectionId: P.string,
  ...Button.propTypes,
};

export default SectionContent;
