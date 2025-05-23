# Exemplo
Este repositório contém exemplos práticos que ilustram os fundamentos da Programação Orientada a Objetos (POO) e o padrão de arquitetura MVC (Model-View-Controller). Utilizando JavaScript e EJS, o projeto visa facilitar a compreensão desses conceitos essenciais para o desenvolvimento de software estruturado e escalável.

## 📚 Tecnologias Utilizadas

- **JavaScript**: Linguagem principal para implementação da lógica de programação.
- **EJS (Embedded JavaScript)**: Motor de templates para renderização de páginas HTML dinâmicas. 

## 🚀 Como Executar o Projeto

1. Clone o repositório em sua máquina local:

   ```bash
   git clone https://github.com/leonardo-ggomes/poo-construtor.git
   cd poo-construtor
   ```

2. Instale as dependências necessárias:

   ```bash
   npm install
   ```

3. Inicie o servidor de desenvolvimento:

   ```bash
   npm start
   ```

   ```
   http://localhost:3000
   ```

## 🧩 Estrutura do Projeto

O projeto está organizado da seguinte forma:

```
poo-construtor/
├── mvc/
│   ├── model/
│   │   └── exemploModel.js
│   ├── view/
│   │   └── exemploView.ejs
│   └── controller/
│       └── exemploController.js
├── index.js
└── package.json
```

- **mvc/**: Diretório que contém a implementação do padrão MVC.
  - **model/**: Define a estrutura de dados e a lógica de negócios.
  - **view/**: Arquivos EJS responsáveis pela apresentação dos dados.
  - **controller/**: Controla o fluxo de dados entre o Model e a View.
- **index.js**: Arquivo principal que inicializa o servidor e configura as rotas.
- **package.json**: Gerenciador de dependências e scripts do projeto.

## 💡 Conceitos Abordados

- **Construtores**: Funções especiais utilizadas para inicializar objetos.
- **Encapsulamento**: Técnica de ocultar detalhes internos e proteger o estado do objeto.
- **Herança**: Mecanismo que permite a criação de novas classes a partir de classes existentes.
- **Polimorfismo**: Capacidade de objetos de diferentes classes responderem a mesma mensagem de forma distinta.
- **MVC**: Padrão de arquitetura que separa a aplicação em três componentes principais: Model, View e Controller. 

## 📄 Licença

Este projeto está licenciado sob a Licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

