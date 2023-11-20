'use client'

import { useRouter } from "next/navigation"

export default function Error({ error, reset}) {
  const router = useRouter();
  return (
    <div>
      <h2>Something went wrong!</h2>
      <button onClick={() => reset()}>Try again</button>
      <p>or</p>
      <button onClick={() => router.push("/")}>Go to Home</button>
    </div>
  )
}