import React, { useState, useEffect } from 'react'
import { Carousel } from 'react-bootstrap'
import Moment from 'react-moment';
import '../style/style.css'

const Article = ({ match }) => {
    const [ article, setArticle ] = useState([])
    const [ aLength ] = useState(['One', 'Two'])

    useEffect( () => {        
        fetch(`/articles/${match.params.articleId}`)
            .then(response => response.json())
            .then(article => setArticle(article))
            .catch(error => alert(error))
    }, [])

    return (
        <article className="aSingle">
            <div> 
                <h1 className="aSingle-title">{article && article.title}</h1>
                <subtitle className="aSingle-subtitle">
                    <p>By: Poe Tat Joes, Potatoe Inc.</p>
                    <p>Updated  <i>
                        <Moment format="MMMM DD, YYYY">{Date.now()}</Moment> 
                    </i></p>
                </subtitle>
            </div>

            <Carousel indicators={false} className="aSingle-carousel">
                {aLength && aLength.map( item => { 
                    return( 
                        <Carousel.Item>
                            <img
                                className="d-block w-100 aSingle-img"
                                src="https://picsum.photos/150/150"
                                alt="First slide"
                                />
                            <Carousel.Caption >
                                <h3>Image {item}</h3>
                            </Carousel.Caption>
                        </Carousel.Item> 
                        )
                    })
                }
            </Carousel>

            <div className="aSingle-textBody">
                {article && article.text}
            </div>
        </article>
    )
}

export default Article