import ContactDetails from "@/components/ContactDetails";
import Form from "@/components/Form";
import Numbers from "@/components/Numbers";
import TrustedBy from "@/components/TrustedBy";

export default function Contact() {
  return (
    <div>
      <ContactDetails />
      <TrustedBy />
      <Form />
      <Numbers />
    </div>
  );
}
