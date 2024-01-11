import SectionBox from '../../components/SectionBox';

const Home = () => {
  return (
    <SectionBox
      background
      title="Criador de landing pages"
      paragraphs={[
        {
          text: 'Transforme sua visão em realidade! Crie uma landing page impressionante e conquiste a atenção do seu público. Experimente agora e dê vida à sua mensagem de forma envolvente. Comece a construir sua presença online hoje mesmo!',
        },
      ]}
      button={{
        text: 'Comece a criar',
        url: '#',
        size: 'big',
      }}
    />
  );
};

export default Home;
