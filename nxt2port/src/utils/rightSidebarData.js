import {
  BusinessCenterOutlined,
  ContactPageOutlined,
  DescriptionOutlined,
  NoteAltOutlined,
  PersonOutline,
  TextSnippetOutlined,
} from '@mui/icons-material';
import { pink, red, blue } from '@mui/material/colors';

export const rightSidebarData = [
  {
    name: 'About',
    icon: <PersonOutline />,
    color: 'text-blue-500',
    hover: 'text-white',
  },
  {
    name: 'Resume',
    icon: <DescriptionOutlined />,
    color: 'text-green-500',
    hover: 'text-white',
  },
  {
    name: 'Project',
    icon: <BusinessCenterOutlined />,
    color: 'text-red-500',
    hover: 'text-white',
  },
  {
    name: 'Blogs',
    icon: <NoteAltOutlined />,
    color: 'text-violet-400',
    hover: 'text-white',
  },
  {
    name: 'Contact',
    icon: <ContactPageOutlined />,
    color: 'text-pink-500',
    hover: 'text-white',
  },
];
