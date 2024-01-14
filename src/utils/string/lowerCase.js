/*
  lowerCase: 转换字符串string以空格分开单词，并转换为小写
  @params {string} 要改写的字符串
*/

function lowerCase(str){
  if(!str){
    return ''
  }
  const newstr=str.replace(/[A-Z]/,(chart)=>`-${chart.toLowerCase()}`)
  const words=newstr.split(/[-_\s]+/).filter(item=>{
    if(item){
      return item
    }
  })  //将字符串分割成单词数组

  const camelCaseString=words.map(str=>str.toLowerCase()).join(" ")

  return camelCaseString
}

// \s空白字符
//toLowerCase()小写

//示例
let res=lowerCase('--Foo-Bar--')
console.log(res);
