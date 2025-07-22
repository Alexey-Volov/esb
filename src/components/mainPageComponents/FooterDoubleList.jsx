const FooterDoubleList = ({items}) => {
    return ( 
        <div className="footer__column">
            {items.map((item, index) => (
                <div key={index} className="footer__double-block">
                    <h4>{item.subtitle}</h4>
                    <p>{item.text}</p>
                </div>
            ))}
        </div>
     );
}
 
export default FooterDoubleList;