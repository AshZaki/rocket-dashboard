import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface CardProps {
  title?: string;
  description?: string;
  icon?: any;
  iconColor?: string;
}

const Card = ({ title, description, icon, iconColor }: CardProps) => {
  return (
    <div className="flex justify-start">
      <div className="inline-flex justify-between items-center p-7 rounded-lg bg-gray-100 w-full h-full">
        <div className="inline-flex items-center gap-x-3">
          <FontAwesomeIcon icon={icon} color={iconColor} />
          <div className="flex-col">
            <h5 className="text-gray-900 text-xl leading-tight font-bold">
              {title}
            </h5>
            <p className="text-gray-700 text-base">
              {description}
            </p>
          </div>
        </div>
        <div>
          <FontAwesomeIcon icon="chevron-right" color="black" />
        </div>
      </div>
    </div>
  );
}

export default Card;