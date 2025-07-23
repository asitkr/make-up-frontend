import type { LegalContentProps } from "../types/legal.ts"

const LegalContent: React.FC<LegalContentProps> = ({ sections, className="", isPageLink ="" }) => {
    return (
        <div className="text-lightText text-xs sm:text-xl">
            {
                sections && sections?.map((section, index) => {
                    return (
                        <div
                            key={index}
                            className="my-6"
                        >
                            <p className="leading-5 sm:leading-10">{section?.title}</p>

                            {section?.titleDescription && (
                                <p className="leading-5 sm:leading-10">{section?.titleDescription}</p>
                            )}

                            {
                                section?.content && section?.content?.map((item, idx) => (
                                    <div key={idx} className={`${isPageLink ? "mb-6" : ""} leading-5 sm:leading-10 ${className}`}>
                                        {item?.subTitle && (
                                            <p className="leading-5 sm:leading-10">{item?.subTitle}</p>
                                        )}

                                        {item?.subTitleDescription && (
                                            <p className="leading-5 sm:leading-10">{item?.subTitleDescription}</p>
                                        )}

                                        {item?.subContent && (
                                            <ul className="list-disc ml-5">
                                                {item?.subContent?.map((point, i) => (
                                                    <li key={i} className="leading-5 sm:leading-10">{point}</li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                ))
                            }

                            {section?.contentDescription && (
                                <p className="leading-5 sm:leading-10">{section?.contentDescription}</p>
                            )}
                        </div>
                    )
                })
            }
        </div>
    )
}

export default LegalContent