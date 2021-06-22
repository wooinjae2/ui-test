
import './App.css';
import Expenses from './components/Expenses';

function App() {
  const expenses = [
    {title: 'Car Insurance', amount: 294.67, date: new Date(2021, 2, 12)},
    {title: 'TV Show', amount: 40.67, date: new Date(2021, 3, 13)},
    {title: 'Bus', amount: 23.67, date: new Date(2021, 4, 14)},
    {title: 'Smart Phone', amount: 294.67, date: new Date(2021, 5, 15)},
  ]

  return (
   <div>
     <h2>Let's get started!</h2>
     <Expenses expenses={expenses}/>
     
   </div>
  );
}

export default App;
