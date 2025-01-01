import {
  Link,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  Text,
} from "@jamsr-ui/react";
import Image from "next/image";
import ColorPng from "./color.png";

const TableSection = () => {
  return (
    <Table
      variant="bordered"
      classNames={{
        td: "text-foreground-secondary",
      }}
      aria-label="Example static collection table"
    >
      <TableHeader>
        <TableRow>
          <TableColumn>NAME</TableColumn>
          <TableColumn>ROLE</TableColumn>
          <TableColumn>STATUS</TableColumn>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>Tony Reichert</TableCell>
          <TableCell>CEO</TableCell>
          <TableCell>Active</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Zoey Lang</TableCell>
          <TableCell>Technical Lead</TableCell>
          <TableCell>Paused</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Jane Fisher</TableCell>
          <TableCell>Senior Developer</TableCell>
          <TableCell>Active</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>William Howard</TableCell>
          <TableCell>Community Manager</TableCell>
          <TableCell>Vacation</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export const MainSection = () => {
  return (
    <div className="container col-span-8 mx-auto flex flex-col gap-4">
      <Text as="h1" variant="h1">
        Color
      </Text>
      <section>
        <Text as="h3" variant="body2">
          Judicious use of color can enhance communication, evoke your brand,
          provide visual continuity, communicate status and feedback, and help
          people understand information.
        </Text>
        <Image src={ColorPng} alt="color" className="my-6 rounded-lg" />
        <div className="space-y-4">
          <Text as="p" variant="paragraph">
            The system defines colors that look good on various backgrounds and
            appearance modes, and can automatically adapt to vibrancy and
            accessibility settings. People are familiar with the system colors,
            and using them is a convenient way to make your experience feel at
            home on the device.
          </Text>
          <Text as="p" variant="paragraph">
            You may also want to use custom colors to enhance the visual
            experience of your app or game and express its unique personality.
            The following guidelines can help you use color in ways that people
            appreciate, regardless of whether you use system-defined or custom
            colors.
          </Text>
          <Text as="p" variant="paragraph">
            Hey there you're viewing the color page. Use color yum.
          </Text>
        </div>
      </section>
      <section className="flex flex-col gap-2">
        <Text as="h3" variant="h3">
          Best Practices
        </Text>
        <div className="space-y-4">
          <Text as="p" variant="paragraph">
            <strong>Use color sparingly in nongame apps</strong>. In a nongame
            app, overuse of color can make communication less clear and can
            distract people. Prefer using touches of color to call attention to
            important information or show the relationship between parts of the
            interface.
          </Text>
          <Text as="p" variant="paragraph">
            <strong>
              Avoid using the same color to mean different things.
            </strong>
            Use color consistently throughout your interface, especially when
            you use it to help communicate information like status or
            interactivity. For example, an app might use blue to indicate that
            people can tap text to view more. Even when the app communicates
            interactivity using a visual indicator that doesn’t rely on color —
            such as a chevron or arrow icon — using a color other than blue for
            the interactive text is confusing.
          </Text>
          <Text as="p" variant="paragraph">
            <strong>
              Make sure your app’s colors work well in both light and dark
              contexts.
            </strong>{" "}
            Most platforms offer a dark alternative to the default light
            appearance called{" "}
            <Link className="underline" href="/">
              Dark Mode
            </Link>
            . Dark Mode uses a darker color palette for all screens, views,
            menus, and controls, and can increase vibrancy — a subtle effect
            that dynamically blends foreground and background colors — to make
            foreground content stand out against darker backgrounds (for
            guidance, see{" "}
            <Link className="underline" href="/">
              Materials
            </Link>
            ). Dark mode isn’t available in visionOS or watchOS. visionOS uses a
            material called glass that automatically adapts to the luminance of
            the surrounding objects and colors. In watchOS, apps typically use a
            dark background, but can also use full-screen background gradients
            or graphics to support foreground content in the view. In all
            platforms, system colors automatically support light and dark
            contexts as needed; if you use a custom color, you need to supply
            both variants.
          </Text>
        </div>
      </section>
      <section className="flex flex-col gap-2">
        <Text as="h3" variant="h3">
          Inclusive Color
        </Text>
        <div className="space-y-4">
          <Text as="p" variant="paragraph">
            Avoid relying solely on color to differentiate between objects,
            indicate interactivity, or communicate essential information. When
            you use color to convey information, be sure to provide the same
            information in alternative ways so people with color blindness or
            other visual disabilities can understand it. For example, you can
            use labels or glyph shapes to identify objects or states.
          </Text>
          <Text as="p" variant="paragraph">
            Avoid using colors that make it hard to perceive content in your
            app. For example, insufficient contrast can cause icons and text to
            blend with the background and make content hard to read, and people
            who are color blind might not be able to distinguish some color
            combinations. For guidance, see Color and effects.
          </Text>
          <Text as="p" variant="paragraph">
            Consider how the colors you use might be perceived in other
            countries and cultures. For example, red communicates danger in some
            cultures, but has positive connotations in other cultures. Make sure
            the colors in your app send the message you intend.
          </Text>
        </div>
      </section>
      <section className="flex flex-col gap-6">
        <Text as="h3" variant="h3">
          Platform Considerations
        </Text>
        <div className="flex flex-col gap-2">
          <Text as="h3" variant="h4">
            iOS, iPadOS
          </Text>
          <div className="space-y-4">
            <Text as="p" variant="paragraph">
              iOS defines two sets of dynamic background colors — system and
              grouped — each of which contains primary, secondary, and tertiary
              variants that help you convey a hierarchy of information. In
              general, use the grouped background colors
              (systemGroupedBackground, secondarySystemGroupedBackground, and
              tertiarySystemGroupedBackground) when you have a grouped table
              view; otherwise, use the system set of background colors
              (systemBackground, secondarySystemBackground, and
              tertiarySystemBackground).
            </Text>
            <Text as="p" variant="paragraph">
              With both sets of background colors, you generally use the
              variants to indicate hierarchy in the following ways:
            </Text>
            <ul className="flex list-inside list-disc flex-col gap-2">
              <li>Primary for the overall view</li>
              <li>
                Secondary for grouping content or elements within the overall
                view
              </li>
              <li>
                Tertiary for grouping content or elements within secondary
                elements
              </li>
            </ul>
            <TableSection />
          </div>
        </div>
      </section>
    </div>
  );
};
