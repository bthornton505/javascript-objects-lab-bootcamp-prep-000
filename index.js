const recipes = {key: 'value'};

function updateObjectWithKeyAndValue(recipes, key, value){
  return Object.assign({}, recipes, {[key]: value});
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  
}