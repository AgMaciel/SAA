function closeForm() {
    var formContainer = document.querySelector('.form-container');
    formContainer.style.display = 'none';
}
function doPost(e) {
    var nomeOuEmail = e.parameter.nomeOuEmail;
    var senha = e.parameter.senha;
    var planilha = SpreadsheetApp.openById('EMI - TESTE');
    var aba = planilha.getSheetByName('EMI-teste-saa');
  
    aba.appendRow([new Date(), nomeOuEmail, senha]);
    return ContentService.createTextOutput("Dados registrados com sucesso.").setMimeType(ContentService.MimeType.TEXT);
  }

  const handleSubmit = (event) => {
  event.preventDefault();

  const nomeOuEmail = querySelector('input[name="nomeOuEmail"]').value;
  const senha = querySelector('input[name="senha"]').value;

  fetch('https://api.sheetmonkey.io/form/45zAwiZCdTNBZeRn3y5ZmC', {

    method: 'post',
    headers: {
        accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      nomeOuEmail: nomeOuEmail,
      senha: senha,
    }),
  })
}

  document.querySelector('form').addEventListener('submit', handleSubmit);