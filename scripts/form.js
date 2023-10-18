function closeForm() {
    var formContainer = document.querySelector('.form-container');
    formContainer.style.display = 'none';
}

const addloading = () => {
        const button = document.querySelector('.button');
        button.innerHTML = '<https://agmaciel.github.io/SAA/pages/inclusao.html">';
}

const handleSubmit = (event) => {
    event.preventDefault();


    const nomeOuEmail = document.querySelector('input[name="nomeOuEmail"]').value;
    const senha = document.querySelector('input[name="senha"]').value;

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
    });
}

document.querySelector('entrar').addEventListener('submit', handleSubmit);

// Fazer uma solicitação GET para a API
fetch('URL_DA_SUA_API')
  .then(response => response.json())
  .then(data => {
    // Processar os dados e exibi-los na página
    const element = document.getElementById('nomeOuEmail');
    element.innerHTML = data.nomeOuEmail; // Substitua 'valor' pelo campo que deseja exibir
  })
  .catch(error => console.error('Erro na solicitação:', error));