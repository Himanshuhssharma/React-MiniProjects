import React, { useState, useCallback, useEffect, useRef } from "react";

const PassGen = () => {
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const [btntxt, setBtnTxt] = useState("Copy");

  //   password generate funstion starts here
  const passGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numAllowed) str += "0123456789";
    if (charAllowed) str += "~!@#$%^&*_-+={}[]()";

    for (let i = 1; i <= length; i++) {
      let curr = Math.floor(Math.random() * str.length + 1);

      pass += str.charAt(curr);
    }

    setPassword(pass);
  }, [length, numAllowed, charAllowed, setPassword]);

  //   copy btn functionalities starts here
  const passRef = useRef(null);

  //   change the btn text
  const changeBtnTxt = () => {
    setBtnTxt("Copied");

    setTimeout(() => {
      setBtnTxt("Copy");
    }, 2000);
  };

  //   copy to clipboard code starts here
  const copyClip = useCallback(() => {
    passRef.current?.select();
    changeBtnTxt();
    window.navigator.clipboard.writeText(password);
  }, [password]);
  // ends here
  useEffect(() => {
    passGenerator();
  }, [length, numAllowed, charAllowed, passGenerator]);

  return (
    <div className="box-border bg-slate-700 w-screen h-screen flex flex-col items-center justify-center text-white">
      <h1 className="mb-2 text-orange-300 text-center text-2xl">
        Password Generator
      </h1>
      <div className="flex flex-col items-center justify-center p-2 border-4">
        <div className="m-4 flex gap-2">
          <input
            className="w-96 rounded text-xl py-1 px-2 text-black"
            type="text"
            value={password}
            placeholder="Enter Password"
            ref={passRef}
          />
          <button
            className="bg-orange-300 text-black w-14 rounded"
            onClick={() => copyClip()}
          >
            {btntxt}
          </button>
        </div>
        <div className="flex items-center justify-centerp gap-2">
          <div className="flex gap-1">
            <input
              className="cursor-pointer"
              type="range"
              onChange={(e) => {
                setLength(e.target.value);
              }}
              min={8}
              max={99}
              value={length}
            />{" "}
            <label>Length: {length}</label>
          </div>
          <div className="flex gap-1">
            <input
              className="cursor-pointer"
              type="checkbox"
              defaultChecked={numAllowed}
              onChange={() => {
                setNumAllowed((prev) => !prev);
              }}
            />
            <label>Numbers</label>
          </div>
          <div className="flex gap-1">
            <input
              className="cursor-pointer"
              type="checkbox"
              defaultChecked={charAllowed}
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label>Characters</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PassGen;
