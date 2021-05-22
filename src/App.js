import styles from './App.module.scss';
import Header from './components/Header/Header';
import Page from './Pages/Page';

function App() {
  return (
    <div className={styles.App}>
      <Header />
      <Page />
    </div>
  );
}

export default App;
