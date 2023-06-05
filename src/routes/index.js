import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'
import { Suspense } from 'react'
import NotFound from "../Components/NotFound"; 
import Home from "../Components/Home";

const RoutesComponent = () => {
  return (
      <Router>
          <Suspense fallback={<></>}>
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="*" element={<NotFound />} />
              </Routes>
          </Suspense>
      </Router>
  )
}

export default RoutesComponent