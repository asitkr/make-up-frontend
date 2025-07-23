import { lazy, Suspense } from "react";

const Layout = lazy(() => import("../components/Layout.tsx"));
const LegalContent = lazy(() => import("../components/LegalContent.tsx"));

import { termsAndConditionsData, termsIntro } from "../lib/termsCondition.ts";

const TermsConditionsPage: React.FC = () => {
    return (
        <Suspense fallback={<div>Loading layout...</div>}>
            <Layout>
                <div className="w-full px-4 lg:px-[120px] pt-20 pb-12 font-normal bg-bgColorPrimary">
                    {
                        termsIntro && (
                            <div className="w-full text-lightText">
                                <h1 className="text-lg sm:text-5xl leading-5 sm:leading-[62.4px] text-primary mb-4 sm:mb-10">{termsIntro?.title}</h1>
                                <p className="text-xs sm:text-xl leading-10">{termsIntro?.subTitle}</p>
                                <p className="text-xs sm:text-xl leading-1">{termsIntro?.description}</p>
                            </div>
                        )
                    }

                    {termsAndConditionsData && (
                        <LegalContent sections={termsAndConditionsData} className="my-0" />
                    )}
                </div>
            </Layout>
        </Suspense>
    )
}

export default TermsConditionsPage;