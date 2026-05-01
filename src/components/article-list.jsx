import React from 'react'
import Article from './article'

function ArticleList() {
  return (
    <main>
        <Article 
            title="{title}" 
            date="{date}" 
            preview="{preview}" 
        />
        
        <Article 
            title="{title}" 
            date="{date}" 
            preview="{preview}" 
        />
    </main>
  )
}

export default ArticleList