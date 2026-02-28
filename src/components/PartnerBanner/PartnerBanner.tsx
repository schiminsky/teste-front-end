import './PartnerBanner.scss';

import partnerImg from '../../assets/images/banner-2.png';

function PartnerBanner() {
  return (
    <section className="partner-banner-container">
      <img src={partnerImg} alt="Banner" />
      <img src={partnerImg} alt="Banner" />
    </section>
  );
}

export default PartnerBanner;