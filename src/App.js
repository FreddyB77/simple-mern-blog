import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'

import Article from './components/article/Article'
import HomePage from './components/article/Home'
import ArticleForm from './components/article/ArticleForm'

import StaticNav from './components/universal/StaticNav'

const App = () => {
  return (
    <>
    <StaticNav />
    <BrowserRouter>
      <Container>
        <Switch>
          <Route path="/articles/new" component={ArticleForm} />
          <Route path="/articles/:articleId/edit" component={ArticleForm} />
          <Route path="/articles/:articleId" component={Article} />
          <Route path="/" exact component={HomePage} />
        </Switch>
      </Container>
    </BrowserRouter>
    </>
  )
}

export default App