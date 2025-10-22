// Importa a biblioteca axios, que é um cliente HTTP baseado em Promises
// usado para fazer requisições HTTP (GET, POST, PUT, DELETE, etc.)
import axios from 'axios';

// Define a URL base da API
// Usa uma variável de ambiente NEXT_PUBLIC_API_URL se estiver disponível
// Caso contrário, usa 'http://localhost:3000/api' como fallback (valor padrão)
// O prefixo NEXT_PUBLIC_ torna essa variável acessível no lado do cliente no Next.js
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';

// Cria uma instância personalizada do axios com configurações pré-definidas
// Isso permite reutilizar essas configurações em todas as requisições
const api = axios.create({
    // Define a URL base que será prefixada em todas as requisições feitas com esta instância
    // Por exemplo, se você fizer api.get('/users'), a URL final será API_BASE_URL + '/users'
    baseURL: API_BASE_URL,

    // Define o tempo máximo de espera para uma requisição em milissegundos (30 segundos)
    // Se a requisição demorar mais que isso, será cancelada automaticamente
    timeout: 30000,

    // Define os headers (cabeçalhos) padrão que serão enviados em todas as requisições
    headers: {
        // Informa ao servidor que o conteúdo enviado está no formato JSON
        // Isso é importante para que o servidor saiba como interpretar os dados
        'Content-Type': 'application/json',
    },
});

// Exporta tanto a instância configurada do axios (api) quanto a URL base (API_BASE_URL)
// Isso permite que outros arquivos importem e utilizem essas constantes
// A instância 'api' é o que será usado para fazer as requisições HTTP
// A 'API_BASE_URL' pode ser útil para construir URLs manualmente quando necessário
export { api, API_BASE_URL };