import { BrowserRouter } from 'react-router-dom';
import './App.css';
// import Header from './components/Header/Header'
// import Footer from './components/Footer/Footer';
import ContentSection from './components/ContentSection/ContentSection';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* <Header /> */}
        
        {/* <ContentSection bgColor="white"/>
        <ContentSection bgColor="yellow"/>
        <ContentSection bgColor="pink"/>
        <ContentSection bgColor="white"/> */}
        <ContentSection bgColor="white"/>
        
        {/* <Footer /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
