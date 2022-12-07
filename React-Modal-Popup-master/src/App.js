import React, { useState } from 'react'
import Modal from './Modal'

const BUTTON_WRAPPER_STYLES = {
  position: 'relative',
  zIndex: 1,
  backgroundImage:`url("https://media-exp1.licdn.com/dms/image/C4D22AQHlpoMwEj0mbw/feedshare-shrink_800/0/1665731053562?e=1673481600&v=beta&t=r8C0ykVM34EfCJr6SNaVsdnfavbSI9i3LdvbN856nqY")`,
backgroundRepeat:'no-repeat',
  width:'90vw',
  height:'90vh',
objectFit:'fill'}

const OTHER_CONTENT_STYLES = {
  position: 'relative',
  zIndex: 2,
  backgroundColor: '#ccc',
  padding: '10px',
  width:'90vw',
  height:'90vh'}

export default function App() {
  const [isOpen, setIsOpen] = useState(false)
  const [isOpen1, setIsOpen1] = useState(false)
  const [isOpen2, setIsOpen2] = useState(false)
  const [isOpen3, setIsOpen3] = useState(false)
  const [isOpen4, setIsOpen4] = useState(false)
  const [isOpen5, setIsOpen5] = useState(false)
  const [isOpen6, setIsOpen6] = useState(false)
  const [isOpen7, setIsOpen7] = useState(false)
  const [isOpen8, setIsOpen8] = useState(false)
  const [isOpen9, setIsOpen9] = useState(false)
  const [isOpen10, setIsOpen10] = useState(false)
  const [isOpen11, setIsOpen11] = useState(false)
  const [isOpen12, setIsOpen12] = useState(false)
  const [isOpen13, setIsOpen13] = useState(false)
  const [isOpen14, setIsOpen14] = useState(false)
  return (
    <>
      <div style={BUTTON_WRAPPER_STYLES} onClick={() => console.log('clicked')}>
        <button onClick={() => setIsOpen(true)} style={{width:'3vh', height:'3vh',fontSize:'.5rem',marginBottom:'5vh',backgroundColor:'aqua',borderRadius:'50%',position:'absolute',top:'22vh',right:'67vw' }}>0 </button>

        <Modal open={isOpen} onClose={() => setIsOpen(false)} style={{fontSize:'2rem'}}>osama saaideh </Modal>



        <button onClick={() => setIsOpen1(true)} style={{width:'3vh', height:'3vh',fontSize:'.5rem',marginBottom:'5vh',backgroundColor:'red',borderRadius:'50%', position:'absolute',top:'22vh',right:'63vw'}}>1 </button>
       
        <Modal open={isOpen1} onClose={() => setIsOpen1(false)} style={{fontSize:'2rem'}}>emran dabbas</Modal>

        <button onClick={() => setIsOpen2(true)} style={{width:'3vh', height:'3vh',fontSize:'.5rem',marginBottom:'5vh',backgroundColor:'blue',borderRadius:'50%',position:'absolute',top:'22vh',right:'60vw'}}>2 </button>

        <Modal open={isOpen2} onClose={() => setIsOpen2(false)} style={{fontSize:'2rem'}}>mohammad debiee</Modal>

        <button onClick={() => setIsOpen3(true)} style={{width:'3vh', height:'3vh',fontSize:'.5rem',marginBottom:'5vh',backgroundColor:'pink',borderRadius:'50%',position:'absolute',top:'25vh',right:'56vw'}}>3  </button>

        <Modal open={isOpen3} onClose={() => setIsOpen3(false)} style={{fontSize:'2rem'}}>ziad abazeed</Modal>

        <button onClick={() => setIsOpen4(true)} style={{width:'3vh', height:'3vh',fontSize:'.5rem',marginBottom:'5vh',backgroundColor:'purple',borderRadius:'50%',position:'absolute',top:'23vh',right:'49.5vw'}}>4</button>

        <Modal open={isOpen4} onClose={() => setIsOpen4(false)} style={{fontSize:'2rem'}}>basel</Modal>

        <button onClick={() => setIsOpen5(true)} style={{width:'3vh', height:'3vh',fontSize:'.5rem',marginBottom:'5vh',backgroundColor:'grey',borderRadius:'50%',position:'absolute',top:'24vh',right:'46vw'}}>5 </button>


        <Modal open={isOpen5} onClose={() => setIsOpen5(false)} style={{fontSize:'2rem'}}>abdallah nsour</Modal>

        <button onClick={() => setIsOpen6(true)} style={{width:'3vh', height:'3vh',fontSize:'.5rem',marginBottom:'5vh',backgroundColor:'green',borderRadius:'50%',position:'absolute',top:'30vh',right:'48.5vw'}}>6  </button>


        <Modal open={isOpen6} onClose={() => setIsOpen6(false)} style={{fontSize:'2rem'}}>bayan abu alroos</Modal>


        <button onClick={() => setIsOpen7(true)} style={{width:'3vh', height:'3vh',fontSize:'.5rem',marginBottom:'5vh',backgroundColor:'brown',borderRadius:'50%',position:'absolute',top:'32vh',right:'62.5vw'}}>7 </button>


        <Modal open={isOpen7} onClose={() => setIsOpen7(false)} style={{fontSize:'2rem'}}>nancy </Modal>


        <button onClick={() => setIsOpen8(true)} style={{width:'3vh', height:'3vh',fontSize:'.5rem',marginBottom:'5vh',backgroundColor:'wheat',borderRadius:'50%',position:'absolute',top:'32vh',right:'60vw'}}>8  </button>


        <Modal open={isOpen8} onClose={() => setIsOpen8(false)} style={{fontSize:'2rem'}}>amani</Modal>
        
        <button onClick={() => setIsOpen9(true)} style={{width:'3vh', height:'3vh',fontSize:'.5rem',marginBottom:'5vh',backgroundColor:'maroon',borderRadius:'50%',position:'absolute',top:'32vh',right:'57.5vw'}}>9  </button>



        <Modal open={isOpen9} onClose={() => setIsOpen9(false)} style={{fontSize:'2rem'}}>doaa</Modal>


        <button onClick={() => setIsOpen10(true)} style={{width:'3vh', height:'3vh',fontSize:'.5rem',marginBottom:'5vh',backgroundColor:'fuchsia',borderRadius:'50%',position:'absolute',top:'30vh',right:'53vw'}}>10</button>



        <Modal open={isOpen10} onClose={() => setIsOpen10(false)} style={{fontSize:'2rem'}}>ali</Modal>


        <button onClick={() => setIsOpen11(true)} style={{width:'3vh', height:'3vh',fontSize:'.5rem',marginBottom:'5vh',backgroundColor:'lime',borderRadius:'50%'}}>11</button>



        <Modal open={isOpen11} onClose={() => setIsOpen11(false)} style={{fontSize:'2rem'}}>11</Modal>


        <button onClick={() => setIsOpen12(true)} style={{width:'3vh', height:'3vh',fontSize:'.5rem',marginBottom:'5vh',backgroundColor:'olive',borderRadius:'50%'}}>12</button>


        <Modal open={isOpen12} onClose={() => setIsOpen12(false)} style={{fontSize:'2rem'}}>12</Modal>


        <button onClick={() => setIsOpen13(true)} style={{width:'3vh', height:'3vh',fontSize:'.5rem',marginBottom:'5vh',backgroundColor:'navy',borderRadius:'50%'}}>13</button>



        <Modal open={isOpen13} onClose={() => setIsOpen13(false)} style={{fontSize:'2rem'}}>13</Modal>


        <button onClick={() => setIsOpen14(true)} style={{width:'3vh', height:'3vh',fontSize:'.5rem',marginBottom:'5vh',backgroundColor:'teal',borderRadius:'50%'}}>14  </button>


        <Modal open={isOpen14} onClose={() => setIsOpen14(false)} style={{fontSize:'2rem'}}>14</Modal>
      </div>

     
    </>
  )
}
