import PusherServer from 'pusher'
import PusherClient from 'pusher-js'

export const pusherServer = new PusherServer({
  appId: process.env.PUSHER_APP_ID!,
  key: process.env.NEXT_PUBLIC_PUSHER_APP_KEY!,
  secret: process.env.PUSHER_APP_SECRET!,
  cluster: 'eu',
  useTLS: true,
})

export const pusherClient = new PusherClient(
  process.env.NEXT_PUBLIC_PUSHER_APP_KEY!,
  {
    cluster: 'eu',
  }
)

console.log("PUSHER_APP_ID:", process.env.PUSHER_APP_ID);
console.log("NEXT_PUBLIC_PUSHER_APP_KEY:", process.env.NEXT_PUBLIC_PUSHER_APP_KEY);
console.log("PUSHER_APP_SECRET:", process.env.PUSHER_APP_SECRET);