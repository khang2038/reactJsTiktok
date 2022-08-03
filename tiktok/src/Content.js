import { useEffect, useState } from "react";

export default function Content(){

    const [avatar,setAvatar]=useState()

    useEffect(()=>{

        return ()=>{
          avatar && URL.createObjectURL(avatar.preview)
        }

        
    },[avatar])

    const handlePreviewAvatar=(e)=>{
        const  file=e.target.files[0]
        file.preview=URL.createObjectURL(file)

        setAvatar(file)
    }

    return(
        <div>
            <input
                type="file"
                onChange={handlePreviewAvatar}
            />
            {avatar && (
                <img src={avatar.preview} alt="" width="80%" />
            )}
        </div>
    )   
}