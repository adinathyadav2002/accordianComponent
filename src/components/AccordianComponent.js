export default function AccordianComponent({
  title,
  text,
  index,
  currOpen,
  setCurrOpen,
}) {
  // we should not directly pass setOpen fuction to child component

  return (
    <div
      className={`accordian--div  ${
        index === currOpen ? "accordian--open" : ""
      }`}
      onClick={() => {
        if (index === null || index !== currOpen) setCurrOpen(index);
        else setCurrOpen(null);
      }}
    >
      <div className="accordian-title--div">
        <span>{String(index + 1).padStart(2, 0)}</span>
        <p>{title}</p>
        {/* let's suppose we want button with '++' and '--' like this
        so instead of passing more props we directly pass the jsx throught 
        children props */}
        {/* <Button handleOpen={handleOpen} open={open} /> */}
        {/* now we can cutomize the button as we want */}
        <Button setCurrOpen={setCurrOpen} index={index}>
          {index === currOpen ? "-" : "+"}
        </Button>
      </div>
      <div className={`${index === currOpen ? "" : "hidden"}  accordian-text`}>
        {text}
      </div>
    </div>
  );
}

// implement button component  using {children props}

function Button({ setCurrOpen, index, children }) {
  return <button onClick={() => setCurrOpen(index)}>{children}</button>;
}
