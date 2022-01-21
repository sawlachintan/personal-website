const nodes = [
  { id: "Python", size: 25 }, //0
  { id: "HTML & CSS", size: 25 }, //1
  { id: "JavaScript", size: 25 }, //2
  { id: "R", size: 25 }, //3
  { id: "ReactJS", size: 25 }, //4
  { id: "D3JS", size: 25 }, //5
  { id: "Pandas", size: 25 }, //6
  { id: "Numpy", size: 25 }, //7
  { id: "ChartJS", size: 25 }, //8
  // { id: "C", size: 25 }, //9
  // { id: "Java", size: 25 }, //10
  { id: "GGPlot", size: 25 }, //11
];

const links = [
  {
    source: 0,
    target: 6,
    size: 2,
    href: "https://sawlachintan.github.io/cricket_data",
    title: "Cricket API"
  }, //python -> pandas
  {
    source: 0,
    target: 7,
    size: 2,
    href: "https://sawlachintan.github.io/cricket_data",
    title: "Cricket API"
  }, //python -> numpy
  {
    source: 6,
    target: 7,
    size: 2,
    href: "https://sawlachintan.github.io/cricket_data",
    title: "Cricket API"
  }, //pandas -> numpy
  {
    source: 0,
    target: 5,
    size: 6,
    href: "https://github.com/sawlachintan/iplDash2",
    title: "IPL Viz"
  }, //python -> D3JS
  {
    source: 2,
    target: 4,
    size: 6,
    href: "https://github.com/sawlachintan/iplDash2",
    title: "IPL Viz"
  }, //JS -> React
  {
    source: 2,
    target: 5,
    size: 6,
    href: "https://github.com/sawlachintan/iplDash2",
    title: "IPL Viz"
  }, //JS -> D3JS
  {
    source: 2,
    target: 1,
    size: 10,
    href: "https://sawlachintan.github.io/iplDash",
    title: "IPL Dashboard"
  }, //JS -> HTML & CSS
  {
    source: 8,
    target: 1,
    size: 10,
    href: "https://sawlachintan.github.io/iplDash",
    title: "IPL Dashboard"
  }, //ChartJS -> HTML & CSS
  {
    source: 5,
    target: 4,
    size: 6,
    href: "https://github.com/sawlachintan/iplDash2",
    title: "IPL Viz"
  }, //ReactJS -> D3JS
  {
    source: 3,
    target: 2,
    size: 10,
    href: "https://sawlachintan.github.io/iplDash",
    title: "IPL Dashboard"
  }, //R -> JS
  {
    source: 3,
    target: 8,
    size: 10,
    href: "https://sawlachintan.github.io/iplDash",
    title: "IPL Dashboard"
  }, //R -> JS
];

export const data = { nodes, links };
