import React from 'react'
import { GiTerror } from 'react-icons/gi'
import { MdOutlineErrorOutline } from 'react-icons/md'

const Page404 = () => {
    return (
        <div style={{display:"flex",justifyContent:'center',margin:'20px',fontSize:'40px',alignItems:'center',color:'green'}}>
            <span><strong>ERROR 404 <MdOutlineErrorOutline fill='green'/>  </strong>:Page Not Found</span> <span><GiTerror size='100px' fill='green'/></span>
        </div>
    )
}

export default Page404
