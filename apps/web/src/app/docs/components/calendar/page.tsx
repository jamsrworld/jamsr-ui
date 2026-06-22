import { CodeExampleV2 } from "@/components/code-example-v2";
import { DocsPage } from "@/components/docs-page";
import { readMetaUrl } from "@/utils/code";
import { Metadata } from "next";
import { CalendarUsage } from "./examples/usage";
import { CalendarControlled } from "./examples/controlled";
import { CalendarRange } from "./examples/range";
import { CalendarMultiple } from "./examples/multiple";
import { CalendarWithFooter } from "./examples/with-footer";
import { CalendarDisabledDates } from "./examples/disabled-dates";
import { CalendarDateRestrictions } from "./examples/date-restrictions";
import { CalendarRequired } from "./examples/required";
import { CalendarOutsideDays } from "./examples/outside-days";
import { CalendarStartOnMonday } from "./examples/start-on-monday";
import { CalendarFixedWeeks } from "./examples/fixed-weeks";
import { CalendarTwoMonths } from "./examples/two-months";
import { CalendarDatePicker } from "./examples/date-picker";
import { CalendarDateRangePicker } from "./examples/date-range-picker";
import { CalendarWithPresets } from "./examples/with-presets";

const title = "Calendar";
const description =
  "A calendar component for selecting dates, ranges, and multiple dates using react-day-picker.";

export const metadata: Metadata = {
  title,
  description,
};

const CalendarPage = () => {
  const resolvePath = readMetaUrl(import.meta.url, "/examples/");
  return (
    <DocsPage
      title={title}
      description={description}
    >
      <CodeExampleV2
        title="Usage"
        url={resolvePath("usage.tsx")}
        component={CalendarUsage}
      />
      <CodeExampleV2
        title="Controlled"
        url={resolvePath("controlled.tsx")}
        component={CalendarControlled}
      />
      <CodeExampleV2
        title="Range"
        url={resolvePath("range.tsx")}
        component={CalendarRange}
      />
      <CodeExampleV2
        title="Multiple"
        url={resolvePath("multiple.tsx")}
        component={CalendarMultiple}
      />
      <CodeExampleV2
        title="With Footer"
        url={resolvePath("with-footer.tsx")}
        component={CalendarWithFooter}
      />
      <CodeExampleV2
        title="Disabled Dates"
        url={resolvePath("disabled-dates.tsx")}
        component={CalendarDisabledDates}
      />
      <CodeExampleV2
        title="Date Restrictions"
        url={resolvePath("date-restrictions.tsx")}
        component={CalendarDateRestrictions}
      />
      <CodeExampleV2
        title="Required"
        url={resolvePath("required.tsx")}
        component={CalendarRequired}
      />
      <CodeExampleV2
        title="Outside Days"
        url={resolvePath("outside-days.tsx")}
        component={CalendarOutsideDays}
      />
      <CodeExampleV2
        title="Start On Monday"
        url={resolvePath("start-on-monday.tsx")}
        component={CalendarStartOnMonday}
      />
      <CodeExampleV2
        title="Fixed Weeks"
        url={resolvePath("fixed-weeks.tsx")}
        component={CalendarFixedWeeks}
      />
      <CodeExampleV2
        title="Two Months"
        url={resolvePath("two-months.tsx")}
        component={CalendarTwoMonths}
      />
      <CodeExampleV2
        title="Date Picker"
        url={resolvePath("date-picker.tsx")}
        component={CalendarDatePicker}
      />
      <CodeExampleV2
        title="Date Range Picker"
        url={resolvePath("date-range-picker.tsx")}
        component={CalendarDateRangePicker}
      />
      <CodeExampleV2
        title="With Presets"
        url={resolvePath("with-presets.tsx")}
        component={CalendarWithPresets}
      />
    </DocsPage>
  );
};

export default CalendarPage;
