const recipes = {key: 'value'};

function updateObjectWithKeyAndValue(recipes, key, value){
  var newRecipes = Object.assign({}, key, value);
  return newRecipes;
}