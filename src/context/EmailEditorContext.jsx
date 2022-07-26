import { createContext, useRef, useContext, useEffect, useState } from "react";
import ThemeContext from "./ThemeContext";
import axios from "axios";


const EmailEditorContext = createContext();

export const EmailEditorProvider = ({children})=>{
  const { theme, colorTheme } = useContext(ThemeContext);
  const [isEditorReady, setisEditorReady] = useState(false);
const [defaultTemplateId, setdefaultTemplateId] = useState(0);
 
  const emailEditorRef = useRef(null);

    const getTemplate = async (templateId) =>{
      const { data, status } = await axios.get(`https://danishfareed.github.io/email-designer/unlayerTemplates/${templateId}.json`, {
        // headers: {
        //     'Access-Control-Allow-Origin' : '*',
        // },
      });

    if(status===200){
      console.log("just data",data.data.StockTemplate.StockTemplatePages[0].design)
        return data.data.StockTemplate.StockTemplatePages[0].design;
    }else{
        return data;
    }
    }
    
    const onLoad = () => {
      // editor instance is created
      // you can load your template here;
      if(defaultTemplateId!=0 && defaultTemplateId!=null){
        getTemplate(defaultTemplateId).then(templateJson => {
          emailEditorRef.current.editor.loadDesign(templateJson);
        })
      }
    }
    
    const onReady = () => {
      setisEditorReady(true)
      editorThemeChanger()
      // editor is ready
    };
    
    useEffect(() => {
      if(isEditorReady){
        editorThemeChanger()
      }
    }, [theme])
    
    const editorThemeChanger = () =>{
      if(theme==="fantasy"){
        emailEditorRef.current.editor.setAppearance({
          theme: 'light',
          panels: {
            tools: {
              dock: 'right'
            }
          }
        });
      }else if(theme==="dracula"){
        emailEditorRef.current.editor.setAppearance({
          theme: 'dark',
          panels: {
            tools: {
              dock: 'right'
            }
          }
        });
      }
    }

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
      },
      features: {
        audit: true,
        stockImages: {
          enabled: true,
          safeSearch: true,
          defaultSearchTerm: "people"
        }
      },
      tools: {
        form: {
          enabled: true
        }
      }
    }
  

    return(
        <EmailEditorContext.Provider value={{
            emailEditorRef,
            onLoad,
            onReady,
            options,
            isEditorReady,
            setdefaultTemplateId,
        }}> {children}</EmailEditorContext.Provider> 
    )
}


export default EmailEditorContext;