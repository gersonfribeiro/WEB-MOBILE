# 👋 Olá! Seja bem-vindo ao meu repositório para entrega de atividades!

#### 📚 Este repositório será utilizado para o envio das atividades resolvidas na disciplina de **Desenvolvimento Web e Mobile** do curso de Ciência da Computação no **UNIFAGOC**, ministrado pelo professor: *Felipe Padovani*.

---

<details>
  <summary><h2>📌 Atv. 1: Lista de Métodos de Array - <em>Dir.: ArrayMethod</em></h2></summary>

## 🛠 Manipulação de Arrays em TypeScript

Este projeto demonstra o uso prático de diversos **métodos nativos de Arrays** no TypeScript, aplicados a uma base de dados fictícia de funcionários.  
O objetivo é apresentar exemplos claros de como **manipular**, **filtrar**, **buscar**, **ordenar** e **transformar** informações armazenadas em arrays de objetos.

---

### 📋 Estrutura dos Dados

O tipo `DadoGenerico` define a estrutura de cada funcionário:

```typescript
type DadoGenerico = {
    nome: string;
    idade: number;
    salario: number;
    cargo: string;
    ativo: boolean;
    dataAdmissao: Date;
}
```

## 🔭 16 Métodos demonstrados e 5 funções implementadas para exemplo

### 🧩 Métodos Exemplificados

<table>
  <thead>
    <tr>
      <th>ID</th>
      <th>MÉTODO</th>
      <th>FUNCIONALIDADE</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>map()</td>
      <td>Extrair salários da lista</td>
    </tr>
    <tr>
      <td>2</td>
      <td>filter()</td>
      <td>Filtrar pessoas ativas presentes</td>
    </tr>
    <tr>
      <td>3</td>
      <td>find()</td>
      <td>Localizar pessoa específica por data de admissão</td>
    </tr>
    <tr>
      <td>4</td>
      <td>reduce()</td>
      <td>Somar salários</td>
    </tr>
    <tr>
      <td>5</td>
      <td>some()</td>
      <td>Verificar se existe salário maior que 5000</td>
    </tr>
    <tr>
      <td>6</td>
      <td>every()</td>
      <td>Verificar se todos os funcionários são ativos</td>
    </tr>
    <tr>
      <td>7</td>
      <td>forEach()</td>
      <td>Imprimir nomes dos funcionários</td>
    </tr>
    <tr>
      <td>8</td>
      <td>sort()</td>
      <td>Ordenar funcionários por idade</td>
    </tr>
    <tr>
      <td>9</td>
      <td>slice()</td>
      <td>Obter os dois primeiros funcionários</td>
    </tr>
    <tr>
      <td>10</td>
      <td>splice()</td>
      <td>Remover o terceiro funcionário</td>
    </tr>
    <tr>
      <td>11</td>
      <td>concat()</td>
      <td>Unir listas "database" e "maisFuncionarios"</td>
    </tr>
    <tr>
      <td>12</td>
      <td>includes()</td>
      <td>Verificar se existe o cargo "Desenvolvedor"</td>
    </tr>
    <tr>
      <td>13</td>
      <td>reverse()</td>
      <td>Inverter a lista de todos os funcionários</td>
    </tr>
    <tr>
      <td>14</td>
      <td>findIndex()</td>
      <td>Encontrar índice da funcionária Ana</td>
    </tr>
    <tr>
      <td>15</td>
      <td>pop()</td>
      <td>Remover o último funcionário</td>
    </tr>
    <tr>
      <td>16</td>
      <td>push()</td>
      <td>Adicionar funcionário ao final da lista</td>
    </tr>
  </tbody>
</table>

### 🧩 Funções Implementadas

#### ● Function1️⃣ apresentarDados(nomeArray: string[], dados: DadoGenerico[][]) 
▶Mostra no console o nome dos arrays e todos os seus elementos detalhados. <br> ▶O nomeArray é usado apenas para dar um título a lista qe está sendo impressa.

#### ● Function2️⃣ aumentoSalarialPorCargo(database: DadoGenerico[], cargos: string[], porcentagem: number)
▶Aumenta o salário de funcionários com cargos específicos, aplicando um percentual.

#### ● Function3️⃣ filtroComReverter(database: DadoGenerico[], data: Date)
▶Filtra funcionários ativos admitidos após uma data. <br> ▶Ordena por salário e inverte a ordem (maior para menor).

#### ● Function4️⃣ encontrarFuncionarioPorNome(database: DadoGenerico[], nome: string)
▶Busca um funcionário pelo nome. <br> ▶Remove o funcionário encontrado do array original.

#### ● Function5️⃣ calcularMediaSalarial(database: DadoGenerico[])
▶Calcula a média salarial apenas dos funcionários ativos.

### Comando para executar o TypeScript

Para evitar complexidades de criar um arquivo json.config e compilar o ArrayMethods.ts, primeiro faça a transpilação para js
```cmd
tsc ArrayMethods.ts
```
Executar o arquivo transpilado
```cmd
node ArrayMethods.js
```

</details>

<details>
  <summary><h2>📌 Atv. 2: Projeto lista de tarefas - <em>Dir.: toDoList</em></h2></summary>

## 🛠 Proposta do projeto

Este projeto demonstra o uso prático de diversos **conceitos** no Angular.  
O objetivo é apresentar exemplos claros de como usar os recursos de **ciclo de vida do componente**, **comunicações entre componentes pais e filhos**, **criação de componentes com o angular material** entre diversas funcionalidades de manipulação de dados de uma lista.

---

### 📋 Estrutura dos Dados

O tipo `toDoModel` define a estrutura de cada task:

```typescript
export interface toDoModel {
    id: number;
    
}
```

## 🔭 Componentes e suas comunicações

### 🧩 Componentes criados e relacionados

<table>
  <thead>
    <tr>
      <th>SELETOR</th>
      <th>RESPONSABILIDADE</th>
      <th>PAI</th>
      <th>RELACIONAMENTOS</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>app-</td>
      <td></td>
      <td>app-</td>
      <td>app- (pai), app- (filho)</td>
    </tr>
  </tbody>
</table>

### 🧩 Funcionalidades Implementadas

#### ● Function1️⃣ filtrar tarefas 
▶Um componente apenas para servir de filtro de busca das tarefas da lista. Os filtros são aplicados por campo e valor, além de terem as opções de adicionar filtro (é uma lista) resetar os campos do formulário, consultar e visualizar os filtros aplicados.

#### ● Function2️⃣ visualizarfiltros
▶Não é um componente separado, é parte do filtro de tarefas, um Drawer para visualizar os filtros aplicados com a funcionalidade de remover um específico ou todos os filtros aplicados.

#### ● Function3️⃣ lista estilizada dinamicamente e paginada das tarefas
▶A tabela de visualização das tarefas está com alguns campos tendo uma certa estilização baseada em valores dinâmicos (status e urgência), além de ter uma paginação para a exibição por quantidade de registros.

#### ● Function4️⃣ formulário de criação e edição das tarefas
▶Uma caixa Dialog para abrir o formulário de criação de tasks, caso seja um edição, o formulário é populado com os dados da task sendo editada, ao submeter o formulário se mantém aberto, limpo e em modo de cadastro.

</details>
