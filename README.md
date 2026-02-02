# sistema-agendamentos
# 📅 Sistema de Agendamentos

Sistema completo de agendamentos com formulário HTML e Google Sheets como backend.

## 🌟 Características

- ✅ Formulário responsivo e moderno
- ✅ Validação de dados no frontend
- ✅ Integração com Google Sheets
- ✅ Formatação automática de telefone
- ✅ Proteção contra datas passadas
- ✅ Mensagens de sucesso/erro
- ✅ Design intuitivo e amigável

## 📁 Estrutura do Projeto

```
sistema-agendamentos/
├── index.html          # Frontend (formulário HTML)
├── Script.gs           # Backend (Google Apps Script)
└── README.md           # Documentação
```

## 🚀 Como Usar

### 1️⃣ Criar uma Planilha Google

1. Acesse [Google Sheets](https://sheets.google.com)
2. Crie uma nova planilha
3. Copie o ID da URL: `https://docs.google.com/spreadsheets/d/SEU_ID_AQUI/...`

### 2️⃣ Configurar Google Apps Script

1. Abra a planilha criada
2. Clique em **Extensões > Apps Script**
3. Cole o código de `Script.gs` no editor
4. No início do arquivo, substitua `SEU_ID_DA_PLANILHA_AQUI` pelo ID da sua planilha
5. Clique em **Salvar** e depois em **Fazer deploy > Novo deployment**
6. Escolha **Web app**
7. Configure como:
   - **Executar como**: Você
   - **Quem tem acesso**: Qualquer pessoa
8. Clique em **Deploy** e autorize quando solicitado
9. **Copie a URL do deployment** (você precisará dela)

### 3️⃣ Atualizar o HTML

1. Abra `index.html`
2. Procure por `const SCRIPT_URL = 'https://script.google.com/macros/d/SEU_ID_AQUI/useContent';`
3. **Substitua** `SEU_ID_AQUI` pela URL completa do deployment do Google Apps Script
4. Salve o arquivo

### 4️⃣ Usar o Sistema

1. Abra `index.html` no navegador (pode ser via GitHub Pages ou localmente)
2. Preencha o formulário com:
   - **Nome Completo**: Nome da pessoa
   - **Telefone**: (11) 9999-9999
   - **Data do Agendamento**: Data futura
3. Clique em **Confirmar Agendamento**
4. Os dados serão salvos automaticamente na sua planilha Google

## 📊 Dados Salvos

Cada agendamento registra:
- **Data/Hora**: Quando foi registrado
- **Nome**: Nome completo da pessoa
- **Telefone**: Telefone formatado
- **Data do Agendamento**: Data do agendamento

## 🔧 Personalizações

### Cores
No `index.html`, procure por `#667eea` e `#764ba2` para mudar as cores do gradiente.

### Nome da Aba
Em `Script.gs`, mude `SHEET_NAME = 'Agendamentos'` para o nome desejado.

### Validações
Você pode modificar as validações no `index.html` na seção `<script>`.

## ⚠️ Importante

- Certifique-se de copiar **EXATAMENTE** a URL do deployment
- A URL deve terminar em `/usercontent`
- O Google Sheets deve estar acessível para você
- A primeira requisição pode levar alguns segundos

## 🐛 Troubleshooting

### Erro: "Erro ao enviar dados"
- Verifique se a URL do Google Apps Script está correta
- Confira se a planilha ID está correto em `Script.gs`

### Dados não aparecem na planilha
- Atualize a página do Google Sheets
- Verifique se a aba 'Agendamentos' foi criada
- Veja o console do navegador (F12) para mais detalhes

## 📱 Compatibilidade

- ✅ Chrome/Chromium
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Responsivo em mobile

## 📝 Licença

MIT License - Livre para usar e modificar

## 👨‍💻 Autor

Criado por gatopreto494

---

**Dúvidas?** Abra uma issue no repositório!
