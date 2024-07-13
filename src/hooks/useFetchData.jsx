
import { useEffect, useState } from "react";


import { http } from "../../data/axios";

const useFetchData = () => {
   
    const [data, setData] = useState(null)


    useEffect(() => {
        http.get('https://api.timbu.cloud/products?organization_id=F64a8bffa1f4c3a9c4bcb39e1d652f8&reverse_sort=false&page=1&size=10&Appid=CVWWLRRGKYNFU9X123&Apikey=2bdfd570eaf14c9d8b61c69993c17fcc20240712144946909097')
            .then(res => setData(res.data))
            .catch(err => console.log(err))

    }, [])

   
   
    return{data, setData}


}

export default useFetchData