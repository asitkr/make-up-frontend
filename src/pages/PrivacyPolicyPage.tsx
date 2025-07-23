import { lazy, Suspense } from "react";
import { useLocation } from "react-router-dom";

import { privacyPolicyContent, privacyPolicyIntro } from "../lib/privacyPolicyData.ts";

const Layout = lazy(() => import("../components/Layout.tsx"));
const LegalContent = lazy(() => import("../components/LegalContent.tsx"));

const PrivacyPolicyPage: React.FC = () => {
    const location = useLocation();
    const isPageLink = location?.pathname === "/privacy-policy";    

    return (
        <Suspense fallback={<div>Loading layout...</div>}>
            <Layout>
                <div className="w-full px-4 lg:px-[120px] pt-10 sm:pt-20 pb-12 font-normal bg-bgColorPrimary">
                    {
                        privacyPolicyIntro && (
                            <div className="w-full text-lightText">
                                <h1 className="text-lg sm:text-5xl leading-5 sm:leading-[62.4px] text-primary mb-4 sm:mb-10">{privacyPolicyIntro?.title}</h1>
                                <p className="text-xs sm:text-xl leading-5 sm:leading-8">{privacyPolicyIntro?.subTitle}</p>
                                <p className="text-xs sm:text-xl leading-1">{privacyPolicyIntro?.description}</p>
                            </div>
                        )
                    }

                    {
                        privacyPolicyContent && <LegalContent sections={privacyPolicyContent} className="my-0" isPageLink={isPageLink} />
                    }
                </div>
            </Layout>
        </Suspense>
    )
}

export default PrivacyPolicyPage;