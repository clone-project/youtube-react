function GnbDropdown(props) {
  const listSection = props.data.section.map(prop => {
    const listItem = prop.item.map((prop2, idx) => {
      return (
        <a key={idx} href={prop2.link} className="link_item">
          <svg viewBox="0 0 24 24" className="svg_style" dangerouslySetInnerHTML={{__html: prop2.icon}}></svg>
          <span className="text">{prop2.text}</span>
        </a>
      );
    });

    return (
      <>
        { props.data.section.length < 2 && listItem }
        { props.data.section.length >= 2 && <div className="dropdown_section">{ listItem }</div> }
      </>
    );
  });

  return (
    <div className={ props.data.classname }>
      { listSection }
    </div>
  );
}

export default GnbDropdown;