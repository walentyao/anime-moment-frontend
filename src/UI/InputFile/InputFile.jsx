import React, {useState} from 'react';
import classes from "./InputFile.module.scss";
import image from "../../images/file-image-regular.svg";

const InputFile = ({setFile}) => {

    const [upload, setUpload] = useState(false);
    const [imageUp, setImageUp] = useState('')

    function removeImage(event){
        setImageUp('');
        setUpload(false);
    }

    function handlerUpload(event) {
        const file = event.target.files[0];
        if (file) {
            setImageUp(URL.createObjectURL(file));
            setUpload(true);
            setFile(file);
        }
    }

    return (
        !upload ? (<div className={classes.container}>
                <img src={image} alt="image123" className={classes.container_image}/>
                <label htmlFor="file" className={classes.container_label}>Add image</label>
                <input type="file" id="file" onChange={handlerUpload}/>
            </div>)
            : (<div className={classes.show_image} onClick={removeImage}>
                <img src={imageUp} alt="asdsad" className={classes.show_image_image}/>
            </div>)
    );
};

export default InputFile;