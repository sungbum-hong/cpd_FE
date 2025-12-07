// unused variable
const test = 123

// React import 필요 없지만 규칙 상 react-hooks 오류 유발
import { useEffect } from 'react'

export default function TestError() {



  const [count, setCount] = React.useState(0)  // ❌ React 19에서는 자동 import, ESLint가 React undefined라 에러낼 가능성 높음

  useEffect(() => {
    console.log("test")
  }
    , []) // ❌ Prettier + ESLint 포맷 에러 유도

  return <div>
    <p> count: {count}</p>
  </div>
}
