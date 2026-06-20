<div align="center">
  <img src="assets/img/logo.png" alt="SmartCondo Logo" width="80">
  <h1 align="center">SmartCondo</h1>
  <p align="center"><strong>Sistema de Gestão de Condomínios</strong></p>
  <p align="center">
    <img src="https://img.shields.io/badge/status-em%20desenvolvimento-yellow" alt="Status: Em desenvolvimento">
    <img src="https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=fff" alt="HTML5">
    <img src="https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=fff" alt="CSS3">
    <img src="https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=000" alt="JavaScript">
    <img src="https://img.shields.io/badge/licença-MIT-blue" alt="License">
  </p>
</div>

---

## 📋 Sobre o Projeto

O **SmartCondo** é um sistema de gestão condominial desenvolvido como projeto integrador da faculdade. A plataforma centraliza em um único lugar todas as atividades relacionadas à administração de um condomínio, oferecendo três perfis de acesso com funcionalidades específicas para cada tipo de usuário.

O projeto é **100% front-end** (protótipo funcional), construído com tecnologias web puras — sem frameworks ou bibliotecas externas — com o objetivo de consolidar os fundamentos do desenvolvimento web.

---

## 🎯 Funcionalidades por Perfil

### 🏠 Morador
- **Dashboard** — Visão geral com reservas, financeiro e comunicados
- **Reservas** — Agendamento de áreas comuns (salão, churrasqueira, piscina, academia, playground)
- **Financeiro** — Visualização de boletos, saldo devedor e histórico de pagamentos
- **Comunicados** — Acompanhamento de avisos do condomínio com filtros por categoria
- **Documentos** — Acesso a atas, convenção e regimento interno
- **Ocorrências** — Abertura e acompanhamento de solicitações
- **Perfil** — Edição de dados pessoais e alteração de senha

### 🚪 Porteiro
- **Dashboard** — Visão geral de visitantes, encomendas e comunicados
- **Visitantes** — Controle de entrada e saída de visitantes
- **Encomendas** — Registro e controle de retirada de encomendas
- **Veículos** — Controle de entrada e saída de veículos
- **Ocorrências** — Registro de ocorrências durante o turno
- **Perfil** — Edição de dados pessoais

### 📊 Síndico
- **Dashboard** — Painel administrativo com indicadores do condomínio
- **Financeiro** — Gestão financeira completa, geração de boletos e inadimplência
- **Moradores** — Cadastro e aprovação de novos moradores
- **Porteiros** — Gestão da equipe de portaria
- **Reservas** — Aprovação ou recusa de reservas
- **Comunicados** — Criação e envio de comunicados
- **Manutenção** — Abertura e acompanhamento de ordens de serviço
- **Perfil** — Edição de dados pessoais

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Descrição |
|---|---|
| **HTML5** | Estrutura semântica e multi-step forms com `:target` |
| **CSS3** | Design system com variáveis, glassmorphism, animações e responsividade |
| **JavaScript** | Validação de formulários, máscaras de input, acessibilidade e interatividade |
| **LocalStorage** | Persistência de preferências de acessibilidade e nome do perfil |
| **Google Fonts** | Plus Jakarta Sans (única fonte do projeto) |
| **SVG** | 47 ícones customizados |

**Sem frameworks, sem build tools, sem dependências externas.** Apenas HTML, CSS e JavaScript puros.

---

## 🎨 Destaques do Projeto

- **Design system completo** — Variáveis CSS para cores, sombras, bordas e espaçamentos
- **Detecção de perfil em tempo real** — Ao digitar a senha, o sistema identifica automaticamente o perfil
- **Multi-step forms** — Navegação entre etapas de cadastro usando CSS `:target`
- **Acessibilidade** — Widget com aumento de fonte, alto contraste e modo leitura (persistido em `localStorage`)
- **Glassmorphism** — Barra superior com efeito de vidro (`backdrop-filter: blur`)
- **Layout responsivo** — Duas variações: `layout-mobile` (bottom tab bar) e `layout-desktop`
- **Micro-interações** — Hover lifts, shimmer, pulse em badges e animações suaves
- **Três temas de cor** — Verde (morador), azul (porteiro) e roxo (síndico)
- **Máscaras de input** — CPF, telefone, CEP, CNPJ e placa de veículo

---

## 📁 Estrutura do Projeto

```
SmartCondo/
├── index.html                         # Página de login
├── assets/
│   ├── css/
│   │   ├── style.css                  # Estilos globais e login
│   │   └── dashboard.css              # Estilos dos dashboards
│   ├── js/
│   │   ├── validation.js              # Validações e máscaras de input
│   │   └── acessibilidade.js          # Widget de acessibilidade
│   └── img/
│       ├── logo.png
│       ├── acessibilidade.png
│       └── icons/                     # 47 ícones SVG
└── pages/
    ├── cadastro/                      # Cadastro de usuários
    │   ├── cadastro.html
    │   ├── morador.html
    │   └── sindico.html
    ├── login/                         # Fluxo de recuperação de senha
    │   ├── esqueci_senha.html
    │   ├── codigo_recuperacao.html
    │   └── nova_senha.html
    ├── morador/                       # Módulo do morador (7 páginas)
    │   ├── dashboard.html
    │   ├── reservas.html
    │   ├── financeiro.html
    │   ├── comunicados.html
    │   ├── documentos.html
    │   ├── ocorrencias.html
    │   ├── perfil.html
    │   └── aguardando_aprovacao.html
    ├── porteiro/                      # Módulo do porteiro (6 páginas)
    │   ├── dashboard.html
    │   ├── visitantes.html
    │   ├── encomendas.html
    │   ├── veiculos.html
    │   ├── ocorrencias.html
    │   ├── perfil.html
    │   └── aguardando_aprovacao.html
    └── sindico/                       # Módulo do síndico (11 páginas)
        ├── dashboard.html
        ├── financeiro.html
        ├── moradores.html
        ├── porteiros.html
        ├── reservas.html
        ├── comunicados.html
        ├── manutencao.html
        ├── perfil.html
        ├── cadastro_privado.html
        ├── cadastrar_porteiro.html
        └── aguardando_aprovacao.html
```

**Total:** 33 páginas HTML, 2 arquivos CSS, 2 arquivos JS, 47 ícones SVG.

---

## 🚀 Como Executar

1. Clone o repositório:
   ```bash
   git clone https://github.com/joaovitorarantes86-ui/Smart-Condo.git
   ```

2. Abra o arquivo `index.html` no navegador.

3. Faça login com uma das senhas abaixo:

| Perfil | Senha | Dashboard |
|---|---|---|
| Morador | `morador` | `pages/morador/dashboard.html` |
| Porteiro | `porteiro` | `pages/porteiro/dashboard.html` |
| Síndico | `sindico` | `pages/sindico/dashboard.html` |

> ⚠️ **Atenção:** Este é um protótipo front-end. Não há backend nem banco de dados. Os dados são mockados e as senhas são fixas.

---

## 📌 Funcionalidades Futuras

- [ ] Implementação de backend com API REST
- [ ] Autenticação com JWT
- [ ] Banco de dados real (PostgreSQL/MySQL)
- [ ] Notificações push e e-mail
- [ ] Painel de gráficos com dados dinâmicos
- [ ] Aplicativo mobile (React Native)
- [ ] Integração com sistemas de portaria física

---

<div align="center">
  <p>Desenvolvido por <a href="https://github.com/joaovitorarantes86-ui">João Vitor Arantes</a></p>
  <p>Projeto Integrador — Faculdade</p>
</div>
