import BackgroundLogo from "@/atoms/BackgroundLogo";
import ContactDetails from "@/components/ContactDetails";
import Form from "@/components/Form";
import Numbers from "@/components/Numbers";
import TrustedBy from "@/components/TrustedBy";
import { getDetails, getContactDetails, getFormContent, getNumbers, getTrusted } from "@/sanity/sanity-utils";
import { currentLocale } from "next-i18n-router";
// import { getLogos } from "@/sanity/sanity-utils";

export default async function Contact() {
  // const logos = await getLogos();
  const locale = currentLocale();

  const { title: numberTitle, fact1, fact2, fact3 } = await getNumbers();
  const { title: formTitle } = await getFormContent()
  const { enabled, title: trustedTitle, partners } = await getTrusted();
  const { title: detailsTitle, text: detailsText, alt, imgUrl } = await getDetails();
  const { companyName, address1, address2, country, email, vat, phone } = await getContactDetails();

  return (
    <div>
      <BackgroundLogo />
      <ContactDetails {...{companyName, address1, address2, country, email, vat, phone}} title={detailsTitle?.[locale]} text={detailsText?.[locale]} alt={alt} imgUrl={imgUrl} />
      {enabled && <TrustedBy title={trustedTitle?.[locale]} partners={partners} />}
      <Form title={formTitle?.[locale]} />
      <Numbers title={numberTitle?.[locale]} facts={[fact1, fact2, fact3]} />
    </div>
  );
}
