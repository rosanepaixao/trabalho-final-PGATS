/*describe('Testes da disciplina - fundamentos JS', () => {
  
  it('QUANDO informar um nome para o Pet, DEVE ser impresso na tag com letras maiúsculas', () => {
    assert.strictEqual(geradorDeTagsDeIdentificacao('Pantera'), 'PANTERA');
  });*/

export function geradorDeTagsDeIdentificacao(nome) {
    const pet = nome.toUpperCase()
    return pet
}
/*it('QUANDO a idade = 1 + porte M, DEVE ser permitida a adoção', () => {
    assert.strictEqual(verificarSePodeSerAdotado(1, 'M'), true)
})*/

export function verificarSePodeSerAdotado(idade, porte) {
    if (idade == 1 && porte == `M`) {
        return true
    }
    return false
}

/*it('QUANDO o peso = 14.5, DEVE ser retornado 4350 gramas para o consumo diário', () => {
    assert.strictEqual(calcularConsumoDeRacao('Pitoco', 1, 14.5), 4350)
  }) */

export function calcularConsumoDeRacao(nome, quantidadeDias, peso) {
    const racao = peso * 300
    const totalGramas = racao * quantidadeDias

    return totalGramas
}

/*it('QUANDO o porte = pequeno, DEVE ser retornada a atividade adequada', () => {
    assert.strictEqual(decidirTipoDeAtividadePorPorte('pequeno'), 'brincar dentro de casa')
}) */

export function decidirTipoDeAtividadePorPorte(porte) {
    switch (porte) {
        case `pequeno`:
            return `brincar dentro de casa`
            break
        case `medio`:
            return `Brincar fora de casa`
            break
        case `grande`:
            return `Brincar no parque`
            break

    }
}

/*it('QUANDO buscar dado de exemplo, DEVE retornar um valor de forma assíncrona', async () => {
    const resultado = await buscarDadoAsync();
    assert.strictEqual(resultado, 'Pipoca')*/

export async function buscarDadoAsync() {
    return `Pipoca`

}

