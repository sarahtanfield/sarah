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
			for (let i = 0; i < this.media.db.length; i++)
			{
				result += this.media.sortByQuality(this.media.db)[i].html(0);
			}
			this.container.innerHTML = result;
		}
		else if (target == 'x')
		{

		}
		else
		{
			console.log('Unhandled url');
		}
	}
}