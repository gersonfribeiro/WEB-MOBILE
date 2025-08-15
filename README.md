# 👋 Olá! Seja bem-vindo ao meu repositório para entrega de atividades!

#### 📚 Este repositório será utilizado para o envio das atividades resolvidas na disciplina de **Desenvolvimento Web e Mobile** do curso de Ciência da Computação no **UNIFAGOC**, ministrado pelo professor: *Felipe Padovani*.

---

<details>
  <summary><h2>📌 Atividade 1: Lista de Métodos de Array - <em>Diretório: ArrayMethod</em></h2></summary>

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
