const Macros = require('../macros')
const { expect } = require('chai')

describe('Macros', () => {
  it('will take 3 values and create a macronutrient profile item', () => {
    const macros = new Macros(24, 3, 1)
    expect(macros.proteins).to.equal(24)
    expect(macros.carbs).to.equal(3)
    expect(macros.fats).to.equal(1)
  })

  it('will calculate protein-only calories', () => {
    const macros = new Macros(10, 0, 0)
    expect(macros.proteins).to.equal(10)
    expect(macros.calories).to.equal(40)
  })

  it('will calculate carb-only calories', () => {
    const macros = new Macros(0, 5, 0)
    expect(macros.carbs).to.equal(5)
    expect(macros.calories).to.equal(20)
  })

  it('will calculate fat-only calories', () => {
    const macros = new Macros(0, 0, 9)
    expect(macros.fats).to.equal(9)
    expect(macros.calories).to.equal(81)
  })

  it('will calculate combinations of calories', () => {
    const whey = new Macros(24, 3, 1)
    expect(whey.calories).to.equal(117)
  })

  it('will add another macro value', () => {
    const first = new Macros(1, 2, 3)
    const second = new Macros(4, 5, 6)
    const result = first.add(second)
    expect(result.proteins).to.equal(5)
    expect(result.carbs).to.equal(7)
    expect(result.fats).to.equal(9)
  })

  it('will subtract macros', () => {
    const first = new Macros(10, 10, 10)
    const second = new Macros(1, 3, 5)
    const result = first.subtract(second)
    expect(result.proteins).to.equal(9)
    expect(result.carbs).to.equal(7)
    expect(result.fats).to.equal(5)
  })

  it('will multiply by scalar values', () => {
    const original = new Macros(1, 10, 0)
    const result = original.times(2)
    expect(result.proteins).to.equal(2)
    expect(result.carbs).to.equal(20)
    expect(result.fats).to.equal(0)
  })
})
