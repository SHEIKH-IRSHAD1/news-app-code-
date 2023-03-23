import React, { } from 'react'
import {
  // Link
}from 'react-router-dom'
const  NewsItem=(props)=> {
  
    
    let {title,description,imageUrl,newsUrl,author,date,source}=props
    return (<>  
   
        <div className="card" style={{width: "18rem"}}>
        <span className="badge badge-pill badge-primary bg-dark">Source {"\t"+source}</span>
      <img src={imageUrl?imageUrl:"index.jpeg"} className="card-img-top" alt="index.jpeg"/>
      
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <small className="text-muted">
         by {author?author:"Unknown"} 
        </small>
       <br/> <small className="text-muted">
          on {new Date(date).toGMTString()}
        </small>
      <br/> <a href={newsUrl}target="_blank" rel="noreferrer"className="btn btn-sm btn-primary bg-dark">read more</a>
      </div>
    </div>
    </>
    )
  
}

export default NewsItem
