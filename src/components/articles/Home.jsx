import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from 'react-bootstrap/Card'
import '../style/style.css'



const HomePage = () => {
    const [article, setArticle] = useState([''])
    
    useEffect( () => {
        axios.get('http://localhost:4000/articles/all')
        .then( articles => {
            setArticle(articles.data);
        })
        .catch( error => console.error(error))
        }, [] )
    
    return (
        <div>
            <h2 className="text-center home-title">All Blog Post</h2>
            <div className="home-cards-container">
            { article && article.map((item)=> {
                return(
                    <Card >
                        <Card.Img 
                            className="home-card-img" 
                            variant="top" 
                            src="https://picsum.photos/200"
                        />
                        <Card.Body>
                            <Card.Title href={`localhost:3000/${item._id}`} className="home-card-title">{item.title}</Card.Title>
                            <Card.Text>{(item.text && item.text.substring(0,50)) }</Card.Text>
                        </Card.Body>
                    </Card>
                )
            })
            }
            </div>
        </div>
    )
}

export default HomePage