function Lightbox()
{
  this.container = null;
  this.main = null;
  this.img = null;
  this.imgContainer = null;
  this.desc = null;
  this.prefix = null;
  this.left = null;
  this.right = null;
  this.black = null;

  itemList = null;
  itemCurrent = null;

  this.install = function(main, prefix)
  {
    this.main = main;
    this.prefix = prefix;

    this.black = document.createElement('div');
    this.black.className = this.prefix + '-close';
    this.main.appendChild(this.black);
    this.addEvent(this.black, 'click', function(){ lightbox.close(); });

    this.container = document.createElement('div');
    this.container.className = this.prefix + '-container';

    this.imgContainer = document.createElement('div');
    this.imgContainer.className = this.prefix + '-imgContainer';
    this.container.appendChild(this.imgContainer);
    
    this.img = document.createElement('img');
    // this.addEvent(this.img, 'click', function(){ lightbox.close(); });
    this.imgContainer.appendChild(this.img);

    this.left = document.createElement('div');
    this.left.className = this.prefix + '-left';
    this.imgContainer.appendChild(this.left);
    this.addEvent(this.left, 'click', this.navLeft);
    this.right = document.createElement('div');
    this.right.className = this.prefix + '-right';
    this.imgContainer.appendChild(this.right);
    this.addEvent(this.right, 'click', this.navRight);

    this.desc = document.createElement('div');
    this.desc.className = this.prefix + '-desc';
    this.container.appendChild(this.desc);

    this.main.appendChild(this.container);
  }

  this.load = function(file, desc, list)
  {
    this.img.src = file;
    itemCurrent = file;
    itemList = list;

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

  this.navLeft = function()
  {
    console.log('left');
    console.log(itemCurrent);
    console.log(itemList);
    // TODO: find itemCurrent in itemList, load prev
  }

  this.navRight = function()
  {
    console.log('right');
    console.log(itemCurrent);
    console.log(itemList);
    // TODO: find itemCurrent in itemList, load next
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