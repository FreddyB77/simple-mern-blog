import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import axios from 'axios'

const ArticleForm = ({history}) => {
    const initialState = { title: '', text: ''};
    const [ values, setValues ] = useState(initialState);

    const newArticle = {
        title: values.title,
        text: values.text
    }

    const handleSubmit = e => {
        e.preventDefault();

       axios.post('http://localhost:4000/articles', newArticle)
        .then(res => {
            console.log(res);
            history.push(`/articles/${res.data}`)
        })
        .catch(err => console.log(err.message))
    }

    return (
        <Form className="aForm-main" onSubmit={handleSubmit}>
            <Form.Group controlId="formTitle">
                <Form.Label style={{margin: 0}}>Title</Form.Label>
                <Form.Control 
                    type="text" 
                    placeholder="Title of your article" 
                    required={true} 
                    onChange={ e => setValues({ ...values, title: e.target.value }) }
                />
            </Form.Group>
            <Form.Group>
                <Form.Label style={{margin: 0}}>Text</Form.Label>
                <Form.Control 
                    as="textarea" 
                    rows="5" 
                    placeholder="Text for your article..." 
                    required={true} 
                    onChange={ e => setValues({ ...values, text: e.target.value }) }
                />
            </Form.Group>

            <Button 
                variant="primary" 
                type="submit"
            >
                Submit
            </Button>
        </Form>

        
    )
}

export default ArticleForm