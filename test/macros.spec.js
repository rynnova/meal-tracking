/*
 *  A meal-tracking library.
 *  Copyright (C) 2020 Ryan Y.
 *
 *  This program is free software: you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License as published by
 *  the Free Software Foundation, either version 3 of the License, or
 *  (at your option) any later version.
 *
 *  This program is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU General Public License for more details.
 *
 *  You should have received a copy of the GNU General Public License
 *  along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */
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
