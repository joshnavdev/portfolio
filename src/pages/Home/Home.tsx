import Header from '../../componets/Header/Header';
import useTheme from '../../hooks/theme.hook';

const Home = () => {
  const { theme } = useTheme();

  return (
    <div className={`${theme ?? ''} font-mplus`}>
      <div className="h-screen bg-nord-6 dark:bg-nord-0 text-nord-3 dark:text-nord-6">
        <Header />
      </div>
    </div>
  );
};

export default Home;
