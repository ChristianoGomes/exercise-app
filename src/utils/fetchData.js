export const exerciseOptions = {
  method: 'GET',
  url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
  params: {limit: '1000'},
  headers: {
    'X-RapidAPI-Key': 'e4984b353emsh9ce46ce96c2de74p15b575jsn18b4efc6f87b',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
    'X-RapidAPI-Key': 'e4984b353emsh9ce46ce96c2de74p15b575jsn18b4efc6f87b',
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
};