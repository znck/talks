import { InjectionKey } from 'vue'

interface User {
  id: number
  name: string
  photo: string
}

export const CURRENT_USER: InjectionKey<User> = 'currentUser'
