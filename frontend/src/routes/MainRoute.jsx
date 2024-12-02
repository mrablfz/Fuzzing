import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import App from '../App'
import ShowMessage from '../components/ShowMessage'

const MainRoute = () => {
  return (
    <div className="w-full">
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/message" element={<ShowMessage />} />
        </Routes>
      </Router>
    </div>
  )
}

export default MainRoute
