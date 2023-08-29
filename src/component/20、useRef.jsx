// 获取DOM
// import { useEffect, useRef } from "react";
// const App = () => {
//   const h1Ref = useRef(null)
//   useEffect(() => {
//     console.log(h1Ref)
//   })
//   return (
//     <div className="App">
//       <h1 ref={h1Ref}>APP组件</h1>
//     </div>
//   );

// }

// export default App;


// 获取组件
// import { useEffect, useRef } from "react";
// import React from "react";

// class Son extends React.Component {
//   render() {
//     return (
//       <>
//         <h2>我是子组件喔</h2>
//       </>
//     )
//   }
// }

// const App = () => {
//   const sonRef = useRef(null)
//   useEffect(() => {
//     console.log(sonRef)
//   })
//   return (
//     <div className="App">
//       <Son ref={sonRef}></Son>
//     </div>
//   );

// }

// export default App;
