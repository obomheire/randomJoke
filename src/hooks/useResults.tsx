import {useState, useEffect} from "react";
import chuckNorris from "../api/chuckNorris";

type result = [
  {
    categories: string[];
    created_at: string;
    icon_url: string;
    id: string;
    updated_at: string;
    url: string;
    value: string;
  }
]

const useResult = () => {
  
  const [results, setResults] = useState<result>();
  const [errorMessage, setErrorMessage] = useState<string>('')

const searchApi = async (serachTerm: string) => {
      try{
        const response = await chuckNorris.get(`/search?query=${serachTerm}`, {
          params: {
            limit: 50,
            term: serachTerm,
          },
        });
        setResults(response.data.result);
        // console.log(response.data.result.value);
      }catch(error){
        setErrorMessage('Somthing went wrong')
      }
 }

 useEffect(() => {
  searchApi('woman')
 }, [])

 return [results, searchApi, errorMessage]
}

export default useResult;