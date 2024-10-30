# Portal GEINFRA

O objetivo do projeto é desenvolver um sistema que auxilie a equipe da Gestão de Infraestrutura (GEINFRA) no monitoramento dos chamados de serviços relacionados a infraestrutura do campus. Através dele, alunos, servidores e demais frequentadores do campus poderão solicitar serviços e acompanhar o requerimento. Também, a própria equipe GEINFRA conseguirá acompanhar melhor os chamados e coordenar de maneira mais adequada sua equipe técnica. 

## Backend
### 📋 Pré-requisitos
Para executar este projeto é preciso ter:
- JDK 17 instalado em sua máquina. Para instalá-lo, você pode seguir as instruções disponíveis [aqui](https://www.openlogic.com/openjdk-downloads);
- A versão mais recente do Mavem que você pode baixar [aqui](https://maven.apache.org/download.cgi);
- Uma IDE de sua preferência, como por exemplo o VS Code, ou o Eclipse.

### 🚀 Executando
1. Clone o repositório
```bash
git clone https://github.com/cpt-ufal-arapiraca/ace6-geinfra.git
```
2. Nagegue até a pasta backend
```bash
cd backend
```
3. Buildando o projeto:<br>
O Eclipse IDE já vem com o Maven instalado e configurado, portanto, assim que você importar o projeto para o Eclipse, ele irá reconhecer o arquivo `pom.xml`, intalar as dependências necessárias e compilar o projeto. Já no VS Code, você precisará instalar a extensão Java Extension Package, que é um pacote com algumas extensões úteis para o desenvolvimento Java. Dentro desse pacote, já virá a extensão para rodar os comandos Maven. Caso seja necessário instalar o Maven a parte, você pode fazer por esse link: https://maven.apache.org/download.cgi;

4. Abra o arquivo BackendApplication.java, localizado na pasta: src/main/java/br/ufal/arapiraca/geinfra/backend;
  
5. Execute este arquivo;
6. Uma guia do terminal deve ser aberta e mostrar o projeto Spring sendo inicializado.
7. A API deve estar disponível no endpoint: http://localhost:8080
8. Utilize alguma ferramenta para consultas em APIs, como o Insomnia ou o Postman.
9. Caso utilize o Insomnia, baixe o arquivo `GEINFRA0.0.1.json` localizado na pasta `/docs` e importe a configuração dos endpoints.

## Webapp
### 📋 Pré-requisitos
Precisa ter um gerenciador de dependências instalado em sua máquina para poder rodar o projeto, seja o **npm** ou o **yarn**.<br>
Caso opte pelo **NPM**, você pode seguir as instruções disponíveis [aqui](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) para instalá-lo.<br>
Caso opte pelo **YARN**, você pode seguir as instruções disponíveis [aqui](https://classic.yarnpkg.com/lang/en/docs/install) para instalá-lo.

### 🚀 Executando
1. Caso não o tenha feito ainda, clone o repositório
```bash
git clone https://github.com/cpt-ufal-arapiraca/ace6-geinfra.git
```
2. Entre no diretório do projeto e nagegue até a pasta webapp
```bash
cd webapp
```
3. Instale as dependências do projeto, utilizando um dos seguintes comandos:
```bash
npm install
```
ou
```bash
yarn
```
4. Execute o projeto
```bash
npm run dev
```
ou
```bash
yarn run dev
```
5. Acesse o endereço http://localhost:5173 no navegador <br>
Deve ser possível visualizar a aplicação em execução.


## ⚙️ Executando os testes

Os testes ainda não foram implementados à aplicação...


## 🛠️ Construído com

* [React.js](https://react.dev/) - Biblioteca web frontend
* [Shadcn/ui](https://ui.shadcn.com/) - Biblioteca de construção de componentes web
* [Tailwind](https://tailwindcss.com/docs/installation) - Biblioteca de estilização de componentes frontend
* [Vite.js](https://vitejs.dev/guide/) - Ferramenta de auxílio à construção do projeto frontend
* [Django/Python](https://www.djangoproject.com/) - Framework backend
* [SQLite](https://www.sqlite.org/) - Banco de dados relacional utilizado

Ainda em desenvolvimento...

## ✒️ Autores

* **Cayo Nikolas Ferreira Santos** - *Gerência e documentação*
* **Francisco Racklyn Sotero dos Santos** - *Desenvolvimento frontend*
* **Lucas Barbosa Leite Silva** - *Desenvolvimento backend*

Você também pode ver a lista de todos os [colaboradores](https://github.com/usuario/projeto/colaboradores) que participaram deste projeto.
