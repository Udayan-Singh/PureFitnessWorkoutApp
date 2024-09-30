const Button = (props) => {

    const {text, func} = props
  return (
    <button onClick={func} className="px-4 mx-auto py-8 rounded-md border-[2px] bg-slate-950 border-blue-400 border-solid blueShadow duration-200">
        <p>{text}</p>
    </button>
     
  )
}

export default Button