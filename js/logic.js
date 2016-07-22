var fse = require("fs-extra");
fse.readdir("/home/tom", function(err, file){
  for(var i = 0; i < file.length; ++i){
    var li = document.createElement("li"), span = document.createElement("span");
    var img = new Image();
    var files = document.getElementById("files");
    li.setAttribute("class", "mdl-list__item");
    span.setAttribute("onclick", "fileClick(this.innerHTML)");
    span.setAttribute("class", "mdl-list__item-primary-content");
    img.setAttribute("src", "assets/folder.png");
    span.innerHTML = file[i];
    li.appendChild(img);
    li.appendChild(span);
    files.appendChild(li);
  }
});
var fileClick = function(name){
  var shell = require("electron").shell;
  if(fse.statSync("/home/tom/" + name).isFile()){
    shell.openItem("/home/tom/" + name);
  }
}
