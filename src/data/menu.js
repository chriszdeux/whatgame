
export const menuList = [
  {
    name: 'Home',
    content: false,
    page: '/whatgame',
    subMenu: false
  },
  {
    name: 'Games',
    content: false,
    page: '/whatgame/games',
    subMenu: false
  },
  {
    name: 'Genres',
    content: true,
    // page: '',
    subMenu: true
  },
  {
    name: 'Library',
    content: false,
    page: '/whatgame/favorite-games',
    saved: true,
    count: true
  },
  {
    name: 'API',
    content: false,
    page: '/whatgame/api',
    subMenu: false,
    // link: 'https://rawg.io/apidocs'
  },

  // {
  //   name: 'Icon-Game',
  //   content: true,
  //   page: '/my-likes',
  //   subMenu: false,
  //   icon: <LibraryGames />
  // }
]

// export const menuIcons = [
//   {
//     name: 'search',
//     icon: <SearchIcon className="search--icon"/>
//   },
//   {
//     name: 'game-collection',
//     icon: <LibraryGames className="games--collection--icon"/>
//   },
//   {
//     name: 'user',
//     icon: <UserIcon className="user--icon"/>
//   },
// ]