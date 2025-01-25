'use client'

import { Skeleton } from "./ui/skeleton"

const SkeletonGrid = ({itemCount}) => {
  return (
    <div className="pt-7 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-[20px] mb-32">
        {Array.from({length: itemCount}).map((_, index) => {
            return(
              <div className="flex flex-col space-y-3" key={index}>
                <Skeleton className="h-[300px]  " />
                {/* <div className="space-y-2 ">
                    <Skeleton className="  h-4" />
                    <Skeleton className=" h-4 w-[200px]" />
                </div> */}
              </div>
            )
        })}
    </div>
  )
}

export default SkeletonGrid