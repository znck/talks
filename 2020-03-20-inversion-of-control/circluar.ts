// constants.ts
export const services = {
  Katana: Symbol('Katana'),
  Shuriken: Symbol('Shuriken'),
}

// interfaces.ts
export interface Katana {
  hit(): string
}

export interface Shuriken {
  throw(): string
}

// Ninja.ts
import { injectable } from 'inversify'
import { services } from './constants.ts'
import { Katana, Shuriken } from './interfaces.ts'

@injectable()
export class Ninja {
  public constructor(
    @inject(services.Katana) private readonly katana: Katana,
    @inject(services.Shuriken) private readonly shuriken: Shuriken
  ) {}
  public fight() {
    return this.katana.hit()
  }
  public sneak() {
    return this.shuriken.throw()
  }
}

// Katana.ts
import { injectable } from 'inversify'
import { Katana as IKatana } from './interfaces'

@injectable()
class Katana implements IKatana {
  public hit() {
    return 'cut!'
  }
}

// Shuriken.ts
import { injectable } from 'inversify'
import { Shuriken as IShuriken } from './interfaces'

@injectable()
export class Shuriken implements IShuriken {
  public throw() {
    return 'hit!'
  }
}

// container.ts
import { Container } from 'inversify'
import { Katana } from './Katana.js'
import { Shuriken } from './Shuriken.js'

const container = new Container({ autoBindInjectable: true })

container.bind(services.Katana).to(Katana)
container.bind(services.Shuriken).to(Shuriken)

// here's a ninja.
const ninja = container.get(Ninja)
