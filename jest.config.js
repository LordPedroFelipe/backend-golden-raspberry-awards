module.exports = {
    preset: 'ts-jest', // Usa ts-jest para transformar arquivos TypeScript
    testEnvironment: 'node', // Define o ambiente de testes como Node.js
    transform: {
      '^.+\\.ts$': 'ts-jest', // Transforma arquivos .ts usando ts-jest
    },
    moduleFileExtensions: ['ts', 'js'], // Suporte para arquivos .ts e .js
    transformIgnorePatterns: ['/node_modules/'], // Ignora a transformação de arquivos em node_modules
    maxWorkers: 1,
  };