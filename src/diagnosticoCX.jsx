import { useState } from 'react'

const DiagnosticoCX = () => {
  const [currentAreaIndex, setCurrentAreaIndex] = useState(0)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [answers, setAnswers] = useState([])
  const [currentStep, setCurrentStep] = useState('explanation') // 'explanation', 'question', 'results'

  const diagnosticoData = {
    areas: [
      {
        nome: "CONSULTA EXTRAORDINÁRIA",
        explicacao: {
          titulo: "O que é Consulta Extraordinária?",
          texto: "A Consulta Extraordinária é o momento onde você demonstra sua expertise e diferencial como profissional. É aqui que você conta histórias que conectam emocionalmente com o paciente, realiza exames detalhados como periogramas, e consegue fechar TPMC/PIC usando técnicas avançadas de comunicação e persuasão."
        },
        perguntas: [
          "A cada 10 pacientes, quantos deles ouvem de você uma das 7 histórias que salvam dentes?",
          "A cada 10 pacientes, quantos periogramas você realiza dentro da alavanca da ação do paciente?",
          "A cada 10 pacientes, quantos TPMC/PIC consegue fechar?",
          "O quanto você utilizou a técnica da bola de cristal nos últimos 10 pacientes?",
          "Nos últimos 10 pacientes, o quanto você utilizou o medo ou sonho como elemento de fechamento do TPMC/PIC?"
        ]
      },
      {
        nome: "RM3em1",
        explicacao: {
          titulo: "O que é RM3em1?",
          texto: "RM3em1 é uma metodologia revolucionária de raspagem e alisamento radicular que combina três técnicas em uma única sessão. Envolve o uso de tecnologia moderna, evidenciadores de placa para precisão máxima, e técnicas que garantem conforto mesmo para pacientes com hipersensibilidade, resultando em um acabamento que impressiona os pacientes."
        },
        perguntas: [
          "O quanto a cureta deixou de ser o principal instrumento para sua instrumentação?",
          "A cada 10 procedimentos, quantos você utiliza o evidenciador de placa como GPS da placa?",
          "O quanto é confortável a sua instrumentação para o paciente mesmo com hipersensibilidade?",
          "A cada 10 pacientes, quantos elogiam exageradamente o resultado do seu RM3em1?",
          "A cada 10 pacientes, quantos falam: nossa nunca vi meu dente tão brilhoso assim?"
        ]
      },
      {
        nome: "TRATAMENTO PERIODONTAL",
        explicacao: {
          titulo: "O que é Tratamento Periodontal Avançado?",
          texto: "Refere-se ao domínio completo das técnicas de tratamento periodontal, desde procedimentos básicos até os mais complexos. Inclui o uso seguro de ultrassom em bolsas profundas, tratamentos de lesões de furca, TPNC (Terapia Periodontal Não Cirúrgica) para diferentes graus de periodontite, e o conhecimento para prescrever antibioticoterapia adequada."
        },
        perguntas: [
          "O quanto você se sente segura para instrumentar bolsas profundas com ultrassom?",
          "O quanto você se sente segura para tratar uma lesão de furca com amputação radicular?",
          "O quanto você se sente segura para realizar TPNC de periodontite severa?",
          "O quanto você se sente segura para realizar TPNC de mucosite peri-implantar?",
          "O quanto você se sente segura na prescrição de antibioticoterapia dentro do TPNC?"
        ]
      },
      {
        nome: "PROBLEMAS SISTÊMICOS",
        explicacao: {
          titulo: "O que são Problemas Sistêmicos?",
          texto: "Trata da capacidade de atender pacientes com condições médicas complexas que afetam o tratamento periodontal. Inclui o manejo de pacientes diabéticos, tabagistas, com problemas cardiovasculares, depressão/ansiedade, e o conhecimento sobre suplementação nutricional para acelerar a cicatrização e resultados do tratamento."
        },
        perguntas: [
          "A cada 10 pacientes sistêmicos, a quantos deles você conta a história do incêndio ou outra equivalente?",
          "O quanto consegue tratar Periodontite em pacientes diabéticos descompensados com segurança?",
          "O quanto consegue tratar Periodontite impedindo o progresso da perda óssea em pacientes tabagistas com segurança?",
          "O quanto você se sente seguro para tratar Periodontite em pacientes com depressão e/ou ansiedade?",
          "A cada 10 pacientes sistêmicos, quantos deles você prescreve suplementação (vit D, C, B12, Omega3) para acelerar o tratamento?"
        ]
      },
      {
        nome: "PRECIFICAÇÃO",
        explicacao: {
          titulo: "O que é Precificação Estratégica?",
          texto: "Refere-se à capacidade de precificar seus serviços baseado no valor entregue ao paciente. O Método Dentista que Salva Dentes permite cobrar valores premium por salvar dentes que seriam extraídos, oferecendo tratamentos indolores e resultados superiores. Uma precificação adequada é fundamental para a valorização profissional."
        },
        perguntas: [
          "O quanto o seu tratamento para Periodontite Inicial se aproxima de R$ 4.000?",
          "O quanto o seu tratamento para Periodontite Moderada se aproxima de R$ 8.000-12.000?",
          "O quanto o seu tratamento para Periodontite Severa se aproxima de R$ 15.000-20.000?",
          "O quanto o seu tratamento para Gengivite se aproxima de R$ 2.000-3.000?",
          "O quanto consegue receber por hora clínica nos seus tratamentos periodontais?"
        ]
      },
      {
        nome: "CAPTAÇÃO",
        explicacao: {
          titulo: "O que é Captação de Pacientes?",
          texto: "Envolve todas as estratégias para atrair e manter pacientes baseado na reputação de 'Dentista que Salva Dentes'. Inclui ações de marketing focadas em resultados, rechamadas estratégicas, parcerias profissionais, sistema de indicações e construção de uma reputação sólida. É essencial para o crescimento sustentável da prática."
        },
        perguntas: [
          "A cada 10 pacientes, quantos deles te conheceram através da sua reputação de 'salvar dentes'?",
          "Nos últimos 6 meses, quantas vezes fez ações para reativar pacientes antigos?",
          "O quanto suas parcerias com colegas para encaminhamento se aproxima de 5 profissionais ativos?",
          "A cada mês, quantos novos pacientes chegam através de indicações de pacientes satisfeitos?",
          "A cada 10 pacientes, quantos deles te reconhecem como um dentista que realmente salva dentes?"
        ]
      },
      {
        nome: "RECORRÊNCIA",
        explicacao: {
          titulo: "O que é Recorrência de Pacientes?",
          texto: "Refere-se à capacidade de manter pacientes em tratamentos contínuos através de TPMC/PIC (Tratamento Periodontal de Manutenção Customizado/Prevenção Integrada Customizada). Inclui o engajamento de diferentes perfis de pacientes em programas de manutenção e a apresentação constante de novidades e melhorias para manter o interesse e adesão ao tratamento."
        },
        perguntas: [
          "A cada 10 pacientes idosos, adolescentes ou gestantes, quantos deles estão em um TPMC/PIC?",
          "A cada 10 pacientes com implantes ou protocolo, quantos deles estão em um TPMC/PIC?",
          "A cada 10 pacientes com doenças cardiovasculares (hipertensão, stent, infarto, AVC, dislipidemia), quantos deles estão em um TPMC/PIC?",
          "Nos 10 últimos atendimentos, quantos deles você apresentou novidades (produtos odontológicos ou orientações de estilo de vida) para os pacientes?",
          "A cada 10 pacientes, quantos estão em um TPMC/PIC?"
        ]
      }
    ]
  }

  // Initialize answers on component mount
  useState(() => {
    setAnswers(diagnosticoData.areas.map(area => new Array(area.perguntas.length).fill(1)))
  }, [])

  const startQuestions = () => {
    setCurrentQuestionIndex(0)
    setCurrentStep('question')
  }

  const nextQuestion = () => {
    const currentArea = diagnosticoData.areas[currentAreaIndex]
    
    if (currentQuestionIndex < currentArea.perguntas.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
    } else if (currentAreaIndex < diagnosticoData.areas.length - 1) {
      setCurrentAreaIndex(currentAreaIndex + 1)
      setCurrentStep('explanation')
    } else {
      setCurrentStep('results')
    }
  }

  const updateCurrentScore = (value) => {
    const newAnswers = [...answers]
    if (!newAnswers[currentAreaIndex]) {
      newAnswers[currentAreaIndex] = new Array(diagnosticoData.areas[currentAreaIndex].perguntas.length).fill(1)
    }
    newAnswers[currentAreaIndex][currentQuestionIndex] = parseInt(value)
    setAnswers(newAnswers)
  }

  const getCurrentScore = () => {
    if (!answers[currentAreaIndex]) return 1
    return answers[currentAreaIndex][currentQuestionIndex] || 1
  }

  const calculateResults = () => {
    const areaScores = []
    let totalPercentage = 0
    
    diagnosticoData.areas.forEach((area, areaIndex) => {
      const areaAnswers = answers[areaIndex] || new Array(area.perguntas.length).fill(1)
      const areaTotal = areaAnswers.reduce((sum, score) => sum + score, 0)
      // Ajuste para escala 1-10: (total - mínimo) / (máximo - mínimo) * 100
      const minScore = area.perguntas.length * 1 // mínimo possível
      const maxScore = area.perguntas.length * 10 // máximo possível
      const areaPercentage = Math.round(((areaTotal - minScore) / (maxScore - minScore)) * 100)
      areaScores.push({
        nome: area.nome,
        percentage: areaPercentage
      })
      totalPercentage += areaPercentage
    })
    
    const overallPercentage = Math.round(totalPercentage / diagnosticoData.areas.length)
    return { areaScores, overallPercentage }
  }

  const getDiagnosisData = (percentage) => {
    if (percentage >= 80) {
      return {
        titulo: "🟢 EXCELENTE!",
        subtitulo: "Você está no topo da valorização profissional!",
        diagnostico: "Parabéns! Você demonstra um nível excepcional de competência e valorização profissional. Suas habilidades técnicas, estratégias de precificação e relacionamento com pacientes estão em um patamar de excelência. Você consegue implementar o Método Dentista que Salva Dentes com maestria.",
        melhorar: [
          "Continue aprimorando técnicas mais avançadas do método RM3em1",
          "Expanda conhecimentos em casos complexos de periodontite",
          "Desenvolva ainda mais sua presença como referência no mercado",
          "Aperfeiçoe sistemas de gestão e delegação para TSB"
        ]
      }
    } else if (percentage >= 60) {
      return {
        titulo: "🟡 BOM!",
        subtitulo: "Você está no caminho certo, mas ainda há espaço para crescimento.",
        diagnostico: "Você possui uma base sólida de conhecimentos e práticas profissionais, mas ainda há oportunidades significativas de melhoria em algumas áreas específicas do Método Dentista que Salva Dentes.",
        melhorar: [
          "Técnicas de comunicação das 7 histórias que salvam dentes",
          "Estratégias de precificação para atingir valores de referência",
          "Domínio completo da técnica RM3em1",
          "Protocolos de TPMC/PIC para casos de mobilidade dentária",
          "Sistemas de manutenção através de TPMC/PIC",
          "Confiança em procedimentos de alta complexidade periodontal"
        ]
      }
    } else if (percentage >= 40) {
      return {
        titulo: "🟠 ATENÇÃO!",
        subtitulo: "Você está no caminho, mas tem áreas que precisam de ajustes urgentes.",
        diagnostico: "Você possui conhecimentos básicos, mas há inconsistências significativas em sua prática profissional que estão limitando sua capacidade de salvar dentes e sua valorização no mercado.",
        melhorar: [
          "Técnicas de instrumentação com ultrassom e evidenciadores",
          "Habilidades de comunicação das histórias que conectam",
          "Estratégia de precificação (muito abaixo do potencial)",
          "Sistema de captação baseado na reputação de 'salvar dentes'",
          "Protocolos de TPMC/PIC para casos de perda óssea",
          "Confiança em procedimentos sem cirurgia para periodontite"
        ]
      }
    } else if (percentage >= 20) {
      return {
        titulo: "🔴 CRÍTICO!",
        subtitulo: "É necessário uma revisão completa da sua estratégia profissional.",
        diagnostico: "Sua prática apresenta deficiências significativas em múltiplas áreas fundamentais do Método Dentista que Salva Dentes, comprometendo sua capacidade de valorização profissional e sustentabilidade.",
        melhorar: [
          "Fundamentos básicos do método RM3em1",
          "Técnicas de comunicação das histórias que salvam dentes",
          "Sistema completo de precificação para alta lucratividade",
          "Estratégias para ser reconhecido como referência",
          "Protocolos de TPMC/PIC para tratar periodontite sem cirurgia",
          "Confiança e segurança técnica em casos complexos",
          "Gestão de pacientes com mobilidade e perda óssea"
        ]
      }
    } else {
      return {
        titulo: "⚫ EMERGENCIAL!",
        subtitulo: "Sua valorização profissional precisa de uma transformação imediata.",
        diagnostico: "Situação crítica que requer intervenção imediata. Há deficiências graves em praticamente todas as áreas do Método Dentista que Salva Dentes, comprometendo gravemente sua capacidade de oferecer serviços de qualidade e se valorizar no mercado.",
        melhorar: [
          "TODOS os fundamentos do Método Dentista que Salva Dentes",
          "Habilidades básicas de comunicação com pacientes",
          "Conceitos elementares de precificação por valor",
          "Sistemas básicos de organização e protocolos de TPMC/PIC",
          "Técnicas básicas de instrumentação periodontal",
          "Relacionamento baseado em confiança e resultados",
          "Competência técnica fundamental para salvar dentes"
        ]
      }
    }
  }

  const getScoreExplanation = (score) => {
    const explanations = {
      1: { label: "Nunca consigo", description: "Não tenho conhecimento ou experiência nesta área" },
      2: { label: "Raramente consigo", description: "Tenho conhecimento muito básico, mas pouca aplicação prática" },
      3: { label: "Às vezes consigo", description: "Conhecimento básico com aplicação esporádica" },
      4: { label: "Ocasionalmente consigo", description: "Algum conhecimento, mas inconsistente na aplicação" },
      5: { label: "Consigo medianamente", description: "Conhecimento intermediário com aplicação moderada" },
      6: { label: "Consigo bem", description: "Bom conhecimento com aplicação regular" },
      7: { label: "Consigo muito bem", description: "Conhecimento avançado com boa aplicação prática" },
      8: { label: "Consigo excelentemente", description: "Conhecimento sólido com aplicação consistente" },
      9: { label: "Consigo com maestria", description: "Conhecimento avançado com excelente aplicação" },
      10: { label: "Sempre consigo", description: "Domínio completo com aplicação excepcional e consistente" }
    }
    return explanations[score] || explanations[1]
  }

  const restartDiagnostic = () => {
    setCurrentAreaIndex(0)
    setCurrentQuestionIndex(0)
    setAnswers(diagnosticoData.areas.map(area => new Array(area.perguntas.length).fill(1)))
    setCurrentStep('explanation')
  }
    setCurrentAreaIndex(0)
    setCurrentQuestionIndex(0)
    setAnswers(diagnosticoData.areas.map(area => new Array(area.perguntas.length).fill(1)))
    setCurrentStep('explanation')
  }

  const renderExplanation = () => {
    const area = diagnosticoData.areas[currentAreaIndex]
    
    return (
      <div className="step-container">
        <div className="area-title">{area.nome}</div>
        <div className="area-explanation">
          <h3>{area.explicacao.titulo}</h3>
          <p>{area.explicacao.texto}</p>
        </div>
        <div className="start-btn-container">
          <button className="start-btn" onClick={startQuestions}>Iniciar Perguntas</button>
        </div>
      </div>
    )
  }

  const renderQuestion = () => {
    const area = diagnosticoData.areas[currentAreaIndex]
    const totalQuestions = diagnosticoData.areas.reduce((sum, area) => sum + area.perguntas.length, 0)
    let absoluteQuestionIndex = 0
    
    for (let i = 0; i < currentAreaIndex; i++) {
      absoluteQuestionIndex += diagnosticoData.areas[i].perguntas.length
    }
    absoluteQuestionIndex += currentQuestionIndex + 1
    
    const isLastQuestion = (currentAreaIndex === diagnosticoData.areas.length - 1) && 
                          (currentQuestionIndex === area.perguntas.length - 1)
    
    const currentScore = getCurrentScore()
    const explanation = getScoreExplanation(currentScore)
    const progressPercentage = Math.round((absoluteQuestionIndex / totalQuestions) * 100)
    
    return (
      <div className="step-container">
        <div className="question-header">
          <div className="area-badge">{area.nome}</div>
          <div className="question-progress">Pergunta {absoluteQuestionIndex} de {totalQuestions}</div>
          <div className="progress-percentage">{progressPercentage}% concluído</div>
          <div className="progress-bar">
            <div 
              className="progress-fill" 
              style={{width: `${progressPercentage}%`}}
            ></div>
          </div>
        </div>
        
        <div className="question-card">
          <div className="question-number">Pergunta {currentQuestionIndex + 1}/{area.perguntas.length}</div>
          <div className="question-text">
            {area.perguntas[currentQuestionIndex]}
          </div>
          
          <div className="score-grid">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(number => (
              <button
                key={number}
                className={`score-button ${currentScore === number ? 'selected' : ''}`}
                onClick={() => updateCurrentScore(number)}
              >
                {number}
              </button>
            ))}
          </div>
          
          <div className="score-labels">
            <span className="score-label-left">Nunca consigo</span>
            <span className="score-label-right">Sempre consigo</span>
          </div>
          
          <div className="score-explanation">
            <div className="explanation-title">{explanation.label}</div>
            <div className="explanation-description">{explanation.description}</div>
          </div>
        </div>
        
        <div className="question-navigation">
          <button className="nav-button primary" onClick={nextQuestion}>
            {isLastQuestion ? 'FINALIZAR' : 'PRÓXIMA'}
          </button>
        </div>
      </div>
    )
  }

  const renderResults = () => {
    const { areaScores, overallPercentage } = calculateResults()
    const diagnosisData = getDiagnosisData(overallPercentage)
    
    return (
      <div className="step-container">
        <div className="area-title">📊 Seus Resultados</div>
        <div className="results">
          <div className="overall-score">
            <div className="score-circle">{overallPercentage}%</div>
            <div className="diagnosis">
              <div style={{marginBottom: '30px'}}>
                <h3 style={{color: '#d2bc8f', marginBottom: '30px', fontSize: '1.6em', textAlign: 'center'}}>{diagnosisData.titulo}</h3>
                <h4 style={{color: 'white', marginBottom: '35px', fontSize: '0.75em', textAlign: 'center', fontWeight: 300}}>{diagnosisData.subtitulo}</h4>
                <p style={{marginBottom: '25px', fontSize: '1.1em', lineHeight: '1.6', textAlign: 'left'}}>{diagnosisData.diagnostico}</p>
              </div>
              
              <div style={{marginBottom: '30px'}}>
                <h3 style={{color: '#d2bc8f', marginBottom: '25px', fontSize: '1.6em', textAlign: 'center'}}>📊 Resultado do Seu Diagnóstico</h3>
                <div style={{display: 'grid', gridTemplateColumns: '1fr', gap: '15px', marginBottom: '30px'}}>
                  {areaScores.map((area, index) => {
                    let areaStatus = ''
                    let areaColor = ''
                    if (area.percentage >= 80) {
                      areaStatus = 'EXCELENTE'
                      areaColor = '#27ae60'
                    } else if (area.percentage >= 60) {
                      areaStatus = 'BOM'
                      areaColor = '#f39c12'
                    } else if (area.percentage >= 40) {
                      areaStatus = 'ATENÇÃO'
                      areaColor = '#e67e22'
                    } else if (area.percentage >= 20) {
                      areaStatus = 'CRÍTICO'
                      areaColor = '#e74c3c'
                    } else {
                      areaStatus = 'EMERGENCIAL'
                      areaColor = '#8e44ad'
                    }
                    
                    return (
                      <div key={index} style={{
                        padding: '20px',
                        background: 'rgba(255,255,255,0.08)',
                        borderRadius: '6px',
                        borderLeft: `4px solid ${areaColor}`,
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                      }}>
                        <div style={{
                          fontFamily: 'Montserrat, sans-serif',
                          fontWeight: 500,
                          color: 'white',
                          fontSize: '1.1em',
                          textAlign: 'left'
                        }}>{area.nome}</div>
                        <div style={{textAlign: 'right'}}>
                          <div style={{
                            fontFamily: 'Readex Pro, sans-serif',
                            fontWeight: 700,
                            fontSize: '1.4em',
                            color: 'white'
                          }}>{area.percentage}%</div>
                          <div style={{
                            fontSize: '0.85em',
                            color: areaColor,
                            fontWeight: 600
                          }}>{areaStatus}</div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
              
              <div style={{
                background: 'rgba(210, 188, 143, 0.1)',
                padding: '25px',
                borderRadius: '6px',
                borderLeft: '4px solid #d2bc8f',
                margin: '25px 0'
              }}>
                <h4 style={{
                  color: '#d2bc8f',
                  marginBottom: '20px',
                  fontSize: '1.2em',
                  textAlign: 'center'
                }}>🦷 Áreas que Precisam Melhorar</h4>
                <ul style={{
                  lineHeight: '1.7',
                  fontSize: '1.0em',
                  paddingLeft: '20px',
                  listStyle: 'none',
                  textAlign: 'left'
                }}>
                  {diagnosisData.melhorar.map((item, index) => (
                    <li key={index} style={{marginBottom: '8px'}}>🦷 {item}</li>
                  ))}
                </ul>
              </div>
              
              <div style={{
                background: 'linear-gradient(135deg, #d2bc8f 0%, #c1a76f 100%)',
                padding: '30px',
                borderRadius: '8px',
                marginTop: '35px',
                textAlign: 'center',
                color: '#082033'
              }}>
                <h4 style={{
                  color: '#082033',
                  marginBottom: '25px',
                  fontSize: '1.4em',
                  fontWeight: 700,
                  textAlign: 'center'
                }}>Para Alcançar os Resultados Você Precisa de Três Pilares</h4>
                
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                  gap: '25px',
                  margin: '25px 0',
                  textAlign: 'left'
                }}>
                  <div style={{
                    background: 'rgba(8, 32, 51, 0.1)',
                    padding: '25px',
                    borderRadius: '6px'
                  }}>
                    <h5 style={{
                      color: '#082033',
                      fontSize: '1.2em',
                      marginBottom: '15px',
                      fontWeight: 600,
                      textAlign: 'center'
                    }}>DIRECIONAMENTO</h5>
                    <p style={{
                      color: '#082033',
                      fontSize: '0.95em',
                      lineHeight: '1.4',
                      marginBottom: '15px',
                      textAlign: 'center'
                    }}>Saber exatamente o que fazer e como fazer</p>
                    <div style={{fontSize: '0.9em', lineHeight: '1.5'}}>
                      <div style={{marginBottom: '8px'}}>🦷 Protocolo claro para cada procedimento</div>
                      <div style={{marginBottom: '8px'}}>🦷 Estratégia de precificação estruturada</div>
                      <div style={{marginBottom: '8px'}}>🦷 Técnicas de comunicação eficazes</div>
                      <div style={{marginBottom: '8px'}}>🦷 Sistema de captação organizado</div>
                      <div style={{marginBottom: '8px'}}>🦷 TPMC/PIC padronizados</div>
                    </div>
                  </div>
                  
                  <div style={{
                    background: 'rgba(8, 32, 51, 0.1)',
                    padding: '25px',
                    borderRadius: '6px'
                  }}>
                    <h5 style={{
                      color: '#082033',
                      fontSize: '1.2em',
                      marginBottom: '15px',
                      fontWeight: 600,
                      textAlign: 'center'
                    }}>FEEDBACK</h5>
                    <p style={{
                      color: '#082033',
                      fontSize: '0.95em',
                      lineHeight: '1.4',
                      marginBottom: '15px',
                      textAlign: 'center'
                    }}>Acompanhamento constante dos seus processos</p>
                    <div style={{fontSize: '0.9em', lineHeight: '1.5'}}>
                      <div style={{marginBottom: '8px'}}>🦷 Correção de técnicas em tempo real</div>
                      <div style={{marginBottom: '8px'}}>🦷 Ajuste de precificação quando necessário</div>
                      <div style={{marginBottom: '8px'}}>🦷 Melhoria da comunicação com pacientes</div>
                      <div style={{marginBottom: '8px'}}>🦷 Otimização dos TPMC/PIC</div>
                      <div style={{marginBottom: '8px'}}>🦷 Evolução constante dos resultados</div>
                    </div>
                  </div>
                  
                  <div style={{
                    background: 'rgba(8, 32, 51, 0.1)',
                    padding: '25px',
                    borderRadius: '6px'
                  }}>
                    <h5 style={{
                      color: '#082033',
                      fontSize: '1.2em',
                      marginBottom: '15px',
                      fontWeight: 600,
                      textAlign: 'center'
                    }}>COMUNIDADE</h5>
                    <p style={{
                      color: '#082033',
                      fontSize: '0.95em',
                      lineHeight: '1.4',
                      marginBottom: '15px',
                      textAlign: 'center'
                    }}>Estar no ambiente certo com pessoas certas</p>
                    <div style={{fontSize: '0.9em', lineHeight: '1.5'}}>
                      <div style={{marginBottom: '8px'}}>🦷 Troca de experiências entre profissionais</div>
                      <div style={{marginBottom: '8px'}}>🦷 Networking qualificado e parcerias</div>
                      <div style={{marginBottom: '8px'}}>🦷 Motivação através de casos de sucesso</div>
                      <div style={{marginBottom: '8px'}}>🦷 Suporte para implementação de TPMC/PIC</div>
                      <div style={{marginBottom: '8px'}}>🦷 Ambiente de crescimento profissional</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="container">
      <div className="header">
        <h1>🦷 Diagnóstico Individual de Valorização Profissional</h1>
        <p>Descubra seu nível atual de valorização profissional através de uma avaliação detalhada</p>
      </div>

      <div className="content">
        {currentStep === 'explanation' && renderExplanation()}
        {currentStep === 'question' && renderQuestion()}
        {currentStep === 'results' && renderResults()}
      </div>
    </div>
  )
}

export default DiagnosticoCX
