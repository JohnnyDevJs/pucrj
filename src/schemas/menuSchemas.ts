import { z } from 'zod'

export const communicateMenuSchema = z.object({
  id: z.string(),
  title: z.string(),
  url: z.string(),
})

export type CommunicateProps = z.infer<typeof communicateMenuSchema>
