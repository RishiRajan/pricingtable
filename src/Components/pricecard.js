import "./pricecard.css"
function Pricecard({type}){
    let featureArray  =[];
    return(
        <div className="card col-lg-3">
            <div className="card-body">
                <p>{type.planName}</p>
                <div className="priceTag">
                    <h1>{"$"+type.price}</h1>
                    <p>/Month</p>
                </div>
                <hr></hr>
                <h5>{"🗸 "+type.user+" User"}</h5>
                <h5>{"🗸 "+type.storage+"GB Storage"}</h5>
                {(type.unlimitedPublic)? <h5>🗸 Unlimited Public Projects</h5> : <h5 className="disabled">× Unlimited Public Projects</h5>}
                {(type.community)? <h5>🗸 Community Access</h5> : <h5 className="disabled">× Community Access</h5>}
                {(type.unlimitedPrivate)? <h5>🗸 Unlimited Private Projects</h5> : <h5 className="disabled">× Unlimited Private Projects</h5>}
                {(type.phoneSupport)? <h5>🗸 Dedicated Phone Support</h5> : <h5 className="disabled">× Dedicated Phone Support</h5>}
                {(type.freeSubdomain)? <h5>🗸 Free Subdomain</h5> : <h5 className="disabled">× Free Subdomain</h5>}
                {(type.monthlyStatus)? <h5>🗸 Monthly Status Reports</h5> : <h5 className="disabled">× Monthly Status Reports</h5>}
                {(type.planName == "FREE")? <button className="btn btn-primary col-lg-12">Start {type.planName} now</button>: <button className="btn btn-primary col-lg-12">Buy {type.planName}</button>}
            </div>
        </div>
    );

    /*planName: "FREE",
    price : 0,
    user: "Single",
    storage: "5",
    unlimitedPublic : true,
    community : true,
    unlimitedPrivate : false,
    phoneSupport : false,
    freeSubdomain : false,
    monthlyStatus : false
  };*/
}

export default Pricecard;