import { createContext, useContext } from "react";

const Context = createContext();

const Father = () => {
  return (
    <>
      <Son></Son>
    </>
  )
}

const Son = () => {
  const { name, age} = useContext(Context);
  return (
    <>
      <h2>{name}</h2>
      <h2>{age}</h2>
    </>
  )
}

const App = () => {
  return (
    <Context.Provider value={{name: 'jaksonkoda', age: 22}}>
      <Father></Father>
    </Context.Provider>
  );

}

export default App;
