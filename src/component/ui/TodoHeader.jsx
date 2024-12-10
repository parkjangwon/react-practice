import { useEffect } from 'react'
import { toggleTheme } from '../../utils/themeUtils.js'

function TodoHeader() {
  useEffect(() => {
    document.body.classList.add('light')
  }, [])

  return (
    <>
      <div style={{ borderBottom: '1px solid #ddd', paddingBottom: '8px', marginBottom: '8px' }}>
        <h1>😩 할 일이 많다!</h1>
        <br />
        <p>그래도 차근 차근 처리합시다.</p>
        <br />
        <button onClick={toggleTheme}>⚙️ 테마 변경</button>
      </div>
    </>
  )
}

export default TodoHeader
