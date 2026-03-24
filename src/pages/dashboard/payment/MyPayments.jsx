import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const MyPayments = () => {
    const {parcelId} = useParams()
    const axiosSecure = useAxiosSecure();

    const {data: parcels ,isLoading} = useQuery({
        queryKey:['payment', parcelId],
        queryFn: async ()=>{
          const res = await axiosSecure.get(`/parcels/${parcelId}`)
           
            return res.data
        }
    })

    const handlePayment =async() =>{

        const paymentInfo ={
            cost: parcels.cost,
            parcelName: parcels.parcelName,
            parcelId:parcels._id,
            senderEmail: parcels.senderEmail,
            

        }

        const res = await axiosSecure.post('/create-checkout-session',paymentInfo)
        if(res.data?.url){
            window.location.replace(res.data.url)
        }
    }
    if(isLoading){
        return <p>loading.....</p>
    }

    return (
        <div>
            {parcelId}
            <h3>{parcels?.parcelName}</h3>
             <button onClick={handlePayment} className='btn bg-primary btn-ghost'>pay</button>
        </div>
    );
};

export default MyPayments;