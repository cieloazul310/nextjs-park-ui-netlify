import { definePattern } from "@pandacss/dev";

export default definePattern({
  properties: {
    spacing: { type: "enum", value: ["inherit", "sm", "md", "lg"] },
  },
  defaultValues: {
    spacing: "md",
  },
  transform(props) {
    const { spacing, ...rest } = props;
    const my = (() => {
      if (!spacing || spacing === "inherit") return undefined;
      if (spacing === "sm") return 2;
      if (spacing === "lg") return 8;
      return 4;
    })();

    return {
      my,
      ...rest,
      _first: {
        mt: 0,
      },
      _last: {
        mb: 0,
      },
    };
  },
});
