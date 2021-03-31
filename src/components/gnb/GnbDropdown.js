function GnbDropdown(props) {
  const listSection = props.data.section.map(prop =>{
    if ( props.data.section.length <= 1 ) {
      return (
        prop.item.map((prop2, idx) => {
          return (
            <a key={ idx } href={ prop2.link } className="link_item">
              <svg viewBox="0 0 24 24" className="svg_style" dangerouslySetInnerHTML={ {__html: prop2.icon} }></svg>
              <span className="text">{ prop2.text }</span>
            </a>
          )
        })
      )} else {
      return (
        <div className="dropdown_section">
          { prop.item.map((prop2, idx) =>{
            return (
              <a key={ idx } href={ prop2.link } className="link_item">
                <svg viewBox="0 0 24 24" className="svg_style" dangerouslySetInnerHTML={ {__html: prop2.icon} }></svg>
                <span className="text">{ prop2.text }</span>
              </a>
            )}
          )}
        </div>
    )}
  });

  return (
    <div className={ props.data.classname }>
      { listSection }
    </div>
  )
}

export default GnbDropdown;