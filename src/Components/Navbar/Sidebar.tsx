
import { useState } from 'react';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import { SidebarData } from './SidebarData';
import './Sidebar.scss'

function Sidebar() {

    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);
    
    return (

        <>
            <div className='sidebar'>
                <Link to='#' className='menu-bars'>
                    <FaIcons.FaBars onClick={showSidebar} />
                </Link>
            </div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className="nav-menu-items">
                    <li className="navbar-toggle">
                        <Link to='#' className='menu-bars' >
                            <AiIcons.AiOutlineClose  onClick={showSidebar} />
                        </Link>
                    </li>
                    {SidebarData.map((data, index) => {
                        return (
                            <li key={index} className={data.className}>
                                <Link to={data.path}>
                                    {data.icon}
                                    <span>{data.title}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </>
    )
}

export default Sidebar
