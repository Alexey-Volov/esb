const FooterList = ({title, items}) => {
    return ( 
        <div className="footer__column">
            <h4>{title}</h4>
            <ul>
                {items.map((item, index) => {
                    return (
                        <li key={index}>{item}</li>
                    )
                })}
            </ul>
        </div>
     );
}
 
export default FooterList;