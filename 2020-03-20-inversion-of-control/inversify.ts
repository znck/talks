// Katana.ts
import { injectable } from 'inversify'

@injectable()
export class Katana {
  public hit() {
    return 'cut!'
  }
}

// Shuriken.ts
import { injectable } from 'inversify'

@injectable()
export class Shuriken {
  public throw() {
    return 'hit!'
  }
}

// Ninja.ts
import { injectable } from 'inversify'
import { Katana } from './Katana.ts'
import { Shuriken } from './Shuriken.ts'

@injectable()
export class Ninja {
  public constructor(
    private readonly katana: Katana,
    private readonly shuriken: Shuriken
  ) {}
  public fight() {
    return this.katana.hit()
  }
  public sneak() {
    return this.shuriken.throw()
  }
}

// container.ts
import { Container } from 'inversify'
const container = new Container({ autoBindInjectable: true })

const ninja = container.get(Ninja)
