// import { orderableDocumentListDeskItem } from '@sanity/orderable-document-list'
import { MasterDetailIcon } from "@sanity/icons";
import { BlockElementIcon } from "@sanity/icons";

export const myStructure = (S, context) => {
  return S.list()
    .title("Content ~ Enjoy Robin!")
    .items([
      S.listItem()
        .title("Home Page")
        .icon(MasterDetailIcon)
        .child(
          S.list()
            .title("Sections")
            .items([
              S.listItem()
                .title("Bermuda Values")
                .icon(BlockElementIcon)
                .child(
                  S.document()
                    .schemaType("hpValues")
                    .documentId("hpValues"),
                ),
              S.listItem()
                .title("CTA")
                .icon(BlockElementIcon)
                .child(
                  S.document()
                    .schemaType("hpCTA")
                    .documentId("hpCTA"),
                ),
              S.listItem()
                .title("About")
                .icon(BlockElementIcon)
                .child(
                  S.document()
                    .schemaType("hpAbout")
                    .documentId("hpAbout"),
                ),
              S.listItem()
                .title("Bermuda Network")
                .icon(BlockElementIcon)
                .child(
                  S.documentList()
                    .title("Network Members")
                    .apiVersion("v2023-09-18")
                    .schemaType("member")
                    .filter('_type == "member"')
                ),
            ]),
        ),
      S.listItem()
        .title("Contact Page")
        .icon(MasterDetailIcon)
        .child(
          S.list()
            .title("Sections")
            .items([
              S.listItem()
                .title("Contact Details")
                .icon(BlockElementIcon)
                .child(
                  S.document().schemaType("cpDetails").documentId("cpDetails"),
                ),
              S.listItem()
                .title("Trusted By")
                .icon(BlockElementIcon)
                .child(
                  S.document()
                    .schemaType("cpTrustedBy")
                    .documentId("cpTrustedBy"),
                ),
              // S.listItem()
              //   .title("Contact Form")
              //   .icon(BlockElementIcon)
              //   .child(
              //     S.document()
              //       .schemaType("contactPageAOS")
              //       .documentId("contactPageAOS"),
              //   ),
              S.listItem()
                .title("Fun Facts")
                .icon(BlockElementIcon)
                .child(
                  S.document().schemaType("cpNumbers").documentId("cpNumbers"),
                ),
            ]),
        ),
      S.divider(),
      S.listItem()
        .title("Navigation Bar")
        .icon(MasterDetailIcon)
        .child(S.document().schemaType("nav").documentId("nav")),
      S.listItem()
        .title("Footer")
        .icon(MasterDetailIcon)
        .child(S.document().schemaType("footerContent")),
      S.divider(),

      // Legal documents probably not as list but as documetn
      // S.listItem()
      //   .title("Legal Documents")
      //   .icon(MasterDetailIcon)
      //   .child(
      //     S.document().schemaType("legalDoc").documentId("legalDoc"),
      //   ),
      // S.divider(),
      ...S.documentTypeListItems().filter(
        (listItem) =>
          ![
            // "contactPageGIS",
            "cpDetails",
            "cpTrustedBy",
            // "contactPageAOS",
            "cpNumbers",
            "nav",
            "footerContent",
            "member",
            'hpAbout',
            "hpCTA",
            "hpValues",
            // "legalDoc",
            // "contactPagePFS",
            // "mainPageXXX",
            // "mainPageYYY",
          ].includes(listItem.getId()),
      ),
    ]);
};