'use client'

import BlogHero from '@/components/Blog/BlogHero'
import BlogList from '@/components/Blog/BlogList'

const BlogPage = () => {
  return (
    <section className='layout flex '>
      <BlogHero />
      <BlogList />
    </section>
  )
}

export default BlogPage