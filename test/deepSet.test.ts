import deepSet from '../src/deepSet'

describe('Dummy test', () => {
  it('works if true is truthy', () => {
    expect(true).toBeTruthy()
  })

  const testInput = [
    {
      name: 'Tom',
      age: 99
    },
    {
      name: 'Bob',
      age: 100
    },
    {
      name: 'Tom',
      age: 50
    }
  ]

  it('DummyClass is instantiable', () => {
    const result = deepSet(testInput, 'name')
    console.log({ result })
  })
})
