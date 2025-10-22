
import Image from "next/image";

interface CardPersonProps {
    member: {
        id: number;
        name: string;
        role: string;
        subrole?: string;
        image: string;
    }
}

const CardPerson = ({member}: CardPersonProps) => {
    return (
        <div className="team-member">
            <div className="member-image">
                <Image src={member.image} alt={member.name} width={1000} height={1000} />
            </div>
            <div className="member-info">
                <h4>{member.name}</h4>
                <p>{member.role}</p>
                {member.subrole && <p>{member.subrole}</p>}
            </div>
        </div>
    );
}

export default CardPerson;