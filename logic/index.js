function Index()
{
	this.container = null;
	this.media = null;
	const INDEX_MEDIA = 8;
	const HEADER_MAIN_STATIC = 'Sarah Tanfield';
	const HEADER_MAIN_LINK = '<a href="#">Sarah Tanfield</a>';
	const HEADER_PUBLICATION_STATIC = 'Publication';
	const HEADER_PUBLICATION_LINK = '<a href="#publication">Publication</a>';
	const HEADER_PACKAGING_STATIC = 'Packaging';
	const HEADER_PACKAGING_LINK = '<a href="#packaging">Packaging</a>';
	const HEADER_PRESENTATION_STATIC = 'Presentation';
	const HEADER_PRESENTATION_LINK = '<a href="#presentation">Presentation</a>';

	this.install = function()
	{
		this.container = document.querySelector('#gallery');

		this.media = new Media();
		this.media.install();
	}

	this.start = function()
	{
		this.load();
	}

	this.load = function()
	{
		let hash = window.location.hash;
		let target = hash ? hash.substr(1, hash.length - 1) : '';

		this.stylelinks(target);

		if(target == 'all')
		{
			let result = ``;
			let items = this.media.sortByQuality(this.media.db);
			for (let i = 0; i < items.length; i++)
			{
				result += items[i].html(0);
			}
			this.container.innerHTML = result;
		}
		else if(target == 'publication' || target == 'packaging' || target == 'presentation')
		{
			let result = ``;
			let items = this.media.sortByQuality(this.media.db);
			items = this.media.filterByCategory(items, target);
			for (let i = 0; i < items.length; i++)
			{
				result += items[i].html(0);
			}
			this.container.innerHTML = result;
		}
		else
		{
			let result = ``;
			let items = this.media.sortByQuality(this.media.db);
			for (let i = 0; i < INDEX_MEDIA; i++)
			{
				result += items[i].html(0);
			}
			this.container.innerHTML = result;
		}

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
			document.getElementById('header').className='nav';

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