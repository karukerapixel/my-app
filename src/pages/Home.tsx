import Hero from '../components/Hero';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';

const Home: React.FC = () => {
  return (
    <>
      <Hero heading={'Incroyable, moderne, fluide & sans template.'} />
      <Services />
      <Portfolio />
    </>
  );
};

export default Home;
