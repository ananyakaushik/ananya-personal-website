import { Route, Switch, BrowserRouter } from 'react-router-dom';
import './App.css';

import ContentSection from './components/ContentSection/ContentSection';
import Books from './components/Books/Books';
import Career from './components/Career/Career';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        
        {/* <ContentSection bgColor="white"/>
        <ContentSection bgColor="yellow"/>
        <ContentSection bgColor="pink"/>
        <ContentSection bgColor="white"/> */}
        {/* <ContentSection bgColor="white"/> */}
        
        <Switch>
          <Route path="/books" component={Books} />
          <Route path="/career" component={Career} />
          <Route path="/" exact component={ContentSection} />
          {/* <Route component={NoMatch}/> */}
        </Switch>

      </div>
    </BrowserRouter>
  );
}

export default App;
