import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import LoginIcon from '@mui/icons-material/Login';
import { Icon } from '@iconify/react';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  // {
  //   title: 'Login',
  //   path: '/login',
  //   icon: <LoginIcon/>,
  //   cName: 'nav-text'
  // },
  {
    title: 'Team',
    path: '/team',
    icon: <IoIcons.IoMdPeople/>,
    cName: 'nav-text'
  },
  {
    title: 'Hall of Fame',
    path: '/placements',
    icon:<Icon icon="mdi:crown" />,
    cName: 'nav-text'
  },
  {
    title: 'Contact Us',
    path: '/contact',
    icon: <ContactPhoneIcon />,
    cName: 'nav-text'
  },
  {
    title: 'Interview Exp.',
    path: '/Interview',
    icon: <ContentPasteIcon />,
    cName: 'nav-text'
  },
  {
    title: 'Developers.',
    path: '/developers',
    icon: <GroupAddIcon />,
    cName: 'nav-text'
  }

];
