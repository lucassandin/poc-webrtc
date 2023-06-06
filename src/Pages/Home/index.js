import React, { useEffect } from "react"
import { useNavigateContext } from "../../Context/NavigateContext"

export default function Home() {

  const { setHeaderBack } = useNavigateContext();

  useEffect(() => {
    setHeaderBack(false)
  })

  return (
    <div>HOME</div>
  )
}