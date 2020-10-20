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
const Macros = class {
  static from ([proteins, carbs, fats]) {
    return new Macros(proteins, carbs, fats)
  }

  constructor (proteins, carbs, fats) {
    this.proteins = proteins
    this.carbs = carbs
    this.fats = fats
  }

  get calories () {
    return 4 * (this.proteins + this.carbs) + 9 * this.fats
  }

  add (macros) {
    return new Macros(
      this.proteins + macros.proteins,
      this.carbs + macros.carbs,
      this.fats + macros.fats
    )
  }

  with (macros) {
    return this.add(macros)
  }

  subtract (macros) {
    return this.add(macros.times(-1))
  }

  times (n) {
    return new Macros(
      n * this.proteins,
      n * this.carbs,
      n * this.fats
    )
  }

  servings (n) {
    return this.times(n)
  }
}

module.exports = Macros
