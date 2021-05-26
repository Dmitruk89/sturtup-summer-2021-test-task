import styles from './App.module.scss';
import Header from './components/Header/Header';
import PageContainer from './pages/PageContainer';

function App() {
  return (
    <div className={styles.App}>
      <Header />
      <PageContainer />
    </div>
  );
}

export default App;
