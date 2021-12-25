// com promise
const http = require('http')
const { reject, get } = require('lodash')
const { resolve } = require('path')

const getTurma = (letra, callback) => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    return new Promise((resolve, reject) => {
        http.get(url, res => {
            let resultado = ''

            res.on('data', dados => {
                resultado += dados
            })

            res.on('end', () => {
                try {
                    resolve(JSON.parse(resultado))
                } catch (e) {
                    reject(e)
                }

            })
        })
    })
}

/* let nomes = []
getTurma('A').then(alunos => {
    nomes = nomes.concat(alunos.map(a => `A: ${a.nome}`))
    getTurma('B').then(alunos => {
        nomes = nomes.concat(alunos.map(a => `B: ${a.nome}`))
        getTurma('C').then(alunos => {
            nomes = nomes.concat(alunos.map(a => `C: ${a.nome}`))
            console.log(nomes)
        })
    })
}) */

Promise.all([getTurma('A'), getTurma('B'), getTurma('C')])
    .then(turnas => [].concat(...turnas))
    .then(alunos => alunos.map(aluno => aluno.nome))
    .then(x => console.log(x))

getTurma('D').catch(e => console.log(e.message))