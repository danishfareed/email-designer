import React, { useContext } from 'react';
import EmailEditor from 'react-email-editor';
import { render } from 'react-dom'
import EmailEditorContext from './../context/EmailEditorContext';




const Home = (props) => {
    const { emailEditorRef, onLoad, onReady, exportHtml } = useContext(EmailEditorContext);

  return (
    <>
    <div>
    <section className="bg-white dark:bg-gray-900">
      <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div class="max-w-screen-lg text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 class="mb-4 text-4xl tracking-tight font-bold text-gray-900 dark:text-white">Email Editor</h2>
            <button onClick={exportHtml} className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">Export HTML</button>
        </div>
      </div>
    </section>  
      <EmailEditor
        ref={emailEditorRef}
        onLoad={onLoad}
        onReady={onReady}
        minHeight="900px"
      />
    </div>
    </>
  )
}

export default Home