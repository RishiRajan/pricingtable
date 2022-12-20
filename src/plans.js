function plans (type){
    let freeplan = {
    planName: "FREE",
    price : 0,
    user: "Single",
    storage: "5",
    unlimitedPublic : true,
    community : true,
    unlimitedPrivate : false,
    phoneSupport : false,
    freeSubdomain : false,
    monthlyStatus : false
  };

  let plus = {
    planName: "PLUS",
    price : 9,
    user: "5",
    storage: "50",
    unlimitedPublic : true,
    community : true,
    unlimitedPrivate : true,
    phoneSupport : true,
    freeSubdomain : true,
    monthlyStatus : false
  }

  let pro = {
    planName: "PRO",
    price : 49,
    user: "Unlimited",
    storage: "150",
    unlimitedPublic : true,
    community : true,
    unlimitedPrivate : true,
    phoneSupport : true,
    freeSubdomain : "Unlimited",
    monthlyStatus : true
  }
    if(type == "free"){
        return freeplan;
    } else if(type == "plus"){
        return plus;
    }else {
        return pro;
    }
}

export default  plans;