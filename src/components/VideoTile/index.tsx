import './videoTile.css'
import { Fragment, useState } from 'react';
import Modal from '../Modal';

interface IVideoTile{
    title: string,
    thumbnailURL: string,
    videoURL: string,
    author: string,
    uploadDate: string,
    followerCount?: number,
    description?: string
}

const VideoTile = ({
    title,
    thumbnailURL,
    videoURL,
    author,
    uploadDate,
    followerCount,
    description
}: IVideoTile) => {
    const [showModal, setShowModal] = useState<boolean>(false);

    const openModal = () => {
        setShowModal(true);
    };
    
    const closeModal = () => {
        setShowModal(false);
    }

    return (
        <Fragment>
            <div className="video-tile-wrapper" onClick={openModal}>
                <div className='thumbnail-image' style={{backgroundImage: `url('${thumbnailURL}')`}} />
                <div className='text-content'>
                    <h5>{title}</h5>
                    <p className='secondary-text'>{author} • {new Date(uploadDate).toDateString()}</p>
                </div>
            </div>

            <Modal 
                open={showModal} 
                onClose={closeModal} 
                videoUrl={videoURL} 
                title={title} 
                author={author}
                followerCount={followerCount}
                description={description}
            />
        </Fragment>
    )
}

export default VideoTile;