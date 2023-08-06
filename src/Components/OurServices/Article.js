import React from 'react'

const Article = (article) => {
    return (
        <>
        <img src={article.img} alt="services" />
        <h4>{article.servicesName}</h4>
        <p>{article.p}</p>
        </>
    )
}

export default Article