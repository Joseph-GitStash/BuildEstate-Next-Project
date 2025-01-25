
import React, {useContext} from 'react'
import SkeletonGrid from '../SkeletonGrid'
import BlogSkeleton from './BlogSkeleton'
import { PropertyContext } from '@/contexts/PropertyContext'
import BlogCard from './BlogCard'


const BlogList = () => {
  const {articles, isLoading, error} = useContext(PropertyContext)
  if(error) return <p>Error: {error}</p>

  if(articles.length === 0 && !isLoading){
    return(
        <div className="h-[80vh]">
            <p className="text-[16px] flex flex-col  bg-gradient-to-r from-zinc-50/45 to-zinc-50 text-transparent bg-clip-text py-2 text-center">Searching for articles</p>
        </div>
    )
  }

  if(isLoading){
    return <BlogSkeleton itemCount={4} />
  } else {
    return <div>
        {/* <h3 className="text-[14.5px] md:text-[16px] flex flex-col tracking-wide font-semibold bg-gradient-to-r from-zinc-50/45 to-zinc-50 text-transparent bg-clip-text pt-2">
            {`${articles.length === 1 ? articles.length + " article found ": articles.length + " articles found " } `}
        </h3> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[20px] mb-[40px]">
        {articles.map((article) => {
            return(
                <div key={article.id}>
                  <BlogCard article={article} />
                </div>
            )
        })}
        </div>
        
    </div> }
}

export default BlogList