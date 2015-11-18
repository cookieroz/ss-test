module.exports = {
	renderData: renderData,
	createItemElement: createItemElement,
	createTagAddItem: createTagAddItem,
	getImage: getImage,
	createReadMore: createReadMore,
	createRelatedArticles: createRelatedArticles
}

function renderData(results) {
	var list = document.querySelector('.news-list');
	list.innerHTML = '';

	for (i = 0; i < results.length; i++) {
		var result = results[i];
		var element = createItemElement(result);
		list.appendChild(element);
	}
	return results;
}

function createItemElement(result) {
	var li = document.createElement('li'),
      div = document.createElement('div');

  var title = createTagAddItem('h2', result.titleNoFormatting);
  li.appendChild(title);
  div.appendChild(createTagAddItem('span', result.publishedDate));
  div.appendChild(getImage(result.image.url));
  div.appendChild(createTagAddItem('p', result.content));
  div.appendChild(createReadMore(result.unescapedUrl));
  createRelatedArticles(div, result.relatedStories);

  div.classList.add('hide');

  title.addEventListener('click', function(ev) {
  	if(div.classList.contains('hide')){
  		div.classList.remove('hide');
  	} else {
  		div.classList.add('hide');
  	}
  })

  li.appendChild(div);
  return li;
}

// function to create tag and add data into ta
function createTagAddItem(tag, item) {
  var ele = document.createElement(tag);
  ele.innerHTML = item;
  return ele;
}

// function to create an img element
// only need the url 
function getImage(url) {
  var image = document.createElement('img');
  image.src = url;
  return image;   
}

// function to create read more link 
function createReadMore(link) {
  var aTag = document.createElement('a');
  aTag.href = link;
  aTag.target = '_blank';
  aTag.text = 'Read More';
  return aTag;   
}

function createRelatedArticles(elem, articles) {
	if(!articles) { return }
	elem.appendChild(createTagAddItem('h3', 'Related Stories'));
	for(var i = 0; i < articles.length; i++) {
		var article = articles[i];
		elem.appendChild(createTagAddItem('h4', article.title));
    elem.appendChild(createReadMore(article.unescapedUrl));
	}
}

