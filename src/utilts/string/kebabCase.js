/*
  kebabCase: 转换字符串string为kebab case.kebab case是字符串格式的一种，也称为短线连接命名法、短横线命名法、中横线命名法等，它是一种用短横线连接各个单词组成的命名格式。
  @parmas {string} 要改写的字符串
*/

function kebabCase(str){
  if(!str){
    return ''
  }
  const newstr=str.replace(/[A-Z]/,(chart)=>`-${chart.toLowerCase()}`)
  const words=newstr.split(/[-_\s]+/).filter(item=>{
    if(item){
      return item
    }
  })  //将字符串分割成单词数组

  const camelCaseString=words.map(str=>str.toLowerCase()).join("-")

  return camelCaseString
}

// \s空白字符
//toLowerCase()小写

//示例
let res=kebabCase('__FOO_BAR__')
console.log(res);