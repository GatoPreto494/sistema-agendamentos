// Deploy URL: https://script.google.com/macros/d/SEU_ID/usercontent

const SHEET_ID = 'SEU_ID_DA_PLANILHA_AQUI'; // Substitua pelo ID da sua planilha
const SHEET_NAME = 'Agendamentos'; // Nome da aba

function doPost(e) {
    try {
        const data = JSON.parse(e.postData.contents);
        
        // Obter a planilha
        const ss = SpreadsheetApp.openById(SHEET_ID);
        let sheet = ss.getSheetByName(SHEET_NAME);
        
        // Se a aba nao existir, criar
        if (!sheet) {
            sheet = ss.insertSheet(SHEET_NAME);
            // Adicionar headers
            sheet.appendRow(['Data/Hora', 'Nome', 'Telefone', 'Data do Agendamento']);
        }
        
        // Adicionar dados
        sheet.appendRow([
            data.timestamp,
            data.nome,
            data.telefone,
            data.data
        ]);
        
        // Retornar sucesso
        return ContentService.createTextOutput(JSON.stringify({
            status: 'success',
            message: 'Dados recebidos com sucesso'
        })).setMimeType(ContentService.MimeType.JSON);
        
    } catch (error) {
        // Retornar erro
        return ContentService.createTextOutput(JSON.stringify({
            status: 'error',
            message: error.toString()
        })).setMimeType(ContentService.MimeType.JSON);
    }
}

function doGet(e) {
    return ContentService.createTextOutput('Google Apps Script rodando!');
}
