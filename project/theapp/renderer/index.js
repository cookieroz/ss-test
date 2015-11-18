module.exports = {
	renderData: renderData,
	createItemElement: createItemElement,
	createTagAddItem: createTagAddItem,
	getImage: getImage,
	createReadMore: createReadMore,
	createRelatedArticles: createRelatedArticles,
  toggleClass: toggleClass
}

function renderData(results) {
	var list = document.querySelector('.news-list');

	list.innerHTML = '';

	for (i = 0; i < results.length; i++) {
		var result = results[i],
		    element = createItemElement(result);

		list.appendChild(element);
	}
	return results;
}

function createItemElement(result) {
	var li = document.createElement('li'),
      div = document.createElement('div'),
      title = createTagAddItem('h2', result.titleNoFormatting),
      aContent = createTagAddItem('p', result.content);

  li.appendChild(title);
  div.appendChild(createTagAddItem('small', result.publishedDate));
  div.appendChild(getImage(result.image.url));
  div.appendChild(aContent);
  aContent.appendChild(createReadMore(result.unescapedUrl));
  createRelatedArticles(div, result.relatedStories);

  div.classList.add('hide', 'content');

  toggleClass(title, div, 'hide');
  toggleClass(title, title, 'carot-up');
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

  var newDiv = document.createElement('div'),
      relatedTitle = createTagAddItem('h3', 'Related Stories');

  elem.appendChild(relatedTitle);
  for(var i = 0; i < articles.length; i++) {
    var article = articles[i];
    var aTitle = createTagAddItem('h4', article.titleNoFormatting);
    newDiv.appendChild(aTitle);
    aTitle.appendChild(createReadMore(article.unescapedUrl));
  }

  newDiv.classList.add('related', 'hide');
  toggleClass(relatedTitle, newDiv, 'hide');
  toggleClass(relatedTitle, relatedTitle, 'carot-up');
  elem.appendChild(newDiv);
}

function toggleClass(clicker, container, className) {
  clicker.addEventListener('click', function(ev) {
    if(container.classList.contains(className)){
      container.classList.remove(className);
    } else {
      container.classList.add(className);
    }
  });
}

