import * as React from "react";
export let appContext = React.createContext({});

export default function AppContext({ children }) {
  const [image, setImage] = React.useState(null);
  const [text, onChangeText] = React.useState("Saqib Ansari");

  return (
    <appContext.Provider value={{ image, setImage, text, onChangeText }}>
      {children}
    </appContext.Provider>
  );
}
