import { createContext, useRef } from "react";
const EmailEditorContext = createContext();

export const EmailEditorProvider = ({children})=>{
    
    const emailEditorRef = useRef(null);

    const exportHtml = () => {
        emailEditorRef.current.editor.exportHtml((data) => {
          const { design, html } = data;
          console.log('exportHtml', html);
          console.log('design', design);
          alert("HTML Exported to console")
        });
      };
    
      const onLoad = () => {
        // editor instance is created
        // you can load your template here;
        // const templateJson = {};
        // emailEditorRef.current.editor.loadDesign(templateJson);
      }
    
      const onReady = () => {
        // editor is ready
        console.log('onReady');
      };
     
    return(
        <EmailEditorContext.Provider value={{
            emailEditorRef,
            exportHtml,
            onLoad,
            onReady,
        }}> {children}</EmailEditorContext.Provider> 
    )
}


export default EmailEditorContext;