//import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';



export default function NewsSummaryCard(news) {
  const  {title, details, image_url, _id} = news.news;
  const {name, published_date, img} = news.news.author
  console.log(news.news);
  return (
    <div>
      <Card className='mb-2'>
      <Card.Header>
        <div className="news-author d-flex">
        <Card.Img variant="top" src={img} style={{width: '3rem',
    borderRadius: '50%'}} />
          <div className="author mx-2">
          <p className='mb-0'>{name}</p>
          <p className='mb-0'>{published_date}</p>
          </div>
        </div>
      </Card.Header>
      <Card.Body>
      <Card.Img variant="top" src={image_url} />
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {
           details.length > 250 ? 
           <p>
            {details.slice(0, 250) + '.....' } <Link to={`/news/${_id}`}>Read More</Link>
           </p> : <p>{details}</p>
          }
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
  )
}
