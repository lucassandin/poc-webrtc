import React, { useEffect } from "react"
import { useNavigateContext } from "../../Context/NavigateContext"
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const { setHeaderBack } = useNavigateContext();

  useEffect(() => {
    setHeaderBack(false)
  })

  return (
    <div>HOME
      <div>
        <button onClick={() => navigate("/video/chamada")}>VIDEO CHAMADA BUTTON TEST</button>
      </div>
    </div>
  )
}