import { useState } from 'react';

function Image({ ...props }) {
    const [link, setLink] = useState('');
    const handleImageError = () => {
        setLink('https://bom.so/8RAyCC');
    };
    return <img src={link || props.src} alt="" onError={handleImageError} className={props.className} />;
}

export default Image;
