import { useState, useCallback, useRef, useEffect} from 'react' 

function App() {
  //hooks
  let [length,setLength] = useState(8);
  let [numberAllowed,setNumberAllowed] = useState(false);
  let [characterAllowed,setCharacterAllowed] = useState(false);
  let [password,setPassword] = useState(""); //to display value generated

  //useRef hook
  const passwordRef = useRef(null)

  // lets you cache function definition btw re-renders (fn,dependencies)
  const passwordGenerator = useCallback(() => {
    let pass = "" //generated pass to store
    //My options for string characters
    let str ="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ" // data to make password
    if(numberAllowed) str += "0123456789"
    if(characterAllowed) str += "!'()*+,-./:;<=>?@[^`{|}"
    //generate password
    for (let index = 1; index <= length; index++) {
      let char = Math.floor(Math.random() * str.length )
      pass += str.charAt(char);
    } 
    //  set the password
    setPassword(pass)
  }, [length,numberAllowed,characterAllowed])

  //Copy to clipboard if current has some value
    const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password)
  }, [password])

  // 1st after re-render
  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, characterAllowed, passwordGenerator])

 return(
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className='text-white text-center my-3'>Password generator</h1>
    <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
            type="text"
            value={password}
            className=" bg-white text-orange-400 text-lg px-2 py-1 rounded-md w-full
             hover:bg-amber-800 transition duration-400"
            placeholder="Password"
            readOnly
            // refer the password
            ref={passwordRef}
        />
        <button
        onClick={copyPasswordToClipboard}
         className="bg-blue-600 text-white px-4 py-2 rounded-md ml-1 
             hover:bg-blue-700 hover:scale-110 transition duration-300"
        >copy</button>
        
    </div>
    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input 
        type="range"
        min={6}
        max={100}
        value={length}
         className='cursor-pointer'
         onChange={(e) => {setLength(e.target.value)}}
          />
          <label>Length: {length}</label>
      </div>
      <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          defaultChecked={numberAllowed}
          id="numberInput"
          onChange={() => {
              setNumberAllowed((prev) => !prev);
          }}
      />
      <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={characterAllowed}
              id="characterInput"
              onChange={() => {
                  setCharAllowed((prev) => !prev )
              }}
          />
          <label htmlFor="characterInput">Characters</label>
      </div>
    </div>
</div>
    
 )
}

export default App
