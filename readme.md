# Code And Riddle Acronyms - O mistério não revelado

![Version](https://img.shields.io/badge/version-2.0.0-blue.svg)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![Status](https://img.shields.io/badge/status-active-success.svg)
![Maintenance](https://img.shields.io/badge/maintained-yes-brightgreen.svg)

Jogo educativo de decodificação de siglas baseado no universo Harry Potter, desenvolvido com HTML5, CSS3 e JavaScript puro.

## 🎮 Sobre o Jogo

**Code And Riddle Acronyms** é um desafio interativo onde você precisa decifrar 10 enigmas progressivos relacionados a siglas, códigos e características do mundo mágico de Harry Potter. Teste seus conhecimentos e prove que é digno de conhecer os segredos deixados pelos Marotos!

## 🚀 Demo

**[🎮 Jogar Agora](https://seu-usuario.github.io/enigmas-hogwarts/)**

## ✨ Características

### 🎯 Mecânicas do Jogo
- **10 níveis progressivos** de dificuldade (Fácil → Extremo)
- **Sistema de pontuação**: 100 a 300 pontos por nível
- **3 tentativas** por nível
- **Sistema de dicas**: -10 pontos por dica utilizada
- **Total possível**: 1.850 pontos
- **Avaliação por estrelas**: ⭐ a ⭐⭐⭐⭐⭐

### 🎨 Interface
- Design temático do universo Harry Potter
- Animações mágicas (partículas flutuantes, brilhos, transições)
- Totalmente responsivo (mobile, tablet, desktop)
- Efeitos visuais imersivos
- Feedback visual para acertos e erros

### 🧠 Tipos de Enigmas
- Decodificação de siglas simples
- Enigmas conectados (múltiplas siglas relacionadas)
- Feitiços e magias
- Localizações mágicas
- Personagens e história
- Horcruxes e profecias

## 🛠️ Stack Tecnológica

### Frontend Puro
- **HTML5** - Estrutura semântica
- **CSS3** - Estilização moderna com:
  - Gradientes complexos
  - Animações e transições
  - Backdrop filters
  - Grid e Flexbox
  - Media queries para responsividade
- **JavaScript (ES6+)** - Lógica do jogo:
  - Manipulação do DOM
  - Validação inteligente de respostas
  - Gerenciamento de estado
  - Normalização de texto

### Fontes
- **Cinzel** - Títulos e elementos mágicos
- **Crimson Text** - Textos e narrativas

## 📋 Pré-requisitos

- Navegador moderno com suporte a:
  - ES6+ (Chrome 51+, Firefox 54+, Safari 10+, Edge 15+)
  - CSS Grid e Flexbox
  - CSS Animations e Transitions
  - CSS Backdrop Filter

**Nenhuma instalação necessária!** É apenas HTML, CSS e JavaScript puro.

## 🔧 Instalação e Uso

### Método 1: Download Direto

1. **Baixe os arquivos** do repositório
2. **Extraia a pasta** em seu computador
3. **Abra o arquivo `index.html`** em qualquer navegador

### Método 2: Clone do Repositório

```bash
# Clone o repositório
git clone https://github.com/DebbieMatt/enigmas-hogwarts.git

# Entre na pasta
cd enigmas-hogwarts

# Abra o index.html no navegador
# Windows
start index.html

# macOS
open index.html

# Linux
xdg-open index.html
```

### Método 3: Servidor Local (Opcional)

```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Node.js (http-server)
npx http-server

# Acesse: http://localhost:8000
```

## 📂 Estrutura de Arquivos

```
enigmas-hogwarts/
│
├── index.html          # Estrutura principal do jogo
├── style.css           # Todos os estilos e animações
├── script.js           # Lógica do jogo e interações
│
├── README.md           # Documentação do projeto
├── LICENSE             # Licença MIT
│
└── assets/             # (Opcional) Imagens e recursos
    └── screenshot.png
```

### Arquivos Principais

#### `index.html`
- Estrutura semântica do jogo
- 3 telas principais: Início, Jogo, Conclusão
- Elementos de interface (inputs, botões, cards)
- Link para fontes Google Fonts

#### `style.css`
- Reset CSS e configurações base
- Estilos para cada tela do jogo
- Animações (float, pulse, rotate, bounce)
- Media queries para responsividade
- Temas de cores (roxo, azul, dourado)

#### `script.js`
- Array de 10 níveis com enigmas
- Funções de gerenciamento de estado
- Sistema de validação de respostas
- Lógica de pontuação e progresso
- Controle de navegação entre telas

## 🎯 Como Jogar

### 1. **Tela Inicial**
   - Leia as regras do desafio
   - Clique em "🎮 Iniciar Desafio"

### 2. **Durante o Jogo**
   - Leia a descrição e a pergunta
   - Digite sua resposta no campo de texto
   - Clique em "✨ Verificar Resposta" ou pressione Enter
   - Use dicas se necessário (custa -10 pontos)
   - Você tem 3 tentativas por nível

### 3. **Dicas de Resposta**
   - Respostas não são case-sensitive
   - Acentos são ignorados automaticamente
   - Pontuação é removida
   - Espaços extras são normalizados
   - Múltiplas variações são aceitas

### 4. **Avaliação Final**
   - ⭐⭐⭐⭐⭐ (90%+): Maroto Honorário
   - ⭐⭐⭐⭐ (70%+): Excelente
   - ⭐⭐⭐ (50%+): Bom trabalho
   - ⭐⭐ (30%+): Precisa estudar mais
   - ⭐ (<30%): Revise seus conhecimentos

## 🏗️ Arquitetura do Código

### Estado do Jogo (Variáveis Globais)

```javascript
let currentLevel = 0;    // Nível atual (0-9)
let score = 0;           // Pontuação total
let attempts = 3;        // Tentativas restantes
let hintUsed = false;    // Dica foi usada?
```

### Estrutura de Níveis

```javascript
const levels = [
  {
    id: 0,                    // Índice do nível
    difficulty: "Fácil",      // Fácil | Médio | Difícil | Muito Difícil | Extremo
    title: "Nível 1:",        // Título exibido
    description: "...",       // Contexto do enigma
    question: "...",          // Pergunta principal
    answers: ["...", "..."],  // Respostas aceitas (array)
    hint: "...",              // Dica do nível
    points: 100               // Pontos do nível
  },
  // ... mais 9 níveis
];
```

### Funções Principais

| Função | Descrição |
|--------|-----------|
| `createParticles()` | Cria partículas mágicas animadas |
| `normalizeAnswer(text)` | Normaliza resposta (remove acentos, pontuação) |
| `getDifficultyColor(difficulty)` | Retorna cor baseada na dificuldade |
| `startGame()` | Inicia o jogo (troca de tela) |
| `loadLevel()` | Carrega dados do nível atual |
| `showHint()` | Exibe dica e deduz pontos |
| `checkAnswer()` | Valida resposta do jogador |
| `showCompleteScreen()` | Exibe tela final com avaliação |
| `restartGame()` | Reinicia o jogo do zero |

### Fluxo de Navegação

```
startScreen (Tela Inicial)
    ↓ [startGame()]
gameScreen (Tela de Jogo)
    ↓ [checkAnswer() → próximo nível]
    ↓ [10 níveis completados]
completeScreen (Tela de Conclusão)
    ↓ [restartGame()]
startScreen (Reiniciar)
```

## 🎨 Customização

### Modificar Cores

Edite as variáveis de cor no `style.css`:

```css
/* Cores principais */
background: linear-gradient(135deg, #1e293b 0%, #581c87 50%, #1e3a8a 100%);
border-color: #ca8a04; /* Dourado */
color: #eab308;        /* Amarelo */
```

### Adicionar Novos Níveis

Edite o array `levels` no `script.js`:

```javascript
{
  id: 10,
  difficulty: "Impossível",
  title: "Nível 11:",
  description: "Sua descrição aqui...",
  question: "Sua pergunta?",
  answers: ["resposta1", "resposta2", "variação3"],
  hint: "Dica útil para o jogador",
  points: 400
}
```

### Ajustar Dificuldade

```javascript
// Modificar número de tentativas
let attempts = 5; // Aumentar de 3 para 5

// Modificar custo da dica
score = Math.max(0, score - 20); // Aumentar de -10 para -20

// Modificar pontuação dos níveis
points: 150 // Aumentar pontuação
```

### Personalizar Animações

```css
/* Modificar velocidade das partículas */
.magic-particle {
  animation-duration: 5s; /* Aumentar de 4s para 5s */
}

/* Modificar bounce do troféu */
@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-30px); } /* Aumentar de -20px */
}
```

## 🐛 Reportar Bugs

Encontrou um bug? [Abra uma issue](../../issues/new) com:

1. **Título claro** descrevendo o problema
2. **Navegador e versão** (ex: Chrome 120, Firefox 121)
3. **Sistema Operacional** (Windows, macOS, Linux, Android, iOS)
4. **Passos para reproduzir** o erro
5. **Comportamento esperado** vs **comportamento atual**
6. **Screenshots** ou vídeo (se aplicável)
7. **Console do navegador** (F12 → Console)

### Bugs Conhecidos

- [ ] Partículas podem ter desempenho reduzido em dispositivos antigos
- [ ] Backdrop filter não suportado em alguns navegadores antigos

## 💡 Sugerir Melhorias

Tem uma ideia? [Abra uma issue](../../issues/new) com a tag `enhancement`:

- Descreva a funcionalidade proposta
- Explique o caso de uso
- Sugira implementação (opcional)
- Adicione mockups (opcional)

## 🤝 Como Contribuir

Contribuições são bem-vindas! Siga os passos:

### 1. Fork do Projeto

Clique no botão "Fork" no GitHub

### 2. Clone Seu Fork

```bash
git clone https://github.com/seu-usuario/enigmas-hogwarts.git
cd enigmas-hogwarts
```

### 3. Crie uma Branch

```bash
git checkout -b feature/nova-funcionalidade
# ou
git checkout -b fix/correcao-bug
```

### 4. Faça suas Alterações

- Mantenha o código limpo e comentado
- Siga o padrão de código existente
- Teste em múltiplos navegadores
- Verifique responsividade

### 5. Commit

```bash
git add .
git commit -m "feat: adiciona nova funcionalidade X"
```

**Padrões de Commit (Conventional Commits):**
- `feat:` Nova funcionalidade
- `fix:` Correção de bug
- `docs:` Documentação
- `style:` Formatação de código (não afeta lógica)
- `refactor:` Refatoração de código
- `perf:` Melhoria de performance
- `test:` Adição de testes
- `chore:` Tarefas de manutenção

### 6. Push

```bash
git push origin feature/nova-funcionalidade
```

### 7. Abra um Pull Request

- Descreva suas mudanças detalhadamente
- Adicione screenshots (se aplicável)
- Referencie issues relacionadas (#123)
- Aguarde revisão

### Diretrizes de Contribuição

- ✅ Código limpo e legível
- ✅ Comentários em português
- ✅ Compatibilidade cross-browser
- ✅ Mobile-first approach
- ✅ Acessibilidade (WCAG)
- ✅ Performance otimizada
- ❌ Dependências externas (manter vanilla)
- ❌ jQuery ou frameworks

## 📊 Status do Desenvolvimento

### ✅ Funcionalidades Implementadas

- [x] Sistema de 10 níveis progressivos
- [x] Validação inteligente de respostas
- [x] Sistema de pontuação (0-1.850 pts)
- [x] Sistema de dicas (-10 pts)
- [x] Interface responsiva
- [x] Animações e partículas mágicas
- [x] Sistema de tentativas (3 por nível)
- [x] Avaliação por estrelas (1-5)
- [x] Suporte a teclado (Enter para enviar)
- [x] Normalização de texto (acentos, pontuação)
- [x] Design temático Harry Potter
- [x] Transições suaves entre telas
- [x] Barra de progresso visual

### 🚧 Em Desenvolvimento

- [ ] Sistema de salvamento (localStorage)
- [ ] Modo escuro/claro
- [ ] Efeitos sonoros
- [ ] Histórico de partidas
- [ ] Estatísticas detalhadas

### 📋 Backlog (Futuro)

- [ ] Modo treino (sem pontuação)
- [ ] Ranking local (top 10)
- [ ] Compartilhar resultados
- [ ] Mais 10 níveis (expansão)
- [ ] Modo competitivo (tempo limitado)
- [ ] Conquistas e badges
- [ ] Internacionalização (EN, ES)
- [ ] PWA (Progressive Web App)
- [ ] Modo offline
- [ ] Easter eggs secretos

## 🧪 Testes

### Teste Manual

Verifique os seguintes cenários:

1. **Navegação**
   - ✓ Iniciar jogo
   - ✓ Avançar níveis
   - ✓ Concluir jogo
   - ✓ Reiniciar jogo

2. **Funcionalidades**
   - ✓ Validação de respostas corretas
   - ✓ Validação de respostas incorretas
   - ✓ Sistema de tentativas (3x)
   - ✓ Sistema de dicas
   - ✓ Cálculo de pontuação
   - ✓ Avaliação final por estrelas

3. **Interface**
   - ✓ Responsividade (mobile, tablet, desktop)
   - ✓ Animações funcionando
   - ✓ Partículas mágicas
   - ✓ Feedback visual (cores, mensagens)

4. **Compatibilidade**
   - ✓ Chrome/Edge
   - ✓ Firefox
   - ✓ Safari
   - ✓ Navegadores mobile

### Teste de Performance

```javascript
// Console do navegador (F12)
console.time('loadLevel');
loadLevel();
console.timeEnd('loadLevel');
```

## 📦 Deploy

### GitHub Pages

```bash
# 1. Crie um repositório no GitHub
# 2. Faça commit dos arquivos
git add .
git commit -m "chore: initial commit"
git push origin main

# 3. Vá em Settings → Pages
# 4. Source: Deploy from branch
# 5. Branch: main → /root
# 6. Save

# Seu jogo estará em:
# https://seu-usuario.github.io/enigmas-hogwarts/
```

### Netlify

1. Arraste a pasta para [Netlify Drop](https://app.netlify.com/drop)
2. Ou conecte seu repositório GitHub
3. Build: (nenhum)
4. Publish directory: `/`

### Vercel

```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel

# Deploy em produção
vercel --prod
```

## 📄 Licença

Este projeto está licenciado sob a **MIT License**.

```
MIT License

Copyright (c) 2022-2025 Debbie Matt

É permitido usar, copiar, modificar, mesclar, publicar, distribuir,
sublicenciar e/ou vender cópias do Software, desde que:

- O aviso de copyright acima e este aviso de permissão sejam incluídos
  em todas as cópias ou partes substanciais do Software.

O SOFTWARE É FORNECIDO "COMO ESTÁ", SEM GARANTIA DE QUALQUER TIPO.
```

### Resumo da Licença

✅ **Permitido:**
- Uso comercial
- Modificação
- Distribuição
- Uso privado

❌ **Limitações:**
- Responsabilidade do autor
- Garantias

## 👥 Autores e Créditos

### Desenvolvimento

**Debbie Matt** - Criadora e Desenvolvedora
- 💼 GitHub: [@DebbieMatt](https://github.com/DebbieMatt)
- 💼 LinkedIn: [Débora Mateus Camargo](https://www.linkedin.com/in/d%C3%A9bora-mateus-camargo-a21031190)
- 📧 Email: deboramateusdec@gmail.com

### Inspiração

- 📚 **J.K. Rowling** - Universo Harry Potter
- 🎨 **Warner Bros** - Design visual e estética
- 🌟 **Comunidade de Fãs** - Entusiasmo e suporte

## 🙏 Agradecimentos

- Aos fãs de Harry Potter que inspiraram este projeto
- À comunidade open-source por ferramentas e recursos
- A todos que testaram e deram feedback
- Aos contribuidores que melhoraram o código

## 📞 Contato e Suporte

### Canais de Comunicação

- 🐛 **Bugs**: [GitHub Issues](../../issues)
- 💬 **Discussões**: [GitHub Discussions](../../discussions)
- 📧 **Email**: deboramateusdec@gmail.com
- 💼 **LinkedIn**: [Débora Mateus Camargo](https://www.linkedin.com/in/d%C3%A9bora-mateus-camargo-a21031190)

### FAQ (Perguntas Frequentes)

**Q: Preciso instalar algo?**
A: Não! Apenas abra o `index.html` no navegador.

**Q: Funciona offline?**
A: Sim, após carregar a primeira vez.

**Q: Posso usar em meu projeto?**
A: Sim! É MIT License. Só mantenha os créditos.

**Q: Como adiciono novos níveis?**
A: Edite o array `levels` no `script.js`.

**Q: Por que minha resposta não é aceita?**
A: Verifique a ortografia. O sistema ignora acentos e pontuação automaticamente.

**Q: Funciona em celular?**
A: Sim! O design é totalmente responsivo.

## 🔗 Links Úteis

- 🎮 **[Jogar Agora](https://seu-usuario.github.io/enigmas-hogwarts/)**
- 📚 **[Documentação](../../wiki)**
- 🐛 **[Reportar Bug](../../issues/new?template=bug_report.md)**
- 💡 **[Sugerir Funcionalidade](../../issues/new?template=feature_request.md)**
- 📊 **[Roadmap](../../projects/1)**
- 🎯 **[Milestones](../../milestones)**

## 📈 Estatísticas do Projeto

![GitHub stars](https://img.shields.io/github/stars/DebbieMatt/enigmas-hogwarts?style=social)
![GitHub forks](https://img.shields.io/github/forks/DebbieMatt/enigmas-hogwarts?style=social)
![GitHub watchers](https://img.shields.io/github/watchers/DebbieMatt/enigmas-hogwarts?style=social)
![GitHub issues](https://img.shields.io/github/issues/DebbieMatt/enigmas-hogwarts)
![GitHub pull requests](https://img.shields.io/github/issues-pr/DebbieMatt/enigmas-hogwarts)
![GitHub last commit](https://img.shields.io/github/last-commit/DebbieMatt/enigmas-hogwarts)
![GitHub contributors](https://img.shields.io/github/contributors/DebbieMatt/enigmas-hogwarts)
![GitHub repo size](https://img.shields.io/github/repo-size/DebbieMatt/enigmas-hogwarts)

## 🎓 Aprendizados e Tecnologias

Este projeto é ideal para aprender:

- ✨ HTML5 semântico
- 🎨 CSS3 avançado (Grid, Flexbox, Animations)
- 🔧 JavaScript ES6+ (Arrow functions, Template literals)
- 🎮 Gerenciamento de estado
- 🎯 Validação de formulários
- 📱 Design responsivo
- ♿ Acessibilidade web
- 🎪 Animações e transições
- 🔤 Normalização de texto
- 🏗️ Arquitetura de código limpo

## 📚 Recursos Educacionais

- [MDN Web Docs](https://developer.mozilla.org/)
- [CSS-Tricks](https://css-tricks.com/)
- [JavaScript.info](https://javascript.info/)
- [Web.dev](https://web.dev/)

---

<div align="center">

### ⚡ Desenvolvido com magia por [Debbie Matt](https://github.com/DebbieMatt) ⚡

**Copyright © 2022-2025 | Inspirado no universo de Harry Potter**

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![Made with Love](https://img.shields.io/badge/Made%20with-❤-red.svg)](https://github.com/DebbieMatt)
[![Harry Potter](https://img.shields.io/badge/Tema-Harry%20Potter-9B59B6.svg)](https://www.wizardingworld.com/)

**Se você gostou deste projeto, deixe uma ⭐!**

</div>
