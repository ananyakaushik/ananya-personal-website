import './App.css';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer';
import ContentSection from './components/ContentSection/ContentSection';

function App() {
  return (
    <div className="App">
      <Header />
      
      <ContentSection bgColor="white"/>
      <ContentSection bgColor="yellow"/>
      <ContentSection bgColor="pink"/>
      <ContentSection bgColor="white"/>
      
      <Footer />
    </div>
  );
}

export default App;
