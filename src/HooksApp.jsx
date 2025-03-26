import { FetchApp } from "./components/FetchApp"
import { FormsApp } from "./components/FormsApp"
import { CounterApp } from "./components/CounterApp"

export const HooksApp = () => {
  return (
    <>
      <h1>HooksApp</h1>
      <hr />
      <FetchApp />
      <hr />
      <FormsApp />
      <hr />
      <CounterApp />
    </>
  )
}
