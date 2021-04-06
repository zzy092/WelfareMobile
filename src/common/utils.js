 //防抖函数
 export function debunce(func){
  let timer=null
  return function(...args){
    if(timer)clearTimeout(timer)
    timer=setTimeout(()=>{
      func.apply(this,args)
    },0)
  }
}
