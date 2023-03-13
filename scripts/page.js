
function previewFile() {
  const content = document.querySelector(".content");
  const [file] = document.querySelector("input[type=file]").files;
  const reader = new FileReader();

  if (file) {
    reader.readAsText(file);
  }

  reader.addEventListener(
    "load",
    () => {
      // this will then display a text file
      content.innerText = reader.result;
    },
    false
  );
}
document.addEventListener("DOMContentLoaded", () => {
  var fileInput = document.getElementById("file-input");
  console.log(fileInput)
  var container = document.getElementById("task-display");

  fileInput.addEventListener('change', function () {
    var file = fileInput.files[0];
    var reader = new FileReader();

    reader.onload = function () {
      var lines = reader.result.split('\n');
      for (var i = 0; i < lines.length; i++) {
        var line = lines[i].trim();
        if (line !== '') {
          var values = line.split(',');
          var task_body = values[0];
          var task_value = values[1];
          var div = document.createElement('div');
          div.setAttribute('class', 'task-item');
          div.setAttribute('data-value', task_value);
          div.setAttribute('onclick', 'completeTask(this)');
          div.textContent = task_body;
          container.appendChild(div);
        }
      }
    };

    reader.readAsText(file);
  });
});
