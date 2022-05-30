// import React from 'react';
 import './App.css';
import Day from './components/Day';
import DayList from './components/DayList';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Hello from './components/Hello';
// import Test from './test';
// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       users: [
//       { name: 'Nathan', age: 25},
//       { name: 'Jack', age: 30},
//       { name: 'Joe', age: 28},
//     ],
//     number: 0,
//   };
//     this.addNumber = this.addNumber.bind(this);
//   }

//   addNumber = () => {
//     const {number} = this.state;
//     this.setState(({number: number + 1}),
//     console.log(number));
//   }

//   render() {
//     const { users, number } = this.state;
//     //const {addNumber} = this;
//     return (
//       <div className="App">
//         <h1>{number}</h1>
//         <Test users={users} addNumber={this.addNumber} number={number}/>
//         <Hello age={10} />
//         <Hello age={20}/>
//         <Hello age={30}/>
//       </div>
//     );
//   }
// }
import Header from './components/Header';
import EmptyPage from './components/EmptyPage';
function App() {
  return(
    <BrowserRouter>
      <div className='App'>
        <Header />
        <Routes>
          <Route path='/' element={<DayList />} />
          <Route path='/day/:day' element={<Day />} />
          <Route path='/*' element={<EmptyPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  )  
}

export default App;
