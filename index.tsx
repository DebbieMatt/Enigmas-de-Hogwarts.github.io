import React, { useState, useEffect } from 'react';
import { Check, X, Award, BookOpen, Sparkles, Trophy, Zap, Star, Brain, Wand2 } from 'lucide-react';

const CodeAndRiddleAcronyms = () => {
  const [currentLevel, setCurrentLevel] = useState(0);
  const [answer, setAnswer] = useState('');
  const [showHint, setShowHint] = useState(false);
  const [score, setScore] = useState(0);
  const [attempts, setAttempts] = useState(3);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameComplete, setGameComplete] = useState(false);
  const [feedback, setFeedback] = useState({ show: false, correct: false, message: '' });
  const [hintUsed, setHintUsed] = useState(false);

  // 10 níveis de dificuldade crescente
  const levels = [
    {
      id: 0,
      difficulty: "Fácil",
      title: "Nível 1: Os Marotos",
      description: "Quatro amigos deixaram suas marcas em Hogwarts. Suas iniciais são: T.P., S.B., R.L. e P.P.",
      question: "Juntos, eles criaram um artefato mágico famoso. Como esse grupo ficou conhecido?",
      answers: ["marotos", "os marotos", "maroto"],
      hint: "Pense no apelido que eles usavam e que está relacionado ao mapa que criaram.",
      points: 100,
      type: "simple"
    },
    {
      id: 1,
      difficulty: "Fácil",
      title: "Nível 2: Ordem de Merlin",
      description: "É um prêmio outorgado a bruxos e bruxas por grandes feitos. Possui três classes: medalha dourada em fita verde (Primeira Classe), roxa (Segunda Classe) ou branca (Terceira Classe).",
      question: "Que ordem é essa? (Responda com as iniciais ou nome completo)",
      answers: ["om", "o.m.", "o.m", "ordem de merlin"],
      hint: "O fundador desta ordem foi o bruxo mais famoso de todos os tempos, que dá nome à própria ordem.",
      points: 100,
      type: "simple"
    },
    {
      id: 2,
      difficulty: "Médio",
      title: "Nível 3: Trio Lendário",
      description: "Observe as siglas conectadas: H.G., R.W., H.P. - Todos estudaram juntos em Hogwarts e formaram um trio inseparável.",
      question: "Durante a luta contra as forças das trevas, como esse trio ficou conhecido?",
      answers: ["trio de ouro", "o trio de ouro", "trio dourado", "o trio dourado"],
      hint: "Hermione Granger, Ronald Weasley e Harry Potter formam o...",
      points: 150,
      type: "connected"
    },
    {
      id: 3,
      difficulty: "Médio",
      title: "Nível 4: Feitiço Protetor",
      description: "Decifre a sigla do feitiço: 'E.P.' - É um dos feitiços mais poderosos de proteção, invocado através de memórias felizes.",
      question: "Cria uma forma etérea prateada que representa o bruxo. Qual é o nome completo deste feitiço?",
      answers: ["expecto patronum", "expectro patronum"],
      hint: "Este feitiço é usado para afastar Dementadores e começa com 'Expecto...'",
      points: 150,
      type: "spell"
    },
    {
      id: 4,
      difficulty: "Médio",
      title: "Nível 5: Vilarejo Mágico",
      description: "Siglas de lugares conectados: B.A. (local de bebidas), S.C. (local de doces), Z.Z. (loja de piadas).",
      question: "Esses três estabelecimentos ficam em qual vilarejo mágico?",
      answers: ["h", "hogsmeade"],
      hint: "É o único vilarejo inteiramente habitado por bruxos na Grã-Bretanha, localizado perto de Hogwarts.",
      points: 150,
      type: "location"
    },
    {
      id: 5,
      difficulty: "Difícil",
      title: "Nível 6: Decodificação Complexa",
      description: "Decodifique a frase em siglas: 'É,u,p,o,a,b,e,b,q,r,g,f. A,O,i,u,l,m,d,e,u,f,v'",
      question: "Esta frase descreve algo importante sobre a Ordem de Merlin. Decodifique completamente.",
      answers: ["é um prêmio outorgado a bruxos e bruxas que realizaram grandes feitos a ordem inclui uma linda medalha dourada em uma fita verde"],
      hint: "Cada letra representa a inicial de uma palavra. Lembre-se: vírgulas separam palavras comuns, pontos finais separam nomes próprios.",
      points: 200,
      type: "decode"
    },
    {
      id: 6,
      difficulty: "Difícil",
      title: "Nível 7: Comensais da Morte",
      description: "Siglas conectadas de seguidores das trevas: B.L. Jr., L.M., B.L., P.P.",
      question: "Estes quatro foram Comensais da Morte. Complete: B.L. Jr. = Bartolomeu... (sobrenome completo)",
      answers: ["crouch", "bartolomeu crouch", "crouch jr", "bartolomeu crouch jr"],
      hint: "Ele era filho de um importante funcionário do Ministério da Magia e se disfarçou em Hogwarts.",
      points: 200,
      type: "dark"
    },
    {
      id: 7,
      difficulty: "Muito Difícil",
      title: "Nível 8: Fundadores de Hogwarts",
      description: "F(es): G.G., H.H., R.R., S.S. - Quatro bruxos poderosos fundaram Hogwarts há mil anos.",
      question: "Decodifique TODOS os nomes completos separados por vírgula (ordem alfabética por primeiro nome)",
      answers: ["godrico gryffindor, helga hufflepuff, rowena ravenclaw, salazar slytherin"],
      hint: "Cada um deu origem a uma casa: a do leão, do texugo, da águia e da serpente.",
      points: 250,
      type: "multiple"
    },
    {
      id: 8,
      difficulty: "Muito Difícil",
      title: "Nível 9: Horcruxes",
      description: "T.R. criou 7 fragmentos de sua alma: D.V., A.P., M.G., T.S., D.R., C.H., H.P.",
      question: "Decodifique 'D.V.' - o primeiro horcrux criado (objeto completo)",
      answers: ["diário de tom riddle", "diario de tom riddle"],
      hint: "Era um objeto escolar que pertenceu ao próprio T.R. quando estudante. Foi destruído por Harry com uma presa de basilisco.",
      points: 250,
      type: "horcrux"
    },
    {
      id: 9,
      difficulty: "Extremo",
      title: "Nível 10: Profecias e Enigmas",
      description: "Decodifique a profecia complexa: 'O,ú,c,c,d,p,p,d,D,T,s,a,q,f,d,n,m,d,J,e,a,s,d,o,a,p,d,u,o,D,T'",
      question: "Esta é uma das profecias mais importantes. Decodifique as primeiras 10 palavras.",
      answers: ["o único com capacidade de derrotar o dark lord se aproximará quando fizer"],
      hint: "A profecia que mudou o destino de Harry Potter. Começa com 'O único com...'",
      points: 300,
      type: "prophecy"
    }
  ];

  useEffect(() => {
    // Criar partículas mágicas
    const particles = [];
    for (let i = 0; i < 20; i++) {
      particles.push({
        left: Math.random() * 100,
        delay: Math.random() * 4,
        duration: Math.random() * 3 + 3
      });
    }
  }, []);

  const normalizeAnswer = (text) => {
    return text
      .toLowerCase()
      .trim()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[.,;:!?]/g, '')
      .replace(/\s+/g, ' ');
  };

  const checkAnswer = () => {
    if (!answer.trim()) {
      setFeedback({ show: true, correct: false, message: '⚠️ Por favor, digite uma resposta!' });
      return;
    }

    const level = levels[currentLevel];
    const normalized = normalizeAnswer(answer);
    const isCorrect = level.answers.some(ans => {
      const normalizedAns = normalizeAnswer(ans);
      return normalized === normalizedAns || normalized.includes(normalizedAns);
    });

    if (isCorrect) {
      const earnedPoints = level.points;
      setScore(prev => prev + earnedPoints);
      setFeedback({ 
        show: true, 
        correct: true, 
        message: `✨ Correto! Excelente trabalho, bruxo(a)! +${earnedPoints} pontos ✨` 
      });

      setTimeout(() => {
        if (currentLevel < levels.length - 1) {
          setCurrentLevel(prev => prev + 1);
          setAnswer('');
          setShowHint(false);
          setHintUsed(false);
          setAttempts(3);
          setFeedback({ show: false, correct: false, message: '' });
        } else {
          setGameComplete(true);
        }
      }, 2000);
    } else {
      const newAttempts = attempts - 1;
      setAttempts(newAttempts);

      if (newAttempts > 0) {
        setFeedback({ 
          show: true, 
          correct: false, 
          message: `❌ Resposta incorreta! Você tem mais ${newAttempts} tentativa(s).` 
        });
      } else {
        setFeedback({ 
          show: true, 
          correct: false, 
          message: `❌ Suas tentativas acabaram! A resposta era: ${level.answers[0]}` 
        });
        
        setTimeout(() => {
          if (currentLevel < levels.length - 1) {
            setCurrentLevel(prev => prev + 1);
            setAnswer('');
            setShowHint(false);
            setHintUsed(false);
            setAttempts(3);
            setFeedback({ show: false, correct: false, message: '' });
          } else {
            setGameComplete(true);
          }
        }, 3000);
      }
    }
  };

  const handleShowHint = () => {
    if (!hintUsed) {
      setShowHint(true);
      setHintUsed(true);
      setScore(prev => Math.max(0, prev - 10));
    }
  };

  const restartGame = () => {
    setCurrentLevel(0);
    setAnswer('');
    setScore(0);
    setAttempts(3);
    setGameStarted(false);
    setGameComplete(false);
    setShowHint(false);
    setHintUsed(false);
    setFeedback({ show: false, correct: false, message: '' });
  };

  const getDifficultyColor = (difficulty) => {
    switch(difficulty) {
      case "Fácil": return "text-green-400";
      case "Médio": return "text-yellow-400";
      case "Difícil": return "text-orange-400";
      case "Muito Difícil": return "text-red-400";
      case "Extremo": return "text-purple-400";
      default: return "text-white";
    }
  };

  if (!gameStarted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-blue-900 p-4 md:p-8 relative overflow-hidden">
        {/* Partículas mágicas */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-yellow-400 rounded-full opacity-60 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${Math.random() * 3 + 3}s`
            }}
          />
        ))}

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-8 bg-black/40 border-2 border-yellow-600 rounded-2xl p-8 backdrop-blur-sm shadow-2xl">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Zap className="w-10 h-10 text-yellow-400" />
              <h1 className="text-4xl md:text-5xl font-bold text-yellow-500" style={{fontFamily: 'Cinzel, serif', textShadow: '0 0 20px rgba(234, 179, 8, 0.8)'}}>
                Enigmas de Hogwarts
              </h1>
              <Zap className="w-10 h-10 text-yellow-400" />
            </div>
            <p className="text-purple-200 text-xl italic">O Desafio dos Marotos</p>
          </div>

          <div className="bg-gradient-to-br from-slate-800/90 to-purple-900/90 border-2 border-yellow-600 rounded-3xl p-8 backdrop-blur-sm shadow-2xl">
            <h2 className="text-3xl font-bold text-yellow-500 mb-6 text-center" style={{fontFamily: 'Cinzel, serif'}}>
              Bem-vindo(a), Bruxo(a)!
            </h2>
            
            <div className="space-y-6 text-slate-200 text-lg leading-relaxed">
              <p className="text-justify indent-8">
                Você encontrou o Mapa do Maroto e descobriu um desafio secreto deixado por 
                Tiago Potter, Sirius Black, Remo Lupin e Pedro Pettigrew.
              </p>
              
              <p className="text-justify indent-8">
                Para provar que é digno de conhecer os segredos de Hogwarts, você precisará 
                decifrar <strong className="text-yellow-400">10 enigmas progressivos</strong> relacionados a 
                <strong className="text-yellow-400"> siglas conectadas</strong> e características do mundo mágico.
              </p>
              
              <div className="bg-amber-900/30 border-l-4 border-yellow-500 p-4 rounded-r-lg">
                <p className="font-semibold text-yellow-300 mb-2">📜 Regras do Desafio:</p>
                <ul className="space-y-2 ml-4">
                  <li>• Cada nível tem <strong>3 tentativas</strong></li>
                  <li>• Pontos variam de <strong>100 a 300</strong> por nível</li>
                  <li>• Dicas custam <strong>-10 pontos</strong></li>
                  <li>• Dificuldade aumenta progressivamente</li>
                  <li>• Desafio completo: <strong>1.850 pontos possíveis</strong></li>
                </ul>
              </div>
              
              <p className="text-center text-slate-300 italic">
                Use as dicas se necessário, mas elas custarão parte de sua pontuação!
              </p>
            </div>

            <button
              onClick={() => setGameStarted(true)}
              className="w-full mt-8 bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-4 rounded-full font-bold text-xl hover:scale-105 transition-transform shadow-lg hover:shadow-red-500/50 flex items-center justify-center gap-3"
              style={{animation: 'pulse 2s infinite'}}
            >
              <Wand2 className="w-6 h-6" />
              🎮 Iniciar Desafio
              <Wand2 className="w-6 h-6" />
            </button>
          </div>
        </div>

        <style jsx>{`
          @keyframes float {
            0%, 100% { transform: translateY(0) translateX(0); opacity: 0; }
            10% { opacity: 0.6; }
            90% { opacity: 0.6; }
            100% { transform: translateY(-100vh) translateX(50px); opacity: 0; }
          }
          .animate-float {
            animation: float 4s infinite;
          }
          @keyframes pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.05); }
          }
        `}</style>
      </div>
    );
  }

  if (gameComplete) {
    const maxScore = levels.reduce((sum, l) => sum + l.points, 0);
    const percentage = (score / maxScore) * 100;
    
    let stars = '';
    let message = '';
    let starColor = '';
    
    if (percentage >= 90) {
      stars = '⭐⭐⭐⭐⭐';
      message = 'Extraordinário! Você é digno do título de Maroto Honorário!';
      starColor = 'text-yellow-400';
    } else if (percentage >= 70) {
      stars = '⭐⭐⭐⭐';
      message = 'Excelente! Os Marotos ficariam orgulhosos de você!';
      starColor = 'text-yellow-300';
    } else if (percentage >= 50) {
      stars = '⭐⭐⭐';
      message = 'Bom trabalho! Continue praticando suas habilidades mágicas!';
      starColor = 'text-blue-400';
    } else if (percentage >= 30) {
      stars = '⭐⭐';
      message = 'Você precisa estudar mais sobre o mundo mágico!';
      starColor = 'text-gray-400';
    } else {
      stars = '⭐';
      message = 'Talvez seja hora de revisar seus conhecimentos em Hogwarts!';
      starColor = 'text-gray-500';
    }

    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-blue-900 p-8 flex items-center justify-center">
        <div className="max-w-2xl w-full bg-gradient-to-br from-slate-800/90 to-purple-900/90 backdrop-blur-lg rounded-3xl p-12 text-center border-2 border-yellow-600 shadow-2xl">
          <Trophy className="w-24 h-24 text-yellow-400 mx-auto mb-6 animate-bounce" />
          <h1 className="text-5xl font-bold text-yellow-500 mb-4" style={{fontFamily: 'Cinzel, serif', textShadow: '0 0 30px rgba(234, 179, 8, 0.8)'}}>
            🎉 Desafio Concluído! 🎉
          </h1>
          
          <div className={`text-6xl mb-6 ${starColor}`}>
            {stars}
          </div>
          
          <div className="bg-black/40 rounded-2xl p-6 mb-8 border border-yellow-600">
            <p className="text-5xl font-bold text-yellow-300" style={{textShadow: '0 0 30px rgba(253, 224, 71, 0.8)'}}>
              {score} pontos
            </p>
            <p className="text-slate-300 mt-2">de {maxScore} possíveis ({percentage.toFixed(1)}%)</p>
          </div>
          
          <p className="text-2xl text-purple-200 mb-8 leading-relaxed">
            {message}
          </p>
          
          <button
            onClick={restartGame}
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-lg"
          >
            🔄 Jogar Novamente
          </button>
        </div>
      </div>
    );
  }

  const level = levels[currentLevel];
  const progress = ((currentLevel) / levels.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-blue-900 p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6 bg-black/40 border-2 border-yellow-600 rounded-2xl p-4 backdrop-blur-sm">
          <div className="flex items-center justify-center gap-3 mb-2">
            <Zap className="w-8 h-8 text-yellow-400" />
            <h1 className="text-3xl md:text-4xl font-bold text-yellow-500" style={{fontFamily: 'Cinzel, serif'}}>
              Enigmas de Hogwarts
            </h1>
            <Zap className="w-8 h-8 text-yellow-400" />
          </div>
        </div>

        {/* Info Bar */}
        <div className="grid grid-cols-3 gap-4 mb-4">
          <div className="bg-black/50 rounded-xl p-4 text-center border border-yellow-600/50">
            <div className="text-slate-400 text-sm uppercase">Fase</div>
            <div className="text-yellow-400 text-2xl font-bold">{currentLevel + 1}/10</div>
          </div>
          <div className="bg-black/50 rounded-xl p-4 text-center border border-yellow-600/50">
            <div className="text-slate-400 text-sm uppercase">Pontuação</div>
            <div className="text-yellow-400 text-2xl font-bold">{score}</div>
          </div>
          <div className="bg-black/50 rounded-xl p-4 text-center border border-yellow-600/50">
            <div className="text-slate-400 text-sm uppercase">Tentativas</div>
            <div className="text-yellow-400 text-2xl font-bold">{attempts}</div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full h-3 bg-black/50 rounded-full overflow-hidden mb-6 border border-yellow-600/30">
          <div 
            className="h-full bg-gradient-to-r from-yellow-400 to-yellow-600 transition-all duration-500"
            style={{ width: `${progress}%`, boxShadow: '0 0 10px #ffd700' }}
          />
        </div>

        {/* Game Card */}
        <div className="bg-gradient-to-br from-slate-800/90 to-purple-900/90 border-2 border-yellow-600 rounded-3xl p-6 md:p-8 shadow-2xl backdrop-blur-sm relative overflow-hidden">
          {/* Efeito de brilho rotativo */}
          <div className="absolute inset-0 opacity-10 pointer-events-none" style={{
            background: 'radial-gradient(circle, rgba(212, 175, 55, 0.3) 0%, transparent 70%)',
            animation: 'rotate 20s linear infinite'
          }} />

          <div className="relative z-10">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl md:text-3xl font-bold text-yellow-500" style={{fontFamily: 'Cinzel, serif'}}>
                {level.title}
              </h2>
              <span className={`px-4 py-1 rounded-full text-sm font-bold ${getDifficultyColor(level.difficulty)} bg-black/40 border border-current`}>
                {level.difficulty}
              </span>
            </div>

            <div className="bg-black/20 rounded-xl p-6 mb-6 border border-yellow-600/30">
              <p className="text-slate-200 text-lg leading-relaxed text-justify indent-8 mb-4">
                {level.description}
              </p>
              <p className="text-yellow-300 text-lg font-semibold">
                ❓ {level.question}
              </p>
            </div>

            {showHint && (
              <div className="bg-amber-900/40 border-l-4 border-yellow-500 p-4 rounded-r-lg mb-6">
                <div className="flex items-start gap-2">
                  <Brain className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-bold text-yellow-300 mb-1">💡 Dica:</p>
                    <p className="text-slate-200">{level.hint}</p>
                  </div>
                </div>
              </div>
            )}

            <div className="space-y-4">
              <input
                type="text"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && checkAnswer()}
                placeholder="Digite sua resposta aqui..."
                className="w-full px-4 py-3 rounded-xl bg-black/50 border-2 border-yellow-600/50 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 text-lg"
                style={{fontFamily: 'Crimson Text, serif'}}
              />

              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={handleShowHint}
                  disabled={hintUsed}
                  className="bg-gradient-to-r from-blue-600 to-cyan-700 text-white px-6 py-3 rounded-lg font-semibold hover:scale-105 transition-transform disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
                  style={{fontFamily: 'Cinzel, serif'}}
                >
                  <Brain className="w-5 h-5" />
                  {hintUsed ? 'Dica Usada' : '💡 Pedir Dica (-10)'}
                </button>

                <button
                  onClick={checkAnswer}
                  className="bg-gradient-to-r from-amber-600 to-orange-700 text-white px-6 py-3 rounded-lg font-bold hover:scale-105 transition-transform shadow-lg flex items-center justify-center gap-2"
                  style={{fontFamily: 'Cinzel, serif'}}
                >
                  <Sparkles className="w-5 h-5" />
                  ✨ Verificar Resposta
                </button>
              </div>

              {feedback.show && (
                <div className={`p-4 rounded-xl text-center font-bold text-lg border-2 ${
                  feedback.correct 
                    ? 'bg-green-900/40 border-green-400 text-green-300' 
                    : 'bg-red-900/40 border-red-400 text-red-300'
                }`}>
                  {feedback.message}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-8 text-slate-400 text-sm">
          <p>✨ Criado por Debbie Matt - Inspirado no universo de Harry Potter ✨</p>
          <p className="mt-1">Copyright © 2022-2025</p>
        </div>
      </div>

      <style jsx>{`
        @keyframes rotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default CodeAndRiddleAcronyms;
