'use strict';

function Media()
{
  this.db = [];

  this.install = function()
  {
    let data = new Tablatal(MEDIA).parse();
    for (var i = 0; i < data.length; i++)
    {
      this.db[i] = new Image(data[i]);
    }
  }

  this.filterByProject = function(dataset, project)
  {
    return dataset.filter(item => item.proj == project);
  }

  this.sortByQuality = function(dataset)
  {
    return dataset.sort(function(a,b) { return b.quality - a.quality; });
  }
}