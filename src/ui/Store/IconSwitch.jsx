

export const IconSwitch = (props) => {
  const icon = props.icon
  const onSwitch = props.onSwitch
  const handlerClick = () => {
    if (icon === "view_module")
     {
      onSwitch("view_list")
     } else {
      onSwitch("view_module")
     }
    
  }
  return (<>
    <div className="material-icons" onClick={handlerClick}>{icon}</div>
  </>
  )
}
