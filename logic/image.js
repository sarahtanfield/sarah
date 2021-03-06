'use strict';

function Image(data)
{
  this.file         = data.file;
  this.fileLocation = `media/${data.file}`;
  this.description  = data.description;
  this.projectCode  = data.projectcode;

  this.description = this.description.replace(/"/g, '&quot;');
  // this.description = this.description.replace(/'/g, '&#39;');
  // this.description = this.description.replace(/'/, '&#39;');

  this.commaSplit = function(data)
  {
    if (data !== undefined)
    {
      var result = data.split(",");
      for (var c = 0; c < result.length; c++)
      {
        result[c] = result[c].trim();
      }
      return result;
    }
    return data;
  }

  this.quality      = data.qf.length == 2 ? parseInt(data.qf.substr(0,1)) : 0;
  this.focus        = data.qf.length == 2 ? data.qf.substr(1,1) : 0;
  this.category     = this.commaSplit(data.category);

  let imageAlign    = "";
  if (this.focus == "T")
  {
    imageAlign = "photoTop ";
  }
  else if (this.focus == "B")
  {
    imageAlign = "photoBottom ";
  }
  else if (this.focus == "1")
  {
    imageAlign = "photoAlignV10 ";
  }
  else if (this.focus == "2")
  {
    imageAlign = "photoAlignV20 ";
  }
  else if (this.focus == "3")
  {
    imageAlign = "photoAlignV30 ";
  }
  else if (this.focus == "4")
  {
    imageAlign = "photoAlignV40 ";
  }
  else if (this.focus == "5")
  {
    imageAlign = "photoAlignV50 ";
  }
  else if (this.focus == "6")
  {
    imageAlign = "photoAlignV60 ";
  }
  else if (this.focus == "7")
  {
    imageAlign = "photoAlignV70 ";
  }
  else if (this.focus == "8")
  {
    imageAlign = "photoAlignV80 ";
  }
  else if (this.focus == "9")
  {
    imageAlign = "photoAlignV90 ";
  }

  this.html = function(stepsBack)
  {
    let steps = ``;
    for (let s = 0; s < stepsBack; s++)
    {
      steps += `../`;
    }

    let descriptionFormatted = ``;
    if (this.description != '' && this.description != undefined)
    {
      // descriptionFormatted = `<a href=#project-${this.projectCode}'>${ this.projectCode }</a> - ${ this.description.replace(/'/g, "\\'")}`;
      descriptionFormatted = `${ this.description.replace(/'/g, "\\'")}`;
    }
    else
    {
      // descriptionFormatted = `<a href='#project-${this.projectCode}'>${ this.projectCode }</a>`;
      descriptionFormatted = ``;
    }

    let result = '';
    result += `<div class='image-container' style='background-image: url(${steps}${ this.fileLocation })' lightbox='${ this.fileLocation }' lightbox-desc='${ this.description }'>`;
      result += `<div class='image-overlay'>`;
        result += `<div class='image-desc'>${ descriptionFormatted }</div>`;
      result += `</div>`;
    result += `</div>`;

    return result;
  }
}