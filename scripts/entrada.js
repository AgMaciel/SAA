        // Função para adicionar um estudante à lista
        function incluirEstudante() {
            // Obter os valores dos campos
            var turma = document.getElementById("turma").value;
            var turno = document.getElementById("turno").value;
            var nome = document.getElementById("nome").value;
            var cpf = document.getElementById("cpf").value;
            var curso = document.getElementById("curso").value;
            var email = document.getElementById("email").value;
            var matricula = document.getElementById("matricula").value;

            // enviar esses dados para o servidor e salvar no banco de dados
            // exibindo os dados na janela de alerta
            alert("Estudante incluído:\nTurma: " + turma + "\nTurno: " + turno + "\nNome: " + nome + "\nCPF: " + cpf + "\nCurso: " + curso + "\nE-mail: " + email + "\nMatrícula: " + matricula);
        }

        // consultar um estudante
        function consultarEstudante() {
            // Lógica para buscar um estudante no banco de dados com base em um critério (por exemplo, matrícula) e exibi-lo
            alert("Consulta de estudante não implementada ainda.");
        }

        // excluir um estudante
        function excluirEstudante() {
            // Lógica para excluir um estudante do banco de dados com base em um critério (por exemplo, matrícula)
            alert("Exclusão de estudante não implementada ainda.");
        }

        // alterar os dados de um estudante
        function alterarEstudante() {
            // Lógica para modificar os dados de um estudante no banco de dados com base em um critério (por exemplo, matrícula)
            alert("Alteração de estudante não implementada ainda.");
        }