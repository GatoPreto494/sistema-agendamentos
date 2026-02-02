# 🚀 Guia de Configuração - Sistema de Agendamentos

## Arquivos do Projeto

```
퉑c─ index.html  → Formulário HTML (Frontend)
├─ Script.gs   → Código Google Apps Script (Backend)
└─ README.md   → Documentação do Projeto
```

---

## 📁 Passo 1: Criar Google Sheet

1. Acesse [Google Sheets](https://sheets.google.com)
2. Clique em **+ Vazio** para criar uma nova planilha
3. Nomeie como "Agendamentos" ou qualquer outro nome
4. **Importante**: Copie o ID da planilha da URL
   - URL: `https://docs.google.com/spreadsheets/d/AQUI_ESTA_O_ID/edit`
   - Exemplo ID: `1a2b3c4d5e6f7g8h9i0j`

---

## ⚙️ Passo 2: Configurar Google Apps Script

### 2.1 - Abrir o Editor
1. Na sua planilha Google, clique em **Extensões**
2. Selecione **Apps Script**
3. Uma nova aba abrirá

### 2.2 - Copiar o Código
1. Abra o arquivo `Script.gs` deste repositório
2. Copie TODO o código
3. No editor Google Apps Script, apague tudo que tem lá
4. Cole o código copiado

### 2.3 - Configurar ID da Planilha
1. No editor, procure por:
   ```javascript
   const SHEET_ID = 'SEU_ID_DA_PLANILHA_AQUI';
   ```
2. Substitua `SEU_ID_DA_PLANILHA_AQUI` pelo ID copiado no Passo 1
3. Exemplo:
   ```javascript
   const SHEET_ID = '1a2b3c4d5e6f7g8h9i0j';
   ```

### 2.4 - Salvar e Deploy
1. Clique em **Salvar** (Ctrl+S)
2. Clique no botão **Fazer deploy**
3. Selecione **Novo deployment**
4. No dropdown que aparecer, escolha **Web app**
5. Preencha:
   - **Executar como**: Você (seu email)
   - **Quem tem acesso**: Qualquer pessoa
6. Clique em **Deploy**
7. Autorize quando solicitado
8. **COPIE A URL DO DEPLOYMENT** que aparecer
   - Exemplo: `https://script.google.com/macros/d/1a2b3c4d5e6f7g8h9i0j/usercontent`

---

## 📋 Passo 3: Atualizar o HTML

1. Abra o arquivo `index.html` do repositório
2. Procure pela linha:
   ```javascript
   const SCRIPT_URL = 'https://script.google.com/macros/d/SEU_ID_AQUI/useContent';
   ```
3. Substitua `SEU_ID_AQUI` pela URL COMPLETA do deployment (Passo 2.4)
4. Exemplo final:
   ```javascript
   const SCRIPT_URL = 'https://script.google.com/macros/d/1a2b3c4d5e6f7g8h9i0j/usercontent';
   ```

---

## 🌐 Passo 4: Usar o Sistema

### Opção A: Via Navegador Local
1. Faça download do arquivo `index.html`
2. Clique duplo para abrir no navegador
3. Preencha o formulário
4. Clique em **Confirmar Agendamento**

### Opção B: Via GitHub Pages (Recomendado)
1. Vá para as configurações do seu repositório
2. Rol para baixo até **GitHub Pages**
3. Selecione **main** como branch
4. Salve
5. A URL será: `https://seu-usuario.github.io/sistema-agendamentos/`

---

## 😘 Testando

1. Abra o formulário
2. Preencha:
   - Nome: "João Silva"
   - Telefone: "11999998888"
   - Data: Qualquer data futura
3. Clique **Confirmar Agendamento**
4. Deve aparecer mensagem verde de sucesso
5. Vá ao Google Sheets e veja se os dados aparecem

---

## 🚫 Erros Comuns

### "Erro ao enviar dados"
- [❌] URL do Google Apps Script está errada ou incomrpleta
- [✅] Solução: Confirme se copiou a URL COMPLETA incluindo `usercontent`

### "SHEET_ID inválido"
- [❌] ID da planilha está errado em Script.gs
- [✅] Solução: Copie novamente o ID da URL da planilha

### Dados não aparecem na planilha
- [❌] Aba 'Agendamentos' não foi criada
- [✅] Solução: Atualize a página do Google Sheets (F5)

---

## 📞 Suporte

- Deu erro? Veja o console: **F12 > Abas Console**
- Dúvidas? Abra uma [Issue](https://github.com/GatoPreto494/sistema-agendamentos/issues)

---

**Pronto para usar! 🎆**
