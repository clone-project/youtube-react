function GnbDropdown(props) {
  const { data, isOpen } = props;

  const listSection = data.section.map((prop, idx) => {
    const listItem = prop.item.map((prop2, idx2) => {
      const { link, icon, text } = prop2;

      return (
        <a key={ `${idx2}${text}` } href={ link } className="link_item">
          <svg viewBox="0 0 24 24" className="svg_style" dangerouslySetInnerHTML={{ __html: icon }}></svg>
          <span className="text">{ text }</span>
        </a>
      );
    });

    return (
      <>
        { data.section.length < 2 && <div key={ `${idx}${data.classname}` }>{ listItem }</div> }
        { data.section.length >= 2 && <div key={ `${idx}${data.classname}` } className="dropdown_section">{ listItem }</div> }
      </>
    );
  });

  return (
    <div className={ data.classname + ( isOpen? ' open' : '' )}>
      { listSection }
    </div>
  );
}

export default GnbDropdown;