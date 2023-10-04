import { useState } from "react";
import Loading from "./Loading";
import Tours from "./Tours";

const url = 'https://course-api.com/react-tours-project';

const App = () => {
  const [isLoading,seisLoading ] = useState(true)
  const [tours,setTours ] = useState(true)

  const removeTour =(id)=>{
    const newTour = tours.filter((tours) => tours.id !== id);
    setTours(newTour)
  }




  const fetchTours = async ()=>{
    seisLoading(true)
    try {
      const respons = await fetch(url)
      const Tours  = await respons.json()
      setTours(Tours)
      console.log(Tours);
    } catch (error) {
      console.log(error);
      
    }
    seisLoading(false)
  }

  useState(()=>{
    fetchTours();

  },[])
  if (isLoading) {
    return <main>
      <Loading/>
    </main>
    
  }
  if (tours.length === 0) {
    return(
      <main>
        <div className="title">
            <h2> no tours Left</h2>
            <button type="button"
            style={{marginTop : '2rem'}}
            className="btn"
            onClick={()=> fetchTours()}>
              Refresh
            </button>

        </div>

      </main>
    )
    
  }



  return <main>
    <Tours tours = {tours} removeTour={removeTour}/>
    </main>;
};
export default App;
