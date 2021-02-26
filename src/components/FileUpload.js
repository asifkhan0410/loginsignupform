import React, {useRef} from 'react'

function FileUploader({onFileSelectSuccess, onFileSelectError}){
    const fileInput = useRef(null)

    const handleFileInput = (e) => {
        // handle validations
        const file = e.target.files[0];
        console.log(file)
        if (file.size > 1024000 )
          onFileSelectError({ error: "File size cannot exceed more than 1MB" });
        else onFileSelectSuccess(file);
      };

    return (
        <div className="file-uploader">
            <input className="fileupload" type="file" onChange={handleFileInput}/>
            <button onClick={() => fileInput.current && fileInput.current.click()} className="btn btn-primary"></button>
        </div>
    )
}

export default FileUploader;