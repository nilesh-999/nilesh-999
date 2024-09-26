import { MdSupportAgent } from "react-icons/md";
import { RiRefund2Fill } from "react-icons/ri";
import { TbDiscount, TbTruckDelivery } from "react-icons/tb";
import FeatureCard from "./FeatureCard";


const data = [
    {
        icon: <TbTruckDelivery className="text-4xl" />,
        title: "Free Delivery",
        desc: "Orders from all item",
    },
    {
        icon: <RiRefund2Fill className="text-4xl" />,
        title: "Return & Refund",
        desc: "Money back guarantee",
    },
    {
        icon: <TbDiscount className="text-4xl" />,
        title: "member discount",
        desc: "On Order Over $99.00",
    },
    {
        icon: <MdSupportAgent className="text-4xl" />,
        title: "24/7 Support",
        desc: "Contact Us 24 hours a day",
    }
];

const Feature = () => {
    return (
        <div className="container grid gap-1 sm:grid-cols-2 lg:grid-cols-4 mt-8">
            {data.map((item) =>(
                <FeatureCard key={item.title}
                             icon={item.icon}
                             title={item.title}
                             desc={item.desc}
                />
            )
            
        )

            }
        </div>
    )
}

export default Feature;