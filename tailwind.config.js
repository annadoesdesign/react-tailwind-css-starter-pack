
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        "button-primary-hover": "var(--button-primary-hover-bg)",
        "button-secondary-hover": "var(--button-secondary-hover-bg)",
      },
      colors: {
  "blue": {
    "0": "#f1fbfe",
    "1": "#eff8fc",
    "2": "#e6f5fb",
    "3": "#ccebf6",
    "4": "#5abde1",
    "5": "#51aacb",
    "6": "#4897b4",
    "7": "#218eb5",
    "8": "#09739a",
    "9": "#448ea9",
    "10": "#367187",
    "11": "#285565",
    "12": "#1f424f",
    "13": "#0066cc",
    "c0": "#e0f2f1",
    "c1": "#80deea",
    "c2": "#10737f",
    "cb0": "#e8eaf6",
    "cb1": "#c5cae9",
    "cb2": "#303f9f",
    "tb0": "#e3f2fd",
    "tb1": "#90caf9",
    "tb2": "#0764c0"
  },
  "brown": {
    "0": "#ededed",
    "1": "#bcaaa4",
    "2": "#5d4037"
  },
  "green": {
    "0": "#f7fbf4",
    "1": "#f1f8ee",
    "2": "#e1f0d6",
    "3": "#d5e9c9",
    "4": "#c0deaf",
    "5": "#a4cf8a",
    "6": "#92c573",
    "7": "#77b750",
    "8": "#6ca749",
    "9": "#548239",
    "10": "#248f5b",
    "11": "#0d7543",
    "12": "#41652c",
    "13": "#324d22",
    "dg0": "#e8f5e9",
    "dg1": "#a5d6a7",
    "dg2": "#1f7523",
    "o0": "#f1f8e9",
    "o1": "#c5e1a5",
    "o2": "#417811",
    "sf0": "#e0f7fa",
    "sf1": "#80cbc4",
    "sf2": "#20594b"
  },
  "grey": {
    "0": "#ffffff",
    "1": "#f9fafc",
    "2": "#ebecf0",
    "3": "#e9eaee",
    "4": "#a3a7b9",
    "5": "#8088a3",
    "6": "#5f6685",
    "7": "#374066",
    "8": "#323a5d",
    "9": "#272d48",
    "10": "#1e2338",
    "11": "#171b2b",
    "12": "#f5f6fa"
  },
  "orange": {
    "0": "#ffe6da",
    "1": "#ffc0a4",
    "2": "#ff9b6d",
    "3": "#ff8348",
    "4": "#ff6a24",
    "5": "#ff5d13",
    "6": "#ff4f01",
    "t0": "#fff3e0",
    "t1": "#ffd8b1",
    "t2": "#bf4636"
  },
  "pink": {
    "0": "#fcf2f2",
    "1": "#f6d5d5",
    "2": "#f2c1c1",
    "3": "#eca5a5",
    "4": "#e99393",
    "5": "#e37878",
    "6": "#cf6d6d",
    "7": "#a15555",
    "8": "#7d4242",
    "9": "#5f3232",
    "c0": "#fce4ec",
    "c1": "#f8bbd0",
    "c2": "#c2185b"
  },
  "purple": {
    "0": "#f1f3fd",
    "1": "#e5e2f8",
    "2": "#cac3f1",
    "3": "#cac3f1",
    "4": "#b0a7ea",
    "5": "#8c7ee0",
    "6": "#705ee4",
    "7": "#533fd1",
    "8": "#4b39bc",
    "9": "#4232a7",
    "10": "#3e2f9d",
    "11": "#32267d",
    "12": "#251c5e",
    "13": "#1d1649",
    "14": "#2200f9",
    "l0": "#f3e5f5",
    "l1": "#ce93d8",
    "l2": "#7b1fa2"
  },
  "red": {
    "0": "#fbf3ef",
    "1": "#f3dace",
    "2": "#e54d1f",
    "3": "#c4360b",
    "4": "#d23939"
  },
  "yellow": {
    "0": "#fffaeb",
    "1": "#fff1c7",
    "2": "#fcedc7",
    "3": "#fae4ab",
    "4": "#f8d785",
    "5": "#f6d06d",
    "6": "#eeae09",
    "7": "#ee9521",
    "8": "#c77100",
    "ty0": "#fff8e1",
    "ty1": "#ffe082",
    "ty2": "#fbc02d",
    "ty3": "#9f642f"
  },
  "bg": {
    "undefined": "var(--grey-0)",
    "disabled": "var(--grey-1)",
    "surface": "var(--yellow-2)"
  },
  "border": {
    "undefined": "var(--grey-2)",
    "brand": "var(--purple-0)",
    "disabled": "var(--grey-5)",
    "error": "var(--red-3)",
    "information": "var(--blue-0)",
    "success": "var(--green-11)",
    "warning": "var(--yellow-8)"
  },
  "icon": {
    "icon": "var(--yellow-7)"
  },
  "avatar": {
    "border": "var(--blue-2)"
  },
  "button": {
    "fill": "var(--purple-7)",
    "surface": "var(--purple-1)"
  },
  "charts": {
    "brand": "#917fff99",
    "heatmap": "var(--purple-6)",
    "information": "var(--blue-6)",
    "pink": "var(--pink-4)",
    "seafoam": "var(--green-sf1)",
    "tangerine": "var(--orange-t1)"
  },
  "radio": {
    "button": "var(--grey-0)"
  },
  "tags": {
    "grey": "var(--text)",
    "purple": "var(--text-brand)",
    "blue": "var(--text-information)",
    "outline": "var(--text)",
    "brown": "var(--brown-2)",
    "cobaltblue": "var(--blue-cb2)",
    "coral": "var(--pink-c2)",
    "cyan": "var(--blue-c2)",
    "deepgreen": "var(--green-dg2)",
    "lavendar": "var(--purple-l2)",
    "olive": "var(--green-o2)",
    "seafoam": "var(--green-sf2)",
    "tangerine": "var(--orange-t2)",
    "trueblue": "var(--blue-tb2)",
    "trueyellow": "var(--yellow-ty3)"
  },
  "text": {
    "hyperlinks": "var(--blue-13)",
    "undefined": "var(--grey-7)",
    "brand": "var(--grey-0)",
    "disabled": "var(--grey-5)",
    "error": "var(--red-3)",
    "information": "var(--blue-8)",
    "secondary": "var(--grey-6)",
    "success": "var(--green-11)",
    "tertiary": "var(--grey-5)",
    "warning": "var(--yellow-8)"
  },
  "dark": {
    "blue": "#e3f2fd",
    "brown": "#ededed",
    "green": "#e0f7fa",
    "grey": "#ebecf0",
    "orange": "#fff3e0",
    "pink": "#fce4ec",
    "purple": "#f3e5f5",
    "red": "#fbf3ef",
    "yellow": "#fff8e1",
    "bg": "var(--dark-yellow-2)",
    "border": "var(--dark-yellow-8)",
    "icon": "var(--dark-yellow-7)",
    "avatar": "var(--dark-blue-2)",
    "button": "var(--dark-purple-1)",
    "charts": "var(--dark-orange-t1)",
    "radio": "var(--dark-grey-0)",
    "tags": "var(--dark-yellow-ty3)",
    "text": "var(--dark-green-8)"
  },
  "font": {
    "family": "'Mulish', sans-serif",
    "weight": "700",
    "size": "40px"
  },
  "line": {
    "height": "normal"
  }
},
    },
  },
  plugins: [],
};
