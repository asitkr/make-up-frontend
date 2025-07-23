import type { ContentCardProps } from "../../types/card.ts";

const ContentCard: React.FC<ContentCardProps> = ({
  title,
  description,
  divStyle = "",
  titleStyle = "",
  titleContentStyle = "",
  contentStyle = ""
}) => {
  return (
    <div className={`box-border w-[396px] h-[254px] rounded-[20px] p-5 mr-8 pt-6 ${divStyle}`}>
      <div className={`box-border h-[42px] px-2 py-1 flex justify-center items-center rounded-lg ${titleStyle}`}>
        <p className={`font-semibold text-[16px] whitespace-nowrap ${titleContentStyle}`}>{title}</p>
      </div>
      <p className={`text-sm mt-10 ${contentStyle}`}>{description}</p>
    </div>
  )
}

export default ContentCard;