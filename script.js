let input = document.getElementById("file");
let background = document.getElementById("imgBackground");
let photo = document.getElementById("imgPhoto");
let downloadBtn = document.getElementById("download");
let submit = document.getElementById("submit");
let body = document.body;

const colors = {
  'F': {
    body: "#fb8fff",
    retangulo: "#ff16b5",
    blur: "#ff65ce"
  },
  'M': {
    body: "#45bbff",
    retangulo: '#008fe2',
    blur: '#19abff'
  },
};

const radioButtons = document.querySelectorAll('input[type="radio"]');
radioButtons.forEach((button) => {
  button.onclick = () => {
    if (button.checked) {
      const sexo = document.querySelector('input[name="sexo"]:checked').value;
      let blur = document.getElementById('blur');
      let h1 = document.getElementById('hojeDia');
      console.log(colors[`${sexo}`]);
      body.style.background = colors[`${sexo}`].body;
      h1.style.backgroundColor = colors[`${sexo}`].retangulo;
      blur.style.backgroundColor = colors[`${sexo}`].blur;
    }
  };
});

submit.addEventListener("click", function () {
  let nome = document.getElementById("nome").value;
  let titulo_nome = document.getElementById("nomeTitulo");
  titulo_nome.textContent = nome;

  let imageContainer = document.getElementById('img');
  imageContainer.style.display = "flex";
  downloadBtn.style.display = "block";

  createFolder();
});

function createFolder() {
    let file = input.files[0];
    let reader = new FileReader();

    reader.onload = () => {
      background.src = reader.result;
      photo.src = reader.result;
    };

    reader.readAsDataURL(file);
}

downloadBtn.addEventListener("click", function (e) {
  let nome = document.getElementById("nome").value;
  var node = document.getElementById("img");

    html2canvas(node,{allowTaint: true,
			useCORS: true}).then(function(canvas) {
    var link = document.createElement("a");
    document.body.appendChild(link);
    link.download = `aniversario_${nome.split(' ')[0]}`;
    link.href = canvas.toDataURL();
    link.target = "_blank";
    link.click();
    });
});
