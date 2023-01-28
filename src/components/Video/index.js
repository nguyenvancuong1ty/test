// import classNames from 'classnames/bind';
import { useState, useEffect, useRef, memo } from 'react';
// import styles from './Video.module.scss';

import useElementOnScreen from '~/hooks/useElementOnScreen';

// const cx = classNames.bind(styles);
function Video(props) {
    const [playing, setPlaying] = useState(false);
    const videoRef = useRef(null);
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: [0.75],
    };
    const isVisibile = useElementOnScreen(options, videoRef);
    const onVideoClick = () => {
        if (playing) {
            videoRef.current.pause();
            setPlaying(!playing);
        } else {
            videoRef.current.play();
            setPlaying(!playing);
        }
    };
    useEffect(() => {
        if (isVisibile) {
            if (!playing) {
                videoRef.current.play();
                setPlaying(true);
            }
        } else {
            if (playing) {
                videoRef.current.pause();
                setPlaying(false);
            }
        }
    }, [isVisibile, playing]);
    return (
        <video
            loop
            onClick={onVideoClick}
            className={props.className}
            src={props.data.popular_video.file_url}
            controls
            ref={videoRef}
        ></video>
    );
}

export default memo(Video);
