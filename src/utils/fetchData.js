export const exerciseOptions = {
  method: 'GET',
  url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
  params: {limit: '1000'},
  headers: {
    'X-RapidAPI-Key': 'aa6ef4d65fmsh4755667dc84ac64p1f8309jsnf6fbdab2d525',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
    'X-RapidAPI-Key': 'aa6ef4d65fmsh4755667dc84ac64p1f8309jsnf6fbdab2d525',
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
};