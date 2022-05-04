const form = document.getElementById("form");
const select = document.getElementById("select");
const title = document.getElementById("title");
const autor = document.getElementById("autor");
const edicao = document.getElementById("edicao");
const issn = document.getElementById("issn");
const publication = document.getElementById("publication");
const edit = document.getElementById("edit");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  const titleValue = title.value;
  const autorValue = autor.value;
  const edicaoValue = edicao.value;
  const issnValue = issn.value;
  const publicationValue = publication.value;
  const editValue = edit.value;

  if (titleValue === "") {
    setErrorFor(title, "O titulo do livro é obrigatório.");
  } else {
    setSuccessFor(title);
  }

  if (autorValue === "") {
    setErrorFor(autor, "O autor é obrigatório.");
  } else {
    setSuccessFor(autor);
  }

  if (edicaoValue === "") {
    setErrorFor(edicao, "A edição do livro é obrigatória.");
  } else {
    setSuccessFor(edicao);
  }

  if (issnValue === "") {
    setErrorFor(issn, "O ISSN do livro é obrigatório.");
  } else {
    setSuccessFor(issn);
  }

  if (publicationValue === "") {
    setErrorFor(publication, "O ano de publicação é obrigatório.");
  } else if (publicationValue < 1900 || publicationValue > 2019) {
    setErrorFor(publication, "Ano de publicação invalido");
  } else {
    setSuccessFor(publication);
  }

  if (editValue === "") {
    setErrorFor(edit, "A editora do livro é obrigatório.");
  } else {
    setSuccessFor(edit);
  }

  const formControls = form.querySelectorAll(".form-control");

  const formIsValid = [...formControls].every((formControl) => {
    return formControl.className === "form-control success";
  });

  if (formIsValid) {
    console.log("O formulário está 100% válido!");
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");

  // Adiciona a mensagem de erro
  small.innerText = message;

  // Adiciona a classe de erro
  formControl.className = "form-control error";
}

function setSuccessFor(input) {
  const formControl = input.parentElement;

  // Adicionar a classe de sucesso
  formControl.className = "form-control success";
}
