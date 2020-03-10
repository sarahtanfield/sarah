function Lightbox()
{
  this.container = null;
  this.main = null;
  this.img = null;
  this.desc = null;
  this.prefix = null;

  this.install = function(main, prefix)
  {
    this.main = main;
    this.prefix = prefix;
    this.addEvent(this.main, 'click', function(){ lightbox.close(); });

    this.container = document.createElement('div');
    this.container.className = this.prefix + '-container';

    this.img = document.createElement('img');
    this.addEvent(this.img, 'click', function(){ lightbox.close(); });
    this.container.appendChild(this.img);

    this.desc = document.createElement('div');
    this.desc.className = this.prefix + '-desc';
    this.container.appendChild(this.desc);

    this.main.appendChild(this.container);
  }

  this.load = function(file, desc)
  {
    this.img.src = file;

    if (desc != '' && desc != undefined)
    {
      this.desc.innerHTML = desc;
      this.desc.style.display = 'block';
      this.img.className = this.prefix + '-img topRadius';
    }
    else
    {
      this.desc.style.display = 'none';
      this.img.className = this.prefix + '-img fullRadius';
    }
    this.main.style.display = 'block';
    
    document.body.style.overflow='hidden';
  }

  this.close = function()
  {
  	if (this.main.style.display != 'none')
  	{
  		this.main.style.display = 'none';
    }
    
    document.body.style.overflow='auto';
  }

  this.handle = function(element, file)
  {
    this.addEvent(element, 'click', function(){ lightbox.load(file); });
  }

  this.addEvent = function(element, evnt, funct)
  {
    if (element.attachEvent)
    {
      return element.attachEvent('on'+evnt, funct);
    }
    else
    {
      return element.addEventListener(evnt, funct, false);
    }
  }
}