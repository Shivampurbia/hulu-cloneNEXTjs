import Nav from '../components/Nav'; 
import Header from '../components/Header';
import Result from '../components/Result';
import requests from "../utils/requests";


export default function Home({results}) {
   console.log(results);
  
  return (<div>
    <Header/>
    <Nav/>
    <Result results={results}/>
  </div>
    
    
    
  )
}

//Server side render
export async function getServerSideProps(context) {
  const genre = context.query.genre;
  // console.log("genre is ",genre);
  const request = await fetch(
    `https://api.themoviedb.org/3${
      requests[genre]?.url || requests.fetchTrending.url
    }`
  ).then((res) => res.json());
  // console.log("data is ",(request.results).length);
  return ({
    props: {
      results: request.results,
    },
  });
};
