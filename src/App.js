// import React, { Component} from 'react';
// import Header from './components/header/header.component'
// import CardGrid from './components/card-grid/card-grid.component'

// import './App.css';

// class App extends Component {
//   constructor() {
//     super()

//     this.state = {
//       cards: [1,4,2,45,2]
//     };
//   }
//   render () {
//     const { cards } = this.state
//     return (
//       <div>
//         <Header/>
//         <header className="App">
//           <div>
//             <CardGrid cards={cards}/>
//           </div>
//         </header>
//       </div>
//     );
//   }
  
// }

// export default App;

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import Header from './components/header/header.component'
import BubbleSortPage from './pages/bubble-sort/bubble-sort.component';

function App() {
  return (
    <div >
      <Header/>
      <Switch>
        <Route exact path='/' component={BubbleSortPage}/>
      </Switch>
    </div>
  );
}

export default App;


