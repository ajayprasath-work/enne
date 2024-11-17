import { Close } from '@/public/assets/icon/Icon';
import { useEffect } from 'react';
import Modal from 'react-modal';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    // Ensure the DOM is ready and the code is executed only in the browser
    if (typeof window !== 'undefined' && document.getElementById('__next')) {
      Modal.setAppElement('#__next');
    }
  }, []);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Video Modal"
      className="video-modal !bg-black/50 !w-full !text-white !h-screen"
      overlayClassName="video-modal-overlay"
    >
      <div className="flex justify-center items-center">
        <button onClick={onClose} className="absolute top-12 right-12 cursor-pointer">
          <Close height={38} width={38} />
        </button>
        <video className='h-auto h-[90vh]' controls autoPlay>
          <source src="/assets/video/videoplayback.mp4" type="video/mp4" />
        </video>
      </div>
    </Modal>
  );
};

export default VideoModal;
