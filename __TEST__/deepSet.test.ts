import deepSet from '../src/deepSet'

describe('Deep set', () => {
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

  it('Should match snapshot', () => {
    const result = deepSet(testInput, 'name')
    expect(result).toMatchSnapshot()
  })

  it('Should have a single instead of each object', () => {
    const result = deepSet(testInput, 'name')

    const names = testInput.map(item => item.name)

    for (let i = 0; i < names.length; i += 1) {
      expect(result.filter(item => item.name === names[i]).length).toBe(1)
    }
  })
})
