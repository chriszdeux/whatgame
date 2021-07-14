import { VscLibrary as LibraryGames } from 'react-icons/vsc';
import { AiOutlineSearch as SearchIcon } from 'react-icons/ai';
import { RiUser3Fill as UserIcon } from 'react-icons/ri'

export const menuList = [
  {
    name: 'Home',
    content: false,
    page: '/home',
    subMenu: false
  },
  {
    name: 'Games',
    content: false,
    page: '/games',
    subMenu: false
  },
  {
    name: 'Genres',
    content: true,
    page: '/genres',
    subMenu: true
  },
  {
    name: 'API',
    content: false,
    page: '/',
    subMenu: false
  },
  // {
  //   name: 'Icon-Game',
  //   content: true,
  //   page: '/my-likes',
  //   subMenu: false,
  //   icon: <LibraryGames />
  // }
]

export const menuIcons = [
  {
    name: 'search',
    icon: <SearchIcon className="search--icon"/>
  },
  {
    name: 'game-collection',
    icon: <LibraryGames className="games--collection--icon"/>
  },
  {
    name: 'user',
    icon: <UserIcon className="user--icon"/>
  },
]