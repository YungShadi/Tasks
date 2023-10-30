export const TestComponent = () => {
    const [value, setValue] = useState('')
    const [renderCount, setRenderCount] = useState(0)
   
    useEffect(() => {
      setRenderCount(prev => ++prev)
    })
   
    return (
      <div>
        <h1>Кол-во рендеров: {renderCount}</h1>
        <input type="text" onChange={e => setValue(e.target.value)} value={value} />
      </div>
    )
  } 