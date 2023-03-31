import { useState } from 'react'
import './modal.css'


const useModal = () => {

    const [visible, setVisible] = useState<boolean>(false)

    function Modal({ content }: { content: string }) {


        return (
            <div className="modal">
                <div className="modal-content">
                    <span onClick={() => setVisible(false)} className="close">
                        &times;
                    </span>
                    <p>{content}</p>
                </div>
            </div>
        )
    }
    return {
        Modal: visible === true ? Modal : null,
        Show: () => setVisible(true)
    }
}

export default useModal
