import { useState } from "react"

const Tour = ({id,image,info,name,price,removeTour}) => {

    const [readmore,setReadMore] =useState(false)
  return (
    <article className="single-tour">
        <img src={image} alt={name} className="img"/>
        <span className="tour-price"> ${price} </span>
        <div className="tour-info">
            <h5>{name}</h5>
            <p>{readmore ? info  : `${info.substring(0,150)}...`}
            <button type="button" className="info-btn" 
            onClick={()=> setReadMore(!readmore)}>
                {readmore ? ' Show Less' : 'Read more'}

            </button>
            </p>
            <button type="button" className="btn btn-block delete-btn" 
            onClick={() => removeTour(id)}>
                Not interesteds
            </button>

        </div>



    </article>
  )
}

export default Tour