"use client";

// MUI
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid"; // Grid version 1
import Typography from "@mui/material/Typography";

import bg from "public/assets/aboutus-background.png";

export default function AboutUsPage() {
  return (
    <Container maxWidth={"lg"}>
      <Typography
        component="h1"
        variant="h6"
        gutterBottom
        sx={{
          fontWeight: 400,
          my: 2,
          mt: 1,
          display: { xs: "block", md: "none" },
        }}
      >
        Terms & Conditions
      </Typography>
      <Grid container spacing={0}>
        <Grid
          item
          xs={12}
          md={12}
          sx={{
            backgroundImage: { xs: "none", md: `url(${bg.src})` },
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: { xs: 200, md: 400 },
          }}
        >
          <Typography
            component="h1"
            variant="h2"
            gutterBottom
            sx={{
              fontWeight: 700,
              color: "#fff",
              mt: 22,
              textAlign: "center",
              display: { xs: "none", md: "block" },
            }}
          >
            Terms & Conditions
          </Typography>
          <Box
            sx={{
              display: { xs: "block", md: "none" },
              width: "100%",
              height: "230px",
              backgroundImage: `url(${bg.src})`,
              backgroundSize: "cover",
              backgroundPosition: "0 60%",
            }}
          ></Box>
        </Grid>
      </Grid>

      <Grid container spacing={2} sx={{ mt: { xs: 1, md: 4 } }}>
        <Grid item xs={12} md={12} sx={{}}>
          {/*  */}
          <Typography
            // component="h1"
            variant="h6"
            gutterBottom
            sx={{
              fontWeight: 700,
            }}
          >
            1. Contractual Relationship
          </Typography>
          <Typography
            variant="body2"
            gutterBottom
            sx={{
              fontWeight: 400,
              my: 1,
            }}
          >
            These Terms of Use (“Terms”) in govern the access or use by you, an
            individual, from within any country in the world of applications
            (including the Aegean Taxi App), websites, content, products, and
            services (the “Services”) made available by Butler Hospitality and
            Logistics, located in 16192 Coastal Highway, Lewes, Delaware 19958,
            USA (“Aegean”).
          </Typography>
          <Typography
            variant="body2"
            gutterBottom
            sx={{
              fontWeight: 400,
              my: 1,
            }}
          >
            PLEASE READ THESE TERMS CAREFULLY BEFORE ACCESSING OR USING THE
            SERVICES.
          </Typography>
          <Typography
            variant="body2"
            gutterBottom
            sx={{
              fontWeight: 400,
              my: 1,
            }}
          >
            Your access and use of the Services constitutes your agreement to be
            bound by these Terms, which establishes a contractual relationship
            between you and Aegean . If you do not agree to these Terms, you may
            not access or use the Services. These Terms expressly supersede
            prior agreements or arrangements with you. Aegean may terminate
            these Terms or any Services with respect to you, or generally cease
            offering or deny access to the Services or any portion thereof, at
            any time for any reason. Aegean will provide you with as much notice
            as it reasonably can of such termination, cessation or denial, being
            at least 24 hours notice. However, Aegean reserves the right to
            terminate these Terms or any Services with respect to you, or
            generally cease offering or deny access to the Services or any
            portion thereof, immediately at any time without notice if (i) you
            are in breach of these Terms, (ii) it is impractical to give such
            notice in the circumstances, or (iii) in Aegean &apos;s opinion, any
            delay in such termination would expose Aegean or a third party to
            significant risk of harm or damage.
          </Typography>
          <Typography
            variant="body2"
            gutterBottom
            sx={{
              fontWeight: 400,
              my: 1,
            }}
          >
            Supplemental terms may apply to certain Services, such as policies
            for a particular event, activity or promotion, and such supplemental
            terms will be disclosed to you in connection with the applicable
            Services. Supplemental terms are in addition to, and shall be deemed
            a part of, the Terms for the purposes of the applicable Services.
            Supplemental terms shall prevail over these Terms in the event of a
            conflict with respect to the applicable Services.
          </Typography>
          <Typography
            variant="body2"
            gutterBottom
            sx={{
              fontWeight: 400,
              my: 1,
            }}
          >
            Aegean may amend the Terms related to the Services from time to
            time. Amendments will be effective upon Aegean &apos;s posting of
            such updated Terms at this location or the amended policies or
            supplemental terms on the applicable Service. Your continued access
            or use of the Services after such posting constitutes your consent
            to be bound by the Terms, as amended.
          </Typography>
          <Typography
            variant="body2"
            gutterBottom
            sx={{
              fontWeight: 400,
              my: 1,
            }}
          >
            Our collection and use of personal information in connection with
            the Services is as provided in Aegean &apos;s Privacy and Cookie
            Policy located at https://aegeantaxi.com/privacy. Aegean may provide
            to a claims processor or an insurer any necessary information
            (including your contact information) if there is a complaint,
            dispute or conflict, which may include an accident, involving you
            and a Third Party Provider (including a Transportation Provider) and
            such information or data is necessary to resolve the complaint,
            dispute or conflict.
          </Typography>

          {/*  */}

          {/*  */}
          <Typography
            // component="h1"
            variant="h6"
            gutterBottom
            sx={{
              fontWeight: 700,
            }}
          >
            2. The Services
          </Typography>
          <Typography
            variant="body2"
            gutterBottom
            sx={{
              fontWeight: 400,
              my: 1,
            }}
          >
            The Services constitute a technology platform that enables users of
            Aegean &apos;s mobile applications or websites provided as part of
            the Services (each, an “Application”) to pre-book and schedule
            transportation, logistics, delivery, and/or vendor services with
            independent third party providers of such services, including
            independent third party transportation providers (including
            Transportation Providers as defined in Part 1), independent third
            party logistics and/or delivery providers under agreement with
            Aegean or certain of Aegean &apos;s affiliates, and/or independent
            vendors such as restaurants (“Third Party Providers”). Unless
            otherwise agreed by Aegean in a separate written agreement with you,
            the Services are made available solely for your personal,
            non-commercial use.
          </Typography>
          <Typography
            variant="body2"
            gutterBottom
            sx={{
              fontWeight: 400,
              my: 1,
            }}
          >
            YOU ACKNOWLEDGE THAT Aegean DOES NOT PROVIDE TRANSPORTATION,
            LOGISTICS, DELIVERY OR VENDOR SERVICES OR FUNCTION AS A
            TRANSPORTATION PROVIDER OR CARRIER AND THAT ALL SUCH TRANSPORTATION,
            LOGISTICS, DELIVERY AND VENDOR SERVICES ARE PROVIDED BY INDEPENDENT
            THIRD PARTY CONTRACTORS WHO ARE NOT EMPLOYED BY Aegean OR ANY OF ITS
            AFFILIATES.
          </Typography>
          {/*  */}

          {/*  */}
          <Typography
            // component="h1"
            variant="h6"
            gutterBottom
            sx={{
              fontWeight: 700,
            }}
          >
            License.
          </Typography>
          <Typography
            variant="body2"
            gutterBottom
            sx={{
              fontWeight: 400,
              my: 1,
            }}
          >
            Subject to your compliance with these Terms,Aegean grants you a
            limited, non-exclusive, non-sublicensable, revocable,
            non-transferable license to: (i) access and use the Applications on
            your personal device solely in connection with your use of the
            Services; and (ii) access and use any content, information and
            related materials that may be made available through the Services,
            in each case solely for your personal, non-commercial use. Any
            rights not expressly granted herein are reserved by Aegean and
            Aegean &apos;s licensors.
          </Typography>
          {/*  */}

          {/*  */}
          <Typography
            // component="h1"
            variant="h6"
            gutterBottom
            sx={{
              fontWeight: 700,
            }}
          >
            Restrictions.
          </Typography>
          <Typography
            variant="body2"
            gutterBottom
            sx={{
              fontWeight: 400,
              my: 1,
            }}
          >
            You may not: (i) remove any copyright, trademark or other
            proprietary notices from any portion of the Services; (ii)
            reproduce, modify, prepare derivative works based upon, distribute,
            license, lease, sell, resell, transfer, publicly display, publicly
            perform, transmit, stream, broadcast or otherwise exploit the
            Services except as expressly permitted by Aegean ; (iii) decompile,
            reverse engineer or disassemble the Services except as may be
            permitted by applicable law; (iv) link to, mirror or frame any
            portion of the Services; (v) cause or launch any programs or scripts
            for the purpose of scraping, indexing, surveying, or otherwise data
            mining any portion of the Services or unduly burdening or hindering
            the operation and/or functionality of any aspect of the Services; or
            (vi) attempt to gain unauthorized access to or impair any aspect of
            the Services or its related systems or networks.
          </Typography>
          {/*  */}

          {/*  */}
          <Typography
            // component="h1"
            variant="h6"
            gutterBottom
            sx={{
              fontWeight: 700,
            }}
          >
            Provision of the Services.
          </Typography>
          <Typography
            variant="body2"
            gutterBottom
            sx={{
              fontWeight: 400,
              my: 1,
            }}
          >
            You acknowledge that portions of the Services may be made available
            under Aegean &apos;s various brands or booking options associated
            with transportation, logistics, delivery or vendor services. You
            also acknowledge that the Services may be made available under such
            brands, booking or request options by or in connection with: (i)
            certain of Aegean &apos;s subsidiaries and affiliates; or (ii)
            independent Third Party Providers, including transportation network
            company drivers, transportation charter permit holders or holders of
            similar transportation permits, authorizations or licenses.
          </Typography>
          {/*  */}

          {/*  */}
          <Typography
            // component="h1"
            variant="h6"
            gutterBottom
            sx={{
              fontWeight: 700,
            }}
          >
            Third Party Services and Content.
          </Typography>
          <Typography
            variant="body2"
            gutterBottom
            sx={{
              fontWeight: 400,
              my: 1,
            }}
          >
            The Services may be made available or accessed in connection with
            third party services and content (including advertising) that Aegean
            does not control. You acknowledge that different terms of use and
            privacy policies may apply to your use of such third party services
            and content.Aegean does not endorse such third party services and
            content and in no event shall Aegean be responsible or liable for
            any products or services of such third party providers.
            Additionally, Apple Inc., Google, Inc., Microsoft Corporation or
            BlackBerry Limited and/or their applicable international
            subsidiaries and affiliates will be third-party beneficiaries to
            this contract if you access the Services using Applications
            developed for Apple iOS, Android, Microsoft Windows, or
            Blackberry-powered mobile devices, respectively. These third party
            beneficiaries are not parties to this contract and are not
            responsible for the provision or support of the Services in any
            manner. Your access to the Services using these devices is subject
            to terms set forth in the applicable third party beneficiary&apos;s
            terms of service.
          </Typography>
          {/*  */}

          {/*  */}
          <Typography
            // component="h1"
            variant="h6"
            gutterBottom
            sx={{
              fontWeight: 700,
            }}
          >
            Ownership.
          </Typography>
          <Typography
            variant="body2"
            gutterBottom
            sx={{
              fontWeight: 400,
              my: 1,
            }}
          >
            The Services and all rights therein are and shall remain Aegean
            &apos;s property or the property of Aegean &apos;s licensors.
            Neither these Terms nor your use of the Services convey or grant to
            you any rights: (i) in or related to the Services except for the
            limited license granted above; or (ii) to use or reference in any
            manner Aegean &apos;s company names, logos, product and service
            names, trademarks or services marks or those of Aegean &apos;s
            licensors.
          </Typography>
          {/*  */}

          {/*  */}
          <Typography
            // component="h1"
            variant="h6"
            gutterBottom
            sx={{
              fontWeight: 700,
            }}
          >
            3. Your Use of the Services
          </Typography>
          <Typography
            // component="h1"
            variant="h6"
            gutterBottom
            sx={{
              fontWeight: 700,
            }}
          >
            User Accounts.
          </Typography>
          <Typography
            variant="body2"
            gutterBottom
            sx={{
              fontWeight: 400,
              my: 1,
            }}
          >
            In order to use most aspects of the Services, you must register for
            and maintain an active personal user Services account (“Account”).
            You must be at least 18 years of age, or the age of legal majority
            in your jurisdiction (if different than 18), to obtain an Account.
            Account registration requires you to submit to Aegean certain
            personal information, such as your name, address, mobile phone
            number and age, as well as at least one valid payment method (either
            a credit card or accepted payment partner). You agree to maintain
            accurate, complete, and up-to-date information in your Account. Your
            failure to maintain accurate, complete, and up-to-date Account
            information, including having an invalid or expired payment method
            on file, may result in your inability to access and use the Services
            or Aegean &apos;s termination of this Agreement with you. You are
            responsible for all activity that occurs under your Account, and you
            agree to maintain the security and secrecy of your Account username
            and password at all times. Unless otherwise permitted by Aegean in
            writing, you may only possess one Account.
          </Typography>
          {/*  */}

          {/*  */}
          <Typography
            // component="h1"
            variant="h6"
            gutterBottom
            sx={{
              fontWeight: 700,
            }}
          >
            Compliance with local regulations:
          </Typography>
          <Typography
            variant="body2"
            gutterBottom
            sx={{
              fontWeight: 400,
              my: 1,
            }}
          >
            You acknowledge that Aegean operates in various jurisdictions with
            different regulatory frameworks governing the transportation
            business, and that you are fully aware and informed of these rules
            and regulations to which you will comply before accessing or
            requesting Aegeans&apos; services.
          </Typography>
          <Typography
            variant="body2"
            gutterBottom
            sx={{
              fontWeight: 400,
              my: 1,
            }}
          >
            Specifically, when requesting Aegeans&apos; services in Greece with
            a private transfer service &quot;Επιβατηγo Ιδιωτικής Χρήσης (Ε.Ι.Χ.)
            αυτοκινήτo με οδηγό μέσω προκρατήσεως&quot; , you are aware that the
            “order now” option is a pre booking service which can only start 2
            hours after the order is received. You are aware that the service is
            a private hire service and not a taxi service, and that the drop off
            point is only an indication of your preferred route which might
            change at any time at your discretion. You are aware that the prices
            shown are just estimates and that the final price for the service is
            at the discretion of the transport company providing the transport.
            The price cannot be lower than €36 for a minimum of 30 minutes in
            some jurisdictions during certain months, and varies accordingly, as
            stipulated by Greek law 4530/2018
          </Typography>

          {/*  */}

          {/*  */}
          <Typography
            // component="h1"
            variant="h6"
            gutterBottom
            sx={{
              fontWeight: 700,
            }}
          >
            User Requirements and Conduct.
          </Typography>
          <Typography
            variant="body2"
            gutterBottom
            sx={{
              fontWeight: 400,
              my: 1,
            }}
          >
            The Service is not available for use by persons under the age of 18.
            You may not authorize third parties to use your Account, and you may
            not allow persons under the age of 18 to receive transportation,
            logistics, delivery or vendor services from Third Party Providers
            unless they are accompanied by you. You may not assign or otherwise
            transfer your Account to any other person or entity. You agree to
            comply with all applicable laws when using the Services, and you may
            only use the Services for lawful purposes (e.g., no transport of
            unlawful or hazardous materials). You will not, in your use of the
            Services, cause nuisance, annoyance, inconvenience, or property
            damage, whether to the Third Party Provider or any other party. In
            certain instances you may be asked to provide proof of identity to
            access or use the Services, and you agree that you may be denied
            access to or use of the Services if you refuse to provide proof of
            identity.
          </Typography>
          {/*  */}

          {/*  */}
          <Typography
            // component="h1"
            variant="h6"
            gutterBottom
            sx={{
              fontWeight: 700,
            }}
          >
            Text Messaging.
          </Typography>
          <Typography
            variant="body2"
            gutterBottom
            sx={{
              fontWeight: 400,
              my: 1,
            }}
          >
            By creating an Account, you agree that the Services may send you
            text (SMS) messages as part of the normal business operation of your
            use of the Services. You may opt-out of receiving text (SMS)
            messages from Aegean at any time. You acknowledge that opting out of
            receiving text (SMS) messages may impact your use of the Services.
          </Typography>
          {/*  */}

          {/*  */}
          <Typography
            // component="h1"
            variant="h6"
            gutterBottom
            sx={{
              fontWeight: 700,
            }}
          >
            Promotional Codes.
          </Typography>
          <Typography
            variant="body2"
            gutterBottom
            sx={{
              fontWeight: 400,
              my: 1,
            }}
          >
            Aegean may, in Aegean &apos;s sole discretion, create promotional
            codes that may be redeemed for Account credit, or other features or
            benefits related to the Services and/or a Third Party
            Provider&apos;s services, subject to any additional terms that
            Aegean establishes on a per promotional code basis (“ Promo Codes”).
            You agree that Promo Codes: (i) must be used for the intended
            audience and purpose, and in a lawful manner; (ii) may not be
            duplicated, sold or transferred in any manner, or made available to
            the general public (whether posted to a public forum or otherwise),
            unless expressly permitted by Aegean ; (iii) may be disabled by
            Aegean at any time for any reason without liability to Aegean ; (iv)
            may only be used pursuant to the specific terms that
            Aegeanestablishes for such Promo Code; (v) are not valid for cash;
            and (vi) may expire prior to your use. Aegean reserves the right to
            withhold or deduct credits or other features or benefits obtained
            through the use of Promo Codes by you or any other user in the event
            that Aegean determines or believes that the use or redemption of the
            Promo Code was in error, fraudulent, illegal, or in violation of the
            applicable Promo Code terms or these Terms.
          </Typography>
          {/*  */}

          {/*  */}
          <Typography
            // component="h1"
            variant="h6"
            gutterBottom
            sx={{
              fontWeight: 700,
            }}
          >
            User Provided Content.
          </Typography>
          <Typography
            variant="body2"
            gutterBottom
            sx={{
              fontWeight: 400,
              my: 1,
            }}
          >
            Aegean may, in Aegean &apos;s sole discretion, permit you from time
            to time to submit, upload, publish or otherwise make available to
            Aegean through the Services textual, audio, and/or visual content
            and information, including commentary and feedback related to the
            Services, initiation of support requests, and submission of entries
            for competitions and promotions (“User Content”). Any User Content
            provided by you remains your property. However, by providing User
            Content to Aegean , you grant Aegean a worldwide, perpetual,
            irrevocable, transferable, royalty-free license, with the right to
            sublicense, to use, copy, modify, create derivative works of,
            distribute, publicly display, publicly perform, and otherwise
            exploit in any manner such User Content in all formats and
            distribution channels now known or hereafter devised (including in
            connection with the Services and Aegean &apos;s business and on
            third-party sites and services), without further notice to or
            consent from you, and without the requirement of payment to you or
            any other person or entity.
          </Typography>
          <Typography
            variant="body2"
            gutterBottom
            sx={{
              fontWeight: 400,
              my: 1,
            }}
          >
            You represent and warrant that: (i) you either are the sole and
            exclusive owner of all User Content or you have all rights,
            licenses, consents and releases necessary to grant Aegean the
            license to the User Content as set forth above; and (ii) neither the
            User Content nor your submission, uploading, publishing or otherwise
            making available of such User Content nor Aegean &apos;s use of the
            User Content as permitted herein will infringe, misappropriate or
            violate a third party&apos;s intellectual property or proprietary
            rights, or rights of publicity or privacy, or result in the
            violation of any applicable law or regulation.
          </Typography>
          <Typography
            variant="body2"
            gutterBottom
            sx={{
              fontWeight: 400,
              my: 1,
            }}
          >
            You agree to not provide User Content that is defamatory, libelous,
            hateful, violent, obscene, pornographic, unlawful, or otherwise
            offensive, as determined by Aegean in its sole discretion, whether
            or not such material may be protected by law. Aegean may, but shall
            not be obligated to, review, monitor, or remove User Content, at
            Aegean &apos;s sole discretion and at any time and for any reason,
            without notice to you.
          </Typography>
          {/*  */}

          {/*  */}
          <Typography
            // component="h1"
            variant="h6"
            gutterBottom
            sx={{
              fontWeight: 700,
            }}
          >
            Network Access and Devices.
          </Typography>
          <Typography
            variant="body2"
            gutterBottom
            sx={{
              fontWeight: 400,
              my: 1,
            }}
          >
            You are responsible for obtaining the data network access necessary
            to use the Services. Your mobile network&apos;s data and messaging
            rates and fees may apply if you access or use the Services from a
            wireless-enabled device and you shall be responsible for such rates
            and fees. You are responsible for acquiring and updating compatible
            hardware or devices necessary to access and use the Services and
            Applications and any updates thereto. Aegean does not guarantee that
            the Services, or any portion thereof, will function on any
            particular hardware or devices. In addition, the Services may be
            subject to malfunctions and delays inherent in the use of the
            Internet and electronic communications.
          </Typography>
          {/*  */}

          {/*  */}
          <Typography
            // component="h1"
            variant="h6"
            gutterBottom
            sx={{
              fontWeight: 700,
            }}
          >
            4. Payment
          </Typography>
          <Typography
            variant="body2"
            gutterBottom
            sx={{
              fontWeight: 400,
              my: 1,
            }}
          >
            You understand that use of the Services may result in charges to you
            for the services or goods you receive from a Third Party Provider
            (“Charges”). After you have received services or goods obtained
            through your use of the Services, Aegean will facilitate your
            payment of the applicable Charges on behalf of the Third Party
            Provider as disclosed payment collection agent for the Third Party
            Provider (as Principal). Payment of the Charges in such manner shall
            be considered the same as payment made directly by you to the Third
            Party Provider. Charges will be inclusive of applicable taxes where
            required by law. Charges paid by you are final and non-refundable,
            unless otherwise determined by Aegean . You retain the right to
            request lower Charges from a Third Party Provider for services or
            goods received by you from such Third Party Provider at the time you
            receive such services or goods. Aegean will respond accordingly to
            any request from a Third Party Provider to modify the Charges for a
            particular service or good.
          </Typography>
          <Typography
            variant="body2"
            gutterBottom
            sx={{
              fontWeight: 400,
              my: 1,
            }}
          >
            All Charges are due immediately and payment will be facilitated as
            soon as practicable by Aegean using the preferred payment method
            designated in your Account, after which Aegean will send you a
            receipt by email. If your primary Account payment method is
            determined to be expired, invalid or otherwise not able to be
            charged, you agree that Aegean may, as the Third Party
            Provider&apos;s disclosed payment collection agent, use a secondary
            payment method in your Account, if available.
          </Typography>
          <Typography
            variant="body2"
            gutterBottom
            sx={{
              fontWeight: 400,
              my: 1,
            }}
          >
            As between you and Aegean , Aegean reserves the right to establish,
            remove and/or revise Charges for any or all services or goods
            obtained through the use of the Services at any time in Aegean
            &apos;s sole discretion. Further, you acknowledge and agree that
            Charges applicable in certain geographical areas may increase
            substantially during times of high demand. Aegean will use
            reasonable efforts to inform you of Charges that may apply, provided
            that you will be responsible for Charges incurred under your Account
            regardless of your awareness of such Charges or the amounts thereof.
            Aegean may from time to time provide certain users with promotional
            offers and discounts that may result in different amounts charged
            for the same or similar services or goods obtained through the use
            of the Services, and you agree that such promotional offers and
            discounts, unless also made available to you, shall have no bearing
            on your use of the Services or the Charges applied to you. You may
            elect to cancel your request for services or goods from a Third
            Party Provider at any time prior to such Third Party Provider&apos;s
            arrival, in which case you may be charged a cancellation fee.
          </Typography>
          <Typography
            variant="body2"
            gutterBottom
            sx={{
              fontWeight: 400,
              my: 1,
            }}
          >
            This payment structure is intended to fully compensate the Third
            Party Provider for the services or goods provided. Except with
            respect to taxicab transportation services requested through the
            Application in some jurisdictions, Aegean does not designate any
            portion of your payment as a tip or gratuity to the Third Party
            Provider. Any representation by Aegean (on Aegean &apos;s website,
            in the Application, or in Aegean &apos;s marketing materials) to the
            effect that tipping is “voluntary,” “not required,” and/or
            “included” in the payments you make for services or goods provided
            is not intended to suggest that Aegean provides any additional
            amounts, beyond those described above, to the Third Party Provider.
            You understand and agree that, while you are free to provide
            additional payment as a gratuity to any Third Party Provider who
            provides you with services or goods obtained through the Service,
            you are under no obligation to do so. Gratuities are voluntary.
            After you have received services or goods obtained through the
            Service, you will have the opportunity to rate your experience and
            leave additional feedback about your Third Party Provider.
          </Typography>
          {/*  */}

          {/*  */}
          <Typography
            // component="h1"
            variant="h6"
            gutterBottom
            sx={{
              fontWeight: 700,
            }}
          >
            Repair or Cleaning Fees.
          </Typography>
          <Typography
            variant="body2"
            gutterBottom
            sx={{
              fontWeight: 400,
              my: 1,
            }}
          >
            You shall be responsible for the cost of repair for damage to, or
            necessary cleaning of, Third Party Provider vehicles and property
            resulting from use of the Services under your Account in excess of
            normal “wear and tear” damages and necessary cleaning (“Repair or
            Cleaning”). In the event that a Third Party Provider reports the
            need for Repair or Cleaning, and such Repair or Cleaning request is
            verified by Aegean in Aegean &apos;s reasonable discretion,
            Aegeanreserves the right to facilitate payment for the reasonable
            cost of such Repair or Cleaning on behalf of the Third Party
            Provider using your payment method designated in your Account. Such
            amounts will be transferred by Aegean to the applicable Third Party
            Provider and are non-refundable.
          </Typography>
          {/*  */}

          {/*  */}
          <Typography
            // component="h1"
            variant="h6"
            gutterBottom
            sx={{
              fontWeight: 700,
            }}
          >
            Network Access and Devices.
          </Typography>
          <Typography
            variant="body2"
            gutterBottom
            sx={{
              fontWeight: 400,
              my: 1,
            }}
          >
            You are responsible for obtaining the data network access necessary
            to use the Services. Your mobile network&apos;s data and messaging
            rates and fees may apply if you access or use the Services from a
            wireless-enabled device and you shall be responsible for such rates
            and fees. You are responsible for acquiring and updating compatible
            hardware or devices necessary to access and use the Services and
            Applications and any updates thereto. Aegean does not guarantee that
            the Services, or any portion thereof, will function on any
            particular hardware or devices. In addition, the Services may be
            subject to malfunctions and delays inherent in the use of the
            Internet and electronic communications.
          </Typography>
          {/*  */}

          {/*  */}
          <Typography
            // component="h1"
            variant="h6"
            gutterBottom
            sx={{
              fontWeight: 700,
            }}
          >
            5. Disclaimers; Limitation of Liability; Indemnity.
          </Typography>
          <Typography
            // component="h1"
            variant="h6"
            gutterBottom
            sx={{
              fontWeight: 700,
            }}
          >
            DISCLAIMER.
          </Typography>
          <Typography
            variant="body2"
            gutterBottom
            sx={{
              fontWeight: 400,
              my: 1,
            }}
          >
            THE SERVICES ARE PROVIDED “AS IS” AND “AS AVAILABLE.” Aegean
            DISCLAIMS ALL REPRESENTATIONS AND WARRANTIES, EXPRESS, IMPLIED OR
            STATUTORY, NOT EXPRESSLY SET OUT IN THESE TERMS, INCLUDING THE
            IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
            PURPOSE AND NON-INFRINGEMENT. IN ADDITION, Aegean MAKES NO
            REPRESENTATION, WARRANTY, OR GUARANTEE REGARDING THE RELIABILITY,
            TIMELINESS, QUALITY, SUITABILITY OR AVAILABILITY OF THE SERVICES OR
            ANY SERVICES OR GOODS REQUESTED THROUGH THE USE OF THE SERVICES, OR
            THAT THE SERVICES WILL BE UNINTERRUPTED OR ERROR-FREE. AegeanDOES
            NOT GUARANTEE THE QUALITY, SUITABILITY, SAFETY OR ABILITY OF THIRD
            PARTY PROVIDERS. YOU AGREE THAT THE ENTIRE RISK ARISING OUT OF YOUR
            USE OF THE SERVICES, AND ANY SERVICE OR GOOD REQUESTED IN CONNECTION
            THEREWITH, REMAINS SOLELY WITH YOU, TO THE MAXIMUM EXTENT PERMITTED
            UNDER APPLICABLE LAW.
          </Typography>
          {/*  */}

          {/*  */}
          <Typography
            // component="h1"
            variant="h6"
            gutterBottom
            sx={{
              fontWeight: 700,
            }}
          >
            LIMITATION OF LIABILITY.
          </Typography>
          <Typography
            variant="body2"
            gutterBottom
            sx={{
              fontWeight: 400,
              my: 1,
            }}
          >
            Aegean SHALL NOT BE LIABLE FOR INDIRECT, INCIDENTAL, SPECIAL,
            EXEMPLARY, PUNITIVE OR CONSEQUENTIAL DAMAGES, INCLUDING LOST
            PROFITS, LOST DATA, PERSONAL INJURY OR PROPERTY DAMAGE RELATED TO,
            IN CONNECTION WITH, OR OTHERWISE RESULTING FROM ANY USE OF THE
            SERVICES, EVEN IF Aegean HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH
            DAMAGES. AegeanSHALL NOT BE LIABLE FOR ANY DAMAGES, LIABILITY OR
            LOSSES ARISING OUT OF: (i) YOUR USE OF OR RELIANCE ON THE SERVICES
            OR YOUR INABILITY TO ACCESS OR USE THE SERVICES; OR (ii) ANY
            TRANSACTION OR RELATIONSHIP BETWEEN YOU AND ANY THIRD PARTY
            PROVIDER, EVEN IF Aegean HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH
            DAMAGES. Aegean SHALL NOT BE LIABLE FOR DELAY OR FAILURE IN
            PERFORMANCE RESULTING FROM CAUSES BEYOND Aegean &apos;S REASONABLE
            CONTROL. IN NO EVENT SHALL Aegean &apos;S TOTAL LIABILITY TO YOU IN
            CONNECTION WITH THE SERVICES FOR ALL DAMAGES, LOSSES AND CAUSES OF
            ACTION EXCEED FIVE HUNDRED EUROS (€500).
          </Typography>
          <Typography
            variant="body2"
            gutterBottom
            sx={{
              fontWeight: 400,
              my: 1,
            }}
          >
            Aegean &apos;s SERVICES MAY BE USED BY YOU TO REQUEST AND SCHEDULE
            TRANSPORTATION, GOODS, LOGISTICS, DELIVERY OR VENDOR SERVICES WITH
            THIRD PARTY PROVIDERS, BUT YOU AGREE THAT Aegean HAS NO
            RESPONSIBILITY OR LIABILITY TO YOU RELATED TO ANY TRANSPORTATION,
            GOOD, LOGISTICS, DELIVERY OR VENDOR SERVICES PROVIDED TO YOU BY
            THIRD PARTY PROVIDERS OTHER THAN AS EXPRESSLY SET FORTH IN THESE
            TERMS.
          </Typography>
          <Typography
            variant="body2"
            gutterBottom
            sx={{
              fontWeight: 400,
              my: 1,
            }}
          >
            THE LIMITATIONS AND DISCLAIMER IN THIS SECTION 5 DO NOT PURPORT TO
            LIMIT LIABILITY OR ALTER YOUR RIGHTS AS A CONSUMER THAT CANNOT BE
            EXCLUDED UNDER APPLICABLE LAW.
          </Typography>
          {/*  */}

          {/*  */}
          <Typography
            // component="h1"
            variant="h6"
            gutterBottom
            sx={{
              fontWeight: 700,
            }}
          >
            Indemnity.
          </Typography>
          <Typography
            variant="body2"
            gutterBottom
            sx={{
              fontWeight: 400,
              my: 1,
            }}
          >
            You agree to indemnify and hold Aegean and its officers, directors,
            employees and agents harmless from any and all claims, demands,
            losses, liabilities, and expenses (including attorneys&apos; fees)
            arising out of or in connection with: (i) your use of the Services
            or services or goods obtained through your use of the Services; (ii)
            your breach or violation of any of these Terms; (iii) Aegean &apos;s
            use of your User Content; or (iv) your violation of the rights of
            any third party, including Third Party Providers.
          </Typography>
          {/*  */}

          {/*  */}
          <Typography
            // component="h1"
            variant="h6"
            gutterBottom
            sx={{
              fontWeight: 700,
            }}
          >
            6. Governing Law; Arbitration.
          </Typography>
          <Typography
            variant="body2"
            gutterBottom
            sx={{
              fontWeight: 400,
              my: 1,
            }}
          >
            Except as otherwise set forth in this Agreement, the Terms contained
            in this Part 2 of this Agreement shall be exclusively governed by
            and construed in accordance with the laws of The United Kingdom,
            excluding its rules on conflicts of laws. The Vienna Convention on
            the International Sale of Goods of 1980 (CISG) shall not apply. Any
            dispute, conflict, claim or controversy arising out of or broadly in
            connection with or relating to the Services or these Terms,
            including those relating to its validity, its construction or its
            enforceability (any “Dispute”) shall be first mandatorily submitted
            to mediation proceedings under the International Chamber of Commerce
            Mediation Rules (“ICC Mediation Rules”). If such Dispute has not
            been settled within sixty (60) days after a request for mediation
            has been submitted under such ICC Mediation Rules, such Dispute can
            be referred to and shall be exclusively and finally resolved by
            arbitration under the Rules of Arbitration of the International
            Chamber of Commerce (“ICC Arbitration Rules”). The ICC Rules&prime;
            Emergency Arbitrator provisions are excluded. The Dispute shall be
            resolved by one (1) arbitrator to be appointed in accordance with
            the ICC Rules. The place of both mediation and arbitration shall be
            London, GB, without prejudice to any rights you may have under
            Article 18 of the Brussels I bis Regulation (OJ EU 2012 L351/1)
            and/or Article 6:236n of the Dutch Civil Code. The language of the
            mediation and/or arbitration shall be English, unless you do not
            speak English, in which case the mediation and/or arbitration shall
            be conducted in both English and your native language. The existence
            and content of the mediation and arbitration proceedings, including
            documents and briefs submitted by the parties, correspondence from
            and to the International Chamber of Commerce, correspondence from
            the mediator, and correspondence, orders and awards issued by the
            sole arbitrator, shall remain strictly confidential and shall not be
            disclosed to any third party without the express written consent
            from the other party unless: (i) the disclosure to the third party
            is reasonably required in the context of conducting the mediation or
            arbitration proceedings; and (ii) the third party agrees
            unconditionally in writing to be bound by the confidentiality
            obligation stipulated herein.
          </Typography>
          {/*  */}

          {/*  */}
          <Typography
            // component="h1"
            variant="h6"
            gutterBottom
            sx={{
              fontWeight: 700,
            }}
          >
            7. Other Provisions
          </Typography>
          <Typography
            // component="h1"
            variant="h6"
            gutterBottom
            sx={{
              fontWeight: 700,
            }}
          >
            Claims of Copyright Infringement.
          </Typography>
          <Typography
            variant="body2"
            gutterBottom
            sx={{
              fontWeight: 400,
              my: 1,
            }}
          >
            Claims of copyright infringement should be sent to Aegean &apos;s
            designated agent. Please visit Aegean &apos;s web for the designated
            address and additional information.
          </Typography>
          {/*  */}

          {/*  */}
          <Typography
            // component="h1"
            variant="h6"
            gutterBottom
            sx={{
              fontWeight: 700,
            }}
          >
            Notice.
          </Typography>
          <Typography
            variant="body2"
            gutterBottom
            sx={{
              fontWeight: 400,
              my: 1,
            }}
          >
            Aegean may give notice by means of a general notice on the Services,
            electronic mail to your email address in your Account, or by written
            communication sent to your address as set forth in your Account.
          </Typography>
          {/*  */}
          {/*  */}
          <Typography
            // component="h1"
            variant="h6"
            gutterBottom
            sx={{
              fontWeight: 700,
            }}
          >
            General.
          </Typography>
          <Typography
            variant="body2"
            gutterBottom
            sx={{
              fontWeight: 400,
              my: 1,
            }}
          >
            You may not assign or transfer these Terms in whole or in part
            without Aegean &apos;s prior written approval. You give your
            approval to Aegean for it to assign or transfer these Terms in whole
            or in part, including to: (i) a subsidiary or affiliate; (ii) an
            acquirer of Aegean &apos;s equity, business or assets; or (iii) a
            successor by merger. No joint venture, partnership, employment or
            agency relationship exists between you, Aegean or any Third Party
            Provider as a result of the contract between you and Aegean or use
            of the Services.
          </Typography>
          <Typography
            variant="body2"
            gutterBottom
            sx={{
              fontWeight: 400,
              my: 1,
            }}
          >
            If any provision of these Terms is held to be illegal, invalid or
            unenforceable, in whole or in part, under any law, such provision or
            part thereof shall to that extent be deemed not to form part of
            these Terms but the legality, validity and enforceability of the
            other provisions in these Terms shall not be affected. In that
            event, the parties shall replace the illegal, invalid or
            unenforceable provision or part thereof with a provision or part
            thereof that is legal, valid and enforceable and that has, to the
            greatest extent possible, a similar effect as the illegal, invalid
            or unenforceable provision or part thereof, given the contents and
            purpose of these Terms. These Terms constitute the entire agreement
            and understanding of the parties with respect to its subject matter
            and replaces and supersedes all prior or contemporaneous agreements
            or undertakings regarding such subject matter. In these Terms, the
            words “including” and “include” mean “including, but not limited
            to.”
          </Typography>
          {/*  */}
        </Grid>
      </Grid>
    </Container>
  );
}
