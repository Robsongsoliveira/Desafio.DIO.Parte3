class Heroi {
    constructor(nome, idade, tipo) {
      this.nome = nome
      this.idade = idade
      this.tipo = tipo
    }
  ​
    atacar() {
      let ataque = ""
  ​
      switch (this.tipo) {
        case "mago":
          ataque = "usou magia"
          break
        case "guerreiro":
          ataque = "usou espada"
          break
        case "monge":
          ataque = "usou artes marciais"
          break
        case "ninja":
          ataque = "usou shuriken"
          break
        default:
          ataque = "atacou"
      }
  ​
      console.log(`O ${this.tipo} atacou usando ${ataque}`)
    }
  }
  const heroi = new Heroi("\NJoão ", 30, "mago")
  const heroi2 = new Heroi("\Pedro ", 16, "ninja")
  heroi.atacar()
  heroi2.atacar()