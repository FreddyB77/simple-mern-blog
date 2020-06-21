import React from 'react'
import { Nav } from 'react-bootstrap'
import '../style/style.css'

const StaticNav = () => {

    return (
        <>
        <Nav sticky="top" className="justify-content-center nav-main">
            <Nav.Item>
                <Nav.Link href="/">
                        BAIN's Simple Mern Blog Post
                </Nav.Link>
            </Nav.Item>
        </Nav>
        <Nav className="justify-content-center nav-items">
            <Nav.Item>
                <Nav.Link href="/articles/new">
                    Add Article
                </Nav.Link>
            </Nav.Item>
        </Nav>
        </>
    )
}

export default StaticNav