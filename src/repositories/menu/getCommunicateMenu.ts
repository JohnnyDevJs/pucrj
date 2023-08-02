import { api } from '@/lib/api'
import { CommunicateProps } from '@/schemas/menuSchemas'

export async function getCommunicateMenu() {
  const response = await api.get('/menu/communicate')

  const communicateMenu: CommunicateProps[] = response.data

  return communicateMenu
}
