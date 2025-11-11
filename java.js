document.addEventListener('DOMContentLoaded', () => {
    const totalCasas = 20;
    let posicaoJogador = 5; // Começa na casa "INÍCIO"
    let elétrons = 0; // Contagem de "elétrons" (pontos)
    
    // Função para simular a rolagem de um dado
    function rolarDado() {
        return Math.floor(Math.random() * 6) + 1; // De 1 a 6
    }

    // Função para mover o jogador
    function moverJogador(passos) {
        // Remove a classe da posição atual
        document.getElementById(`casa-${posicaoJogador}`).classList.remove('jogador-aqui');

        // Calcula a nova posição (usando módulo para ciclar no tabuleiro)
        posicaoJogador = (posicaoJogador + passos - 1) % totalCasas + 1; 

        // Adiciona a classe na nova posição
        const novaCasa = document.getElementById(`casa-${posicaoJogador}`);
        novaCasa.classList.add('jogador-aqui');

        // Aplica o efeito da casa
        aplicarEfeito(posicaoJogador);
        
        // Exibe o status
        atualizarStatus();
    }

    // Função para aplicar o efeito da casa
    function aplicarEfeito(casaId) {
        const casaElement = document.getElementById(`casa-${casaId}`);
        const efeito = casaElement.textContent.trim().toUpperCase();

        switch (efeito) {
            case 'PERCA UM ELÉTRON':
                elétrons = Math.max(0, elétrons - 1);
                alert('Você perdeu um elétron! Total: ' + elétrons);
                break;
            case 'GANHE DOIS ELÉTRONS':
                elétrons += 2;
                alert('Você ganhou dois elétrons! Total: ' + elétrons);
                break;
            // ... adicione a lógica para todas as outras casas (VOLTE, AVANCE, ?)
            case '?':
                fazerPergunta();
                break;
            // ... e assim por diante
        }
    }
    
    // Função para simular uma pergunta (lógica principal do jogo)
    function fazerPergunta() {
        // Em um jogo real, você teria um array de perguntas
        const pergunta = "Qual é o gás nobre com 8 elétrons na camada de valência?";
        const respostaCorreta = "Argônio"; // Exemplo
        
        const respostaUsuario = prompt(`Pergunta do Tabuleiro: ${pergunta}`);

        if (respostaUsuario && respostaUsuario.toLowerCase() === respostaCorreta.toLowerCase()) {
            alert("Parabéns! Resposta correta!");
            // Lógica de recompensa, ex: elétrons += 1;
        } else {
            alert("Resposta incorreta. Tente na próxima!");
            // Lógica de punição
        }
    }

    // Função de status (você precisaria de um elemento HTML para isso)
    function atualizarStatus() {
        console.log(`Posição: Casa ${posicaoJogador} | Elétrons: ${elétrons}`);
        // document.getElementById('status-jogador').textContent = `...`;
    }
    
    // Simulação inicial de uma jogada
    console.log("Início do Jogo!");
    const dado = rolarDado();
    console.log(`O dado rolou: ${dado}`);
    moverJogador(dado);
});
