import { BsCode, BsEmojiSunglasses } from 'react-icons/bs';
import { FaGamepad, FaMedal, FaPaw } from 'react-icons/fa';
import { GiCakeSlice, GiGalaxy, GiLipstick } from 'react-icons/gi';
import { ITopic } from '../interfaces';

export const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3000/api';

export const topics: ITopic[] = [
  {
    name: 'Development',
    icon: <BsCode />,
  },
  {
    name: 'Comedy',
    icon: <BsEmojiSunglasses />,
  },
  {
    name: 'Gaming',
    icon: <FaGamepad />,
  },
  {
    name: 'Food',
    icon: <GiCakeSlice />,
  },
  {
    name: 'Dance',
    icon: <GiGalaxy />,
  },
  {
    name: 'Beauty',
    icon: <GiLipstick />,
  },
  {
    name: 'Animals',
    icon: <FaPaw />,
  },
  {
    name: 'Sports',
    icon: <FaMedal />,
  },
];

export const footerList1 = [
  'About',
  'Newsroom',
  'Store',
  'Contact',
  'Carrers',
  'ByteDance',
  'Creator Directory',
];
export const footerList2 = [
  'TikTokClone for Good',
  'Advertise',
  'Developers',
  'Transparency',
  'TikTokClone Rewards',
];
export const footerList3 = [
  'Help',
  'Safety',
  'Terms',
  'Privacy',
  'Creator Portal',
  'Community Guidelines',
];
