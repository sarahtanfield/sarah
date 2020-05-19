function Index()
{
	this.container = null;
	this.media = null;
	const INDEX_MEDIA = 8;
	const HEADER_MAIN_STATIC = 'sarah tanfield';
	const HEADER_MAIN_LINK = '<a href="#">sarah tanfield</a>';
	const HEADER_PUBLICATION_STATIC = 'publication';
	const HEADER_PUBLICATION_LINK = '<a href="#publication">publication</a>';
	const HEADER_PACKAGING_STATIC = 'packaging';
	const HEADER_PACKAGING_LINK = '<a href="#packaging">packaging</a>';
	const HEADER_PRESENTATION_STATIC = 'presentation';
	const HEADER_PRESENTATION_LINK = '<a href="#presentation">presentation</a>';

	let itemsAll = null;
	this.getItemsAll = function(){ return itemsAll; }
	let itemsHome = null;
	this.getItemsHome = function(){ return itemsHome; }
	let itemsPublication = null;
	this.getItemsPublication = function(){ return itemsPublication; }
	let itemsPackaging = null;
	this.getItemsPackaging = function(){ return itemsPackaging; }
	let itemsPresentation = null;
	this.getItemsPresentation = function(){ return itemsPresentation; }

	this.install = function()
	{
		this.container = document.querySelector('#gallery');
		this.media = new Media();
		this.media.install();
	}

	this.start = function()
	{
		itemsAll = this.media.sortByQuality(this.media.db);
		itemsHome = itemsAll.slice(0, INDEX_MEDIA);
		itemsPublication = this.media.filterByCategory(itemsAll, 'publication');
		itemsPackaging = this.media.filterByCategory(itemsAll, 'packaging');
		itemsPresentation = this.media.filterByCategory(itemsAll, 'presentation');
		this.load();
	}

	this.load = function()
	{
		let hash = window.location.hash;
		let target = hash ? hash.substr(1, hash.length - 1) : '';

		this.stylelinks(target);

		if (target == 'all')
		{
			this.displayContent(itemsAll);
		}
		else if( target == 'publication')
		{
			this.displayContent(itemsPublication);
		}
		else if (target == 'packaging')
		{
			this.displayContent(itemsPackaging);
		}
		else if (target == 'presentation')
		{
			this.displayContent(itemsPresentation);
		}
		else
		{
			this.displayContent(itemsHome);
		}
	}

	this.displayContent = function(content)
	{
		let result = ``;
		for (let i = 0; i < content.length; i++)
		{
			result += content[i].html(0);
		}
		this.container.innerHTML = result;
	}

	this.stylelinks = function(target)
	{
		if (target == '')
		{
			document.getElementById('header').innerHTML=HEADER_MAIN_STATIC;
			document.getElementById('header').className='navStatic';
		}
		else
		{
			document.getElementById('header').innerHTML=HEADER_MAIN_LINK;
			document.getElementById('header').className='';
		}

		if (target == 'publication')
		{
			document.getElementById('navPublication').innerHTML=HEADER_PUBLICATION_STATIC;
			document.getElementById('navPublication').className='navStatic';
		}
		else
		{
			document.getElementById('navPublication').innerHTML=HEADER_PUBLICATION_LINK;
			document.getElementById('navPublication').className='nav';
		}

		if (target == 'packaging')
		{
			document.getElementById('navPackaging').innerHTML=HEADER_PACKAGING_STATIC;
			document.getElementById('navPackaging').className='navStatic';
		}
		else
		{
			document.getElementById('navPackaging').innerHTML=HEADER_PACKAGING_LINK;
			document.getElementById('navPackaging').className='nav';
		}

		if (target == 'presentation')
		{
			document.getElementById('navPresentation').innerHTML=HEADER_PRESENTATION_STATIC;
			document.getElementById('navPresentation').className='navStatic';
		}
		else
		{
			document.getElementById('navPresentation').innerHTML=HEADER_PRESENTATION_LINK;
			document.getElementById('navPresentation').className='nav';
		}

		if (target == 'all')
		{
			document.getElementById('navAll').style.display='none';
		}
		else
		{
			document.getElementById('navAll').style.display='inline';
		}
	}
}