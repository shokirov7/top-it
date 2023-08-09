import React, { useState } from "react";
import { projAuth } from "../firebase/config";

function useSignup() {
  const [pending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  const signup = async (email, password, displayName) => {
    try {
      setIsPending(true)
      const req = await projAuth.createUserWithEmailAndPassword(
        email,
        password
      );
      console.log(req);
      setIsPending(false)
    } catch(err) {
      setError(err.message);
      setIsPending(false)
    }
  };
  return { pending, error, signup };
}

export { useSignup };
