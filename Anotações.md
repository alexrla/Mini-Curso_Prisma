# Mini-Curso Prisma

- **ORM (Object-Relational Mapping): técnica que aproxima o paradigma de desenvolvimento de aplicações orientadas a objetos, ao paradigma do banco de dados relacional;**
  - **Nesta técnica é feito o mapeamento entre sistemas orientados a objetos e bancos de dados relacionais, onde as tabelas do banco de dados são representadas em classes e os registros das tabelas seriam as instâncias dessas classes;**

- **Vantagens:**
  - **Abstrair a escrita de `queries`;**
  - **Otimização de `queries`;**
  - **Abstrair a configuração dos diferentes bancos de dados;**

- **O Prisma é uma ORM;**



### Configurando o Prisma

- **1º: adicionar o Prisma CLI como dependência de desenvolvimento;**

  - **`npm i -D prisma`;**

- **2º: invocar o Prisma CLI:**

  - **`npx prisma`;**

    ```markdown
    Prisma é um moderno kit de ferramentas de banco de dados para consultar, migrar e modelar seu banco de dados (https://prisma.io)
    
    Uso
    
       $ prisma [comando]
    
    Comandos
    
                 init  Configure o Prisma para seu aplicativo
             generate  Gerar artefatos (por exemplo, Prisma Client)
                   db  Gerenciar seu esquema de banco de dados e ciclo de vida
              migrate  Migrar seu banco de dados
               studio  Navegue pelos seus dados com o Prisma Studio
             validate  Validar seu esquema Prisma
               format  Formate seu esquema Prisma
    
    Flags
    
          --preview-feature Executa comandos do Prisma de visualização
    
    Exemplos
    
       Configurar um novo projeto Prisma
       $ prisma init
    
       Gerar artefatos (por exemplo, Prisma Client)
       $ prisma generate
    
       Navegue pelos seus dados
       $ prisma studio
    
       Crie migrações de seu esquema Prisma, aplique-as ao banco de dados, gere artefatos (por exemplo, Prisma Client)
       $ prisma migrate dev
      
       Puxe o esquema de um banco de dados existente, atualizando o esquema do Prisma
       $ prisma db pull
    
       Empurre o estado do esquema Prisma para o banco de dados
       $ prisma db push
    
       Valide seu esquema Prisma
       $ prisma validate
    
       Formate seu esquema Prisma
       $ prisma format
    ```

- **3°: iniciar as configuração do projeto Prisma, criando o modelo de arquivo de esquema Prisma:**

  - **`npx prisma init`;**

    ```markdown
    Seu esquema Prisma foi criado em prisma/schema.prisma
       Agora você pode abri-lo em seu editor favorito.
    
    Próximos passos:
    1. Defina DATABASE_URL no arquivo .env para apontar para seu banco de dados existente. Se seu banco de dados ainda não possui tabelas, leia https://pris.ly/d/getting-started
    2. Defina o provedor do bloco de fonte de dados em schema.prisma para corresponder ao seu banco de dados: postgresql, mysql, sqlite, sqlserver, mongodb ou cockroachdb.
    3. Execute prisma db pull para transformar seu esquema de banco de dados em um esquema Prisma.
    4. Execute prisma generate para gerar o Prisma Client. Você pode então começar a consultar seu banco de dados.
    
    Mais informações em nossa documentação:
    https://pris.ly/d/getting-started
    ```

    - **Este comando cria um diretório `prisma`, contendo o esquema Prisma, com a variável de conexão de banco de dados e modelos de esquema;**
    - **Além de criar o arquivo `.env` no diretório raiz do projeto, que é utilizado para definir variáveis de ambiente (como a conexão com o banco de dados);**



### findMany && findFirst

- **`findMany`: retorna todos os registros da tabela;**
- **`findFirst`: retorna o primeiro registro de acordo com o critério especificado;**



### create

- **Cria um único registro na tabela;**
  - **O tipo do dado a ser inserido, deve corresponde ao modelo da tabela;**



### upsert

- **Atualiza ou cria, um registro na tabela;**
  - **Possui três parâmetros obrigatórios: `where`, `create`, `update` (a ordem em que esses parâmetros são dispostos, não importa);**
  - **OBS.: quando no parâmetro `where`, utilizamos uma chave primária, como por exemplo o `id`, porém esse `id` não é passado (caso de inserção de dados), é recebido o valor `undefined` e o Prisma não sabe como buscar esse valor no banco (ele pode tentar converter para `null`, mas o  `id` não pode ser `null`, já que ele é uma chave primária), o que acaba gerando um erro;**
    - **Para corrigir esse erro, como o `id` deve ser um valor inteiro, podemos passar: `id || 0` (o zero é um valor que a chave primária `id` nunca vai assumir no banco, ela sempre começa do 1 e assim vai adiante);**