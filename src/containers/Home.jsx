import React, { useContext, Fragment, useState, useEffect } from 'react';
import { Dialog, Transition,  } from '@headlessui/react'
import EmailEditor from 'react-email-editor';
import MonacoEditor from '@uiw/react-monacoeditor';
import { render } from 'react-dom';
import EmailEditorContext from './../context/EmailEditorContext';
import { useSearchParams } from "react-router-dom";


const Home = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenLoadSavedDesignPopup, setIsOpenLoadSavedDesignPopup] = useState(false);
  const [onlyLoadOnceSavedDesign, setonlyLoadOnceSavedDesign] = useState(true)
  const [code, setCode] = useState(``);
  const [searchParams] = useSearchParams();
  const templateId = searchParams.get('templateId');

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  function closeLoadSavedDesignPopup() {
    setIsOpenLoadSavedDesignPopup(false)
  }

  function openLoadSavedDesignPopup() {
    setIsOpenLoadSavedDesignPopup(true)
  }

  const { emailEditorRef, onLoad, onReady, options, isEditorReady,setdefaultTemplateId } = useContext(EmailEditorContext);

  /**below code to check templateid parameter start */
  useEffect(() => {
    if(templateId!=null){
      setdefaultTemplateId(templateId);
    }
  }, [templateId])
    /**below code to check templateid parameter end */


  
  const exportHtml = () => {
    emailEditorRef.current.editor.exportHtml((data) => {
      const { design, html } = data;
      // console.log('exportHtml', html);
      setCode(html)
      console.log('design', design);
      openModal();
      // alert("HTML Exported to console")
    });
  };

  /**continue where you left or start new - start*/
  useEffect(() => {
    if(onlyLoadOnceSavedDesign){
      const autoSaveDesign = localStorage.getItem('autoSaveDesign');
      if(autoSaveDesign!=null && templateId == null){
        openLoadSavedDesignPopup();
      }
      setonlyLoadOnceSavedDesign(false);
    }
    
  }, [])
  
  const loadSavedDesignInEditor = () => {
    const autoSaveDesign = JSON.parse(localStorage.getItem('autoSaveDesign'));
    isEditorReady && emailEditorRef.current.editor.loadDesign(autoSaveDesign);
  };
    /**continue where you left or start new - end*/


  /**export html popup start */
  const htmlCode = () =>{
    return (<>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-30" />
          </Transition.Child>

          {/* Full-screen scrollable container */}
          <div className="fixed inset-0 flex items-center justify-center p-4">
            {/* Container to center the panel */}
            <div className="flex min-h-full items-center justify-center overflow-y-auto">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                {/* The actual dialog panel  */}
                <Dialog.Panel className="mx-auto max-w-4xl transform overflow-hidden rounded-2xl bg-base-100 p-6 text-left align-middle shadow-xl transition-all ">
                  <Dialog.Title
                    as="h3"
                    className="text-xl font-medium leading-6"
                  >
                    Exported HTML
                  </Dialog.Title>
                  <div className="mt-2">
                  
                  <MonacoEditor
                    width= "80vh"
                    height= "70vh"
                    language="html"
                    value={code}
                    onChange={(evn) => setCode(evn.target.value)}
                    options={{
                      theme: 'vs-dark',
                    }}
                  />
                  </div>

                  <div className="mt-4 flex justify-between">
                  <button 
                  onClick={() => {navigator.clipboard.writeText(code)}} 
                  className="btn btn-primary">Click to Copy</button>
                  <button onClick={closeModal} className="btn btn-outline btn-primary">Close</button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
      </>)
  }
    /**export html popup end */

  /**continue where you left popup start */
  const loadAutoSavedDesign = () =>{
    return (<>
      <Transition appear show={isOpenLoadSavedDesignPopup} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeLoadSavedDesignPopup}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-30" />
          </Transition.Child>

          {/* Full-screen scrollable container */}
          <div className="fixed inset-0 flex items-center justify-center p-4">
            {/* Container to center the panel */}
            <div className="flex min-h-full items-center justify-center overflow-y-auto">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                {/* The actual dialog panel  */}
                <Dialog.Panel className="mx-auto max-w-4xl transform overflow-hidden rounded-2xl bg-base-100 p-6 text-left align-middle shadow-xl transition-all ">
                  <Dialog.Title
                    as="h3"
                    className="text-xl font-medium text-center leading-6"
                  >
                    Do you want to continue where you left?
                  </Dialog.Title>
                  <div className="mt-2">

                  </div>

                  <div className="mt-4 flex justify-between">
                  <button onClick={closeLoadSavedDesignPopup} className="btn btn-outline btn-primary">I'll start new</button>
                  <button 
                  onClick={() => {
                    loadSavedDesignInEditor();
                    closeLoadSavedDesignPopup();
                  }} 
                  className="btn btn-primary">Yes, I will</button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
      </>)
  }
    /**export html popup end */


  return (
    <>
    <div>
      <EmailEditor
        
        ref={emailEditorRef}
        onLoad={onLoad}
        onReady={onReady}
        minHeight={"75vh"}
        options={options}
      />

    <section className="">
      <div className="flex justify-center py-8 px-4 mx-auto max-w-screen-2xl lg:py-16 lg:px-6">
          {/* <div className="form-control">
              <div className="input-group">
                <input type="text" placeholder="Design Name" className="input input-bordered" />
                <button className="btn btn-outline btn-primary">Save Design</button>
              </div>
          </div> */}
          <button onClick={exportHtml} className="btn btn-primary ml-2">Export HTML</button>
      </div>
    </section>
    </div>
    {isEditorReady && htmlCode()}
    {isEditorReady && loadAutoSavedDesign()}
    
    </>
  )
}

export default Home