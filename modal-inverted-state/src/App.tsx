import useModal from './components/Modal/Index'

import './app.css'

function App() {
  const { Modal, Show } = useModal()

  return (
    <>
      <div className='App'>
        {Modal ? <Modal content='Testing my modal' /> : null}
      </div>
      <button onClick={Show}>Open modal</button>
    </>
  )
}

export default App
