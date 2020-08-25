import React, {useEffect} from 'react'


function WistiaVideo({wistiaId}) {
    useEffect(() => {
        const script = document.createElement('script')
        script.src = "//fast.wistia.com/assets/external/E-v1.js"
        script.async = true
        document.body.appendChild(script)
    }, [])
    
    return (
        <div>
            <div className={`wistia_embed wistia_async_${wistiaId} videoFoam=true`}></div>
        </div>
    )
}

export default WistiaVideo