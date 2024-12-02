import HandleShowMessage from './HandleShowMessage'

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const ShowMessage = () => {

  const [closeMessage, setCloseMessage] = useState(false)
  const [backHome, setBackHome] = useState(false)

  const navigate = useNavigate()
  const handleCloseMessage = () => setCloseMessage(true)

  const handleBackHome = () => {
    setBackHome(true)
    navigate('/')
  }

  return (
    <div>
      {closeMessage == true ? '' : <HandleShowMessage />}
      <button
        type="button"
        data-testid="handle-show-message"
        onClick={handleBackHome}
        className="w-full text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mt-2"
      >
        Back to home
      </button>
    </div>
  )
}
export default ShowMessage