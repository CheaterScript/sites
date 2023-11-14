import { LandingFooterNav } from '../Landing'

export function TermsPage() {
  const termsUrl = '/public/terms.html'

  return (
    <div className="app-page app-terms">
      <div className="logseq-iframe-content page-inner">
        <iframe src={termsUrl}/>
      </div>

      {/* global footer */}
      <div className="page-inner-full-wrap b relative">
        <div className="page-inner footer-nav">
          <div className="page-inner">
            <LandingFooterNav/>
          </div>
        </div>
      </div>
    </div>
  )
}