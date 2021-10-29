//Toolbar

const Toolbar = (props) => {
    return (
      <div className="toolbar">
        <i title={props.title} />
        {props.title}
        <i className={props.icon} onClick={props.onClick} />
      </div>
    );
  };

  export default Toolbar;