import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import Board from '../pages/Board';
import Root from '../pages/Root';
import BoardDetail from '../pages/BoardDetail';


const router = createBrowserRouter([{
  path: '/',
  element: <Root />,
  errorElement: 'pageNotFound', 
  children: [
    {index : true, element: <Home />},
    {path: '/board', element: <Board />},
    {path: '/board/:bid', element: <BoardDetail />}, // 동적 라우팅 구조
  ]

}] );
function App() { 
  return (
    <RouterProvider router={router} />
  );
}

export default App;

// import './App.css';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from '../pages/Home';
// import Board from '../pages/Board';
// import Root from '../pages/Root';

// function App() { 
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Root />}>
//           <Route index element={<Home />} />
//           <Route path="/board" element={<Board />} />
//         </Route>
//       </Routes>
//     </Router>
//   );
// }

// export default App;