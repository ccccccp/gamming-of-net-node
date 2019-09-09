/**
 * @params 路径/api/live/:id
 * @params 参数 {id:1}
 * @return /api/live/1
 */
module.exports = function (path,obj){
  return path.replace(/:(\w+)/g,function($1,$2){
    if($2){
      return obj[$2]
    }
  })
}