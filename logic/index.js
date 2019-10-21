function Index()
{
	this.container = null;
	this.media = null;

	this.install = function()
	{
		this.container = document.querySelector('.flexbin');

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

		if(target == '')
		{
			let result = ``;
			let items = this.media.sortByQuality(this.media.db);
			for (let i = 0; i < items.length; i++)
			{
				result += items[i].html(0);
			}
			this.container.innerHTML = result;
		}
		else if(target == 'one' || target == 'two' || target == 'three' || target == 'four')
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