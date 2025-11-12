// Estado do jogo
let currentLevel = 0;
let score = 0;
let attempts = 3;
let hintUsed = false;

// Níveis do jogo
const levels = [
    {
        id: 0,
        difficulty: "Fácil",
        title: "Nível 1:",
        description: "Quatro amigos deixaram suas marcas em Hogwarts. Suas iniciais são: T.P., S.B., R.L. e P.P.",
        question: "Juntos, eles criaram um artefato mágico famoso. Como esse grupo ficou conhecido?",
        answers: ["marotos", "os marotos", "maroto"],
        hint: "Pense no apelido que eles usavam e que está relacionado ao mapa que criaram.",
        points: 100
    },
    {
        id: 1,
        difficulty: "Fácil",
        title: "Nível 2:",
        description: "É um prêmio outorgado a bruxos e bruxas por grandes feitos. Possui três classes: medalha dourada em fita verde (Primeira Classe), roxa (Segunda Classe) ou branca (Terceira Classe).",
        question: "Que ordem é essa? (Responda com as iniciais ou nome completo)",
        answers: ["om", "o.m.", "o.m", "ordem de merlin"],
        hint: "O fundador desta ordem foi o bruxo mais famoso de todos os tempos, que dá nome à própria ordem.",
        points: 100
    },
    {
        id: 2,
        difficulty: "Médio",
        title: "Nível 3:",
        description: "Observe as siglas conectadas: H.G., R.W., H.P. - Todos estudaram juntos em Hogwarts e formaram um trio inseparável.",
        question: "Durante a luta contra as forças das trevas, como esse trio ficou conhecido?",
        answers: ["trio de ouro", "o trio de ouro", "trio dourado", "o trio dourado"],
        hint: "Hermione Granger, Ronald Weasley e Harry Potter formam o...",
        points: 150
    },
    {
        id: 3,
        difficulty: "Médio",
        title: "Nível 4:",
        description: "Decifre a sigla do feitiço: 'E.P.' - É um dos feitiços mais poderosos de proteção, invocado através de memórias felizes.",
        question: "Cria uma forma etérea prateada que representa o bruxo. Qual é o nome completo deste feitiço?",
        answers: ["expecto patronum", "expectro patronum"],
        hint: "Este feitiço é usado para afastar Dementadores e começa com 'Expecto...'",
        points: 150
    },
    {
        id: 4,
        difficulty: "Médio",
        title: "Nível 5:",
        description: "Siglas de lugares conectados: B.A. (local de bebidas), S.C. (local de doces), Z.Z. (loja de piadas).",
        question: "Esses três estabelecimentos ficam em qual vilarejo mágico?",
        answers: ["h", "hogsmeade"],
        hint: "É o único vilarejo inteiramente habitado por bruxos na Grã-Bretanha, localizado perto de Hogwarts.",
        points: 150
    },
    {
        id: 5,
        difficulty: "Difícil",
        title: "Nível 6:",
        description: "Decodifique a frase em siglas: 'É,u,p,o,a,b,e,b,q,r,g,f. A,O,i,u,l,m,d,e,u,f,v'",
        question: "Esta frase descreve algo importante sobre a Ordem de Merlin. Decodifique completamente.",
        answers: ["é um prêmio outorgado a bruxos e bruxas que realizaram grandes feitos a ordem inclui uma linda medalha dourada em uma fita verde"],
        hint: "Cada letra representa a inicial de uma palavra. Lembre-se: vírgulas separam palavras comuns, pontos finais separam nomes próprios.",
        points: 200
    },
    {
        id: 6,
        difficulty: "Difícil",
        title: "Nível 7:",
        description: "Siglas conectadas de seguidores das trevas: B.L. Jr., L.M., B.L., P.P.",
        question: "Estes quatro foram Comensais da Morte. Complete: B.L. Jr. = Bartolomeu... (sobrenome completo)",
        answers: ["crouch", "bartolomeu crouch", "crouch jr", "bartolomeu crouch jr"],
        hint: "Ele era filho de um importante funcionário do Ministério da Magia e se disfarçou em Hogwarts.",
        points: 200
    },
    {
        id: 7,
        difficulty: "Muito Difícil",
        title: "Nível 8:",
        description: "F(es): G.G., H.H., R.R., S.S. - Quatro bruxos poderosos fundaram Hogwarts há mil anos.",
        question: "Decodifique TODOS os nomes completos separados por vírgula (ordem alfabética por primeiro nome)",
        answers: ["godrico gryffindor, helga hufflepuff, rowena ravenclaw, salazar slytherin"],
        hint: "Cada um deu origem a uma casa: a do leão, do texugo, da águia e da serpente.",
        points: 250
    },
    {
        id: 8,
        difficulty: "Muito Difícil",
        title: "Nível 9:",
        description: "T.R. criou 7 fragmentos de sua alma: D.V., A.P., M.G., T.S., D.R., C.H., H.P.",
        question: "Decodifique 'D.V.' - o primeiro horcrux criado (objeto completo)",
        answers: ["diário de tom riddle", "diario de tom riddle"],
        hint: "Era um objeto escolar que pertenceu ao próprio T.R. quando estudante. Foi destruído por Harry com uma presa de basilisco.",
        points: 250
    },
    {
        id: 9,
        difficulty: "Extremo",
        title: "Nível 10:",
        description: "Decodifique a profecia complexa: 'O,ú,c,c,d,p,p,d,D,T,s,a,q,f,d,n,m,d,J,e,a,s,d,o,a,p,d,u,o,D,T'",
        question: "Esta é uma das profecias mais importantes. Decodifique as primeiras 10 palavras.",
        answers: ["o único com capacidade de derrotar o dark lord se aproximará quando fizer"],
        hint: "A profecia que mudou o destino de Harry Potter. Começa com 'O único com...'",
        points: 300
    }
];

// Criar partículas mágicas
function createParticles() {
    const container = document.getElementById('particles');
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.className = 'magic-particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 4 + 's';
        particle.style.animationDuration = (Math.random() * 3 + 3) + 's';
        container.appendChild(particle);
    }
}

// Normalizar resposta
function normalizeAnswer(text) {
    return text
        .toLowerCase()
        .trim()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[.,;:!?]/g, '')
        .replace(/\s+/g, ' ');
}

// Obter cor da dificuldade
function getDifficultyColor(difficulty) {
    const colors = { "Fácil": "#4ade80",
        "Médio": "#fbbf24",
        "Difícil": "#fb923c",
        "Muito Difícil": "#f87171",
        "Extremo": "#c084fc"
    };
    return colors[difficulty] || "#ffffff";
}

// Iniciar jogo
function startGame() {
    document.getElementById('startScreen').style.display = 'none';
    document.getElementById('gameScreen').style.display = 'block';
    loadLevel();
}

// Carregar nível
function loadLevel() {
    const level = levels[currentLevel];
    
    document.getElementById('levelDisplay').textContent = `${currentLevel + 1}/10`;
    document.getElementById('scoreDisplay').textContent = score;
    document.getElementById('attemptsDisplay').textContent = attempts;
    document.getElementById('levelTitle').textContent = level.title;
    document.getElementById('difficultyBadge').textContent = level.difficulty;
    document.getElementById('difficultyBadge').style.color = getDifficultyColor(level.difficulty);
    document.getElementById('description').textContent = level.description;
    document.getElementById('question').textContent = '❓ ' + level.question;
    document.getElementById('hintText').textContent = level.hint;
    
    const progress = (currentLevel / levels.length) * 100;
    document.getElementById('progressFill').style.width = progress + '%';
    
    document.getElementById('answerInput').value = '';
    document.getElementById('hintBox').style.display = 'none';
    document.getElementById('feedbackBox').style.display = 'none';
    document.getElementById('hintButton').disabled = false;
    document.getElementById('hintButton').textContent = '🧠 Pedir Dica (-10)';
    hintUsed = false;
}

// Mostrar dica
function showHint() {
    if (!hintUsed) {
        document.getElementById('hintBox').style.display = 'block';
        document.getElementById('hintButton').disabled = true;
        document.getElementById('hintButton').textContent = 'Dica Usada';
        hintUsed = true;
        score = Math.max(0, score - 10);
        document.getElementById('scoreDisplay').textContent = score;
    }
}

// Verificar resposta
function checkAnswer() {
    const answer = document.getElementById('answerInput').value;
    const feedbackBox = document.getElementById('feedbackBox');
    
    if (!answer.trim()) {
        feedbackBox.className = 'feedback-box feedback-incorrect';
        feedbackBox.textContent = '⚠️ Por favor, digite uma resposta!';
        feedbackBox.style.display = 'block';
        return;
    }

    const level = levels[currentLevel];
    const normalized = normalizeAnswer(answer);
    const isCorrect = level.answers.some(ans => {
        const normalizedAns = normalizeAnswer(ans);
        return normalized === normalizedAns || normalized.includes(normalizedAns);
    });

    if (isCorrect) {
        score += level.points;
        document.getElementById('scoreDisplay').textContent = score;
        
        feedbackBox.className = 'feedback-box feedback-correct';
        feedbackBox.textContent = `✨ Correto! Excelente trabalho, bruxo(a)! +${level.points} pontos ✨`;
        feedbackBox.style.display = 'block';

        setTimeout(() => {
            if (currentLevel < levels.length - 1) {
                currentLevel++;
                attempts = 3;
                loadLevel();
            } else {
                showCompleteScreen();
            }
        }, 2000);
    } else {
        attempts--;
        document.getElementById('attemptsDisplay').textContent = attempts;

        if (attempts > 0) {
            feedbackBox.className = 'feedback-box feedback-incorrect';
            feedbackBox.textContent = `❌ Resposta incorreta! Você tem mais ${attempts} tentativa(s).`;
            feedbackBox.style.display = 'block';
        } else {
            feedbackBox.className = 'feedback-box feedback-incorrect';
            feedbackBox.textContent = `❌ Suas tentativas acabaram! A resposta era: ${level.answers[0]}`;
            feedbackBox.style.display = 'block';
            
            setTimeout(() => {
                if (currentLevel < levels.length - 1) {
                    currentLevel++;
                    attempts = 3;
                    loadLevel();
                } else {
                    showCompleteScreen();
                }
            }, 3000);
        }
    }
}

// Mostrar tela de conclusão
function showCompleteScreen() {
    document.getElementById('gameScreen').style.display = 'none';
    document.getElementById('completeScreen').style.display = 'block';

    const maxScore = levels.reduce((sum, l) => sum + l.points, 0);
    const percentage = (score / maxScore) * 100;
    
    let stars = '';
    let message = '';
    let starColor = '';
    
    if (percentage >= 90) {
        stars = '⭐⭐⭐⭐⭐';
        message = 'Extraordinário! Você é digno do título de Maroto Honorário!';
        starColor = '#fbbf24';
    } else if (percentage >= 70) {
        stars = '⭐⭐⭐⭐';
        message = 'Excelente! Os Marotos ficariam orgulhosos de você!';
        starColor = '#fcd34d';
    } else if (percentage >= 50) {
        stars = '⭐⭐⭐';
        message = 'Bom trabalho! Continue praticando suas habilidades mágicas!';
        starColor = '#60a5fa';
    } else if (percentage >= 30) {
        stars = '⭐⭐';
        message = 'Você precisa estudar mais sobre o mundo mágico!';
        starColor = '#94a3b8';
    } else {
        stars = '⭐';
        message = 'Talvez seja hora de revisar seus conhecimentos em Hogwarts!';
        starColor = '#6b7280';
    }

    document.getElementById('starsDisplay').textContent = stars;
    document.getElementById('starsDisplay').style.color = starColor;
    document.getElementById('finalScore').textContent = `${score} pontos`;
    document.getElementById('scoreDetail').textContent = `de ${maxScore} possíveis (${percentage.toFixed(1)}%)`;
    document.getElementById('finalMessage').textContent = message;
}

// Reiniciar jogo
function restartGame() {
    currentLevel = 0;
    score = 0;
    attempts = 3;
    hintUsed = false;
    
    document.getElementById('completeScreen').style.display = 'none';
    document.getElementById('startScreen').style.display = 'block';
}

// Inicializar ao carregar a página
window.onload = function() {
    createParticles();
};
