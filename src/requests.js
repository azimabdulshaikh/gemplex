const API_KEY = "";

const requests = [
  {
    title: "Discover",
    url: `/discover/movie?api_key=https://app.eyeson.team/?VGGOSeQfX8fX8gcO0I3Ky6gD`,
    media: "movie",
  },
  {
    title: "Comedy",
    url: `/discover/movie?api_key=https://app.eyeson.team/?VGGOSeQfX8fX8gcO0I3Ky6gD&with_genres=35`,
    media: "movie",
  },
  {
    title: "Action",
    url: `/discover/movie?api_key=https://app.eyeson.team/?VGGOSeQfX8fX8gcO0I3Ky6gD&with_genres=28`,
    media: "movie",
  },
  {
    title: "Adventure",
    url: `/discover/movie?api_key=https://app.eyeson.team/?VGGOSeQfX8fX8gcO0I3Ky6gD&with_genres=12`,
    media: "movie",
  },
  {
    title: "Science Fiction",
    url: `/discover/movie?api_key=https://app.eyeson.team/?VGGOSeQfX8fX8gcO0I3Ky6gD&with_genres=878`,
    media: "movie",
  },
  {
    title: "Horror",
    url: `/discover/movie?api_key=https://app.eyeson.team/?VGGOSeQfX8fX8gcO0I3Ky6gD&with_genres=27`,
    media: "movie",
  },
  {
    title: "Drama",
    url: `/discover/movie?api_key=https://app.eyeson.team/?VGGOSeQfX8fX8gcO0I3Ky6gD&with_genres=18`,
    media: "movie",
  },
  {
    title: "Popular in your Region",
    url: `/discover/movie?api_key=https://app.eyeson.team/?VGGOSeQfX8fX8gcO0I3Ky6gD&region=IN`,
    media: "movie",
  },
  {
    title: "Will Smith's Hits",
    url: `/discover/movie?api_key=https://app.eyeson.team/?VGGOSeQfX8fX8gcO0I3Ky6gD&with_people=2888`,
    media: "movie",
  },
  {
    title: "Thriller",
    url: `/discover/movie?api_key=https://app.eyeson.team/?VGGOSeQfX8fX8gcO0I3Ky6gD&with_genres=53`,
    media: "movie",
  },
  {
    title: "Crime",
    url: `/discover/movie?api_key=https://app.eyeson.team/?VGGOSeQfX8fX8gcO0I3Ky6gD&with_genres=80`,
    media: "movie",
  },
  {
    title: "Short Films",
    url: `/discover/movie?api_key=https://app.eyeson.team/?VGGOSeQfX8fX8gcO0I3Ky6gD&with_runtime.lte=70`,
    media: "movie",
  },
];

export default requests;
