import { useSession } from "next-auth/react"
import { useRouter } from "next/router"

export default function Admin() {
    const route = useRouter()
    const { status } = useSession({
    required: true,
    onUnauthenticated() {
        route.push('/login')
    },
  })

  if (status === "loading") {
    return "Loading or not authenticated..."
  }

  return "User is logged in"
}