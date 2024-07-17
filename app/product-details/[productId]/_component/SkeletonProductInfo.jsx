import React from 'react'

function SkeletonProductInfo() {
    return (
        <div>
                <div className= 'w-[400px] h-[20px] mt-2 bg-slate-200 rounded-lg animate-pulse'></div>        
                <div className= 'w-[350px] h-[20px] mt-2 bg-slate-200 rounded-lg animate-pulse'></div>        
                <div className= 'w-[300px] h-[20px] mt-2 bg-slate-200 rounded-lg animate-pulse'></div>        
                <div className= 'w-[200px] h-[20px] mt-2 bg-slate-200 rounded-lg animate-pulse'></div>        

        </div>
    )
}
export function SkeletonProductInfoCategory() {
    return (
        <div className="flex gap-3 flex-wrap">
            <div className= 'w-[400px] h-[225px] bg-slate-200 rounded-lg animate-pulse'></div>
            <div className= 'w-[400px] h-[225px] bg-slate-200 rounded-lg animate-pulse'></div>
            <div className= 'w-[400px] h-[225px] bg-slate-200 rounded-lg animate-pulse'></div>
            <div className= 'w-[400px] h-[225px] bg-slate-200 rounded-lg animate-pulse'></div>
        </div>
    )
}
export default SkeletonProductInfo