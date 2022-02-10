import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as GiIcons from 'react-icons/gi';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
    {
        title:'Home',
        path:'e-furniture/',
        icon:<AiIcons.AiFillHome />,
        className:'nav-text'
    },
    {
        title:'About us',
        path:'e-furniture/about_us',
        icon:<RiIcons.RiInformationLine />,
        className:'nav-text'
    },
    {
        title:'Furniture',
        path:'e-furniture/furniture',
        icon:<GiIcons.GiRockingChair />,
        className:'nav-text'
    },
    {
        title:'Blog',
        path:'e-furniture/blog',
        icon:<FaIcons.FaBloggerB />,
        className:'nav-text'
    },
    {
        title:'Contact Us',
        path:'e-furniture/contact_us',
        icon:<RiIcons.RiContactsLine />,
        className:'nav-text'
    },
    {
        title:'Login',
        path:'login/',
        icon:<RiIcons.RiLoginCircleLine />,
        className:'nav-text'
    }
]