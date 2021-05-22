import styles from './App.module.scss';
import HeaderContainer from './components/Header/HeaderContainer';
import Page from './pages/Page';

function App() {
  return (
    <div className={styles.App}>
      <HeaderContainer />
      <Page />
    </div>
  );
}

export default App;
