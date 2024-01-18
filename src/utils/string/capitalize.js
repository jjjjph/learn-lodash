/*
  capitalize: 传入的字符串首字母大写，剩下的小写
  @params {string} 要大写开头的字符串
*/

function capitalize(str){
  const firstWord=str.charAt(0).search(/[A-Z]/)
  if(~firstWord){ //判断第一个字母是否为大写
    return str.charAt(0).toUpperCase()+str.slice(1).toLowerCase()
  } else{
    return undefined
  }
}
 //示例
 let res=capitalize('DskfjGFFJI')
 console.log(res); //Dskfjgffji
