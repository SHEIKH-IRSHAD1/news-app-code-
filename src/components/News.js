import React, { useEffect,useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

// let loading=false;
const  News=(props)=> {


  const [articles, setarticles] = useState([])
  const [loading, setloading] = useState(true)
  const [page, setpage] = useState(1)
  const [totalResultes, settotalResultes] = useState(0)
  
  
  
  
   const update=async()=>{ 
    props.setprogress(10);
  let url = ` https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=06bdf12e4f2445338ea2840cb9859b96&page=${page}`;
 
  setloading(true)
  let data = await fetch(url).then(res => res.json());
  props.setprogress(50);
  
  setloading(false);
  props.setprogress(100);
 
    setarticles(data.articles);
    settotalResultes(data.totalResultes);

}

useEffect(() => {

  update();
  
},[])


 
    
    
  
  // const prev = async () => {
   
   

  //   setpage(page-1)
  //  update();

  // }
// const next=async()=>{

// setpage(page+1)

// update();
   
// }

 const fetchMoreData=async()=>{
// setState({  page:page+1})

let url =`https://newsapi.org/v2/everything?country=${props.country}&category=${props.category}&apiKey=06bdf12e4f2445338ea2840cb9859b96&page=${page+1}`;
// setState({loading:true});

setloading(true);
setpage(page+1);
let data = await fetch(url).then(res => res.json());
// setState({loading:false});
setloading(false);

// setState({ articles: articles.concat(data.articles),totalResultes:data.totalResultes});
setarticles(articles.concat(data.articles));
settotalResultes(data.totalResultes);

}



    return (


      <>
       
  <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length!==totalResultes}
          loader={loading? <Spinner/>:" "}
        >
          <div className="container"> 
        <div className="row" align="center" >

          {/* <h2>{props.category}</h2>
          <h2>{props.category}</h2>
          <h2>{props.category}</h2>
          <h2>{props.category}</h2> */}
          {/* <h2>{props.category}</h2> */}
          <h2 style={{marginTop:'55px'}}>{props.category}</h2>
        
          {
            articles.map((element) => {
         
              return <div className="col-md-4 my-4  " align="center" key={element.url}>
                <NewsItem
                  title={element.title ? element.title.slice(0, 38) : ""}
                  description={element.description ? element.description.slice(0, 88) : ""}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}
                />

              </div>
            })
          }


        </div></div>
        </InfiniteScroll>

        {/* <div className="container d-flex justify-content-between">
          <button type="button"disabled={page<=1} onClick={prev} className="btn btn-dark">prev</button>
          <button type="button" onClick={next} className="btn btn-dark">next</button>
        </div> */}
      </>
    );
  
      }
  News.defaultProps={
    country:'in',
    category:'general',
    pageSize:10


  }

 News.propTypes={
    country:PropTypes.string,
    category:PropTypes.string,
    pageSize:PropTypes.number
  }

export default News;
