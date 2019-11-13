'use strict';

function Image(data)
{
  this.file        = data.file;
  this.description = data.description;
  this.projectCode = data.projectcode;

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

    let result = '';
    result += `<div class='image-container'>`;
    result += `<div class='image-overlay' onclick="lightbox.load('${ steps }media/${ this.file }')">`;
    result += `<div class='image-desc'>Test test test test test test test test test test test test test test test test test test test test test </div>`;
    result += `</div>`;
    result += `<img src='${ steps }media/${ this.file }' class='${ imageAlign }' } onclick="lightbox.load('${ steps }media/${ this.file }')" />`;
    result += `</div>`;

    return result;
  }
}