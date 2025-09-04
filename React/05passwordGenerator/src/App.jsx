// Importing necessary React hooks
import { useState, useCallback, useEffect, useRef } from "react";
import "./App.css";

function App() {
  /**
   * -----------------------
   * STATE VARIABLES (useState)
   * -----------------------
   */

  // 1. Stores the length of the password (default = 8)
  const [length, setLength] = useState(8);

  // 2. Boolean → true if numbers are allowed in password
  const [numAllowed, setNumAllowed] = useState(false);

  // 3. Boolean → true if special characters are allowed
  const [sCharAllowed, setCharAllowed] = useState(false);

  // 4. Stores the final generated password string
  const [password, setPassword] = useState("");

  /**
   * -----------------------
   * REF HOOK (useRef)
   * -----------------------
   * - useRef gives direct access to DOM elements
   * - Here it is used to point to the password <input> field
   * - Useful for selecting/copying password text
   */
  const passwordRef = useRef(null);

  /**
   * -----------------------
   * PASSWORD GENERATOR FUNCTION
   * -----------------------
   * - useCallback used so function is memoized
   *   (prevents re-creation of function unless dependencies change)
   * - Creates a pool of characters (letters, numbers, symbols)
   * - Randomly selects characters from this pool to build a password
   */
  const passwordGenerator = useCallback(() => {
    let pass = ""; // will store the final password
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"; // base pool (letters)

    // If user allows numbers → add digits
    if (numAllowed) str += "0123456789";

    // If user allows special characters → add symbols
    if (sCharAllowed) str += "!@#$%^&*+_-";

    // Loop: pick random characters from the pool until password is created
    for (let i = 0; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1); // random index
      pass += str.charAt(char); // add that character
    }

    // Update state → triggers re-render to show new password
    setPassword(pass);
  }, [length, numAllowed, sCharAllowed, setPassword]);

  /**
   * -----------------------
   * COPY PASSWORD FUNCTION
   * -----------------------
   * - Selects the password inside input field (via useRef)
   * - Uses Clipboard API to copy text
   * - Allows user to paste password anywhere
   */
  const copyPasswordToClipBoard = useCallback(() => {
    // Selects the input field’s content
    passwordRef.current?.select();

    // Writes password to clipboard
    window.navigator.clipboard.writeText(password);
  }, [password]);

  /**
   * -----------------------
   * SIDE EFFECT (useEffect)
   * -----------------------
   * - Runs automatically whenever dependencies change
   * - Dependencies: length, numAllowed, sCharAllowed, passwordGenerator
   * - Purpose: Regenerate password automatically whenever user changes settings
   */
  useEffect(() => {
    passwordGenerator();
  }, [length, sCharAllowed, numAllowed, passwordGenerator]);

  /**
   * -----------------------
   * UI RENDERING (JSX)
   * -----------------------
   * - Displays input field with generated password
   * - Includes a "Copy" button
   * - Provides controls (slider + checkboxes) to customize password
   */
  return (
    <>
      {/* Outer container for the app */}
      <div className="w-full max-w-md mx-auto shadow-md rounded-xl p-6 my-10 bg-gray-800 text-orange-500">
        
        {/* Title */}
        <h1 className="text-white text-center mb-4 text-xl font-semibold">
          Password Generator
        </h1>

        {/* Password display + Copy button */}
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          
          {/* Input field → shows generated password (readOnly so user can’t edit it) */}
          <input
            type="text"
            value={password} // binds to state
            className="outline-none w-full py-2 px-4 bg-white text-black placeholder:text-gray-400"
            placeholder="Password"
            readOnly
            ref={passwordRef} // connected to useRef for copy functionality
          />

          {/* Copy button → calls copy function on click */}
          <button
            onClick={copyPasswordToClipBoard}
            className="outline-none bg-blue-500 text-white px-3 py-0.5 shrink-0 shadow transition transform active:scale-95"
          >
            Copy
          </button>
        </div>

        {/* Controls section */}
        <div className="flex text-sm gap-x-2">

          {/* Password length slider */}
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length} // bound to length state
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value); // update length
              }}
            />
            <label className="text-white">Length: {length}</label>
          </div>

          {/* Numbers checkbox */}
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numAllowed}
              id="numberInput"
              onChange={() => {
                setNumAllowed((prev) => !prev); // toggle true/false
              }}
            />
            <label htmlFor="numberInput" className="text-white">
              Numbers
            </label>
          </div>

          {/* Special characters checkbox */}
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={sCharAllowed}
              id="charInput"
              onChange={() => {
                setCharAllowed((prev) => !prev); // toggle true/false
              }}
            />
            <label htmlFor="charInput" className="text-white">
              Characters
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

/**
 * -----------------------
 * NOTES / KEY POINTS
 * -----------------------
 * 1. useState → Stores state like password length, options, and the generated password.
 * 2. useRef → Direct access to DOM (input field) for copy functionality.
 * 3. useCallback → Memoizes functions (prevents unnecessary re-creation on re-renders).
 * 4. useEffect → Auto-generates password whenever inputs/options change.
 * 5. UI → Displays password + controls (slider, checkboxes, copy button).
 * 
 * Format document shortcut: Shift + Alt + F
 */
