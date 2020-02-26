function Index()
{
	this.container = null;
	this.media = null;
	const INDEX_MEDIA = 8;

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

		if(target == '' || target == 'clients' || target == 'contact' || target == 'about')
		{
			let result = ``;
			let items = this.media.sortByQuality(this.media.db);
			for (let i = 0; i < INDEX_MEDIA; i++)
			{
				result += items[i].html(0);
			}
			this.container.innerHTML = result;

			document.getElementById("extras").style.display = "block";
		}
		else if(target == 'all')
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
			items = this.media.filterByProject(items, target);
			for (let i = 0; i < items.length; i++)
			{
				result += items[i].html(0);
			}
			this.container.innerHTML = result;
		}
	}
}