import { useState, useEffect } from 'react'
import LightGallery from 'lightgallery/react';

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

function Gallery(props) {
    const onInit = () => {
        console.log('lightGallery has been initialized');
    };

    const [useImg, setImg] = useState([])
    console.log("___________props___________")
    console.log(props.images)
    useEffect(()=>{
            try {
                setImg(props.images.map(img=>({src: img.url})))
                
            } catch (e) {
                console.log(e)
            }
    },[props.images])

    return (
        <div className="App">
            <LightGallery
                onInit={onInit}
                speed={500}
                plugins={[lgThumbnail, lgZoom]}
                fullScreen={false}
            >
                {useImg.map((imgUrl)=>{
                    return (<a href={imgUrl.src}>
                                <img src={imgUrl.src} alt={imgUrl.src} />
                            </a>)
                })}
            </LightGallery>
        </div>
    );
}


export default Gallery
