import React from 'react'

const NewsItem=(props)=> {


    let {title,description,imageUrl,newsUrl,author,date,source}=props;
    return (
      <div className='my-3'>
            <div className="card" style={{width: "18rem"}}>
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{source}<span class="visually-hidden">unread messages</span>  </span>
                <img src={!imageUrl?"https://images.wsj.net/im-750639/social":imageUrl} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{title}... </h5>
                    <p className="card-text">{description}...</p>
                    <p className='card-text'><small className='text-muted'>By {!author?"Unknown":author} on {new Date(date).toString()}</small></p>
                    <a rel='noreferrer' href={newsUrl} target="_blank"className="btn btn-sm btn-dark">Read More</a>
                </div>
           </div>
      </div>
    )
}

export default NewsItem

