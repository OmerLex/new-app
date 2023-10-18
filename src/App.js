import logo from './logo.svg';
import './App.css';
import img from "./img/cupcake1.jpg"
import Title from './components/Title';
import MenuItems from './components/MenuItems';
import Header from './components/Header';
import MyMenu from './components/MyMenu';

// function Header (){
//   return (
//     <h1>This is from Header Component</h1>
//   );
// }

// const Header = () => {
//   return(
//   <h1>This is from Header Component</h1>
//   );
// }

function App() {
  const name ="John";
  const lastName = " Doe";
  const x = true;
  return (
    <div className="App">
      {/* <MyMenu /> */}
      <MenuItems item1="Home" item2="About" item3="Products"/>
      <h1>Hello from React!!!</h1>
      <h2>Hello {name}{lastName}</h2>
      <h2>{x ? 'Yes' : 'No'}</h2>
      <img src={img}></img>
      <Header title="Hello!!!" />
      <Title />
      
      
    </div>
  );
}

export default App;
