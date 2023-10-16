import "./Button.css";

export default function Button(props) {
  return (
    <button
      onClick={props.onClick}
      onSubmit={props.onSubmit}
      disabled={props.disabled}
      autoFocus={props.autoFocus}
      form={props.form}
      formAction={props.formAction}
      formMethod={props.formMethod}
      formTarget={props.formTarget}
      formEncType={props.formEncType}
      formNoValidate={props.formNoValidate}
      name={props.name}
      type={props.type}
      value={props.value}
      className={`${
        props.disabled ? "disabled" : `${props.color ? props.color : "default"}`
      }${props.variant ? props.variant : ""} ${
        props.disableShadow ? "disableShadow" : ""
      } ${props.size ? props.size : ""}`}
    >
      <div className="container">
        {props.startIcon && (
          <span className="material-symbols-outlined">{props.startIcon}</span>
        )}
        <span>{props.children || "Default"}</span>
        {props.endIcon && (
          <span className="material-symbols-outlined">{props.endIcon}</span>
        )}
      </div>
    </button>
  );
}
