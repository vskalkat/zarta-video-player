import './modal.css'

interface IModal{
    open: boolean,
    onClose: () => void,
    videoUrl?: string,
    title?: string,
    author?: string,
    followerCount?: number,
    description?: string
}

const Modal = ({
    open, 
    onClose, 
    videoUrl, 
    title, 
    author,
    followerCount,
    description
}: IModal) => {
    if (!open) return null

    return (
        <div className="modal-wrapper">
            <div className='overlay' onClick={onClose}></div>
            <div className='modal-content'>
                <video controls width="100%" src={videoUrl} />
                <div className='modal-info-container'>
                    <div className='author-card'>
                        <div className='profile-pic' />
                        <div className='user-details'>
                            <h4>{author}</h4>
                            <p className='secondary-text'>{followerCount} {followerCount > 1 ? 'followers' : 'follower'}</p>
                        </div>
                    </div>
                    <div>
                        <h4>{title}</h4>
                        <p>{description}</p>
                    </div>
                </div>
                <button className='modal-close-button' onClick={onClose}>X</button>
            </div>
        </div>
    )
}

export default Modal;