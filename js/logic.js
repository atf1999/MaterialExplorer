var fse = require("fs-extra");
var directory = "/home/tom/"
fse.readdir("/home/tom", function(err, file){
  for(var i = 0; i < file.length; ++i){
    var li = document.createElement("li"), span = document.createElement("span");
    var img = new Image();
    var files = document.getElementById("files");
    var src = (fse.statSync(directory + file[i]).isDirectory() ? "assets/folder.png" : "assets/file-document.png");
    li.setAttribute("class", "mdl-list__item");
    span.setAttribute("onclick", "fileClick(this.innerHTML)");
    span.setAttribute("class", "mdl-list__item-primary-content");
    span.setAttribute("id", file[i]);
    img.setAttribute("src", src);
    span.innerHTML = file[i];
    li.appendChild(img);
    li.appendChild(span);
    files.appendChild(li);
  }
});
var fileClick = function(name){
  var shell = require("electron").shell;
  if(fse.statSync(directory + name).isFile()){
    shell.openItem(directory + name);
  }
}
