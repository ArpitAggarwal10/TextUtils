import React, { useState } from "react";

export default function TextForm(props) {

    const [Text, setText] = useState("")
    const HandleClearText = () => {
        setText("")
        props.showalert("Cleared Text !!", "Success")
    }
    const HandleUpperCaseClick = () => {

        let newText = Text.toUpperCase()
        setText(newText)
        props.showalert("Text Converted To The UpperCase Successfully", "Success")
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(Text)
        document.getSelection().removeAllRanges()
        props.showalert("Copied To Clipboard Successfully!!", "Success")
    }
    const HandleLowerCaseClick = () => {
        let newText = Text.toLowerCase();
        setText(newText)
        props.showalert("Text Converted So LowerCase Successfully", "Success")
    }
    const handleOnChange = (event) => {
        setText(event.target.value)
    }
    return (
        <>
            <div className="container">

                <h1 className={`text-${props.mode === "light" ? "dark" : "light"} mb-4 mt-2 textHeadingClass`}>{props.heading}</h1>
                <form>
                    <div className="form-group">
                        <textarea className="form-control" value={Text} id="mytextForm" style={{ backgroundColor: props.mode === "light" ? "white" : '#2e4f71', color: props.mode === "light" ? "black" : "white" }} onChange={handleOnChange} rows="8"></textarea>
                    </div>
                    <button disabled={Text.split(" ").filter((element) => {
                        return element.length !== 0;
                    }).length === 0} type="button" className="btn btn-primary mt-3 me-3" onClick={HandleUpperCaseClick}><strong>Convert To UpperCase</strong></button>
                    <button disabled={Text.split(" ").filter((element) => {
                        return element.length !== 0;
                    }).length === 0} type="button" className="btn btn-danger me-3 mt-3" onClick={HandleClearText}><strong>Clear Text</strong></button>
                    <button disabled={Text.split(" ").filter((element) => {
                        return element.length !== 0;
                    }).length === 0} type="button" className="btn btn-danger me-3 mt-3" onClick={handleCopy}><strong>Copy Text To The ClipBoard</strong></button>
                    <button disabled={Text.split(" ").filter((element) => {
                        return element.length !== 0;
                    }).length === 0} type="button" className="btn btn-primary mt-3 me-3" onClick={HandleLowerCaseClick}><strong>Convert To LowerCase</strong></button>
                </form>
            </div>
            <div className="container my-5">
                <h1 className={`text-${props.mode === "light" ? "dark" : "light"} textHeadingClass`}>Your Text Summary</h1>
                <p className={`wordCountClass text-${props.mode === "light" ? "dark" : "light"}`}>{Text.split(/\s+/).filter((element) => {
                    return element.length !== 0;
                }).length} Words And {Text.length} Characters</p>
                <p className={`wordCountClass text-${props.mode === "light" ? "dark" : "light"}`}>{Text.split(" ").filter((element) => {
                    return element.length !== 0;
                }).length / 125} Minutes To Read</p>
                <h2 className={`text-${props.mode === "light" ? "dark" : "light"} textHeadingClass`}>Preview Of The Above Text</h2>
                <p className={`text-${props.mode === "light" ? "dark" : "light"}`}>{Text.length > 0 ? Text : "Nothing To Preview"}</p>
            </div>
        </>
    )
}