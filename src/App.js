import styles from './App.module.scss';
import HeaderContainer from './components/Header/HeaderContainer';
import PageContainer from './pages/PageContainer';

function App() {
  return (
    <div className={styles.App}>
      <HeaderContainer />
      <PageContainer />
    </div>
  );
}

export default App;
