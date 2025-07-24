import  React, { useEffect, useState } from "react";
import Range from "rc-slider"

import "rc-slider/assets/index.css"


const Filter = () => {
    const [mounted, setMounted] = useState(false);
    const [price, setPrice] = useState([0, 480000])
    const [hits, setHits] = useState(false)
    const [newItems, setNewItems] = useState(false)
    const [discounted, setDiscounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])
    return (
        <div className="price-filter">
            <h4>Цена</h4>
            {mounted && (
                <Range
                    min={0}
                    max={480000}
                    value={price}
                    onChange={setPrice}
                    trackStyle={[{backgroundColor: 'lime'}]}
                    handleStyle={[
                        {borderColor: 'lime'},
                        {borderColor: 'lime'},
                    ]}
                />
            )}
            
            <div className="price-values">
                <span>{price[0]?.toLocaleString?.() ?? 0}</span> –{" "}
                <span>{price[1]?.toLocaleString?.() ?? 0}</span>
            </div>
            {/* <div className="price-checkboxes">
                <label>
                    Хиты продаж
                    <input type="checkbox" checked={hits} onChange={() => setHits(!hits)} />
                </label>

                <label>
                    Новинки
                    <input type="checkbox" checked={newItems} onChange={() => setNewItems(!newItems)}/>
                </label>

                <label>
                    Товары со скидкой
                    <input type="checkbox" checked={discounted} onChange={() => setDiscounted(!discounted)} />
                </label>
            </div> */}
            <div className="price-checkboxes">
                <label className="switch-label">
                    Хиты продаж
                    <div className="switch">
                    <input
                        type="checkbox"
                        checked={hits}
                        onChange={() => setHits(!hits)}
                    />
                    <span className="slider" />
                    </div>
                </label>

                <label className="switch-label">
                    Новинки
                    <div className="switch">
                    <input
                        type="checkbox"
                        checked={newItems}
                        onChange={() => setNewItems(!newItems)}
                    />
                    <span className="slider" />
                    </div>
                </label>

                <label className="switch-label">
                    Товары со скидкой
                    <div className="switch">
                    <input
                        type="checkbox"
                        checked={discounted}
                        onChange={() => setDiscounted(!discounted)}
                    />
                    <span className="slider" />
                    </div>
                </label>
                </div>
            
                
        </div> 
    );
}
 
export default Filter;