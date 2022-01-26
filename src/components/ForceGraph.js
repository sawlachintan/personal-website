import { useEffect, useRef } from "react";
import * as d3 from "d3";

const strokeColors = {
  "#d50000": "#ef9a9a",
  "#f57c00": "#ffb74d",
  "#e91e63": "#f48fb1",
  "#36B06F": "#81c784",
  "#6250F4": "#b39ddb",
  "#2979ff": "#82b1ff",
  "#E7B92F": "#fff59d",
  "#757575": "#363636",
};

const drag = (simulation) => {
  const dragStarted = (event) => {
    if (!event.active) simulation.alphaTarget(0.3).restart();
    event.subject.fx = event.subject.x;
    event.subject.fy = event.subject.y;
  };
  const dragged = (event) => {
    event.subject.fx = event.x;
    event.subject.fy = event.y;
  };
  const dragEnded = (event) => {
    if (!event.active) simulation.alphaTarget(0);
    event.subject.fx = null;
    event.subject.fy = null;
  };

  return d3
    .drag()
    .on("start", dragStarted)
    .on("drag", dragged)
    .on("end", dragEnded);
};

export const ForceGraph = ({
  data,
  accentColor,
  linkRef,
  projectRef,
  dark,
}) => {
  const svgRef = useRef(null);
  const nodes = data.nodes;
  const links = data.links;
  const height = 600;
  const width = "100vw";

  useEffect(() => {
    if (svgRef.current) {
      const svg = d3
        .select(svgRef.current)
        .attr("width", width)
        .attr("height", height);

      const simulation = d3
        .forceSimulation(nodes)
        .force("charge", d3.forceManyBody().strength(-600))
        .force("link", d3.forceLink(links))
        .force("center", d3.forceCenter(300, 300));

      const lines = svg
        .selectAll("line")
        .data(links)
        .join("line")
        .attr("stroke", "#ef9a9a")
        .attr("stroke-width", 3)
        .on("mouseenter", (evt, d) => {
          lines
            .attr("display", "none")
            .filter((l) => l.size === d.size)
            .attr("display", "block");
          if (linkRef.current) {
            d3.select(linkRef.current).attr("xlink:href", d.href);
          }
          if (projectRef.current) {
            d3.select(projectRef.current).html(d.title);
          }
        })
        .on("mouseleave", (evt) => {
          lines.attr("display", "block");
          if (linkRef.current) {
            d3.select(linkRef.current).attr(
              "xlink:href",
              "https://github.com/sawlachintan"
            );
          }
          if (projectRef.current) {
            d3.select(projectRef.current).html("GitHub Repo");
          }
        });
      // .attr("stroke-width", (d) => d.size);

      const circles = svg
        .selectAll("circle")
        .data(nodes)
        .join("circle")
        .attr("fill", "#d50000")
        .attr("r", 20)
        .call(drag(simulation));

      const text = svg
        .selectAll("text")
        .data(nodes)
        .enter()
        .append("text")
        .text((d) => d.id)
        .attr("fill", "#fff")
        .attr("text-anchor", "middle")
        .attr("alignment-baseline", "middle")
        .attr("font-size", "1rem")
        .call(drag(simulation));

      simulation.on("tick", () => {
        lines
          .attr("x1", (link) => link.source.x)
          .attr("y1", (link) => link.source.y)
          .attr("x2", (link) => link.target.x)
          .attr("y2", (link) => link.target.y);

        circles.attr("cx", (node) => node.x).attr("cy", (node) => node.y);

        text.attr("x", (node) => node.x).attr("y", (node) => node.y);
      });
    }
  }, [links, nodes, linkRef, projectRef]);

  useEffect(() => {
    if (svgRef.current) {
      const svg = d3.select(svgRef.current);

      svg
        .selectAll("circle")
        .transition()
        .duration(650)
        .ease(d3.easeCubicInOut)
        .attr("fill", accentColor);
      svg
        .selectAll("line")
        .transition()
        .duration(650)
        .ease(d3.easeCubicInOut)
        .attr("stroke", strokeColors[accentColor]);
    }
  }, [accentColor]);

  useEffect(() => {
    if (svgRef.current) {
      const svg = d3.select(svgRef.current);

      svg
        .selectAll("text")
        .transition()
        .duration(650)
        .ease(d3.easeCubicInOut)
        .attr("fill", dark ? "#fff" : "#111");
    }
  }, [dark]);
  return (
    <>
      <svg ref={svgRef}></svg>
    </>
  );
};
