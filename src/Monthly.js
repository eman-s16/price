

function Monthly() {
    return (
        <div>
            <div className="wrapper monthly price">
                <div className="box basic">
                    <h4>Basic</h4>
                    <h2>$19.99</h2>
                    <ul>
                        <li>500GB Storage</li>
                        <li>2 Users Allowed</li>
                        <li>Send up to 3GB</li>
                    </ul>
                    <button>LEARN MORE</button>
                </div>
                <div className="box pro">
                    <h4>Professional</h4>
                    <h2>$24.99</h2>
                    <ul>
                        <li>1TB Storage</li>
                        <li>5 Users Allowed</li>
                        <li>Send up to 10GB</li>
                    </ul>
                    <button>LEARN MORE</button>
                </div>
                <div className="box master">
                    <h4>Master</h4>
                    <h2>$39.99</h2>
                    <ul>
                        <li>2TB Storage</li>
                        <li>10 Users Allowed</li>
                        <li>Send up to 20GB</li>
                    </ul>
                    <button>LEARN MORE</button>
                </div>
            </div>
        </div>
    );
}
export default Monthly;