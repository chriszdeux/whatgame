
export const menuList = [
  {
    name: 'Home',
    content: false,
    page: '/',
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
    // page: '',
    subMenu: true
  },
  {
    name: 'Library',
    content: false,
    page: '/favorite-games',
    saved: true,
    count: true
  },
  {
    name: 'API',
    content: false,
    page: '/api',
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