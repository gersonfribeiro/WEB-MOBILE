type DadoGenerico = {
    nome: string;
    idade: number;
    salario: number;
    cargo: string;
    ativo: boolean;
    dataAdmissao: Date;
}

const database = [
    { nome: "Ana", idade: 28, salario: 3500, cargo: "Desenvolvedor", ativo: true, dataAdmissao: new Date("2020-03-15") },
    { nome: "Bruno", idade: 35, salario: 4500, cargo: "Gerente", ativo: true, dataAdmissao: new Date("2018-07-22") },
    { nome: "Carla", idade: 30, salario: 4000, cargo: "Analista", ativo: false, dataAdmissao: new Date("2019-11-05") },
    { nome: "Daniel", idade: 40, salario: 6000, cargo: "Diretor", ativo: true, dataAdmissao: new Date("2015-01-10") },
    { nome: "Eduardo", idade: 25, salario: 3000, cargo: "Estagiário", ativo: false, dataAdmissao: new Date("2021-06-01") },
];

const maisFuncionarios = [
    { nome: "Fernanda", idade: 32, salario: 3800, cargo: "Coordenadora", ativo: true, dataAdmissao: new Date("2017-08-15") },
    { nome: "Gustavo", idade: 29, salario: 3200, cargo: "Desenvolvedor", ativo: true, dataAdmissao: new Date("2021-02-20") },
];

console.log("Apresentados os arrays utilizados");

function apresentarDados(nomeArray: string[], dados: DadoGenerico[][]) {
    nomeArray.forEach(nome => {
        console.log(`Array: ${nome}`);
    });
    dados.forEach(dado => {
        dado.forEach(dado => {
            console.log(`Nome: ${dado.nome}, Idade: ${dado.idade}, Salário: ${dado.salario}, Cargo: ${dado.cargo}, Ativo: ${dado.ativo}, Data de Admissão: ${dado.dataAdmissao.toLocaleDateString()}`);
        });
    });
};

console.log(apresentarDados(["database", "maisFuncionarios"], [database, maisFuncionarios]));
console.log("==========================================================================================================================================================================================");

// Exemplo de uso do método map para extrair salarios do Array de dados
const salarios = database.map(dado => dado.salario);
console.log("Exemplo 1 - Salários com o método map: \n", salarios);
console.log("==========================================================================================================================================================================================");

// Exemplo de uso do método filter para encontrar pessoas ativas
const pessoasAtivas = database.filter(dado => dado.ativo);
console.log("Exemplo 2 - Pessoas ativas com o filter: \n", pessoasAtivas);
console.log("==========================================================================================================================================================================================");

// Exemplo de uso do método find para localizar uma pessoa específica dentro das pessoas ativas
const pessoaEspecifica = pessoasAtivas.find(dado => dado.dataAdmissao >= new Date("2020-01-01") || dado.dataAdmissao < new Date("2021-12-31"));
console.log("Exemplo 3 - Pessoa específica com o find: \n", pessoaEspecifica);
console.log("==========================================================================================================================================================================================");

// Exemplo de uso do método reduce para calcular a soma dos salários
const somaSalarios = database.reduce((total, dado) => total + dado.salario, 0);
console.log("Exemplo 4 - Soma dos salários com reduce: \n", somaSalarios);
console.log("==========================================================================================================================================================================================");

// Exemplo de uso do método some para verificar se existe algum funcionário com salário maior que 5000
const existeSalarioAlto = database.some(dado => dado.salario > 5000);
console.log("Exemplo 5 - Verificar se existe salário maior que 5000 com some: \n", existeSalarioAlto);
console.log("==========================================================================================================================================================================================");

// Exemplo de uso do método every para verificar se todos os funcionários são ativos
const todosAtivos = database.every(dado => dado.ativo);
console.log("Exemplo 6 - Verificar se todos os funcionários são ativos com o every: \n", todosAtivos);
console.log("==========================================================================================================================================================================================");

// Exemplo de uso do método forEach para imprimir os nomes dos funcionários
console.log("Exemplo 7 - Nomes dos funcionários com o forEach: \n");
database.forEach(dado => console.log("Nome: ", dado.nome));
console.log("==========================================================================================================================================================================================");

// Exemplo de uso do método sort para ordenar os funcionários por idade
const funcionariosOrdenadosPorIdade = [...database].sort((a, b) => a.idade - b.idade);
console.log("Exemplo 8 - Funcionários ordenados por idade com o sort: \n", funcionariosOrdenadosPorIdade);
console.log("==========================================================================================================================================================================================");

// Exemplo de uso do método slice para obter os dois primeiros funcionários
const primeirosFuncionarios = database.slice(0, 2);
console.log("Exemplo 9 - Os 2 primeiros funcionários com slice: \n", primeirosFuncionarios);
console.log("==========================================================================================================================================================================================");

// Exemplo de uso do método splice para remover o terceiro funcionário
const funcionariosComRemocao = [...database];
funcionariosComRemocao.splice(2, 1);
console.log("Exemplo 10 - Funcionários após remoção do terceiro com splice: \n", funcionariosComRemocao);
console.log("==========================================================================================================================================================================================");

// Exemplo de uso do método concat para combinar dois arrays de dados
const todosFuncionarios = database.concat(maisFuncionarios);
console.log("Exemplo 11 - Todos Funcionários após junção de duas listas com o concat: \n");
console.log("Listas: \n");

console.log("Data principal (Lista database) \n", database);
console.log("Data secundária (Lista maisFuncionarios) \n", maisFuncionarios);
console.log("Data concatenada: \n", todosFuncionarios);
console.log("==========================================================================================================================================================================================");

// Exemplo de uso do método includes identificando funcionários desenvolvedores
const cargos = todosFuncionarios.map(dado => dado.cargo);
const incluiDesenvolvedor = cargos.includes("Desenvolvedor");
console.log("Exemplo 12 - Validar o cargo 'Desenvolvedor' está contido na lista de todos os funcionários com o includes: \n", incluiDesenvolvedor);
console.log("==========================================================================================================================================================================================");

// Exemplo de uso do método reverse para inverter a ordem dos funcionários
const funcionariosInvertidos = [...todosFuncionarios].reverse();
console.log("Exemplo 13 - Lista com todos os funcionários invertidos com o reverse: \n", funcionariosInvertidos);
console.log("==========================================================================================================================================================================================");

// Exemplo de uso do método indexOf para encontrar o índice de um funcionário específico
const indiceAna = todosFuncionarios.findIndex(dado => dado.nome === "Ana");
console.log("Exemplo 14 - Encontrando o indice da lista onde o nome é Ana com o findIndex: \n", indiceAna);
console.log("==========================================================================================================================================================================================");

// Exemplo de uso do método pop para remover o último funcionário
const funcionariosPop = [...todosFuncionarios];
const ultimoFuncionario = funcionariosPop.pop();
console.log("Exemplo 15 - Removendo o ultimo funcionário com o pop: \n");
console.log("Último Funcionário Removido: \n", ultimoFuncionario);
console.log("Funcionários após pop: \n", funcionariosPop);
console.log("==========================================================================================================================================================================================");

// Exemplo de uso do método push para adicionar um novo funcionário
todosFuncionarios.push(ultimoFuncionario ?? { nome: "Novo Funcionário", idade: 26, salario: 3500, cargo: "Analista", ativo: true, dataAdmissao: new Date('2021-08-22') });
console.log("Exemplo 16 - Adicionando um funcionário com o push: \n", todosFuncionarios);
console.log("==========================================================================================================================================================================================");

// Esses são pequenos exemplos de alguns métodos de array, agora veremos algumas funções mais complexas que utilizam esses métodos.

// Essa função utiliza o método map para iterar sobre o array de dados e aumentar um percentual dos salários de todos os funcionários que estiverem em algum dos cargos passados como parâmetro.
function aumentoSalarialPorCargo(database: DadoGenerico[], cargos: string[], porcentagem: number): DadoGenerico[] {
    return database.map(dado => {
        console.log("Funcionário antes do aumento: \n", dado);
        cargos.map(cargo => {
            console.log("Cargo para aumento: \n", cargo);
            if (dado.cargo === cargo) 
                return { ...dado, salario: dado.salario * (1 + (porcentagem / 100)) };
        });
        console.log("Funcionário após o aumento: \n", dado);
        return dado;
    });
};

// Essa função utiliza o método filter para retornar um novo array contendo apenas os funcionários que foram admitidos após a data especificada e que estão ativos.
// Dentro desses funcionários, podemos pegar esses funcionário, usar o sort para ordenar pelo salário e retornar o array no reverse, ou seja, do maior para o menor salário.
function filtroComReverter(database: DadoGenerico[], data: Date): DadoGenerico[] {
    console.log("Fonte de dados: \n", database);
    const filtrados = database.filter(dado => dado.dataAdmissao > data && dado.ativo);
    console.log("Fonte de dados filtrada com a data de emissão maior que " + data.toLocaleTimeString() + " entre os funcionários filtrados, resultado do filtro: \n", filtrados);
    const maiorParaMenor = filtrados.sort((a, b) => b.salario - a.salario);
    console.log("Ordenando a lista com o sort para colocar o salário do menor para o maior: \n", maiorParaMenor);
    const reverso = maiorParaMenor.reverse();
    console.log("Revertendo a lista com o reverse para colocar o salário do maior para o menor: \n", reverso);
    return reverso;
};

// Essa função utiliza o método find para localizar um funcionário específico pelo nome e retorna um objeto com os dados desse funcionário, ou null se não for encontrado.
// Se o funcionário for encontrado, remover o mesmo do array original utilizando o método splice.
function encontrarFuncionarioPorNome(database: DadoGenerico[], nome: string): DadoGenerico | null {
    const funcionario = database.find(dado => dado.nome === nome);
    if (funcionario) {
        const index = database.indexOf(funcionario);
        if (index > -1)
            database.splice(index, 1);
    }
    console.log("Fonte de dados filtrada com o nome " + nome + " entre os funcionários filtrados, resultado do filtro: \n", funcionario);
    console.log("Fonte de dados após remoção do funcionário encontrado: \n", database);
    return funcionario || null;
};

// Essa função utiliza o método reduce para calcular a média salarial dos funcionários ativos e retorna esse valor.
function calcularMediaSalarial(database: DadoGenerico[]): number {
    const ativos = database.filter(dado => dado.ativo);
    console.log("Fonte de dados filtrada com os funcionários ativos: \n", ativos);
    const totalSalario = ativos.reduce((total, dado) => total + dado.salario, 0);
    console.log("Total de salários dos funcionários ativos: \n", totalSalario);
    return ativos.length > 0 ? totalSalario / ativos.length : 0;
};

console.log("Exemplo 17 - Função aumento salarial por cargo: \n");
console.log("Aumento Salarial:", aumentoSalarialPorCargo(database, ["Desenvolvedor", "Analista"], 10));
console.log("==========================================================================================================================================================================================");

console.log("Exemplo 18 - Função filtro com reverter: \n");
console.log("Funcionários Filtrados e Ordenados:", filtroComReverter(database, new Date("2019-01-01")));
console.log("==========================================================================================================================================================================================");

console.log("Exemplo 19 - Função encontrar funcionário por nome: \n");
console.log("Funcionário Encontrado:", encontrarFuncionarioPorNome(database, "Ana"));

console.log("==========================================================================================================================================================================================");
console.log("Exemplo 20 - Função calcular média salarial: \n");
console.log("Média Salarial:", calcularMediaSalarial(database));