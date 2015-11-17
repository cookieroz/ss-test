module.exports = function(data){
	var results = data.results,
			list = document.querySelector('.news-list');

	for (i = 0; i < results.length; i++) {
		var result = results[i]
		var element = createItemElement(result)
		list.appendChild(element)
	}
}

var createItemElement = function(result){
	var li = document.createElement('li'),
      div = document.createElement('div');

  li.appendChild(createTagAddItem('h2', result.titleNoFormatting));
  div.appendChild(getImage(result.image.url));
  div.appendChild(createTagAddItem('p', result.content));
  div.appendChild(createReadMore(result.unescapedUrl));
  createRelatedArticles(div, result.relatedStories)
  li.appendChild(div)
  return li
}

// function to create tag and add data into ta
var createTagAddItem = function(tag, item) {
  var ele = document.createElement(tag);
  ele.innerHTML = item;
  return ele;
};

// function to create an img element
// only need the url 
var getImage = function(url) {
  var image = document.createElement('img');
  image.src = url;
  return image;   
};

// function to create read more link 
var createReadMore = function(link) {
  var aTag = document.createElement('a');
  aTag.href = link;
  aTag.target = '_blank';
  aTag.text = 'Read More';
  return aTag;   
};

var createRelatedArticles = function(elem, articles){
	if(!articles){ return }
	elem.appendChild(createTagAddItem('h3', 'Related Stories'));
	for(var i = 0; i < articles.length; i++){
		var article = articles[i]
		elem.appendChild(createTagAddItem('h4', article.title));
    elem.appendChild(createReadMore(article.unescapedUrl));
	}
}

