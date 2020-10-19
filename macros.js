const Macros = class {
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
}

module.exports = Macros
