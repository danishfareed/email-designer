import { createContext, useRef } from "react";

const EmailEditorContext = createContext();

export const EmailEditorProvider = ({children})=>{

 
  const emailEditorRef = useRef(null);

    
    const onLoad = () => {
      
      // editor instance is created
      // you can load your template here;
      // const templateJson = {};
      // emailEditorRef.current.editor.loadDesign(templateJson);
    }
  
    const onReady = () => {
      // emailEditorRef.current.editor.setAppearance({
      //   theme: 'dark',
      //   panels: {
      //     tools: {
      //       dock: 'right'
      //     }
      //   }
      // });
      // editor is ready
      console.log('onReady');
    };

    const options = {
        customCSS: [
          `body{
            background-color: yellow;
          }`
        ],
      
      fonts: {
        showDefaultFonts: true,
        customFonts: [
          {
            label: "Comic Sans",
            value: "'Comic Sans MS', cursive, sans-serif"
          },
          {
            label: "Lobster Two",
            value: "'Lobster Two',cursive",
            url: "https://fonts.googleapis.com/css?family=Lobster+Two:400,700"
          },
          {
            label: "SamsungOne",
            value: "'SamsungOne', Arial, Helvetica, sans-serif",
            url: "https://cdn.samsung.com/etc/designs/smg/global/fonts/SamsungOne-400.woff2"
          },
          {
            label: "Samsung Sharp Sans",
            value: "'SamsungOne', Arial, Helvetica, sans-serif",
            url: 'https://cdn.samsung.com/etc/designs/smg/global/fonts/SamsungSharpSansBd.woff'
          }
        ]
      }
    }


    return(
        <EmailEditorContext.Provider value={{
            emailEditorRef,
            onLoad,
            onReady,
            options,
        }}> {children}</EmailEditorContext.Provider> 
    )
}


export default EmailEditorContext;