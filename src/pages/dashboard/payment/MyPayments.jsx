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

    if(isLoading){
        return <p>loading.....</p>
    }

    return (
        <div>
            {parcelId}
             {parcels?.parcelName}
        </div>
    );
};

export default MyPayments;