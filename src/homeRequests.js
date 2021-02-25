const API_KEY = "";

const homeRequests = [
  {
    title: "Comedy",
    url: `/discover/movie?api_key=621d0c815fc1e3445673a1ad578aceab&with_genres=35`,
    media: "movie",
  },
  {
    title: "Action",
    url: `/discover/movie?api_key=621d0c815fc1e3445673a1ad578aceab&with_genres=28`,
    media: "movie",
  },
  {
    title: "Horror",
    url: `/discover/movie?api_key=621d0c815fc1e3445673a1ad578aceab&with_genres=27`,
    media: "movie",
  },
  {
    title: "Adventure TV Shows",
    url: `/discover/tv?api_key=621d0c815fc1e3445673a1ad578aceab&with_genres=12`,
    media: "tv",
  },
  {
    title: "Popular in your Region TV Shows",
    url: `/discover/tv?api_key=621d0c815fc1e3445673a1ad578aceab&region=IN`,
    media: "tv",
  },
];

export default homeRequests;
