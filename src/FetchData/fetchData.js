import axios from "axios";

const Base_Url = "https://exercisedb.p.rapidapi.com/exercises"

const options = {
  params: {limit: '10'},
  headers: {
    'X-RapidAPI-Key': import.meta.env.VITE_API_KEY,
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};

export const fetchData = async (url) => {
    const {data} = await axios.get(`${Base_Url}/${url}` , options);
    return data
}