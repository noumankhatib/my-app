import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        console.log("you have click on handleUpClick")
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert("Converted to uppercase","success")
    }
    const handleloClick = ()=>{
        console.log("you have click on handleloClick")
        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert("Converted to lowerCase","success")
    }
    const handleOnChange = (e)=>{
        console.log("you have click on handleOnChange")
        setText(e.target.value)
        //props.showAlert("Converted to lowerCase","success")

    }
    const handleClearClick=()=>{
        let newText = '';
        setText(newText)
        props.showAlert("Text Clear","success")
    }
    const handleCopy = ()=>{
        navigator.clipboard.writeText(text)
        props.showAlert("Copied to Clipboard","success")
    }
    const handleExtraSpaces = ()=>{
        let newText = text.split(/[]+/)
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed!","success")
    }

    const [text,setText] = useState('Enter text here')
    //     useEffect(()=>{
    //         setText('Noumaan')
    // },[])
   
    return (
        <>
        <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}}>
            <h1 className="my-4">{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control"  value={text} id="myBox" onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark'?'#13466e':'white',color:props.mode==='dark'?'white':'#042743'}} rows="8"></textarea>
                </div>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>convert to Uppercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleloClick}>convert to LowerCase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Space</button>
          
            </div>
            <div className="container my-3 " style={{color:props.mode==='dark'?'white':'#042743'}}  >
            <h1>Your text summery</h1>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} and {text.length} character</p>
            <p> {0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes Read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something to preveiw it"}</p>
            </div>
            </>
            )
}
